'use client';

import React, { useState, useMemo } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    Mail,
    Users,
    FileText,
    Send,
    Check,
    AlertCircle,
    Info,
    ShieldCheck,
    XCircle,
    CheckCircle2,
    TriangleAlert,
    Code,
    Eye,
    Zap,
    Calendar,
    Clock,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { CreateCampaignPayload, EmailTemplate, SegmentRulesPayload } from '../types/campaign.types';
import { SegmentRuleBuilder } from '../components/SegmentRuleBuilder';
import { useContacts } from '../hooks/useContacts';
import { useTemplates } from '../hooks/useTemplates';
import { emailCampaignService } from '../services/emailCampaignService';

import { 
    validateCompliance, 
    getCompliantHtml, 
    getUnknownVariables, 
    COMPLIANCE_FOOTER 
} from '../utils/compliance';

// ============================================================================
// STEP DEFINITIONS
// ============================================================================

const STEPS = [
    { id: 'basics', label: 'Basics', icon: Mail },
    { id: 'audience', label: 'Audience', icon: Users },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'review', label: 'Review & Comply', icon: ShieldCheck },
    { id: 'send', label: 'Send', icon: Send },
] as const;

type StepId = (typeof STEPS)[number]['id'];

// ============================================================================
// INITIAL STATE
// ============================================================================

const INITIAL_RULES: SegmentRulesPayload = {
    logic: 'AND',
    rules: [{ id: 'init', field: 'last_order_days', operator: '>', value: '' }],
};

const INITIAL_DATA: CreateCampaignPayload = {
    name: '',
    subject: '',
    previewText: '',
    senderName: '',
    replyTo: '',
    templateId: '',
    segmentId: 'all',
    storeId: undefined,
    scheduledAt: undefined,
    rulesJson: undefined,
};

// ============================================================================
// STEP COMPONENTS
// ============================================================================

interface StepProps {
    data: CreateCampaignPayload;
    onChange: (updates: Partial<CreateCampaignPayload>) => void;
    onValidate?: (isValid: boolean) => void;
}

/** Step 1: Campaign basics */
const BasicsStep: React.FC<StepProps> = ({ data, onChange, onValidate }) => {
    React.useEffect(() => {
        onValidate?.(true);
    }, [onValidate]);

    return (
    <div className="space-y-5">
        <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                Campaign Name *
            </label>
            <input
                type="text"
                value={data.name}
                onChange={(e) => onChange({ name: e.target.value })}
                placeholder="e.g. Spring Sale Announcement"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
            />
        </div>
        <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                Email Subject *
            </label>
            <input
                type="text"
                value={data.subject}
                onChange={(e) => onChange({ subject: e.target.value })}
                placeholder="e.g. 🔥 Don't miss our spring sale!"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
            />
        </div>
        <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                Preview Text
            </label>
            <input
                type="text"
                value={data.previewText}
                onChange={(e) => onChange({ previewText: e.target.value })}
                placeholder="Short text shown in inbox preview"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Sender Name *
                </label>
                <input
                    type="text"
                    value={data.senderName}
                    onChange={(e) => onChange({ senderName: e.target.value })}
                    placeholder="e.g. Zyappy"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                />
            </div>
            <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Reply-To Email *
                </label>
                <input
                    type="email"
                    value={data.replyTo}
                    onChange={(e) => onChange({ replyTo: e.target.value })}
                    placeholder="e.g. hello@zyappy.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                />
            </div>
        </div>
    </div>
    );
};

