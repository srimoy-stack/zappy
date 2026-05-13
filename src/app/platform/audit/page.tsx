'use client';

import { useState, useEffect, useCallback } from 'react';
import {
    FileText, Search, Clock, User, Shield, Building2, Zap,
    ArrowDownToLine, Loader2, ChevronLeft, ChevronRight,
    Activity, Mail, Phone, RefreshCw, ChevronDown, X,
} from 'lucide-react';
import { cn } from '@/utils';
import { apiClient } from '@/shared/api/apiClient';

// ─── Types ──────────────────────────────────────────────────────────────────

interface AuditLogEntry {
    id: number;
    action: string;
    entity_type: string;
    entity_id: number | null;
    actor_type: string;
    actor_id: number | null;
    metadata: Record<string, any> | null;
    ip_address: string | null;
    created_at: string;
}

interface AuditSummary {
    total_entries: number;
    today_entries: number;
    week_entries: number;
    actions: string[];
    entity_types: string[];
    actor_types: string[];
    tenants: { id: string; name: string; slug: string }[];
}

interface PaginationMeta {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatTimestamp(iso: string): { time: string; date: string } {
    const d = new Date(iso);
    return {
        time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        date: d.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }),
    };
}

function getActionIcon(action: string) {
    const a = action.toLowerCase();
    if (a.includes('tenant')) return <Building2 size={14} />;
    if (a.includes('user') || a.includes('login') || a.includes('admin')) return <User size={14} />;
    if (a.includes('module')) return <Zap size={14} />;
    if (a.includes('role') || a.includes('permission')) return <Shield size={14} />;
    if (a.includes('campaign') || a.includes('email')) return <Mail size={14} />;
    if (a.includes('call')) return <Phone size={14} />;
    return <Activity size={14} />;
}

function getActionColor(action: string): string {
    const a = action.toLowerCase();
    if (a.includes('created') || a.includes('enabled') || a.includes('completed')) return 'bg-emerald-50 text-emerald-700 border-emerald-100';
    if (a.includes('deleted') || a.includes('suspended') || a.includes('failed')) return 'bg-rose-50 text-rose-700 border-rose-100';
    if (a.includes('updated') || a.includes('modified') || a.includes('changed')) return 'bg-blue-50 text-blue-700 border-blue-100';
    if (a.includes('login') || a.includes('auth')) return 'bg-amber-50 text-amber-700 border-amber-100';
    return 'bg-slate-50 text-slate-700 border-slate-100';
}

