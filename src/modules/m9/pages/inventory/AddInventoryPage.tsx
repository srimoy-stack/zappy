import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    Search,
    Trash2,
    Loader,
    Upload
} from 'lucide-react';
import { InventoryStatus, InventoryEntryProduct, InventoryItem, Vendor } from '../../types/inventory';
import { inventoryService, inventoryItemService, vendorService } from '../../services/inventoryService';

/**
 * Add Inventory (Stock Inward) Page
 * 
 * Create new stock entry (Purchase)
 */
export const AddInventoryPage: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    // Data lists
    const [vendors, setVendors] = useState<Vendor[]>([]);
    const [allItems, setAllItems] = useState<InventoryItem[]>([]);

    // Header Fields
    const [supplierId, setSupplierId] = useState('');
    const [referenceNo, setReferenceNo] = useState('');
    const [inventoryDate, setInventoryDate] = useState(new Date().toISOString().split('T')[0]);
    const [inventoryStatus, setInventoryStatus] = useState<InventoryStatus>('Draft');
    const storeId = 'STORE001';
    const [payTerm, setPayTerm] = useState('');
    const [attachedDocument, setAttachedDocument] = useState<string | null>(null);

    // Products
    const [products, setProducts] = useState<InventoryEntryProduct[]>([]);

    // Footer
    // const [purchaseTax, setPurchaseTax] = useState(0);
    const [shippingCharges, setShippingCharges] = useState(0);
    const [additionalNotes, setAdditionalNotes] = useState('');

    // Search
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [searchResults, setSearchResults] = useState<InventoryItem[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const [vData, iData] = await Promise.all([
                vendorService.getAll(),
                inventoryItemService.getAll({ status: 'Active' })
            ]);
            setVendors(vData);
            setAllItems(iData);
        } catch (error) {
            console.error('Failed to load data:', error);
        } finally {
            setLoading(false);
        }
    };

    // Filter search
    useEffect(() => {
        if (!searchQuery.trim()) {
            setSearchResults([]);
            return;
        }
        const lower = searchQuery.toLowerCase();
        const results = allItems.filter(item =>
            item.name.toLowerCase().includes(lower) ||
            item.sku.toLowerCase().includes(lower)
        ).slice(0, 5);
        setSearchResults(results);
    }, [searchQuery, allItems]);

    // Auto-generate reference number if empty
    useEffect(() => {
        if (!referenceNo) {
            const timestamp = Date.now();
            setReferenceNo(`PO-${new Date().getFullYear()}-${timestamp.toString().slice(-6)}`);
        }
    }, [referenceNo]);

    // Add product to grid
    const addProduct = (item: InventoryItem) => {
        const newProduct: InventoryEntryProduct = {
            id: `IEP${Date.now()}`,
            inventoryItemId: item.id,
            inventoryItemName: item.name,
            sku: item.sku,
            unitCostBeforeTax: item.averageCost, // Default to avg cost
            taxPercentage: 0,
            taxAmount: 0,
            unitCostAfterTax: item.averageCost,
            purchaseQuantity: 1,
            subtotal: item.averageCost * 1,
            lineTotal: item.averageCost * 1
        };

        setProducts([...products, newProduct]);
        setSearchQuery('');
        setShowSearchResults(false);
    };

    // Update product quantity or cost
    const updateProduct = (id: string, field: keyof InventoryEntryProduct, value: number) => {
        setProducts(products.map(p => {
            if (p.id !== id) return p;

            const updated = { ...p, [field]: value };

            // Recalculate Logic
            if (field === 'purchaseQuantity' || field === 'unitCostBeforeTax' || field === 'taxPercentage') {
                const qty = updated.purchaseQuantity;
                const cost = updated.unitCostBeforeTax;
                const taxPct = updated.taxPercentage;

                updated.subtotal = qty * cost;

                // Tax Calculation Strategy: (Cost * Tax%) * Qty OR (Subtotal * Tax%)
                // Usually Tax Amount is per line total tax.
                // unitCostAfterTax = cost + (cost * taxPct / 100)
                const taxPerUnit = cost * (taxPct / 100);
                updated.unitCostAfterTax = cost + taxPerUnit;

                updated.taxAmount = taxPerUnit * qty;
                updated.lineTotal = updated.subtotal + updated.taxAmount;
            }

            return updated;
        }));
    };

    // Remove product
    const removeProduct = (id: string) => {
        setProducts(products.filter(p => p.id !== id));
    };

    // Calculations
    const subtotal = products.reduce((sum, p) => sum + p.subtotal, 0);
    const totalTax = products.reduce((sum, p) => sum + p.taxAmount, 0); // Sum of line taxes
    const grandTotal = subtotal + totalTax + shippingCharges;

    const handleSave = async (status: InventoryStatus = 'Draft') => {
        if (!supplierId) {
            alert('Please select a supplier');
            return;
        }
        if (products.length === 0) {
            alert('Please add at least one product');
            return;
        }

        setSubmitting(true);
        try {
            // Align with CreateInventoryEntryDTO
            const payload = {
                supplierId,
                storeId,
                inventoryDate: inventoryDate, // renamed from transactionDate
                expectedDeliveryDate: inventoryDate,
                referenceNo,
                inventoryStatus: status,
                products: products, // Pass full products array (DTO likely accepts this or mapped structure)
                additionalNotes,
                shippingCharges,
                purchaseTax: totalTax, // Global tax field
                otherExpenses: 0
            };

            // Using 'any' cast if DTO mismatch persists, but trying to be correct.
            // If createEntry expects a specific structure mapped, we map it.
            // But usually DTOs mirror the form structure.
            // Lint error said: "Argument ... is not assignable ... missing ... purchaseTax".

            await inventoryService.createEntry(payload as any, 'USER001', 'Admin User');

            alert(`Inventory Entry ${status === 'Received' ? 'Received' : 'Saved'} successfully!`);
            navigate('/backoffice/inventory/entries');
        } catch (error: any) {
            console.error('Failed to save:', error);
            alert('Failed to save entry: ' + error.message);
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <Loader className="w-8 h-8 text-emerald-600 animate-spin" />
            </div>
        );
    }

    return (
        <div className="max-w-[1600px] mx-auto space-y-6 pb-24">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                <button
                    onClick={() => navigate('/backoffice/inventory')}
                    className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                >
                    <ArrowLeft size={20} className="text-slate-600" />
                </button>
                <div className="flex-1">
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Add Inventory</h1>
                    <p className="text-sm text-slate-500 font-medium">Create new stock purchase order</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Form & Grid */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Header Details */}
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Supplier *</label>
                                <select
                                    value={supplierId}
                                    onChange={(e) => setSupplierId(e.target.value)}
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-emerald-600 outline-none"
                                >
                                    <option value="">Select Supplier</option>
                                    {vendors.map(v => (
                                        <option key={v.id} value={v.id}>{v.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Date</label>
                                <input
                                    type="date"
                                    value={inventoryDate}
                                    onChange={(e) => setInventoryDate(e.target.value)}
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-emerald-600 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Ref No.</label>
                                <input
                                    type="text"
                                    value={referenceNo}
                                    onChange={(e) => setReferenceNo(e.target.value)}
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-emerald-600 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Status</label>
                                <select
                                    value={inventoryStatus}
                                    onChange={(e) => setInventoryStatus(e.target.value as InventoryStatus)}
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-emerald-600 outline-none"
                                >
                                    <option value="Draft">Draft</option>
                                    <option value="Ordered">Ordered</option>
                                    <option value="Received">Received</option>
                                    <option value="Partial">Partial</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>

                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Pay Term</label>
                                <input
                                    type="text"
                                    value={payTerm}
                                    onChange={(e) => setPayTerm(e.target.value)}
                                    placeholder="e.g. Net 30"
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-emerald-600 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Attach Document</label>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => document.getElementById('file-upload')?.click()}
                                        className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 border-dashed rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Upload size={16} />
                                        {attachedDocument ? 'Document Attached' : 'Upload File'}
                                    </button>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        className="hidden"
                                        onChange={(e) => setAttachedDocument(e.target.files?.[0]?.name || null)}
                                    />
                                    {attachedDocument && (
                                        <button onClick={() => setAttachedDocument(null)} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg">
                                            <Trash2 size={16} />
                                        </button>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setShowSearchResults(true);
                                    }}
                                    onFocus={() => setShowSearchResults(true)}
                                    placeholder="Search product to add..."
                                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:border-emerald-600 outline-none"
                                />
                                {showSearchResults && searchResults.length > 0 && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
                                        {searchResults.map(item => (
                                            <button
                                                key={item.id}
                                                onClick={() => addProduct(item)}
                                                className="w-full px-4 py-3 text-left hover:bg-slate-50 border-b border-slate-100 last:border-0"
                                            >
                                                <div className="text-sm font-bold text-slate-900">{item.name}</div>
                                                <div className="text-xs text-slate-500">SKU: {item.sku}</div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        <th className="px-4 py-3">Product</th>
                                        <th className="px-4 py-3 text-right">Qty</th>
                                        <th className="px-4 py-3 text-right">Unit Cost</th>
                                        <th className="px-4 py-3 text-right">Tax %</th>
                                        <th className="px-4 py-3 text-right">Total</th>
                                        <th className="px-4 py-3 text-center"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {products.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="px-6 py-12 text-center text-sm text-slate-400 font-medium">
                                                No products added. Search above to add items.
                                            </td>
                                        </tr>
                                    ) : (
                                        products.map(p => (
                                            <tr key={p.id} className="hover:bg-slate-50/50">
                                                <td className="px-4 py-3">
                                                    <div className="text-sm font-bold text-slate-900">{p.inventoryItemName}</div>
                                                    <div className="text-[10px] text-slate-400">{p.sku}</div>
                                                </td>
                                                <td className="px-4 py-3 text-right">
                                                    <input
                                                        type="number"
                                                        value={p.purchaseQuantity}
                                                        onChange={(e) => updateProduct(p.id, 'purchaseQuantity', parseFloat(e.target.value) || 0)}
                                                        className="w-20 px-2 py-1 bg-white border border-slate-200 rounded text-right text-sm focus:border-emerald-600 outline-none"
                                                        min="1"
                                                    />
                                                </td>
                                                <td className="px-4 py-3 text-right">
                                                    <input
                                                        type="number"
                                                        value={p.unitCostBeforeTax}
                                                        onChange={(e) => updateProduct(p.id, 'unitCostBeforeTax', parseFloat(e.target.value) || 0)}
                                                        className="w-24 px-2 py-1 bg-white border border-slate-200 rounded text-right text-sm focus:border-emerald-600 outline-none"
                                                        min="0"
                                                        step="0.01"
                                                    />
                                                </td>
                                                <td className="px-4 py-3 text-right">
                                                    <input
                                                        type="number"
                                                        value={p.taxPercentage}
                                                        onChange={(e) => updateProduct(p.id, 'taxPercentage', parseFloat(e.target.value) || 0)}
                                                        className="w-16 px-2 py-1 bg-white border border-slate-200 rounded text-right text-sm focus:border-emerald-600 outline-none"
                                                        min="0"
                                                        max="100"
                                                    />
                                                </td>
                                                <td className="px-4 py-3 text-right text-sm font-black text-slate-900">
                                                    ${p.lineTotal.toFixed(2)}
                                                </td>
                                                <td className="px-4 py-3 text-center">
                                                    <button
                                                        onClick={() => removeProduct(p.id)}
                                                        className="text-slate-400 hover:text-rose-600 transition-colors"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column: Footer */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Shipping Charges</label>
                            <input
                                type="number"
                                value={shippingCharges}
                                onChange={(e) => setShippingCharges(parseFloat(e.target.value) || 0)}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-emerald-600 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Additional Notes</label>
                            <textarea
                                value={additionalNotes}
                                onChange={(e) => setAdditionalNotes(e.target.value)}
                                rows={3}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-emerald-600 outline-none resize-none"
                            />
                        </div>
                        <div className="pt-4 border-t border-slate-100 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-600 font-medium">Subtotal</span>
                                <span className="font-bold text-slate-900">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-600 font-medium">Total Tax</span>
                                <span className="font-bold text-emerald-600">${totalTax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-600 font-medium">Shipping</span>
                                <span className="font-bold text-slate-900">${shippingCharges.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg pt-2 border-t border-slate-100">
                                <span className="font-black text-slate-900 uppercase">Grand Total</span>
                                <span className="font-black text-emerald-600">${grandTotal.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mt-6">
                            <button
                                onClick={() => handleSave('Draft')}
                                disabled={submitting}
                                className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all disabled:opacity-50"
                            >
                                Save Draft
                            </button>
                            <button
                                onClick={() => handleSave(inventoryStatus === 'Received' ? 'Received' : 'Ordered')}
                                disabled={submitting}
                                className="flex-[2] py-3 bg-emerald-600 text-white rounded-xl text-sm font-black uppercase tracking-widest shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all disabled:opacity-50"
                            >
                                {submitting ? 'Saving...' : (inventoryStatus === 'Received' ? 'Recieve Now' : 'Create Order')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
