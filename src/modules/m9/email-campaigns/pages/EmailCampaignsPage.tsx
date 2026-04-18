'use client';

import React, { useState } from 'react';
import {
    Mail,
    Plus,
    Pencil,
    Copy,
    Pause,
    AlertCircle,
    Clock,
    Send,
    CheckCircle2,
    XCircle,
    Ban,
    Download,
    Archive,
    Eye,
    TestTube2,
    Loader2,
    Users,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCampaigns } from '../hooks/useCampaigns';
import { Campaign, CampaignStatus } from '../types/campaign.types';
import { emailCampaignService } from '../services/emailCampaignService';
import { downloadCSV, CampaignMetricRow } from '../utils/exportCSV';
import { ConfirmModal } from '../components/ConfirmModal';
import { ToastContainer, useToast } from '../components/Toast';
import { Tooltip } from '../components/Tooltip';
import { PreviewModal } from '../components/PreviewModal';
import { TestSendModal } from '../components/TestSendModal';

// ============================================================================
// STATUS BADGE CONFIG
// ============================================================================

const STATUS_CONFIG: Record<CampaignStatus, { label: string; className: string; icon: React.ReactNode }> = {
    draft: {
        label: 'Draft',
        className: 'bg-slate-100 text-slate-600 ring-slate-200',
        icon: <Pencil className="w-3 h-3" />,
    },
    scheduled: {
        label: 'Scheduled',
        className: 'bg-blue-50 text-blue-700 ring-blue-200',
        icon: <Clock className="w-3 h-3" />,
    },
    sending: {
        label: 'Sending',
        className: 'bg-amber-50 text-amber-700 ring-amber-200 animate-pulse',
        icon: <Send className="w-3 h-3" />,
    },
    sent: {
        label: 'Sent',
        className: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
        icon: <CheckCircle2 className="w-3 h-3" />,
    },
    paused: {
        label: 'Paused',
        className: 'bg-orange-50 text-orange-700 ring-orange-200',
        icon: <Pause className="w-3 h-3" />,
    },
    failed: {
        label: 'Failed',
        className: 'bg-red-50 text-red-600 ring-red-200',
        icon: <XCircle className="w-3 h-3" />,
    },
    blocked: {
        label: 'Blocked',
        className: 'bg-red-100 text-red-800 ring-red-300',
        icon: <Ban className="w-3 h-3" />,
    },
};

// ============================================================================
// HELPERS
// ============================================================================

function formatDate(dateStr?: string): string {
    if (!dateStr) return '—';
    try {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        }).format(new Date(dateStr));
    } catch {
        return '—';
    }
}

// ============================================================================
// COMPONENT
// ============================================================================