/** Step 2: Audience */
const AudienceStep: React.FC<StepProps> = ({ data, onChange, onValidate }) => {
    const { data: eligibility, loading, error } = useContacts();
    const [localRules, setLocalRules] = useState<SegmentRulesPayload>(data.rulesJson || INITIAL_RULES);

    // Sync rules to parent state
    const handleRulesChange = (payload: SegmentRulesPayload) => {
        setLocalRules(payload);
        onChange({ rulesJson: payload });
    };

    // Handle segment type change
    const handleSegmentChange = (value: string) => {
        onChange({ segmentId: value });
        if (value === 'custom') {
            onChange({ segmentId: value, rulesJson: localRules });
        } else {
            onChange({ segmentId: value, rulesJson: undefined });
        }
    };

    // Validate: custom segment needs at least 1 rule with a value
    React.useEffect(() => {
        if (data.segmentId === 'custom') {
            const hasValidRule = localRules.rules.length > 0 && localRules.rules.some(r => {
                if (Array.isArray(r.value)) return r.value.length > 0;
                return String(r.value).trim() !== '';
            });
            onValidate?.(hasValidRule);
        } else if (!loading && !error && eligibility) {
            onValidate?.(eligibility.eligible > 0);
        } else if (error) {
            onValidate?.(true);
        }
    }, [data.segmentId, localRules, eligibility, loading, error, onValidate]);

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Audience Selection *
                </label>
                <select
                    value={data.segmentId}
                    onChange={(e) => handleSegmentChange(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 outline-none transition-all font-medium"
                >
                    <option value="all">All Contacts</option>
                    <option value="custom">Custom Segment (Build Rules)</option>
                </select>
            </div>

            {/* Rule Builder — visible when custom segment is selected */}
            {data.segmentId === 'custom' && (
                <div className="p-5 bg-white border border-indigo-100 rounded-2xl ring-1 ring-indigo-50">
                    <SegmentRuleBuilder value={localRules} onChange={handleRulesChange} />
                </div>
            )}

            {loading ? (
                <div className="py-10 flex flex-col items-center justify-center gap-3">
                    <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Calculating eligibility...</p>
                </div>
            ) : error ? (
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <p className="text-sm text-red-700 font-medium">Failed to calculate audience.</p>
                </div>
            ) : eligibility ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total</p>
                            <p className="text-2xl font-black text-slate-900">{eligibility.total.toLocaleString()}</p>
                        </div>
                        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl ring-1 ring-emerald-200/50">
                            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Eligible</p>
                            <p className="text-2xl font-black text-emerald-700">{eligibility.eligible.toLocaleString()}</p>
                        </div>
                        <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl ring-1 ring-rose-200/50">
                            <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">Excluded</p>
                            <p className="text-2xl font-black text-rose-700">{eligibility.excluded.toLocaleString()}</p>
                        </div>
                    </div>

                    {eligibility.excluded > 0 && (
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Info className="w-4 h-4 text-slate-400" />
                                <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Exclusions</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {[
                                    { label: 'No Consent', count: eligibility.reasons.noConsent },
                                    { label: 'Unsubscribed', count: eligibility.reasons.unsubscribed },
                                    { label: 'Suppressed', count: eligibility.reasons.suppressed },
                                    { label: 'Invalid', count: eligibility.reasons.invalid },
                                ].map((item) => (
                                    <div key={item.label} className="px-4 py-3 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-500">{item.label}</span>
                                        <span className="text-sm font-black text-slate-900">{item.count.toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );
};

// ── Content Step Constants ───────────────────────────────────────────

const PLACEHOLDERS = {
    '{{customer_name}}': 'John Doe',
    '{{store_name}}': 'Zyappy Store',
    '{{brand_name}}': 'Zyappy',
    '{{unsubscribe_url}}': '#unsubscribe',
    '{{business_address}}': '123 Tech Lane, Silicon Valley, CA',
    '{{contact_email}}': 'support@zyappy.com',
};

function replaceVariables(html: string): string {
    let result = html;
    Object.entries(PLACEHOLDERS).forEach(([key, value]) => {
        result = result.split(key).join(value);
    });
    return result;
}

/** Step 3: Content */
const ContentStep: React.FC<StepProps> = ({ data, onChange, onValidate }) => {
    const { data: templates, loading, error } = useTemplates();
    const [testEmail, setTestEmail] = useState('');
    const [sendingTest, setSendingTest] = useState(false);
    const [testFeedback, setTestFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const selectedTemplate = templates.find((t: EmailTemplate) => t.id === data.templateId);

    // Sync template HTML to customHtml on first selection
    React.useEffect(() => {
        if (selectedTemplate && !data.customHtml) {
            // Strip footer if present to avoid double footer
            const baseHtml = selectedTemplate.htmlBody.replace(COMPLIANCE_FOOTER, '');
            onChange({ customHtml: baseHtml });
        }
    }, [selectedTemplate, data.customHtml, onChange]);

    const currentHtml = data.customHtml || selectedTemplate?.htmlBody || '';
    const compliance = validateCompliance(currentHtml);
    const unknownVars = getUnknownVariables(currentHtml);

    // Validation
    const hasTemplate = !!data.templateId;
    const hasHtml = !!currentHtml.trim();
    const isValid = hasTemplate && hasHtml && compliance.valid;
    
    const fullHtml = getCompliantHtml(currentHtml);

    React.useEffect(() => {
        onValidate?.(isValid);
    }, [isValid, onValidate]);

    const handleSendTest = async () => {
        if (!testEmail || !isValid) return;
        setSendingTest(true);
        setTestFeedback(null);
        try {
            await emailCampaignService.sendTestEmail(testEmail, {
                templateId: data.templateId,
                templateHtml: fullHtml
            });
            setTestFeedback({ type: 'success', message: 'Test email sent!' });
        } catch (err) {
            setTestFeedback({ type: 'error', message: 'Failed to send test.' });
        } finally {
            setSendingTest(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* ── Left Column: Selection & Editor ────────────────────── */}
                <div className="space-y-5">
                    <section className="space-y-3">
                        <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                             <FileText size={14} /> Select Template
                        </h3>
                        {loading ? (
                            <div className="flex gap-2 p-1 overflow-x-auto">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="h-20 w-32 bg-slate-50 border border-slate-100 rounded-xl animate-pulse shrink-0" />
                                ))}
                            </div>
                        ) : error ? (
                            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-xs font-medium">Failed to load templates.</div>
                        ) : (
                            <div className="flex gap-2 p-1 overflow-x-auto pb-2 custom-scrollbar">
                                {templates.map((template) => (
                                    <button
                                        key={template.id}
                                        onClick={() => onChange({ templateId: template.id, customHtml: template.htmlBody.replace(COMPLIANCE_FOOTER, '') })}
                                        className={`shrink-0 w-44 text-left p-3 rounded-xl border transition-all
                                            ${data.templateId === template.id 
                                                ? 'bg-indigo-600 border-indigo-600 shadow-lg shadow-indigo-100' 
                                                : 'bg-white border-slate-200 hover:border-indigo-300'}`}
                                    >
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className={`text-[11px] font-black truncate ${data.templateId === template.id ? 'text-white' : 'text-slate-900'}`}>
                                                {template.name}
                                            </span>
                                            {data.templateId === template.id && <Check className="w-3 h-3 text-white" />}
                                        </div>
                                        <div className="h-12 bg-slate-50/10 rounded-lg border border-white/10 overflow-hidden relative">
                                             <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-transparent" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </section>

                    {data.templateId && (
                        <section className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                            <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <Code size={14} /> HTML Editor
                            </h3>
                            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                                <div className="px-4 py-2.5 bg-slate-800/50 border-b border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">template.html</span>
                                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Editable</span>
                                </div>
                                <textarea
                                    value={data.customHtml || ''}
                                    onChange={(e) => onChange({ customHtml: e.target.value })}
                                    className="w-full h-[350px] p-5 font-mono text-sm text-slate-300 bg-transparent outline-none resize-none leading-relaxed"
                                    placeholder="Paste or write your HTML content..."
                                />
                                {unknownVars.length > 0 && (
                                    <div className="px-5 py-2 bg-amber-400/10 border-t border-amber-400/20 flex items-center gap-2">
                                        <TriangleAlert size={12} className="text-amber-400" />
                                        <p className="text-[9px] font-bold text-amber-400 uppercase tracking-widest">
                                            Unknown variables: {unknownVars.join(', ')}
                                        </p>
                                    </div>
                                )}
                                <div className="px-5 py-3 bg-emerald-900/20 border-t border-emerald-400/10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <ShieldCheck size={12} className="text-emerald-400" />
                                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                                            {compliance.valid ? 'Compliant' : 'Footer Auto-Appended'}
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-emerald-400/60 font-medium italic">
                                        Legal footer is automatically appended to ensure regulatory compliance.
                                    </p>
                                </div>
                            </div>
                        </section>
                    )}
                </div>

                {/* ── Right Column: Live Preview ─────────────────────────── */}
                <div className="space-y-5 flex flex-col">
                    <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                         <Eye size={14} /> Desktop Preview
                    </h3>
                    
                    <div className="flex-1 bg-slate-100 border border-slate-200 rounded-3xl overflow-hidden min-h-[500px] flex flex-col shadow-inner">
                        <div className="px-5 py-3 bg-white border-b border-slate-200 flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            </div>
                            <div className="flex-1 max-w-sm mx-auto h-7 bg-slate-50 border border-slate-100 rounded-lg flex items-center px-3 text-[10px] text-slate-400 font-medium">
                                outlook.zyappy.com/inbox/preview
                            </div>
                        </div>

                        {data.templateId ? (
                             <div className="flex-1 overflow-y-auto bg-white p-6 custom-scrollbar">
                                <div className="p-5 border-b border-slate-50 mb-6 flex gap-2 text-xs">
                                     <span className="font-bold text-slate-400 uppercase shrink-0">Subject:</span>
                                     <span className="font-semibold text-slate-900">{replaceVariables(selectedTemplate?.subject || '(No Subject)')}</span>
                                </div>
                                <div 
                                    className="preview-container"
                                    dangerouslySetInnerHTML={{ __html: replaceVariables(fullHtml) }}
                                />
                             </div>
                        ) : (
                             <div className="flex-1 flex flex-col items-center justify-center p-12 text-center opacity-40">
                                <div className="w-16 h-16 bg-white rounded-3xl shadow-sm border border-slate-200 flex items-center justify-center mb-4">
                                    <Mail className="w-8 h-8 text-slate-300" />
                                </div>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Select a template to preview</p>
                             </div>
                        )}
                    </div>

                    {/* Test Email utility */}
                    <div className="p-4 bg-white border border-slate-200 shadow-sm rounded-2xl space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                                <Send size={10} /> Quick Test Send
                            </span>
                            {testFeedback && (
                                <span className={`text-[10px] font-bold ${testFeedback.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>
                                    {testFeedback.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                             <div className="flex-1 relative">
                                <input
                                    type="email"
                                    value={testEmail}
                                    onChange={(e) => setTestEmail(e.target.value)}
                                    placeholder="Enter test email address..."
                                    className="w-full h-10 px-4 bg-slate-50 border border-slate-100 rounded-xl text-xs font-medium focus:ring-1 focus:ring-indigo-500 outline-none"
                                />
                            </div>
                            <button
                                onClick={handleSendTest}
                                disabled={!isValid || !testEmail || sendingTest}
                                className="h-10 px-5 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 transition-all shadow-lg shadow-indigo-100 disabled:shadow-none flex items-center justify-center gap-2"
                            >
                                {sendingTest ? 'Sending...' : 'Send Test'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compliance Monitor */}
            {data.templateId && !compliance.valid && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl animate-in shake duration-500">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-black text-rose-900 uppercase tracking-tight">Compliance Alert</p>
                            <p className="text-xs text-rose-700 mt-0.5 font-medium leading-relaxed">
                                Mandatory tags are missing from your custom HTML. A fallback compliance footer will be auto-appended.
                            </p>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2 ml-9">
                        {compliance.missing.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-rose-100 text-[9px] font-mono text-rose-700 rounded border border-rose-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


/** Step 4: Review & Compliance Gate */
const ReviewStep: React.FC<StepProps> = ({ data, onValidate }) => {
    const { data: eligibility, loading: audienceLoading } = useContacts();
    const { data: templates } = useTemplates();
    const [complianceChecked, setComplianceChecked] = useState(false);

    const selectedTemplate = templates.find((t: EmailTemplate) => t.id === data.templateId);

    // ── Compliance checks ──────────────────────────────────────────────
    const rawHtml = data.customHtml || selectedTemplate?.htmlBody || '';
    const compliance = validateCompliance(rawHtml);
    
    const complianceChecks = useMemo(() => [
        {
            id: 'unsubscribe',
            label: 'Unsubscribe link ({{unsubscribe_url}})',
            passed: rawHtml.includes('{{unsubscribe_url}}') || !compliance.missing.includes('{{unsubscribe_url}}'),
            desc: 'Required by CAN-SPAM for all promotional emails.'
        },
        {
            id: 'sender_id',
            label: 'Commercial sender identity',
            passed: !!(data.senderName && data.replyTo && (rawHtml.includes('{{business_address}}') || !compliance.missing.includes('{{business_address}}'))),
            desc: 'Business name and physical address must be present.'
        },
        {
            id: 'contact',
            label: 'Contact method verified',
            passed: rawHtml.includes('{{contact_email}}') || !compliance.missing.includes('{{contact_email}}'),
            desc: 'Clear way for recipients to contact the sender.'
        },
        {
            id: 'consent',
            label: 'Explicit consent verified',
            passed: !!(eligibility && eligibility.eligible > 0),
            desc: 'Only targeting contacts with "Subscribed" status.'
        },
        {
            id: 'suppression',
            label: 'Suppression rules applied',
            passed: !!(eligibility && (eligibility.reasons.unsubscribed > 0 || eligibility.reasons.suppressed >= 0)),
            desc: 'Global and list-level opt-outs are respected.'
        },
    ], [data.templateId, data.senderName, data.replyTo, eligibility, rawHtml, compliance]);

    const allChecksPassed = complianceChecks.every((c) => c.passed);
    const hasAudience = !!data.segmentId && (eligibility?.eligible ?? 0) > 0;
    
    // Strict block logic
    const isBlocked = !allChecksPassed || !hasAudience || !complianceChecked;

    React.useEffect(() => {
        onValidate?.(!isBlocked);
    }, [isBlocked, onValidate]);

    const finalPreviewHtml = getCompliantHtml(rawHtml);

    return (
        <div className="space-y-8 pb-10">
            {/* ── 1. Top Level Status Plate ───────────────────────────── */}
            <div className={`p-6 rounded-[2rem] border-2 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6
                ${isBlocked ? 'bg-rose-50 border-rose-100 shadow-xl shadow-rose-100/20' : 'bg-emerald-50 border-emerald-100 shadow-xl shadow-emerald-100/20'}`}>
                <div className="flex items-center gap-5">
                    <div className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-105
                        ${isBlocked ? 'bg-rose-500 shadow-rose-300' : 'bg-emerald-500 shadow-emerald-300'}`}>
                        {isBlocked ? <TriangleAlert size={32} className="text-white" /> : <ShieldCheck size={32} className="text-white" />}
                    </div>
                    <div>
                        <h2 className={`text-xl font-black uppercase tracking-tight ${isBlocked ? 'text-rose-900' : 'text-emerald-900'}`}>
                            {isBlocked ? 'Compliance Gate Active' : 'Ready for Dispatch'}
                        </h2>
                        <p className={`text-xs font-bold uppercase tracking-[0.1em] opacity-70 ${isBlocked ? 'text-rose-700' : 'text-emerald-700'}`}>
                            {isBlocked ? 'Campaign cannot be sent until resolved' : 'All security & legal protocols passed'}
                        </p>
                    </div>
                </div>
                {!isBlocked && (
                    <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-2xl border border-emerald-200 animate-pulse">
                         <span className="w-2 h-2 rounded-full bg-emerald-500" />
                         <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">System Signal: Fully Compliant</span>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* ── Left Column: Summary & Audience ─────────────────── */}
                <div className="space-y-8">
                    {/* Campaign Summary Card */}
                    <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Mail size={14} /> Campaign Summary
                            </h3>
                            <CheckCircle2 size={14} className="text-emerald-500" />
                        </div>
                        <div className="divide-y divide-slate-100">
                            {[
                                { label: 'Name', value: data.name },
                                { label: 'Subject', value: data.subject },
                                { label: 'Sender', value: data.senderName ? `${data.senderName} <${data.replyTo}>` : '' },
                                { label: 'Schedule', value: data.scheduledAt || 'Immediate Dispatch' },
                            ].map((f) => (
                                <div key={f.label} className="flex px-6 py-4 text-sm group hover:bg-slate-50 transition-colors">
                                    <span className="w-28 text-[10px] font-black text-slate-400 uppercase tracking-widest pt-0.5">{f.label}</span>
                                    <span className="font-bold text-slate-900 flex-1">
                                        {f.value || <span className="text-rose-500 text-xs italic">Configuration Missing</span>}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Audience Breakdown Card */}
                    <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Users size={14} /> Audience Intelligence
                            </h3>
                            <span className="text-[10px] font-black bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full uppercase tracking-widest">Real-time</span>
                        </div>
                        {audienceLoading ? (
                             <div className="p-10 space-y-4">
                                <div className="h-4 bg-slate-100 rounded-full w-2/3 animate-pulse" />
                                <div className="h-4 bg-slate-100 rounded-full w-full animate-pulse" />
                             </div>
                        ) : eligibility ? (
                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total</p>
                                        <p className="text-2xl font-black text-slate-900">{eligibility.total.toLocaleString()}</p>
                                    </div>
                                    <div className={`p-5 rounded-2xl border text-center transition-colors ${eligibility.eligible > 0 ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}>
                                        <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${eligibility.eligible > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>Eligible</p>
                                        <p className={`text-2xl font-black ${eligibility.eligible > 0 ? 'text-emerald-700' : 'text-rose-700'}`}>{eligibility.eligible.toLocaleString()}</p>
                                    </div>
                                    <div className="p-5 bg-rose-50/50 border border-rose-100 rounded-2xl text-center">
                                        <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">Excluded</p>
                                        <p className="text-2xl font-black text-rose-700">{eligibility.excluded.toLocaleString()}</p>
                                    </div>
                                </div>

                                {eligibility.excluded > 0 && (
                                     <div className="space-y-3">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Exclusion Breakdown</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                { label: 'Opted Out', count: eligibility.reasons.unsubscribed, icon: CheckCircle2 },
                                                { label: 'No Consent', count: eligibility.reasons.noConsent, icon: TriangleAlert },
                                                { label: 'Global Suppression', count: eligibility.reasons.suppressed, icon: ShieldCheck },
                                                { label: 'Invalid Format', count: eligibility.reasons.invalid, icon: XCircle },
                                            ].map((r) => (
                                                <div key={r.label} className="p-3 bg-slate-50/50 border border-slate-100 rounded-xl flex items-center justify-between">
                                                    <span className="text-[10px] font-bold text-slate-500 uppercase truncate">{r.label}</span>
                                                    <span className="text-xs font-black text-slate-800">{r.count.toLocaleString()}</span>
                                                </div>
                                            ))}
                                        </div>
                                     </div>
                                )}
                            </div>
                        ) : (
                            <div className="p-10 text-center text-slate-400 italic text-sm">Audience eligibility data currently unavailable.</div>
                        )}
                    </div>
                </div>

                {/* ── Right Column: Compliance & Validation ────────────── */}
                <div className="space-y-8">
                    {/* Mandatory Compliance Dashboard */}
                    <div className={`bg-white border-2 rounded-[2rem] overflow-hidden shadow-sm transition-all
                        ${allChecksPassed ? 'border-emerald-200 shadow-emerald-50' : 'border-rose-200 shadow-rose-50'}`}>
                        <div className={`px-6 py-4 flex items-center justify-between border-b
                            ${allChecksPassed ? 'bg-emerald-50/50 border-emerald-100' : 'bg-rose-50/50 border-rose-100'}`}>
                            <h3 className={`text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2
                                ${allChecksPassed ? 'text-emerald-700' : 'text-rose-700'}`}>
                                <ShieldCheck size={14} /> Legal & Compliance
                            </h3>
                            <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest
                                ${allChecksPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                                {allChecksPassed ? 'Verified' : 'Action Required'}
                            </span>
                        </div>
                        <div className="divide-y divide-slate-100">
                             {complianceChecks.map((check) => (
                                <div key={check.id} className="p-5 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                                    <div className={`mt-1 shrink-0 ${check.passed ? 'text-emerald-500' : 'text-rose-500'}`}>
                                        {check.passed ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-0.5">
                                            <p className={`text-sm font-black tracking-tight ${check.passed ? 'text-slate-900' : 'text-rose-900'}`}>
                                                {check.label}
                                            </p>
                                            <span className={`text-[10px] font-black uppercase tracking-widest
                                                ${check.passed ? 'text-emerald-600' : 'text-rose-600'}`}>
                                                {check.passed ? 'PASSED' : 'MISSING'}
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{check.desc}</p>
                                    </div>
                                </div>
                             ))}
                        </div>
                        {!allChecksPassed && (
                             <div className="p-5 bg-rose-900 text-white">
                                <p className="text-xs font-black uppercase tracking-[0.05em] mb-1">Critical Block</p>
                                <p className="text-[10px] leading-relaxed text-rose-100 opacity-90">Your campaign is missing legal tokens required for delivery. Please return to the Content step to restore these elements.</p>
                             </div>
                        )}
                    </div>

                    {/* Final Preview & Variables */}
                    <div className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl">
                         <div className="px-6 py-4 bg-slate-800/80 border-b border-white/5 flex items-center justify-between">
                             <div className="flex items-center gap-2">
                                <Eye size={14} className="text-slate-400" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-white/60">Final Preview Output</span>
                             </div>
                         </div>
                         <div className="p-8 bg-white m-4 rounded-[1.5rem] shadow-inner max-h-[350px] overflow-y-auto custom-scrollbar">
                            <div 
                                className="preview-container text-sm leading-relaxed text-slate-600"
                                dangerouslySetInnerHTML={{ 
                                    __html: replaceVariables(finalPreviewHtml) 
                                }}
                            />
                         </div>
                    </div>

                    {/* Mandatory Confirmation Gate */}
                    <div className={`p-6 rounded-[2rem] border-2 transition-all duration-300
                        ${complianceChecked
                            ? 'bg-indigo-600 border-indigo-600 shadow-xl shadow-indigo-100'
                            : 'bg-slate-50 border-slate-200'}`}>
                        <label className="flex items-start gap-4 cursor-pointer select-none">
                            <div className="relative mt-1">
                                <input
                                    type="checkbox"
                                    checked={complianceChecked}
                                    onChange={(e) => setComplianceChecked(e.target.checked)}
                                    className="peer sr-only"
                                />
                                <div className="w-6 h-6 border-2 rounded-lg border-slate-300 peer-checked:border-white peer-checked:bg-indigo-400 transition-all flex items-center justify-center">
                                    {complianceChecked && <Check size={16} className="text-white" />}
                                </div>
                            </div>
                            <div>
                                <p className={`text-sm font-black tracking-tight ${complianceChecked ? 'text-white' : 'text-slate-900'}`}>
                                    I confirm this campaign complies with email regulations
                                </p>
                                <p className={`text-[11px] mt-1 leading-relaxed ${complianceChecked ? 'text-indigo-100' : 'text-slate-500'}`}>
                                    By checking this, you agree that you have explicit permission to contact this audience and that your template contains valid unsubscribe links and physical business details.
                                </p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Warning Signal Plate */}
            {!isBlocked && (eligibility?.excluded ?? 0) > 0 && (
                <div className="mx-auto max-w-4xl p-5 bg-amber-50 border border-amber-200 rounded-3xl flex items-center gap-4 animate-in slide-in-from-bottom-5">
                    <div className="w-10 h-10 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-amber-200">
                        <TriangleAlert size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                         <p className="text-sm font-black text-amber-900 tracking-tight">System Notice: High Exclusion Rate</p>
                         <p className="text-xs text-amber-700/80 font-medium">We found {eligibility?.excluded.toLocaleString()} contacts that do not meet your store's consent criteria. They will be automatically removed from the send list.</p>
                    </div>
                </div>
            )}
        </div>
    );
};


/** Step 5: Send */
const SendStep: React.FC<StepProps> = ({ data, onChange }) => {
    const isScheduled = !!data.scheduledAt;

    return (
        <div className="space-y-8 py-4 px-2">
            <div className="text-center space-y-2 mb-8">
                <div className="w-16 h-16 bg-indigo-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-indigo-100 mb-4 animate-bounce">
                    <Send className="text-white w-8 h-8 rotate-12" />
                </div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Launch Protocol</h2>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Select your deployment strategy</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* ── Option 1: Send Now ──────────────────────────────── */}
                <button 
                    onClick={() => onChange({ scheduledAt: undefined })}
                    className={`p-6 rounded-[2rem] border-2 text-left transition-all duration-300 group
                        ${!isScheduled 
                            ? 'bg-indigo-600 border-indigo-600 shadow-xl shadow-indigo-100 ring-4 ring-indigo-50' 
                            : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'}`}
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-2xl transition-colors ${!isScheduled ? 'bg-white/20' : 'bg-slate-50'}`}>
                             <Zap size={20} className={!isScheduled ? 'text-white' : 'text-slate-400'} />
                        </div>
                        {!isScheduled && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                    </div>
                    <h3 className={`text-sm font-black uppercase tracking-widest mb-1 ${!isScheduled ? 'text-white' : 'text-slate-900'}`}>Send Immediately</h3>
                    <p className={`text-[10px] font-medium leading-relaxed ${!isScheduled ? 'text-indigo-100' : 'text-slate-500'}`}>
                        Your campaign will join the global queue and start sending within minutes.
                    </p>
                </button>

                {/* ── Option 2: Schedule ─────────────────────────────── */}
                <button 
                    onClick={() => { if (!data.scheduledAt) onChange({ scheduledAt: new Date().toISOString().slice(0, 16) })}}
                    className={`p-6 rounded-[2rem] border-2 text-left transition-all duration-300
                        ${isScheduled 
                            ? 'bg-indigo-600 border-indigo-600 shadow-xl shadow-indigo-100 ring-4 ring-indigo-50' 
                            : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'}`}
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-2xl transition-colors ${isScheduled ? 'bg-white/20' : 'bg-slate-50'}`}>
                             <Calendar size={20} className={isScheduled ? 'text-white' : 'text-slate-400'} />
                        </div>
                        {isScheduled && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                    </div>
                    <h3 className={`text-sm font-black uppercase tracking-widest mb-1 ${isScheduled ? 'text-white' : 'text-slate-900'}`}>Schedule Later</h3>
                    <p className={`text-[10px] font-medium leading-relaxed ${isScheduled ? 'text-indigo-100' : 'text-slate-500'}`}>
                        Set a specific time for your campaign to maximize open rates and engagement.
                    </p>
                </button>
            </div>

            {isScheduled && (
                <div className="mt-8 p-6 bg-slate-900 rounded-[2rem] shadow-2xl animate-in slide-in-from-top-4 duration-300">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Clock size={12} className="text-indigo-400" /> Dispatch Timestamp
                    </label>
                    <input
                        type="datetime-local"
                        value={data.scheduledAt || ''}
                        onChange={(e) => onChange({ scheduledAt: e.target.value || undefined })}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black text-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700"
                    />
                    <div className="mt-4 flex items-center gap-3 px-2">
                        <ShieldCheck size={14} className="text-emerald-400" />
                        <p className="text-[10px] font-medium text-slate-400 italic">Campaign will be held in escrow until this time.</p>
                    </div>
                </div>
            )}

            <div className="p-6 bg-indigo-50/50 border border-indigo-100 rounded-2xl flex items-start gap-4">
                <Info size={16} className="text-indigo-600 mt-1 shrink-0" />
                <p className="text-[11px] text-indigo-700/80 font-medium leading-relaxed">
                    Once you confirm, the campaign settings and audience will be locked. 
                    You can still pause or cancel the campaign from the dashboard after it has been scheduled.
                </p>
            </div>
        </div>
    );
};

// ============================================================================
// WIZARD
// ============================================================================

export const CreateCampaignPage: React.FC = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [campaignData, setCampaignData] = useState<CreateCampaignPayload>(INITIAL_DATA);
    const [isStepValid, setIsStepValid] = useState(true);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // Reset validation state whenever step changes
    React.useEffect(() => {
        setIsStepValid(true);
        setErrorMsg(null);
    }, [currentStep]);

    const step = STEPS[currentStep];
    const isFirst = currentStep === 0;
    const isLast = currentStep === STEPS.length - 1;

    const handleDataChange = (updates: Partial<CreateCampaignPayload>) => {
        setCampaignData((prev) => ({ ...prev, ...updates }));
    };

    const handleNext = () => {
        if (!isLast && isStepValid) {
            setCurrentStep((s) => s + 1);
            setIsStepValid(true);
        }
    };

    const handleBack = () => {
        if (!isFirst) {
            setCurrentStep((s) => s - 1);
            setIsStepValid(true);
        }
    };

    const handleSubmit = async () => {
        setSubmissionStatus('submitting');
        setErrorMsg(null);
        
        try {
            const finalPayload = {
                ...campaignData,
                sendNow: !campaignData.scheduledAt,
                customHtml: campaignData.customHtml ? getCompliantHtml(campaignData.customHtml) : undefined
            };
            
            await emailCampaignService.createCampaign(finalPayload);
            setSubmissionStatus('success');
            
            // Auto-redirect after a short delay
            setTimeout(() => {
                router.push('/backoffice/email-campaigns');
            }, 3000);
        } catch (err: any) {
            console.error('[CreateCampaign] FAILED:', err);
            setSubmissionStatus('error');
            setErrorMsg(err?.response?.data?.message || 'Something went wrong while launching the campaign. Please try again.');
        }
    };

    const STEP_COMPONENTS: Record<StepId, React.FC<StepProps>> = {
        basics: BasicsStep,
        audience: AudienceStep,
        content: ContentStep,
        review: ReviewStep,
        send: SendStep,
    };

    const ActiveStepComponent = step ? STEP_COMPONENTS[step.id] : null;

    if (submissionStatus === 'success') {
        return (
            <div className="max-w-[800px] mx-auto min-h-[600px] flex items-center justify-center px-4 animate-in fade-in zoom-in duration-500">
                <div className="bg-white border border-slate-100 rounded-[3rem] p-12 text-center shadow-2xl shadow-indigo-100 relative overflow-hidden group">
                     {/* Dynamic background element */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-50 rounded-full opacity-50 transition-transform group-hover:scale-110 duration-700" />
                    
                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-emerald-500 rounded-[2.5rem] mx-auto flex items-center justify-center shadow-xl shadow-emerald-200 mb-8 animate-in slide-in-from-bottom-5">
                             <Check size={48} className="text-white" strokeWidth={3} />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Command Acknowledged</h1>
                        <p className="text-slate-500 font-medium max-w-sm mx-auto mb-10 leading-relaxed text-sm">
                            Your campaign <span className="text-indigo-600 font-black">"{campaignData.name}"</span> has been {campaignData.scheduledAt ? 'successfully scheduled for dispatch' : 'launched into our processing engine'}.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button 
                                onClick={() => router.push('/backoffice/email-campaigns')}
                                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95"
                            >
                                Dispatch Dashboard
                            </button>
                            <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                                 <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                                 Auto-redirecting in 3s
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[950px] mx-auto space-y-6 pb-20 px-2 lg:px-4 relative">
             {/* Background Decoration */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            
            <div className="relative z-10 flex items-center gap-3 border-b border-slate-100 pb-6 pt-2">
                <button 
                    disabled={submissionStatus === 'submitting'}
                    onClick={() => router.push('/backoffice/email-campaigns')} 
                    className="p-2 hover:bg-slate-100 rounded-xl transition-colors mr-2 disabled:opacity-30"
                >
                    <ArrowLeft size={20} className="text-slate-600" />
                </button>
                <div className={`p-2.5 rounded-xl shadow-lg transition-colors ${submissionStatus === 'submitting' ? 'bg-indigo-400' : 'bg-indigo-600 shadow-indigo-100'}`}>
                    {submissionStatus === 'submitting' ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Mail className="w-5 h-5 text-white" />}
                </div>
                <div className="flex-1">
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Create Campaign</h1>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-0.5">Step {currentStep + 1} of {STEPS.length} — {step?.label}</p>
                </div>
            </div>

            <nav className={`flex items-center gap-1 transition-opacity ${submissionStatus === 'submitting' ? 'opacity-30 pointer-events-none' : ''}`}>
                {STEPS.map((s, idx) => (
                    <React.Fragment key={s.id}>
                        <button
                            onClick={() => { if (idx <= currentStep) { setIsStepValid(true); setCurrentStep(idx); } }}
                            disabled={idx > currentStep}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all
                                ${idx === currentStep ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 
                                  idx < currentStep ? 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100' : 'bg-slate-50 text-slate-400 cursor-not-allowed'}`}
                        >
                            {idx < currentStep ? <Check className="w-3.5 h-3.5" /> : <s.icon className="w-3.5 h-3.5" />}
                            <span className="hidden sm:inline">{s.label}</span>
                        </button>
                        {idx < STEPS.length - 1 && <div className={`flex-1 h-px max-w-8 ${idx < currentStep ? 'bg-indigo-300' : 'bg-slate-200'}`} />}
                    </React.Fragment>
                ))}
            </nav>

            {errorMsg && (
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-3xl flex items-center gap-4 animate-in slide-in-from-top-4">
                     <div className="w-10 h-10 bg-rose-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-rose-200">
                        <TriangleAlert size={20} className="text-white" />
                     </div>
                     <div className="flex-1">
                        <p className="text-[10px] font-black text-rose-800 uppercase tracking-widest mb-0.5">Deployment Failure</p>
                        <p className="text-xs text-rose-700 font-bold leading-tight">{errorMsg}</p>
                     </div>
                </div>
            )}

            <section className={`bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[450px] transition-all
                ${submissionStatus === 'submitting' ? 'opacity-60 scale-[0.99] grayscale-[0.2]' : ''}`}>
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <div>
                        <h2 className="text-base font-bold text-slate-800">{step?.label}</h2>
                        <p className="text-xs text-slate-400 mt-0.5">
                            {step?.id === 'basics' && 'Configure campaign details.'}
                            {step?.id === 'audience' && 'Verify audience compliance.'}
                            {step?.id === 'content' && 'Select template and preview content.'}
                            {step?.id === 'review' && 'Verify compliance before sending.'}
                            {step?.id === 'send' && 'Choose when to launch.'}
                        </p>
                    </div>
                </div>
                <div className="p-6">
                    {ActiveStepComponent && (
                        <ActiveStepComponent 
                            data={campaignData} 
                            onChange={handleDataChange} 
                            onValidate={(v) => setIsStepValid(v)}
                        />
                    )}
                </div>
            </section>

            <div className="flex items-center justify-between">
                <button 
                    onClick={handleBack} 
                    disabled={isFirst || submissionStatus === 'submitting'} 
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-30"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </button>
                {isLast ? (
                    <button 
                        onClick={handleSubmit} 
                        disabled={submissionStatus === 'submitting'}
                        className={`flex items-center gap-3 px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-widest transition-all
                            ${submissionStatus === 'submitting' 
                                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                                : 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95'}`}
                    >
                        {submissionStatus === 'submitting' ? 'Initializing...' : (
                            <>
                                <Send className="w-4 h-4" /> {campaignData.scheduledAt ? 'Authenticate & Schedule' : 'Authenticate & Launch'}
                            </>
                        )}
                    </button>
                ) : (
                    <button onClick={handleNext} disabled={!isStepValid} className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 disabled:bg-slate-300 disabled:shadow-none transition-all active:scale-95">
                        Next <ArrowRight className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
};


export default CreateCampaignPage;