function formatMetadata(metadata: Record<string, any> | null): string {
    if (!metadata || Object.keys(metadata).length === 0) return '';
    return Object.entries(metadata)
        .filter(([, v]) => v !== null && v !== undefined && v !== '')
        .map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`)
        .join(' · ');
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function PlatformAuditPage() {
    const [logs, setLogs] = useState<AuditLogEntry[]>([]);
    const [summary, setSummary] = useState<AuditSummary | null>(null);
    const [meta, setMeta] = useState<PaginationMeta>({ current_page: 1, per_page: 25, total: 0, last_page: 1 });
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    // Filters
    const [search, setSearch] = useState('');
    const [actionFilter, setActionFilter] = useState('');
    const [entityFilter, setEntityFilter] = useState('');
    const [tenantFilter, setTenantFilter] = useState('');
    const [actorFilter, setActorFilter] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [page, setPage] = useState(1);

    // Expanded row
    const [expandedId, setExpandedId] = useState<number | null>(null);

    // ── Build filter params ───────────────────────────────────────────────
    const buildParams = useCallback(() => {
        const params: Record<string, string> = {};
        if (search) params.search = search;
        if (actionFilter) params.action = actionFilter;
        if (entityFilter) params.entity_type = entityFilter;
        if (tenantFilter) params.tenant_id = tenantFilter;
        if (actorFilter) params.actor_type = actorFilter;
        if (dateFrom) params.date_from = dateFrom;
        if (dateTo) params.date_to = dateTo;
        return params;
    }, [search, actionFilter, entityFilter, tenantFilter, actorFilter, dateFrom, dateTo]);

    // ── Fetch Summary ─────────────────────────────────────────────────────
    const fetchSummary = useCallback(() => {
        apiClient.get('/platform/audit-logs/summary')
            .then(({ data }) => setSummary(data))
            .catch(err => console.error('Summary error:', err));
    }, []);

    useEffect(() => { fetchSummary(); }, [fetchSummary]);

    // ── Fetch Logs ────────────────────────────────────────────────────────
    const fetchLogs = useCallback(async () => {
        try {
            const params = { ...buildParams(), per_page: '25', page: String(page) };
            const { data } = await apiClient.get('/platform/audit-logs', { params });
            setLogs(data.data || []);
            setMeta(data.meta || { current_page: 1, per_page: 25, total: 0, last_page: 1 });
        } catch (err) {
            console.error('Audit logs error:', err);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, [page, buildParams]);

    useEffect(() => { fetchLogs(); }, [fetchLogs]);

    const handleRefresh = () => {
        setRefreshing(true);
        fetchSummary();
        fetchLogs();
    };

    const handleExport = async () => {
        try {
            const params = buildParams();
            const resp = await apiClient.get('/platform/audit-logs/export', { params, responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([resp.data]));
            const a = document.createElement('a');
            a.href = url;
            a.download = `audit_logs_${new Date().toISOString().slice(0,10)}.csv`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error('Export error:', err);
            alert('Failed to export audit logs.');
        }
    };

    const clearFilters = () => {
        setSearch(''); setActionFilter(''); setEntityFilter('');
        setTenantFilter(''); setActorFilter('');
        setDateFrom(''); setDateTo(''); setPage(1);
    };

    const hasFilters = search || actionFilter || entityFilter || tenantFilter || actorFilter || dateFrom || dateTo;

    // ── Render ────────────────────────────────────────────────────────────
    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Audit Center</h1>
                    <p className="text-sm text-slate-500 font-medium mt-0.5">
                        Immutable record of all platform operations
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={handleRefresh} disabled={refreshing}
                        className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all disabled:opacity-50">
                        <RefreshCw size={16} className={cn('text-slate-500', refreshing && 'animate-spin')} />
                    </button>
                    <button onClick={handleExport}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-black hover:bg-slate-50 transition-all">
                        <ArrowDownToLine size={14} /> Export CSV
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            {summary && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <SummaryCard label="Total Events" value={summary.total_entries} icon={FileText} color="bg-slate-900 text-white" />
                    <SummaryCard label="Today" value={summary.today_entries} icon={Clock} color="bg-emerald-100 text-emerald-600" />
                    <SummaryCard label="This Week" value={summary.week_entries} icon={Activity} color="bg-blue-100 text-blue-600" />
                    <SummaryCard label="Event Types" value={summary.actions.length} icon={Zap} color="bg-violet-100 text-violet-600" />
                </div>
            )}

            {/* Filters */}
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                {/* Row 1: Search + dropdowns */}
                <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center">
                    <div className="relative flex-1 min-w-0 w-full lg:max-w-xs">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                        <input type="text" placeholder="Search logs..."
                            value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-2 border-slate-50 rounded-xl text-xs font-bold text-slate-900 focus:bg-white focus:border-slate-900 outline-none transition-all"
                        />
                    </div>

                    {summary && summary.actions.length > 0 && (
                        <FilterSelect value={actionFilter}
                            onChange={v => { setActionFilter(v); setPage(1); }}
                            options={[{ value: '', label: 'All Actions' }, ...summary.actions.map(a => ({ value: a, label: a }))]}
                        />
                    )}

                    {summary && summary.entity_types.length > 0 && (
                        <FilterSelect value={entityFilter}
                            onChange={v => { setEntityFilter(v); setPage(1); }}
                            options={[{ value: '', label: 'All Entities' }, ...summary.entity_types.map(e => ({ value: e, label: e }))]}
                        />
                    )}

                    {summary && summary.tenants && summary.tenants.length > 0 && (
                        <FilterSelect value={tenantFilter}
                            onChange={v => { setTenantFilter(v); setPage(1); }}
                            options={[{ value: '', label: 'All Tenants' }, ...summary.tenants.map(t => ({ value: t.id, label: t.name }))]}
                        />
                    )}

                    {summary && summary.actor_types && summary.actor_types.length > 0 && (
                        <FilterSelect value={actorFilter}
                            onChange={v => { setActorFilter(v); setPage(1); }}
                            options={[{ value: '', label: 'All Actors' }, ...summary.actor_types.map(a => ({ value: a, label: a }))]}
                        />
                    )}
                </div>

                {/* Row 2: Date range + clear */}
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Date Range</span>
                    <input type="date" value={dateFrom} onChange={e => { setDateFrom(e.target.value); setPage(1); }}
                        className="px-3 py-2 bg-slate-50 border-2 border-slate-50 rounded-xl text-xs font-bold text-slate-900 focus:bg-white focus:border-slate-900 outline-none transition-all"
                    />
                    <span className="text-xs text-slate-400">to</span>
                    <input type="date" value={dateTo} onChange={e => { setDateTo(e.target.value); setPage(1); }}
                        className="px-3 py-2 bg-slate-50 border-2 border-slate-50 rounded-xl text-xs font-bold text-slate-900 focus:bg-white focus:border-slate-900 outline-none transition-all"
                    />
                    {hasFilters && (
                        <button onClick={clearFilters}
                            className="flex items-center gap-1 px-3 py-2 text-[10px] font-black text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                            <X size={12} /> Clear All
                        </button>
                    )}
                    <span className="flex-1" />
                    <span className="text-[10px] font-bold text-slate-400">
                        {meta.total.toLocaleString()} results
                    </span>
                </div>
            </div>

            {/* Table */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-24 gap-3">
                    <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
                    <span className="text-sm font-bold text-slate-400">Loading audit logs...</span>
                </div>
            ) : logs.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-16 text-center">
                    <FileText className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                    <p className="text-lg font-black text-slate-900">No audit events found</p>
                    <p className="text-sm text-slate-500 mt-1">
                        {hasFilters ? 'Try adjusting your filters.' : 'Platform events will appear here as they happen.'}
                    </p>
                </div>
            ) : (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[900px]">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest w-36">Timestamp</th>
                                    <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Action</th>
                                    <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Entity</th>
                                    <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Actor</th>
                                    <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Details</th>
                                    <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest w-28">IP</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {logs.map(log => {
                                    const ts = formatTimestamp(log.created_at);
                                    const isExpanded = expandedId === log.id;
                                    return (
                                        <tr key={log.id}
                                            onClick={() => setExpandedId(isExpanded ? null : log.id)}
                                            className="hover:bg-slate-50/80 transition-colors cursor-pointer group">
                                            {/* Timestamp */}
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-black text-slate-900 tabular-nums">{ts.time}</span>
                                                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{ts.date}</span>
                                                </div>
                                            </td>

                                            {/* Action */}
                                            <td className="px-6 py-4">
                                                <span className={cn(
                                                    'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tight border',
                                                    getActionColor(log.action)
                                                )}>
                                                    {getActionIcon(log.action)}
                                                    {log.action}
                                                </span>
                                            </td>

                                            {/* Entity */}
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold text-slate-700">{log.entity_type || '—'}</span>
                                                    {log.entity_id && (
                                                        <span className="text-[9px] text-slate-400 font-mono">ID: {log.entity_id}</span>
                                                    )}
                                                </div>
                                            </td>

                                            {/* Actor */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all">
                                                        <User size={12} />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] font-black text-slate-900 uppercase">{log.actor_type}</span>
                                                        {log.actor_id && (
                                                            <span className="text-[9px] text-slate-400 font-mono">#{log.actor_id}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Details */}
                                            <td className="px-6 py-4 max-w-xs">
                                                <p className={cn(
                                                    'text-[11px] text-slate-500 font-medium leading-relaxed',
                                                    isExpanded ? 'whitespace-normal' : 'truncate'
                                                )}>
                                                    {formatMetadata(log.metadata) || '—'}
                                                </p>
                                            </td>

                                            {/* IP */}
                                            <td className="px-6 py-4">
                                                <span className="text-[10px] font-mono text-slate-400">
                                                    {log.ip_address || '—'}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500">
                            Showing <span className="text-slate-900">{((meta.current_page - 1) * meta.per_page) + 1}</span> to{' '}
                            <span className="text-slate-900">{Math.min(meta.current_page * meta.per_page, meta.total)}</span> of{' '}
                            <span className="text-slate-900">{meta.total}</span> events
                        </span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setPage(p => Math.max(1, p - 1))}
                                disabled={meta.current_page <= 1}
                                className="w-9 h-9 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-slate-900 hover:border-slate-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <span className="px-3 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-black tabular-nums">
                                {meta.current_page}
                            </span>
                            <span className="text-xs text-slate-400 font-bold">of {meta.last_page}</span>
                            <button
                                onClick={() => setPage(p => Math.min(meta.last_page, p + 1))}
                                disabled={meta.current_page >= meta.last_page}
                                className="w-9 h-9 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-slate-900 hover:border-slate-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ─── Sub-components ─────────────────────────────────────────────────────────

function SummaryCard({ label, value, icon: Icon, color }: {
    label: string; value: number; icon: any; color: string;
}) {
    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center mb-2', color)}>
                <Icon size={16} />
            </div>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">{label}</span>
            <span className="text-2xl font-black text-slate-900 tabular-nums">{value.toLocaleString()}</span>
        </div>
    );
}

function FilterSelect({ value, onChange, options }: {
    value: string; onChange: (v: string) => void;
    options: { value: string; label: string }[];
}) {
    return (
        <div className="relative">
            <select value={value} onChange={e => onChange(e.target.value)}
                className="pl-3 pr-8 py-2.5 bg-slate-50 border-2 border-slate-50 rounded-xl text-xs font-bold text-slate-900 focus:bg-white focus:border-slate-900 transition-all outline-none appearance-none min-w-[140px]">
                {options.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
    );
}
