'use client';

import { useFilterStore } from '../store/useFilterStore';
import { useKDSStore, KDSState } from '../store/kdsStore';
import { useShallow } from 'zustand/react/shallow';
import { LayoutGrid, List, Maximize } from 'lucide-react';

export const KDSActionBar: React.FC = () => {
    const orders = useKDSStore(useShallow((state: KDSState) => Object.values(state.orders)));
    const { viewMode, setViewMode } = useFilterStore();
    const pendingSync = orders.filter(o => o.isPendingSync).length;

    return (
        <footer className="kds-action-bar">
            <div className="kds-action-group">
                <div className="kds-action-status">
                    <span className="kds-action-label">System Integrity</span>
                    <span className="kds-action-value uppercase">Harden v2.4</span>
                </div>
                {pendingSync > 0 && (
                    <div className="px-3 py-1 bg-amber-500 text-black text-[10px] font-black rounded uppercase animate-pulse">
                        {pendingSync} Actions Pending Sync
                    </div>
                )}
            </div>

            <div className="kds-action-group">
                <div className="flex bg-slate-800 p-1 rounded-xl">
                    <button
                        onClick={() => setViewMode('KANBAN')}
                        className={`px-4 py-2 rounded-lg flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'KANBAN' ? 'bg-slate-700 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                    >
                        <List size={14} />
                        Kanban
                    </button>
                    <button
                        onClick={() => setViewMode('GRID')}
                        className={`px-4 py-2 rounded-lg flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'GRID' ? 'bg-slate-700 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                    >
                        <LayoutGrid size={14} />
                        Grid 3x2
                    </button>
                    <button
                        onClick={() => setViewMode('COMPACT')}
                        className={`px-4 py-2 rounded-lg flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'COMPACT' ? 'bg-slate-700 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                    >
                        <Maximize size={14} />
                        Compact
                    </button>
                </div>
            </div>

            <div className="kds-action-group">
                <button
                    onClick={() => window.print()}
                    className="kds-header-btn border-slate-700 hover:border-[#1FA4A9] transition-colors"
                >
                    <span className="text-[10px] font-black uppercase tracking-widest">Print All Tickets</span>
                </button>
                <div className="kds-action-status text-right">
                    <span className="kds-action-label">Connected Node</span>
                    <span className="kds-action-value">Z-MASTER-01</span>
                </div>
            </div>
        </footer>
    );
};
