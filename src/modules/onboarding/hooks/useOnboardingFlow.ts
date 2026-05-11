'use client';

/**
 * useOnboardingFlow — Orchestrates the provisioning wizard.
 *
 * Dynamic step flow based on entitlement selection:
 *   1. Brand Identity (always)
 *   2. Entitlements — unified module tree (always)
 *   3. Email Config (only if email-campaigns enabled)
 *   4. SMS Config (only if email-campaigns enabled — optional)
 *   5. AI Call Config (only if ai-call-analytics enabled)
 *   6. Tenant Admin (always)
 *   7. Review & Deploy (always)
 *
 * Steps 3–5 are conditionally shown based on Step 2 selections.
 * Validation is enforced BEFORE advancing to the next step.
 */

import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import {
    OnboardingFormData,
    OnboardingStep,
    OrchestrationStepStatus,
    createInitialFormData,
} from '../types/onboarding.types';
import * as onboardingService from '../services/onboarding.service';
import { logAction } from '@/shared/utils/auditLogger';
import { AUDIT_ACTIONS, AUDIT_ENTITIES } from '@/shared/types/audit';

const DRAFT_KEY = 'zyappy_onboarding_draft';

// ── Modules that trigger conditional steps ──────────────────────────────────
const EMAIL_MODULES = ['email-campaigns'];
const SMS_MODULES = ['email-campaigns', 'online-ordering'];
const VAPI_MODULES = ['ai-call-analytics'];

function loadDraft(): OnboardingFormData | null {
    if (typeof window === 'undefined') return null;
    try {
        const raw = sessionStorage.getItem(DRAFT_KEY);
        if (!raw) return null;

        const draft = JSON.parse(raw);
        const initial = createInitialFormData();

        return {
            ...initial,
            ...draft,
            brand: { ...initial.brand, ...(draft.brand || {}) },
            admin: { ...initial.admin, ...(draft.admin || {}) },
            email: { ...initial.email, ...(draft.email || {}) },
            sms: { ...initial.sms, ...(draft.sms || {}) },
            vapi: { ...initial.vapi, ...(draft.vapi || {}) },
            enabledModuleIds: draft.enabledModuleIds || initial.enabledModuleIds,
            selectedEntitlementPaths: draft.selectedEntitlementPaths || initial.selectedEntitlementPaths,
        };
    } catch {
        return null;
    }
}

function saveDraft(data: OnboardingFormData) {
    if (typeof window === 'undefined') return;
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify(data));
}

function clearDraft() {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem(DRAFT_KEY);
}

