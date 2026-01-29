import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    onPageChange
}) => {
    const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between px-6 py-4 bg-slate-50/50 border-t border-slate-100 gap-4">
            <div className="text-[13px] text-slate-500 font-medium">
                Showing <span className="text-slate-900 font-bold">{startItem}-{endItem}</span> of <span className="text-slate-900 font-bold">{totalItems}</span> users
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 rounded-lg transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-transparent disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`min-w-[32px] h-8 text-[13px] font-bold rounded-lg transition-all ${currentPage === page
                                ? 'bg-black text-white shadow-lg shadow-black/10'
                                : 'text-slate-500 hover:text-slate-900 hover:bg-white hover:border-slate-200 border border-transparent'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 rounded-lg transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-transparent disabled:cursor-not-allowed"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
