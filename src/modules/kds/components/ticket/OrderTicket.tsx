'use client';

import { useState, useRef } from 'react';
import { Clock, Printer, Pause, Play } from 'lucide-react';
import { KDSOrder } from '../../types/kds';
import { SourceBadge } from './SourceBadge';
import { DelayOrderModal } from '../modals/DelayOrderModal';
import { CustomerMessagingModal } from '../modals/CustomerMessagingModal';
import { useKDSStore } from '../../store/kdsStore';
import { TicketTimer } from './TicketTimer';
import { useKDSSound } from '../sound/useKDSSound';
import { useAuth } from '@/app/providers/AuthProvider';
import { KDSRole, canDelayOrder, canCancelOrder } from '../../utils/kdsAccess';
import { isMessagingModuleActive } from '../../utils/kdsModuleFlags';
import { resolveAllModifiers } from '../../utils/kdsModifierRenderer';
import { printOrder, isPrinterReady } from '../../services/printService';
import { kdsToast } from '../toast/KDSToast';
import { getSLAState } from '../../utils/slaUtils';
import { useEffect } from 'react';

interface Props {
    order: KDSOrder;
    variant?: 'standard' | 'expo';
}

export function OrderTicket({ order, variant = 'standard' }: Props) {
    const [isDelayModalOpen, setIsDelayModalOpen] = useState(false);
    const [isMessagingModalOpen, setIsMessagingModalOpen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isDelayThrottled, setIsDelayThrottled] = useState(false);
    const [isPrinting, setIsPrinting] = useState(false);
    const { delayOrder, advanceStage, acceptOrder, sendCustomerMessage, cancelOrder, toggleHold, incrementPrepTime, recallOrder } = useKDSStore();
    const { playSound } = useKDSSound();
    const { role: authRole, enabledModules } = useAuth();

    // Permissions & Module Enforcement
    const role = (authRole as KDSRole) || 'KDS_USER';
    const isMessagingActive = isMessagingModuleActive(enabledModules);

    const [isNew, setIsNew] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsNew(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    // Live SLA tracking for visual states
    const [slaState, setSlaState] = useState<'ON_TIME' | 'WARNING' | 'OVERDUE'>(
        getSLAState(order.createdAt, order.prepTimeMinutes)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setSlaState(getSLAState(order.createdAt, order.prepTimeMinutes));
        }, 5000);
        return () => clearInterval(interval);
    }, [order.createdAt, order.prepTimeMinutes]);

    // Production visual states logic (Industry Approach: Flat, Status-only)
    const getBorderState = () => {
        if (order.isCompleting) return 'border-[var(--kds-status-complete)] opacity-40 brightness-50';
        if (isNew) return 'kds-new-alert border-[6px]';

        const heldClass = order.isHeld ? 'border-dashed opacity-70' : '';
        if (slaState === 'OVERDUE') return `border-[var(--kds-status-late)] border-[6px] ${heldClass}`;
        if (slaState === 'WARNING') return `border-[var(--kds-status-warning)] border-[6px] ${heldClass}`;

        // Neutral for In-Progress
        return `border-[var(--kds-border)] border-[2px] ${heldClass}`;
    };

    const handleAdvance = async () => {
        if (isProcessing) return;
        setIsProcessing(true);

        // Sound confirmation
        playSound('ORDER_UPDATED', order.id);

        // Instant state change
        advanceStage(order.id);
        setIsProcessing(false);
    };

    const handleDelayConfirm = (minutes: number, reason?: string) => {
        if (isDelayThrottled) return;

        delayOrder(order.id, minutes, role, reason);
        setIsDelayThrottled(true);
        setTimeout(() => setIsDelayThrottled(false), 3000);

        // Trigger delay sound
        playSound('ORDER_DELAYED', order.id);
    };

    const handleCancel = () => {
        if (window.confirm('Are you sure you want to cancel this order?')) {
            cancelOrder(order.id, role);
            playSound('ORDER_CANCELLED', order.id);
        }
    };

    const formatCreatedAt = (dateStr: string) => {
        try {
            const date = new Date(dateStr);
            return date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
        } catch {
            return '--:--';
        }
    };

    const formatETA = (value: string | undefined) => {
        if (!value) return '--:--';
        // Handle ISO strings
        if (value.includes('T')) {
            try {
                return new Date(value).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                });
            } catch {
                return '--:--';
            }
        }
        return value; // Already formatted
    };

    const handleAccept = async () => {
        if (isProcessing) return;
        setIsProcessing(true);

        playSound('ORDER_UPDATED', order.id);

        // Instant state change
        acceptOrder(order.id);
        setIsProcessing(false);
    };

    const handlePrint = async () => {
        if (isPrinting) return;
        setIsPrinting(true);
        try {
            const result = await printOrder(
                order.id,
                (id) => useKDSStore.getState().orders[id]
            );
            if (result.status === 'SUCCESS') {
                kdsToast.success(`Receipt printed for #${result.orderNumber}`);
            } else if (result.status === 'ERROR_PRINTER_NOT_READY') {
                kdsToast.printError('Printer not ready. Check connection and retry.');
            } else {
                kdsToast.error(result.message);
            }
        } finally {
            setIsPrinting(false);
        }
    };

    const groupItems = (items: any[]) => {
        const groups: Record<string, any> = {};
        items.forEach(item => {
            const key = `${item.name}-${item.variant || ''}-${JSON.stringify(item.modifiers.sort())}`;
            if (groups[key]) {
                groups[key].quantity = (groups[key].quantity || 1) + (item.quantity || 1);
            } else {
                groups[key] = { ...item, quantity: item.quantity || 1 };
            }
        });
        return Object.values(groups);
    };

    const groupedItems = groupItems(order.items);

    const getActionButton = () => {
        const isReady = order.stage === 'READY';
        const isAccepted = order.stage === 'ACCEPTED';

        // Essential Buttons only: Bump/Advance, Void, Delay

        if (variant === 'expo') {
            return (
                <div className="flex gap-3 w-full justify-end">
                    <button
                        onClick={() => {
                            // Placeholder for print label
                            alert(`Printing label for #${order.orderNumber}`);
                        }}
                        className="flex-1 min-h-[var(--kds-touch-target)] bg-slate-700 text-white rounded-none font-black uppercase tracking-widest text-lg flex items-center justify-center gap-2"
                    >
                        <Printer size={24} />
                        LABEL
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(`https://track.zyappy.com/${order.trackingToken}`);
                            kdsToast.success('Tracking Link Copied');
                        }}
                        className="flex-1 min-h-[var(--kds-touch-target)] bg-slate-800 text-slate-400 rounded-none font-black uppercase tracking-widest text-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition-none"
                    >
                        TRACKING
                    </button>
                    <button
                        disabled={isProcessing || order.isCompleting}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleAdvance();
                        }}
                        className="flex-[2] min-h-[var(--kds-touch-target)] bg-white text-black rounded-none font-black uppercase tracking-tighter text-2xl flex items-center justify-center gap-2 active:scale-100 disabled:opacity-50"
                    >
                        {isProcessing ? 'BUMPING...' : (
                            <>
                                <Printer size={28} />
                                BUMP EXPO
                            </>
                        )}
                    </button>
                </div>
            );
        }

        // Standard variant
        let mainActionLabel = 'NEXT';
        let mainActionColor = 'bg-[var(--kds-status-prep)] text-black';
        let mainActionHandler = handleAdvance;

        if (isAccepted) {
            mainActionLabel = 'START';
            mainActionColor = 'bg-[var(--kds-status-new)] text-white';
            mainActionHandler = handleAccept;
        } else if (order.stage === 'PREPARATION') {
            mainActionLabel = 'PREP DONE';
            mainActionColor = 'bg-[var(--kds-status-prep)] text-black';
        } else if (order.stage === 'CUTTING') {
            mainActionLabel = 'PACK DONE';
            mainActionColor = 'bg-amber-600 text-white';
        } else if (order.stage === 'READY') {
            mainActionLabel = 'BUMP';
            mainActionColor = 'bg-white text-black';
        }

        return (
            <div className="flex gap-3 w-full justify-end">
                {canDelayOrder(role) && !isReady && (
                    <button
                        disabled={isDelayThrottled || order.isCompleting}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsDelayModalOpen(true);
                        }}
                        className="flex-none w-[100px] min-h-[var(--kds-touch-target)] bg-slate-800 border-2 border-[var(--kds-status-late)] text-[var(--kds-status-late)] flex flex-col items-center justify-center font-black rounded-none"
                    >
                        <Clock size={20} />
                        <span className="text-[12px]">DELAY</span>
                    </button>
                )}

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleHold(order.id);
                    }}
                    className={`flex-none w-[100px] min-h-[var(--kds-touch-target)] flex flex-col items-center justify-center font-black rounded-none transition-none ${order.isHeld ? 'bg-green-600 text-white' : 'bg-slate-700 text-slate-300'}`}
                >
                    {order.isHeld ? <Play size={20} /> : <Pause size={20} />}
                    <span className="text-[12px]">{order.isHeld ? 'RESUME' : 'HOLD'}</span>
                </button>

                <button
                    disabled={isProcessing || order.isCompleting}
                    onClick={(e) => {
                        e.stopPropagation();
                        mainActionHandler();
                    }}
                    className={`flex-1 min-h-[var(--kds-touch-target)] font-black uppercase tracking-tighter text-2xl flex items-center justify-center gap-3 active:scale-100 disabled:opacity-50 rounded-none ${mainActionColor}`}
                >
                    {isProcessing ? '...' : (
                        <>
                            <div className="w-8 h-8 rounded-full border-4 border-current flex items-center justify-center">
                                <span className="text-xl">➔</span>
                            </div>
                            {mainActionLabel}
                        </>
                    )}
                </button>
            </div>
        );
    };

    const getFulfillmentStyle = () => {
        if (variant === 'expo') return 'bg-slate-900 border-slate-700';
        return 'bg-slate-800 border-slate-700';
    };


    // Long Press Simulation (Recall)
    const longPressTimer = useRef<NodeJS.Timeout | null>(null);
    const handleLongPressStart = () => {
        longPressTimer.current = setTimeout(() => {
            recallOrder();
            playSound('ORDER_UPDATED');
            kdsToast.success('Last order recalled');
        }, 800); // 800ms for recall
    };
    const handleLongPressEnd = () => {
        if (longPressTimer.current) clearTimeout(longPressTimer.current);
    };

    const isUberDirect = order.order_source === 'UBER_DIRECT';

    return (
        <>
            <div
                onMouseDown={handleLongPressStart}
                onMouseUp={handleLongPressEnd}
                onMouseLeave={handleLongPressEnd}
                onTouchStart={handleLongPressStart}
                onTouchEnd={handleLongPressEnd}
                onClick={(e) => {
                    // Avoid double-firing if a button was clicked
                    if (e.defaultPrevented) return;
                    handleAdvance();
                }}
                className={`kds-ticket bg-[var(--kds-bg-card)] rounded-none flex flex-col overflow-hidden transition-none cursor-pointer select-none active:brightness-125 ${getBorderState()} ${isProcessing ? 'opacity-50' : ''} ${variant === 'expo' ? 'min-h-[500px] w-full max-w-[600px] mx-auto' : 'min-h-[400px]'} ${isUberDirect ? 'border-l-[10px] border-l-black' : ''}`}
            >
                {/* TOP ROW */}
                <div className={`p-4 flex justify-between items-start ${variant === 'expo' ? 'bg-[#000] text-white' : 'bg-[var(--kds-bg-surface)]'}`}>
                    <div className="flex flex-col gap-0.5">
                        <h2 className={`font-black tracking-tighter leading-none font-[var(--kds-font-main)] text-[var(--kds-font-number)] ${variant === 'expo' ? 'text-white' : 'text-white'}`}>
                            #{order.orderNumber}
                        </h2>
                        {order.customerName && (
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">CUSTOMER:</span>
                                <span className="text-[18px] font-black uppercase tracking-tight text-[#1FA4A9]">
                                    {order.customerName}
                                </span>
                            </div>
                        )}
                        <div className="flex items-center gap-2 mt-1">
                            {order.isHeld && (
                                <span className="bg-amber-500 text-black text-[12px] font-black px-2 py-0.5 rounded-none uppercase">
                                    PAUSED
                                </span>
                            )}
                            <div className="flex items-center gap-2">
                                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">SOURCE:</span>
                                <SourceBadge source={order.order_source} />
                            </div>
                            {order.isDelayed && !order.isCompleting && (
                                <span className="bg-[var(--kds-status-warning)] text-black text-[10px] font-black px-2 py-0.5 rounded uppercase flex items-center gap-1">
                                    <Clock size={10} />
                                    Delayed
                                </span>
                            )}
                            {slaState === 'OVERDUE' && !order.isCompleting && (
                                <span className="bg-[var(--kds-status-late)] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">
                                    Overdue
                                </span>
                            )}
                            {order.isCompleting && (
                                <span className="bg-[var(--kds-status-complete)] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">
                                    Completed
                                </span>
                            )}
                            {variant !== 'expo' && order.stage !== 'READY' && (
                                <div className="flex items-center gap-1">
                                    {canDelayOrder(role) && (
                                        <button
                                            disabled={isDelayThrottled || order.isCompleting}
                                            onClick={() => setIsDelayModalOpen(true)}
                                            className="bg-[var(--kds-status-late)]/10 text-[9px] font-black uppercase text-[var(--kds-status-late)] hover:bg-[var(--kds-status-late)]/20 px-2 py-0.5 rounded transition-all disabled:opacity-50"
                                        >
                                            Delay
                                        </button>
                                    )}
                                    {canCancelOrder(role) && (
                                        <button
                                            onClick={handleCancel}
                                            className="text-[10px] font-black uppercase text-slate-400 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded transition-all"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            )}
                            {isMessagingActive && order.stage !== 'READY' && (
                                <button
                                    onClick={() => setIsMessagingModalOpen(true)}
                                    className="text-[10px] font-black uppercase text-[#1FA4A9] hover:bg-[#1FA4A9]/5 px-2 py-1 rounded transition-all"
                                >
                                    Send Message
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="text-right">
                        <span className={`text-xs font-bold uppercase tracking-tighter ${variant === 'expo' ? 'text-slate-400' : 'text-slate-400'}`}>
                            CREATED: {formatCreatedAt(order.createdAt)}
                        </span>
                    </div>
                </div>

                {/* SECOND ROW */}
                <div className={`px-3 py-1.5 flex justify-between items-center border-y border-[var(--kds-border)] ${getFulfillmentStyle()} bg-opacity-10`}>
                    <div className="flex items-center gap-2">
                        <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest shrink-0">FULFILLMENT:</span>
                        <span className="text-[12px] font-black uppercase tracking-widest text-white">
                            {order.fulfillment_type === 'UBER_DIRECT_DELIVERY'
                                ? 'Uber Direct Delivery'
                                : order.fulfillment_type.replace(/_/g, ' ')}
                        </span>
                    </div>
                    <span className={`px-2 py-0.5 text-white text-[9px] font-black rounded uppercase tracking-widest bg-[var(--kds-bg-surface)] border border-[var(--kds-border)]`}>
                        {order.stage}
                    </span>
                </div>

                {/* MIDDLE SECTION - ITEM LIST */}
                <div className="p-4 flex-1 overflow-y-auto max-h-[400px]">
                    <div className="space-y-4">
                        {groupedItems.map((item, idx) => (
                            <div key={idx} className="border-b border-slate-50/5 last:border-0 pb-3 last:pb-0">
                                <div className="flex items-start gap-3">
                                    <span className={`font-[var(--kds-font-main)] text-[var(--kds-font-item)] font-black leading-none mt-1 min-w-[1.5em] text-center ${item.quantity > 1 ? 'bg-amber-500 text-black px-1 rounded' : 'text-white'}`}>
                                        {item.quantity}x
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-[var(--kds-font-main)] text-[var(--kds-font-item)] font-black text-white leading-tight uppercase">
                                                {item.name}
                                            </span>
                                            {item.variant && (
                                                <span className="text-xl font-bold text-[var(--kds-text-secondary)] italic uppercase">
                                                    {item.variant}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Modifiers — hardened group_type rendering */}
                                {item.modifiers.length > 0 && (() => {
                                    const resolved = resolveAllModifiers(item.modifiers);
                                    return (
                                        <div className="ml-8 mt-2 space-y-1">
                                            {resolved.map((mod, modIdx) => (
                                                <div key={modIdx} className="flex items-center gap-1.5 flex-wrap">

                                                    {/* Bullet */}
                                                    <span className={`text-sm font-black leading-none ${mod.hasDataError ? 'text-rose-500' : 'text-blue-500'
                                                        }`}>+</span>

                                                    {/* QUANTITY_ONLY: show qty prefix */}
                                                    {mod.resolvedQuantity !== null && (
                                                        <span className="text-[11px] font-black bg-slate-800 text-white px-1.5 py-0.5 rounded leading-none tabular-nums">
                                                            ×{mod.resolvedQuantity}
                                                        </span>
                                                    )}

                                                    {/* Modifier name */}
                                                    <span className={`flex-1 font-[var(--kds-font-main)] text-[var(--kds-font-modifier)] font-normal leading-tight uppercase ${mod.hasDataError ? 'text-rose-400' : 'text-[var(--kds-text-secondary)]'
                                                        }`}>
                                                        {mod.name}
                                                    </span>

                                                    {/* PLACEMENT_TOPPING: placement chip (never inferred — FULL is only default) */}
                                                    {mod.resolvedPlacement !== null && !mod.hasDataError && (
                                                        <span className="text-[9px] px-1.5 py-0.5 bg-slate-200 text-slate-600 rounded uppercase font-black tracking-tighter shrink-0">
                                                            {mod.resolvedPlacement}
                                                        </span>
                                                    )}

                                                    {/* Data error badge (CHOICE_ONE multi-select / unknown type) */}
                                                    {mod.hasDataError && mod.dataErrorMessage && (
                                                        <span
                                                            className="text-[9px] px-1.5 py-0.5 bg-rose-100 text-rose-700 border border-rose-200 rounded font-black uppercase tracking-tighter shrink-0"
                                                            title={mod.dataErrorMessage}
                                                        >
                                                            {mod.isUnknownGroupType ? '⚠ UNKNOWN TYPE' : '⚠ DATA ERR'}
                                                        </span>
                                                    )}

                                                </div>
                                            ))}
                                        </div>
                                    );
                                })()}
                            </div>
                        ))}

                        {order.allergies && order.allergies.length > 0 && (
                            <div className="mt-4 p-4 bg-red-600 border-[6px] border-white animate-pulse">
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl text-white">⚠️</span>
                                    <div className="flex flex-col">
                                        <span className="font-[var(--kds-font-main)] text-[24px] font-black text-white uppercase leading-none">
                                            ALLERGY ALERT:
                                        </span>
                                        <span className="font-[var(--kds-font-main)] text-[26px] font-black text-white uppercase block mt-1">
                                            {order.allergies.join(', ')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {order.notes && (
                            <div className="mt-6 p-4 bg-red-950/40 border-l-8 border-red-600">
                                <span className="font-[var(--kds-font-main)] text-[var(--kds-font-notes)] font-black text-red-500 uppercase leading-none block">
                                    SPECIAL NOTES:
                                </span>
                                <span className="font-[var(--kds-font-main)] text-[var(--kds-font-notes)] font-black text-white uppercase block mt-1">
                                    {order.notes}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="p-3 mt-auto border-t border-[var(--kds-border)] bg-[var(--kds-bg-surface)] flex flex-col gap-2">
                    {/* External vs Zyappy Total Comparison (Compliance) */}
                    {order.externalTotal !== undefined && order.zyappyCalculatedTotal !== undefined && (
                        <div className="mb-1 flex flex-col gap-1 py-1.5 px-3 bg-white rounded-lg border border-slate-200">
                            <div className="flex justify-between items-center">
                                <span className="text-[9px] font-black uppercase text-slate-400">External Charged</span>
                                <span className="text-xs font-black text-slate-900 tracking-tight">₹{order.externalTotal}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[9px] font-black uppercase text-slate-400">Zyappy Calculated</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-black text-slate-900 tracking-tight">₹{order.zyappyCalculatedTotal}</span>
                                    {order.externalTotal !== order.zyappyCalculatedTotal && (
                                        <div
                                            className="text-amber-500 cursor-help flex items-center justify-center p-0.5"
                                            title="Price difference detected"
                                        >
                                            <span className="text-[12px] leading-none">⚠️</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-black text-[var(--kds-text-muted)] uppercase tracking-widest">ETA</span>
                                {order.prepTimeMinutes > 0 && (
                                    <div className="flex items-center gap-1">
                                        <span className="text-[9px] font-black text-slate-500 bg-slate-200 px-1.5 py-0.5 rounded leading-none uppercase">
                                            Prep: {order.prepTimeMinutes} min
                                        </span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                incrementPrepTime(order.id, 2);
                                            }}
                                            className="h-5 px-1 bg-slate-700 text-white text-[9px] font-black rounded hover:bg-slate-600 active:bg-slate-500 transition-none"
                                        >
                                            +2
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                incrementPrepTime(order.id, 5);
                                            }}
                                            className="h-5 px-1 bg-slate-700 text-white text-[9px] font-black rounded hover:bg-slate-600 active:bg-slate-500 transition-none"
                                        >
                                            +5
                                        </button>
                                    </div>
                                )}
                            </div>
                            <span className="text-2xl font-black text-white tracking-tight">
                                {formatETA(order.estimatedReadyTime)}
                            </span>
                            {order.isDelayed && order.delayReason && (
                                <span className="text-[10px] font-bold text-red-600 italic leading-tight max-w-[150px] truncate">
                                    {order.delayReason}
                                </span>
                            )}
                        </div>
                        <TicketTimer
                            createdAt={order.createdAt}
                            prepTimeMinutes={order.prepTimeMinutes}
                            stageStartedAt={order.stageStartedAt}
                        />
                    </div>

                    <div className="flex gap-2">
                        {getActionButton()}
                    </div>

                    {/* Print Receipt button — always visible, amber dot when printer offline */}
                    <button
                        id={`print-order-${order.id}`}
                        onClick={handlePrint}
                        disabled={isPrinting}
                        className="w-full flex items-center justify-center gap-2 min-h-[var(--kds-touch-target)] rounded-xl bg-white border border-slate-200 text-slate-600 text-[11px] font-black uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 disabled:opacity-50"
                        title={isPrinterReady() ? 'Print receipt' : 'Printer not connected'}
                    >
                        {isPrinting ? '...' : (
                            <Printer size={14} />
                        )}
                        {isPrinting ? 'Printing...' : 'Print Receipt'}
                        {/* Amber dot when printer hardware not ready */}
                        {!isPrinterReady() && !isPrinting && (
                            <span
                                className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"
                                title="Printer not connected"
                            />
                        )}
                    </button>
                </div>
            </div >

            <DelayOrderModal
                isOpen={isDelayModalOpen}
                onClose={() => setIsDelayModalOpen(false)}
                onConfirm={handleDelayConfirm}
                orderNumber={order.orderNumber}
            />

            <CustomerMessagingModal
                isOpen={isMessagingModalOpen}
                order={order}
                onClose={() => setIsMessagingModalOpen(false)}
                onSend={(channel, message) => {
                    if (isMessagingActive) {
                        sendCustomerMessage(order.id, channel, message);
                    }
                }}
                role={role}
            />
        </>
    );
}
