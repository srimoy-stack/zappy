'use client';

import React, { useState, useMemo } from 'react';
import { ModuleTreeSelector } from '../tenants/ModuleTreeSelector';
import { getModuleNodes } from '@/shared/config/modules';
import { LayoutGrid, Save, RotateCcw } from 'lucide-react';

/**
 * Phase 1 modules — only these are toggleable.
 * All other modules show as "Coming Soon".
 */
const PHASE_1_MODULE_IDS = new Set(['email-campaigns', 'ai-call-analytics']);

interface ModulesTabProps {
    tenantId: string;
    initialPaths: string[];
}

export function ModulesTab({ tenantId, initialPaths }: ModulesTabProps) {
    const [selectedPaths, setSelectedPaths] = useState<string[]>(initialPaths);
    const [isDirty, setIsDirty] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const moduleNodes = getModuleNodes();
    const configurableModules = moduleNodes.filter(
        (node) => !node.isSystem && node.status === 'active'
    );

    const comingSoonIds = useMemo(() => {
        const ids = new Set<string>();
        for (const mod of configurableModules) {
            if (!PHASE_1_MODULE_IDS.has(mod.id)) {
                ids.add(mod.id);
            }
        }
        return ids;
    }, [configurableModules]);

    const handleChange = (paths: string[]) => {
        setSelectedPaths(paths);
        setIsDirty(true);
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            // TODO: API call — PUT /tenants/{tenantId}/entitlements
            await new Promise(r => setTimeout(r, 1000));
            setIsDirty(false);
        } catch (err) {
            alert('Failed to update entitlements');
        } finally {
            setIsSaving(false);
        }
    };

    const handleReset = () => {
        setSelectedPaths(initialPaths);
        setIsDirty(false);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                        <LayoutGrid size={18} />
                        Module Entitlements
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                        Enable or disable modules for this tenant. Changes affect navigation, API access, and route guards.
                    </p>
                </div>
                {isDirty && (
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-black hover:bg-slate-50 transition-all"
                        >
                            <RotateCcw size={14} /> Revert
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black hover:bg-slate-800 transition-all disabled:opacity-50"
                        >
                            <Save size={14} /> {isSaving ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                )}
            </div>

            {/* Tree Selector */}
            <ModuleTreeSelector
                modules={configurableModules}
                selectedPaths={selectedPaths}
                onChange={handleChange}
                comingSoonIds={comingSoonIds}
            />
        </div>
    );
}