export function useOnboardingFlow() {
    const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
    const [formData, setFormData] = useState<OnboardingFormData>(
        () => loadDraft() || createInitialFormData()
    );

    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [createdTenantId, setCreatedTenantId] = useState<string | null>(null);
    const [orchestrationSteps, setOrchestrationSteps] = useState<OrchestrationStepStatus[]>([]);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [stepErrors, setStepErrors] = useState<string[]>([]);
    const submitAttempted = useRef(false);

    // ── Conditional step visibility ──────────────────────────────────────────
    const needsEmail = useMemo(() => {
        return formData.enabledModuleIds.some(id => EMAIL_MODULES.includes(id));
    }, [formData.enabledModuleIds]);

    const needsSms = useMemo(() => {
        return formData.enabledModuleIds.some(id => SMS_MODULES.includes(id));
    }, [formData.enabledModuleIds]);

    const needsVapi = useMemo(() => {
        return formData.enabledModuleIds.some(id => VAPI_MODULES.includes(id));
    }, [formData.enabledModuleIds]);

    /**
     * Active steps — dynamically computed based on entitlement selection.
     * Steps 3-5 only appear if relevant modules are enabled.
     */
    const activeSteps = useMemo((): OnboardingStep[] => {
        const steps: OnboardingStep[] = [1, 2]; // Brand + Entitlements (always)
        if (needsEmail) steps.push(3);
        if (needsSms) steps.push(4);
        if (needsVapi) steps.push(5);
        steps.push(6, 7); // Admin + Review (always)
        return steps;
    }, [needsEmail, needsSms, needsVapi]);

    const totalSteps = activeSteps.length;

    const isStepActive = useCallback((step: OnboardingStep) => {
        return activeSteps.includes(step);
    }, [activeSteps]);

    const currentStepIndex = activeSteps.indexOf(currentStep);

    // ── Persist draft on change ──────────────────────────────────────────────
    useEffect(() => {
        if (!submitted) {
            saveDraft(formData);
        }
    }, [formData, submitted]);

    // ── Validation ───────────────────────────────────────────────────────────
    const validateStep = useCallback(
        (step: OnboardingStep): { valid: boolean; errors: string[] } => {
            const errors: string[] = [];

            switch (step) {
                case 1:
                    if (!formData.brand.brandName.trim()) errors.push('Brand name is required');
                    if (!formData.brand.addressLine1.trim()) errors.push('Address is required');
                    if (!formData.brand.city.trim()) errors.push('City is required');
                    if (!formData.brand.postalCode.trim()) errors.push('Postal code is required');
                    break;
                case 2:
                    // At least one non-POS module should be enabled for Phase 1
                    if (formData.enabledModuleIds.length === 0) {
                        errors.push('At least one module must be enabled');
                    }
                    break;
                case 3:
                    // Email — required fields when custom provider selected
                    if (needsEmail && formData.email.provider !== 'inherit') {
                        if (!formData.email.senderEmail.trim()) errors.push('Sender email is required');
                        if (!formData.email.senderName.trim()) errors.push('Sender name is required');
                        if (formData.email.provider === 'smtp') {
                            if (!formData.email.host?.trim()) errors.push('SMTP host is required');
                            if (!formData.email.username?.trim()) errors.push('SMTP username is required');
                            if (!formData.email.password?.trim()) errors.push('SMTP password is required');
                        }
                        if ((formData.email.provider === 'sendgrid' || formData.email.provider === 'ses') && !formData.email.apiKey?.trim()) {
                            errors.push('API key is required');
                        }
                    }
                    break;
                case 4:
                    // SMS — fully optional. Only validate if custom provider is selected
                    if (needsSms && formData.sms.provider !== 'inherit') {
                        if (!formData.sms.senderId.trim()) errors.push('Sender ID is required for custom SMS providers');
                        if (!formData.sms.apiKey?.trim()) errors.push('API key is required');
                    }
                    break;
                case 5:
                    // Vapi — required when ai-call-analytics is enabled
                    if (needsVapi) {
                        if (!formData.vapi.assistantId.trim()) errors.push('Vapi Assistant ID is required');
                        if (!formData.vapi.phoneNumber.trim()) errors.push('Assistant phone number is required');
                    }
                    break;
                case 6:
                    if (!formData.admin.adminName.trim()) errors.push('Admin name is required');
                    if (!formData.admin.adminEmail.trim()) errors.push('Admin email is required');
                    // Basic email format check
                    if (formData.admin.adminEmail.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.admin.adminEmail)) {
                        errors.push('Invalid email format');
                    }
                    break;
                case 7:
                    // Review — no additional validation
                    break;
            }

            return { valid: errors.length === 0, errors };
        },
        [formData, needsEmail, needsSms, needsVapi]
    );

    // ── Step navigation (validates before advancing) ─────────────────────────
    const nextStep = useCallback(() => {
        const validation = validateStep(currentStep);
        if (!validation.valid) {
            setStepErrors(validation.errors);
            return;
        }
        setStepErrors([]);
        setCurrentStep((prev) => {
            const currentIdx = activeSteps.indexOf(prev);
            if (currentIdx === -1 || currentIdx >= activeSteps.length - 1) return prev;
            return activeSteps[currentIdx + 1]!;
        });
    }, [activeSteps, currentStep, validateStep]);

    const prevStep = useCallback(() => {
        setStepErrors([]);
        setCurrentStep((prev) => {
            const currentIdx = activeSteps.indexOf(prev);
            if (currentIdx <= 0) return prev;
            return activeSteps[currentIdx - 1]!;
        });
    }, [activeSteps]);

    const goToStep = useCallback((step: OnboardingStep) => {
        if (activeSteps.includes(step)) {
            setStepErrors([]);
            setCurrentStep(step);
        }
    }, [activeSteps]);

    // ── Form updaters ────────────────────────────────────────────────────────
    const updateBrand = useCallback(
        (updates: Partial<OnboardingFormData['brand']>) => {
            setFormData((prev) => ({ ...prev, brand: { ...prev.brand, ...updates } }));
            setStepErrors([]);
        },
        []
    );

    const updateAdmin = useCallback(
        (updates: Partial<OnboardingFormData['admin']>) => {
            setFormData((prev) => ({ ...prev, admin: { ...prev.admin, ...updates } }));
            setStepErrors([]);
        },
        []
    );

    const updateEmail = useCallback(
        (updates: Partial<OnboardingFormData['email']>) => {
            setFormData((prev) => ({ ...prev, email: { ...prev.email, ...updates } }));
            setStepErrors([]);
        },
        []
    );

    const updateSms = useCallback(
        (updates: Partial<OnboardingFormData['sms']>) => {
            setFormData((prev) => ({ ...prev, sms: { ...prev.sms, ...updates } }));
            setStepErrors([]);
        },
        []
    );

    const updateVapi = useCallback(
        (updates: Partial<OnboardingFormData['vapi']>) => {
            setFormData((prev) => ({ ...prev, vapi: { ...prev.vapi, ...updates } }));
            setStepErrors([]);
        },
        []
    );

    const updateEnabledModules = useCallback((moduleIds: string[]) => {
        setFormData((prev) => ({
            ...prev,
            enabledModuleIds: moduleIds,
        }));
    }, []);

    const updateEntitlementPaths = useCallback((paths: string[]) => {
        setFormData((prev) => ({
            ...prev,
            selectedEntitlementPaths: paths,
            // Sync enabled modules based on paths
            enabledModuleIds: Array.from(new Set(
                paths.map(p => p.split('.')[0]!).filter(Boolean)
            )),
        }));
    }, []);

    // ── Orchestration step updater ───────────────────────────────────────────
    const markStep = useCallback(
        (index: number, status: OrchestrationStepStatus['status'], error?: string) => {
            setOrchestrationSteps((prev) =>
                prev.map((s, i) => (i === index ? { ...s, status, error } : s))
            );
        },
        []
    );

    // ── Submit — sequential API calls ────────────────────────────────────────
    const handleSubmit = useCallback(async () => {
        if (submitAttempted.current) return;
        submitAttempted.current = true;
        setSubmitting(true);
        setSubmitError(null);

        // Build dynamic orchestration labels based on active steps
        const dynamicLabels = [
            'Creating brand',
            'Enabling modules',
            ...(needsEmail ? ['Configuring email'] : []),
            ...(needsSms && formData.sms.provider !== 'inherit' ? ['Configuring SMS'] : []),
            ...(needsVapi ? ['Configuring AI Call Analytics'] : []),
            'Creating tenant admin',
            'Finalizing onboarding',
        ];
        setOrchestrationSteps(dynamicLabels.map((label) => ({ label, status: 'pending' })));

        logAction({ action: AUDIT_ACTIONS.ONBOARDING_STARTED, entity: AUDIT_ENTITIES.TENANT, metadata: { brandName: formData.brand.brandName } });

        try {
            let stepIdx = 0;

            // 1. Create tenant
            markStep(stepIdx, 'running');
            const tenant = await onboardingService.createTenant(formData.brand);
            setCreatedTenantId(tenant.id);
            markStep(stepIdx, 'done');
            logAction({ action: AUDIT_ACTIONS.TENANT_CREATED, entity: AUDIT_ENTITIES.TENANT, entityId: tenant.id, metadata: { brandName: formData.brand.brandName } });
            stepIdx++;

            // 2. Enable modules + entitlements
            markStep(stepIdx, 'running');
            await onboardingService.enableModules(tenant.id, formData.enabledModuleIds, formData.selectedEntitlementPaths);
            markStep(stepIdx, 'done');
            formData.enabledModuleIds.forEach((id) => logAction({ action: AUDIT_ACTIONS.MODULE_ENABLED, entity: AUDIT_ENTITIES.MODULE, entityId: id, metadata: { tenantId: tenant.id } }));
            stepIdx++;

            // 3. Configure email (only if enabled)
            if (needsEmail) {
                markStep(stepIdx, 'running');
                await onboardingService.configureEmail(tenant.id, formData.email);
                markStep(stepIdx, 'done');
                stepIdx++;
            }

            // 4. Configure SMS (only if custom provider selected)
            if (needsSms && formData.sms.provider !== 'inherit') {
                markStep(stepIdx, 'running');
                await onboardingService.configureSms(tenant.id, formData.sms);
                markStep(stepIdx, 'done');
                stepIdx++;
            }

            // 5. Configure Vapi (only if ai-call-analytics enabled)
            if (needsVapi) {
                markStep(stepIdx, 'running');
                await onboardingService.configureVapi(tenant.id, formData.vapi);
                markStep(stepIdx, 'done');
                stepIdx++;
            }

            // 6. Create tenant admin
            markStep(stepIdx, 'running');
            await onboardingService.createAdminUser(tenant.id, formData.admin);
            markStep(stepIdx, 'done');
            logAction({ action: AUDIT_ACTIONS.USER_CREATED, entity: AUDIT_ENTITIES.USER, metadata: { tenantId: tenant.id, role: 'BRAND_ADMIN', email: formData.admin.adminEmail } });
            stepIdx++;

            // 7. Finalize
            markStep(stepIdx, 'running');
            await onboardingService.finalizeOnboarding(tenant.id);
            markStep(stepIdx, 'done');

            // Done
            clearDraft();
            setSubmitted(true);
            logAction({ action: AUDIT_ACTIONS.ONBOARDING_COMPLETED, entity: AUDIT_ENTITIES.TENANT, entityId: tenant.id });
        } catch (err: any) {
            const msg = err?.response?.data?.message || err?.response?.data?.error || err?.message || 'Onboarding failed';
            setSubmitError(msg);
            logAction({ action: AUDIT_ACTIONS.ONBOARDING_FAILED, entity: AUDIT_ENTITIES.TENANT, metadata: { error: msg, brandName: formData.brand.brandName } });

            setOrchestrationSteps((prev) =>
                prev.map((s) =>
                    s.status === 'running' ? { ...s, status: 'error', error: msg } : s
                )
            );
        } finally {
            setSubmitting(false);
            submitAttempted.current = false;
        }
    }, [formData, markStep, needsEmail, needsSms, needsVapi]);

    const resetDraft = useCallback(() => {
        clearDraft();
        setFormData(createInitialFormData());
        setCurrentStep(1);
        setSubmitted(false);
        setCreatedTenantId(null);
        setStepErrors([]);
    }, []);

    return {
        // Step state
        currentStep,
        nextStep,
        prevStep,
        goToStep,
        activeSteps,
        totalSteps,
        isStepActive,
        currentStepIndex,

        // Conditional flags
        needsEmail,
        needsSms,
        needsVapi,

        // Form data
        formData,
        updateBrand,
        updateAdmin,
        updateEmail,
        updateSms,
        updateVapi,
        updateEnabledModules,
        updateEntitlementPaths,

        // Submission
        submitting,
        submitted,
        submitError,
        createdTenantId,
        orchestrationSteps,
        handleSubmit,

        // Validation
        validateStep,
        stepErrors,
        resetDraft,
    };
}
