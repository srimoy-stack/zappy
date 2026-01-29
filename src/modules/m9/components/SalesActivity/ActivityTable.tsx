import React from 'react';
import { TransactionEvent, PaymentStatus } from '../../types/sales-activity';
import { formatCurrency } from '@/utils';
import { cn } from '@/utils';
import { AlertCircle, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface ActivityTableProps {
    data: TransactionEvent[];
    isLoading: boolean;
    onRowClick: (transaction: TransactionEvent) => void;
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    onItemsPerPageChange: (items: number) => void;
}

export const ActivityTable: React.FC<ActivityTableProps> = ({ 
    data, 
    isLoading, 
    onRowClick,
    currentPage,
    itemsPerPage,
    totalItems,
    onPageChange,
    onItemsPerPageChange
}) => {
    if (isLoading) {
        return <div className="h-64 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div></div>;
    }

    if (!data || data.length === 0) {
        return (
            <div className="bg-white border border-slate-200 rounded-xl p-24 text-center shadow-sm">
                <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-slate-50 rounded-full"><AlertCircle className="w-12 h-12 text-slate-200" /></div>
                    <div><h3 className="text-lg font-bold text-slate-800">No Sales Found</h3></div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden flex flex-col">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-200">
                <table className="w-full text-left border-collapse table-auto min-w-[1800px]">
                    <thead>
                        <tr className="bg-white border-b border-slate-100">
                            <TableHead label="Action" />
                            <TableHead label="Date" />
                            <TableHead label="Invoice No." />
                            <TableHead label="Customer name" />
                            <TableHead label="Contact number" />
                            <TableHead label="Location" />
                            <TableHead label="Payment status" />
                            <TableHead label="Payment Method" />
                            <TableHead label="Total amount" align="right" />
                            <TableHead label="Base Price" align="right" />
                            <TableHead label="Tax" align="right" />
                            <TableHead label="Total" align="right" />
                            <TableHead label="Net Price" align="right" />
                            <TableHead label="Sell Price" align="right" />
                            <TableHead label="Return" align="right" />
                            <TableHead label="Shipping" align="right" />
                            <TableHead label="Net due" align="right" />
                            <TableHead label="Total items" align="center" />
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {data.map((row) => (
                            <ActivityRow key={row.id} row={row} onClick={() => onRowClick(row)} />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-4 py-3 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Show</span>
                        <select
                            value={itemsPerPage}
                            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                            className="bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs font-bold text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                        >
                            {[10, 25, 50, 100].map(val => (
                                <option key={val} value={val}>{val}</option>
                            ))}
                        </select>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Entries</span>
                    </div>
                    <div className="h-4 w-[1px] bg-slate-100 hidden sm:block" />
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Showing {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
                    </p>
                </div>

                <div className="flex items-center gap-1">
                    <PaginationButton 
                        onClick={() => onPageChange(1)} 
                        disabled={currentPage === 1}
                        icon={ChevronsLeft}
                    />
                    <PaginationButton 
                        onClick={() => onPageChange(currentPage - 1)} 
                        disabled={currentPage === 1}
                        icon={ChevronLeft}
                    />
                    
                    <div className="flex items-center px-2">
                        <span className="text-xs font-black text-slate-900 mx-2">{currentPage}</span>
                        <span className="text-xs font-bold text-slate-300 mx-1">/</span>
                        <span className="text-xs font-bold text-slate-400 mx-2">{Math.ceil(totalItems / itemsPerPage) || 1}</span>
                    </div>

                    <PaginationButton 
                        onClick={() => onPageChange(currentPage + 1)} 
                        disabled={currentPage >= Math.ceil(totalItems / itemsPerPage)}
                        icon={ChevronRight}
                    />
                    <PaginationButton 
                        onClick={() => onPageChange(Math.ceil(totalItems / itemsPerPage))} 
                        disabled={currentPage >= Math.ceil(totalItems / itemsPerPage)}
                        icon={ChevronsRight}
                    />
                </div>
            </div>
        </div>
    );
};

const PaginationButton = ({ onClick, disabled, icon: Icon }: { onClick: () => void, disabled: boolean, icon: any }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={cn(
            "p-1.5 rounded-md transition-all border",
            disabled 
                ? "bg-slate-50 text-slate-200 border-slate-100 cursor-not-allowed" 
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300 active:scale-90"
        )}
    >
        <Icon className="w-4 h-4" />
    </button>
);

const ActivityRow = ({ row, onClick }: { row: TransactionEvent; onClick: () => void }) => {
    const dateStr = new Date(row.timestamp).toLocaleDateString() + ' ' + new Date(row.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <tr className="hover:bg-slate-50 transition-colors group cursor-pointer" onClick={onClick}>
            <td className="px-4 py-3">
                <button className="flex items-center gap-1 px-2.5 py-1 bg-sky-50 text-sky-600 rounded text-[10px] font-black uppercase hover:bg-sky-100 transition-colors border border-sky-100">
                    Actions
                    <ChevronDownMini className="w-3 h-3" />
                </button>
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-xs text-slate-600 font-medium">{dateStr}</td>
            <td className="px-4 py-3 text-xs text-blue-600 font-bold hover:underline">{row.invoiceNo}</td>
            <td className="px-4 py-3 text-xs text-slate-700 font-medium capitalize prose-sm">{row.customerName}</td>
            <td className="px-4 py-3 text-xs text-slate-500 font-medium">{row.contactNumber}</td>
            <td className="px-4 py-3">
                <div className="max-w-[200px] text-[10px] text-slate-400 font-medium leading-relaxed">
                    {row.location}
                </div>
            </td>
            <td className="px-4 py-3">
                <PaymentStatusBadge status={row.paymentStatus} />
            </td>
            <td className="px-4 py-3 text-xs text-slate-600 font-bold">{row.paymentMethod}</td>
            <td className="px-4 py-3 text-right text-xs text-slate-900 font-black">{formatCurrency(row.totalAmount)}</td>
            <td className="px-4 py-3 text-right text-xs text-slate-500 font-medium">{formatCurrency(row.basePrice)}</td>
            <td className="px-4 py-3 text-right text-xs text-slate-500 font-medium">{formatCurrency(row.tax)}</td>
            <td className="px-4 py-3 text-right text-xs text-slate-500 font-medium">{formatCurrency(row.totalAmount)}</td>
            <td className="px-4 py-3 text-right text-xs text-slate-500 font-medium">{formatCurrency(row.netPrice)}</td>
            <td className="px-4 py-3 text-right text-xs text-slate-500 font-medium">{formatCurrency(row.sellPrice)}</td>
            <td className="px-4 py-3 text-right text-xs text-red-400 font-medium">{formatCurrency(row.returnAmount)}</td>
            <td className="px-4 py-3 text-right text-xs text-slate-500 font-medium">{formatCurrency(row.shipping)}</td>
            <td className="px-4 py-3 text-right text-xs text-slate-900 font-black">{formatCurrency(row.netDue)}</td>
            <td className="px-4 py-3 text-center text-xs text-slate-600 font-bold">{row.totalItems}</td>
        </tr>
    );
};

const PaymentStatusBadge = ({ status }: { status: PaymentStatus }) => {
    const styles = {
        Paid: "bg-emerald-50 text-emerald-600 border-emerald-100",
        Partial: "bg-amber-50 text-amber-600 border-amber-100",
        Due: "bg-red-50 text-red-600 border-red-100",
        Refunded: "bg-slate-50 text-slate-600 border-slate-100"
    };
    return (
        <span className={cn("px-2 py-0.5 rounded text-[9px] font-black uppercase border tracking-widest", styles[status])}>
            {status}
        </span>
    );
};

const ChevronDownMini = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const TableHead = ({ label, align = 'left' }: { label: string; align?: 'left' | 'right' | 'center' }) => (
    <th className={cn(
        "px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50",
        align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left'
    )}>
        {label}
    </th>
);
