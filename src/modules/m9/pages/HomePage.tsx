import React, { useState, useEffect } from 'react';
import {
    KpiRow,
    SalesByChannelTable,
    RecentOrdersTable,
    SalesPerformanceCard
} from '../components/Dashboard';
import { DashboardData } from '../types/dashboard';
import { LayoutDashboard } from 'lucide-react';

/**
 * HomePage Component (M9-T0.2)
 * Executive Summary Dashboard - FINAL VERSION
 * Visual-first, Trend-first, Summary-first.
 */
export const HomePage: React.FC = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // Simulated API latency
                await new Promise((resolve) => setTimeout(resolve, 600));

                const mockData: DashboardData = {
                    kpis: {
                        grossSales: 15250.50,
                        netSales: 14800.25,
                        orders: 342,
                        averageOrderValue: 44.59,
                        refunds: 450.25,
                        cashVariance: -2.50,
                    },
                    salesByChannel: [
                        { channel: 'POS', orders: 280, sales: 12500.50, percentage: 82.0 },
                        { channel: 'Online', orders: 45, sales: 2100.00, percentage: 13.8 },
                        { channel: 'Uber', orders: 17, sales: 649.75, percentage: 4.2 },
                    ],
                    recentOrders: [
                        { id: '1', time: '10:45 AM', orderNumber: '#1092', customer: 'Jane Cooper', channel: 'POS', status: 'completed', total: 45.00 },
                        { id: '2', time: '10:42 AM', orderNumber: '#1091', customer: 'Wade Warren', channel: 'Online', status: 'pending', total: 32.50 },
                        { id: '3', time: '10:38 AM', orderNumber: '#1090', customer: 'Esther Howard', channel: 'POS', status: 'completed', total: 12.00 },
                        { id: '4', time: '10:35 AM', orderNumber: '#1089', customer: 'Cameron Williamson', channel: 'Uber', status: 'refunded', total: 54.20 },
                        { id: '5', time: '10:30 AM', orderNumber: '#1088', customer: 'Anonymous', channel: 'POS', status: 'completed', total: 8.50 },
                        { id: '6', time: '10:25 AM', orderNumber: '#1087', customer: 'John Smith', channel: 'POS', status: 'completed', total: 22.10 },
                        { id: '7', time: '10:20 AM', orderNumber: '#1086', customer: 'Sarah Miller', channel: 'Online', status: 'completed', total: 15.75 },
                    ],
                };
                setData(mockData);
            } catch (err) {
                console.error('Failed to load dashboard data', err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="max-w-[1600px] mx-auto space-y-6 pb-20 px-2 lg:px-4">
            {/* 0. PAGE IDENTITY (Fix 2: Page title must be Home/Dashboard) */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 pt-2">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded-lg">
                        <LayoutDashboard className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900 tracking-tight">Home</h1>
                        <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mt-0.5">Executive Business Overview</p>
                    </div>
                </div>
                {/* No Export/Print buttons here for Home (Fix 3) */}
            </div>

            {/* 1. KPI SUMMARY ROW (MANDATORY) */}
            <div className="bg-white rounded overflow-hidden border border-slate-200 shadow-sm">
                <KpiRow data={data?.kpis || null} isLoading={isLoading} />
            </div>

            {/* 2. PRIMARY SALES PERFORMANCE BLOCK (FINAL CENTERPIECE) */}
            <section className="w-full">
                <SalesPerformanceCard />
            </section>

            {/* 3. SECONDARY SUPPORTING SECTIONS (DEMOTED VISUALLY) */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
                {/* 3A. Sales by Channel (demoted) */}
                <div className="xl:col-span-1 space-y-3">
                    <div className="flex items-center justify-between px-1">
                        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                            Sales by Channel
                        </h2>
                    </div>
                    <div className="rounded border border-slate-200 shadow-sm overflow-hidden">
                        <SalesByChannelTable
                            data={data?.salesByChannel || []}
                            isLoading={isLoading}
                        />
                    </div>
                </div>

                {/* 3B. Recent Orders (compact) */}
                <div className="xl:col-span-2 space-y-3">
                    <div className="flex items-center justify-between px-1">
                        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                            Recent Orders
                        </h2>
                    </div>
                    <div className="rounded border border-slate-200 shadow-sm overflow-hidden">
                        <RecentOrdersTable
                            data={data?.recentOrders || []}
                            isLoading={isLoading}
                            onOrderClick={(id) => console.log('Order detail placeholder:', id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