export const EmailCampaignsPage: React.FC = () => {
    const router = useRouter();
    const toast = useToast();
    const { data: campaigns, loading, error, refetch } = useCampaigns();

    // ── Local States ──────────────────────────────────────────────────
    const [busyId, setBusyId] = useState<string | null>(null);
    const [confirmAction, setConfirmAction] = useState<{
        id: string;
        type: 'archive' | 'pause';
        name: string;
    } | null>(null);
    const [previewItem, setPreviewItem] = useState<Campaign | null>(null);
    const [testSendItem, setTestSendItem] = useState<Campaign | null>(null);

    // ── Handlers ───────────────────────────────────────────────────────
    
    const handleCreateCampaign = () => {
        router.push('/backoffice/email-campaigns/create');
    };

    const handleEdit = (id: string) => {
        router.push(`/backoffice/email-campaigns/campaigns/${id}/edit`);
    };

    const handleDuplicate = async (campaign: Campaign) => {
        setBusyId(campaign.id);
        try {
            await emailCampaignService.duplicateCampaign(campaign.id);
            toast.success('Campaign duplicated', `"${campaign.name} (Copy)" created successfully.`);
            refetch();
        } catch (err: any) {
            toast.error('Duplicate failed', err.message || 'Server error');
        } finally {
            setBusyId(null);
        }
    };

    const handlePause = async (id: string) => {
        setBusyId(id);
        setConfirmAction(null);
        try {
            await emailCampaignService.pauseCampaign(id);
            toast.success('Campaign paused', 'Deployment has been halted.');
            refetch();
        } catch (err: any) {
            toast.error('Pause failed', err.message || 'Server error');
        } finally {
            setBusyId(null);
        }
    };

    const handleArchive = async (id: string) => {
        setBusyId(id);
        setConfirmAction(null);
        try {
            await emailCampaignService.archiveCampaign(id);
            toast.success('Campaign archived', 'It will no longer appear in your active list.');
            refetch();
        } catch (err: any) {
            toast.error('Archive failed', err.message || 'Server error');
        } finally {
            setBusyId(null);
        }
    };

    const handleTestSendAction = async (targetEmail: string) => {
        if (!testSendItem) return;
        try {
            await emailCampaignService.sendTestEmail(targetEmail, { templateId: testSendItem.id });
            // The TestSendModal will handle its own success UI, but we can also log or toast if we want.
        } catch (err: any) {
             throw err; // Let the modal handle the error display
        }
    };

    const handleExportCSV = () => {
        const rows: CampaignMetricRow[] = campaigns.map((c) => ({
            campaignName: c.name,
            status: c.status,
            sent: Math.floor(Math.random() * 5000) + 500,
            delivered: Math.floor(Math.random() * 4500) + 400,
            openRate: parseFloat((Math.random() * 40 + 10).toFixed(1)),
            clickRate: parseFloat((Math.random() * 15 + 1).toFixed(1)),
            unsubscribeRate: parseFloat((Math.random() * 2).toFixed(2)),
            bounceRate: parseFloat((Math.random() * 5).toFixed(2)),
        }));
        downloadCSV(rows);
        toast.info('Export complete', 'Your CSV file is downloading.');
    };

    // ── Columns ────────────────────────────────────────────────────────
    const COLUMNS = [
        { key: 'name', label: 'Campaign Name', width: 'min-w-[280px]' },
        { key: 'status', label: 'Status', width: 'min-w-[130px]' },
        { key: 'audience', label: 'Audience', width: 'min-w-[160px]' },
        { key: 'scheduledAt', label: 'Scheduled Time', width: 'min-w-[180px]' },
        { key: 'actions', label: 'Actions', width: 'text-right' },
    ] as const;

    return (
        <div className="max-w-[1600px] mx-auto space-y-6 pb-20 px-4 lg:px-6">
            <ToastContainer toasts={toast.toasts} onDismiss={toast.dismiss} />

            {/* ── Page Header ─────────────────────────────────────────── */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 pt-2 border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-100 ring-4 ring-indigo-50">
                        <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Email Campaigns</h1>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-0.5">
                            Create and manage one-time campaigns
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={handleExportCSV}
                        className="p-3 bg-white border border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300 rounded-2xl transition-all shadow-sm active:scale-95"
                        title="Export CSV"
                    >
                        <Download className="w-5 h-5" />
                    </button>
                    <button
                        id="btn-create-campaign"
                        onClick={handleCreateCampaign}
                        className="flex items-center gap-2.5 px-6 py-3 bg-indigo-600 text-white rounded-2xl text-sm font-black uppercase tracking-wider shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        <Plus className="w-4 h-4" strokeWidth={3} />
                        New Campaign
                    </button>
                </div>
            </div>

            {/* ── Error State ─────────────────────────────────────────── */}
            {error && (
                <div className="flex items-center gap-4 p-5 bg-rose-50 border border-rose-100 rounded-[2rem] animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="p-2 bg-rose-500 rounded-xl">
                        <AlertCircle className="w-5 h-5 text-white shrink-0" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-black text-rose-900 uppercase tracking-tight">Sync failed</p>
                        <p className="text-xs text-rose-600 mt-0.5 font-medium">{error}</p>
                    </div>
                    <button
                        onClick={refetch}
                        className="px-5 py-2 text-xs font-black text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-all shadow-lg shadow-rose-100 active:scale-95"
                    >
                        RETRY
                    </button>
                </div>
            )}

            {/* ── Table Container ─────────────────────────────────────── */}
            <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Total Campaigns: <span className="text-slate-900 ml-1">{loading ? '...' : campaigns.length}</span>
                    </span>
                    <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none">System Live</span>
                    </div>
                </div>

                <div className="overflow-x-auto overflow-y-visible">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                {COLUMNS.map((col) => (
                                    <th
                                        key={col.key}
                                        className={`px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ${col.width}`}
                                    >
                                        {col.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {loading && campaigns.length === 0 ? (
                                [...Array(5)].map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="px-6 py-5"><div className="h-4 bg-slate-100 rounded-full w-48 mb-2"/><div className="h-3 bg-slate-50 rounded-full w-32"/></td>
                                        <td className="px-6 py-5"><div className="h-6 bg-slate-100 rounded-full w-20"/></td>
                                        <td className="px-6 py-5"><div className="h-4 bg-slate-100 rounded-full w-32"/></td>
                                        <td className="px-6 py-5"><div className="h-4 bg-slate-100 rounded-full w-40"/></td>
                                        <td className="px-6 py-5 flex justify-end gap-2"><div className="h-8 w-8 bg-slate-100 rounded-xl"/><div className="h-8 w-8 bg-slate-100 rounded-xl"/></td>
                                    </tr>
                                ))
                            ) : campaigns.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-24 text-center">
                                        <div className="flex flex-col items-center justify-center opacity-40">
                                            <div className="w-20 h-20 bg-slate-100 rounded-[2rem] flex items-center justify-center mb-6">
                                                <Mail className="w-10 h-10 text-slate-400" />
                                            </div>
                                            <h3 className="text-lg font-black text-slate-600 uppercase tracking-tight">Deploy your first campaign</h3>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Zero active sends detected</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                campaigns.map((campaign) => {
                                    const cfg = STATUS_CONFIG[campaign.status] || STATUS_CONFIG.draft;
                                    const isBusy = busyId === campaign.id;
                                    const isDraft = campaign.status === 'draft';
                                    const canPause = campaign.status === 'scheduled' || campaign.status === 'sending';
                                    const isBlocked = campaign.status === 'blocked';

                                    return (
                                        <tr key={campaign.id} className={`group border-l-4 transition-all ${isBlocked ? 'border-rose-500 bg-rose-50/20' : 'border-transparent hover:bg-slate-50/70 hover:border-indigo-500'}`}>
                                            <td className="px-6 py-5">
                                                <div className="flex flex-col gap-0.5">
                                                    <span className="text-sm font-black text-slate-900 group-hover:text-indigo-700 transition-colors">
                                                        {campaign.name}
                                                    </span>
                                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide truncate max-w-[300px]">
                                                        {campaign.subject}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl text-[10px] font-black uppercase ring-1 shadow-sm ${cfg.className}`}>
                                                    {cfg.icon}
                                                    {cfg.label}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 bg-slate-100 rounded-lg flex items-center justify-center">
                                                        <Users size={12} className="text-slate-500" />
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-700">{campaign.audience || 'All Audience'}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2 text-slate-500">
                                                    <Clock size={14} className="opacity-40" />
                                                    <span className="text-xs font-bold">
                                                        {campaign.scheduledAt ? formatDate(campaign.scheduledAt) : 'Send Promptly'}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center justify-end gap-1 px-2">
                                                    {/* Edit */}
                                                    {isDraft && (
                                                        <Tooltip label="Edit draft">
                                                            <button 
                                                                onClick={() => handleEdit(campaign.id)}
                                                                disabled={isBusy}
                                                                className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-xl transition-all hover:shadow-sm disabled:opacity-30"
                                                            >
                                                                <Pencil size={16} />
                                                            </button>
                                                        </Tooltip>
                                                    )}

                                                    {/* Duplicate */}
                                                    <Tooltip label="Duplicate campaign">
                                                        <button 
                                                            onClick={() => handleDuplicate(campaign)}
                                                            disabled={isBusy}
                                                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-white rounded-xl transition-all hover:shadow-sm disabled:opacity-30"
                                                        >
                                                            {isBusy ? <Loader2 size={16} className="animate-spin" /> : <Copy size={16} />}
                                                        </button>
                                                    </Tooltip>

                                                    {/* Pause */}
                                                    {canPause && (
                                                        <Tooltip label="Pause dispatch">
                                                            <button 
                                                                onClick={() => setConfirmAction({ id: campaign.id, type: 'pause', name: campaign.name })}
                                                                disabled={isBusy}
                                                                className="p-2 text-slate-400 hover:text-orange-600 hover:bg-white rounded-xl transition-all hover:shadow-sm disabled:opacity-30"
                                                            >
                                                                <Pause size={16} />
                                                            </button>
                                                        </Tooltip>
                                                    )}

                                                    {/* Preview */}
                                                    <Tooltip label="Visual Preview">
                                                        <button 
                                                            onClick={() => setPreviewItem(campaign)}
                                                            className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-white rounded-xl transition-all hover:shadow-sm"
                                                        >
                                                            <Eye size={16} />
                                                        </button>
                                                    </Tooltip>

                                                    {/* Test */}
                                                    <Tooltip label="Send test email">
                                                        <button 
                                                            onClick={() => setTestSendItem(campaign)}
                                                            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-xl transition-all hover:shadow-sm"
                                                        >
                                                            <TestTube2 size={16} />
                                                        </button>
                                                    </Tooltip>

                                                    {/* Archive */}
                                                    <Tooltip label="Permanent Archive">
                                                        <button 
                                                            onClick={() => setConfirmAction({ id: campaign.id, type: 'archive', name: campaign.name })}
                                                            disabled={isBusy}
                                                            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-white rounded-xl transition-all hover:shadow-sm disabled:opacity-30"
                                                        >
                                                            <Archive size={16} />
                                                        </button>
                                                    </Tooltip>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ── Confirmation Modals ─────────────────────────────────── */}
            <ConfirmModal 
                open={!!confirmAction}
                title={confirmAction?.type === 'archive' ? 'Archive Campaign?' : 'Pause Dispatch?'}
                description={confirmAction?.type === 'archive' 
                    ? `Are you sure you want to archive "${confirmAction?.name}"? This action moves the campaign to the archive list and removes it from active dashboards.`
                    : `This will immediately stop delivery for "${confirmAction?.name}". Any emails already in the sending queue might still be delivered to recipients.`
                }
                confirmLabel={confirmAction?.type === 'archive' ? 'Archive Now' : 'Stop Send'}
                variant={confirmAction?.type === 'archive' ? 'danger' : 'warning'}
                loading={busyId === confirmAction?.id}
                onConfirm={() => {
                    if (confirmAction?.type === 'archive') handleArchive(confirmAction.id);
                    else handlePause(confirmAction!.id);
                }}
                onCancel={() => setConfirmAction(null)}
            />

            {/* ── Preview Modal ───────────────────────────────────────── */}
            <PreviewModal 
                open={!!previewItem}
                onClose={() => setPreviewItem(null)}
                campaignName={previewItem?.name || ''}
                subject={previewItem?.subject || ''}
                htmlContent={`
                    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #eee; border-radius: 12px; background: white;">
                        <h1 style="color: #6366f1; margin-bottom: 24px;">${previewItem?.subject}</h1>
                        <p style="color: #475569; line-height: 1.6; font-size: 16px;">
                            Hello, this is a live preview of your campaign <strong>${previewItem?.name}</strong>.
                        </p>
                        <p style="color: #475569; line-height: 1.6; font-size: 16px;">
                            The real email content would be dynamically generated from your selected template and segment rules.
                        </p>
                        <div style="margin-top: 40px; border-top: 1px solid #f1f5f9; padding-top: 20px; text-align: center;">
                             <a href="#" style="background: #6366f1; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Shop Our Spring Collection</a>
                        </div>
                         <div style="margin-top: 40px; color: #94a3b8; font-size: 12px; text-align: center;">
                            <p>You received this because you are part of our <strong>${previewItem?.audience}</strong> audience.</p>
                            <p>Zyappy Industries | 123 Tech Lane, CA | <a href="#" style="color: #6366f1;">Unsubscribe</a></p>
                        </div>
                    </div>
                `}
            />

            {/* ── Test Send Modal ─────────────────────────────────────── */}
            <TestSendModal 
                open={!!testSendItem}
                onClose={() => setTestSendItem(null)}
                campaignName={testSendItem?.name || ''}
                onSend={handleTestSendAction}
            />
        </div>
    );
};

export default EmailCampaignsPage;
