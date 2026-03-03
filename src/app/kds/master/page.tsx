'use client';

import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import { KDSHeader } from '@/modules/kds/components/KDSHeader';
import { KDSFooter } from '@/modules/kds/components/KDSFooter';
import { KDSSidebar } from '@/modules/kds/components/KDSSidebar';
import { useKDSStore } from '@/modules/kds/store/kdsStore';
import { useFilterStore } from '@/modules/kds/store/useFilterStore';
import { isKDSModuleActive } from '@/modules/kds/utils/kdsModuleFlags';
import { AlertCircle } from 'lucide-react';
import { OrderTicket } from '@/modules/kds/components/ticket/OrderTicket';
import { isOrderVisibleOnStation } from '@/modules/kds/utils/routingUtils';
import { useAuth } from '@/app/providers/AuthProvider';
import { ProductionSummary } from '@/modules/kds/components/board/ProductionSummary';
import { RoutingConfig } from '@/modules/kds/components/board/RoutingConfig';
import { SoundConfig } from '@/modules/kds/components/sound/SoundConfig';
import { OrderDetailModal } from '@/modules/kds/components/modals/OrderDetailModal';

export default function KDSMasterPage() {
    const { addOrUpdateOrder, autoInitNetworkListener, cleanupFulfilledOrders } = useKDSStore();
    const { enabledModules } = useAuth();

    const ordersMap = useKDSStore((state) => state.orders);
    const fulfilledOrders = useKDSStore((state) => state.fulfilledOrders);
    const recallFulfilledOrder = useKDSStore((state) => state.recallFulfilledOrder);

    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const {
        viewMode,
        fulfillment: fulfillmentFilter,
        source: sourceFilter,
        stage: stageFilter,
        showRecentlyFulfilled,
        currentPage,
        setCurrentPage
    } = useFilterStore();

    // Calculate total pages based on scroll width
    const [totalPages, setTotalPages] = useState(1);

    const updatePageInfo = useCallback(() => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const containerWidth = el.clientWidth;
        const scrollWidth = el.scrollWidth;
        const pages = Math.max(1, Math.ceil(scrollWidth / containerWidth));
        setTotalPages(pages);
    }, []);

    // Sync page number when user manually scrolls (touch swipe)
    const handleScroll = useCallback(() => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const containerWidth = el.clientWidth;
        if (containerWidth === 0) return;
        const page = Math.round(el.scrollLeft / containerWidth);
        if (page !== currentPage) {
            setCurrentPage(page);
        }
    }, [currentPage, setCurrentPage]);

    useEffect(() => {
        autoInitNetworkListener();
        const interval = setInterval(() => cleanupFulfilledOrders(), 60000);
        return () => clearInterval(interval);
    }, [autoInitNetworkListener, cleanupFulfilledOrders]);

    const {
        enable_station_routing,
        selectedStationId,
        category_station_map,
        allow_item_station_override,
        item_station_map,
        master_screen_view_mode
    } = useKDSStore();

    // Apply Global Filters
    const filteredOrders = useMemo(() => {
        const config = {
            enable_station_routing,
            selectedStationId,
            category_station_map,
            allow_item_station_override,
            item_station_map,
            master_screen_view_mode
        };

        // Completed orders live in a separate array — show them directly
        if (stageFilter === 'FULFILLED') {
            return fulfilledOrders.filter(o =>
                isOrderVisibleOnStation(o, config)
            ) as typeof fulfilledOrders;
        }

        return Object.values(ordersMap).filter(order => {
            const matchesFulfillment = fulfillmentFilter === 'ALL' || order.fulfillment_type === fulfillmentFilter;
            const matchesSource = sourceFilter === 'ALL' || order.order_source === sourceFilter;

            let matchesStage = true;
            if (stageFilter === 'DELAYED') {
                matchesStage = order.isDelayed;
            } else if (stageFilter !== 'ALL') {
                matchesStage = order.stage === stageFilter;
            }

            if (!(matchesFulfillment && matchesSource && matchesStage)) return false;

            // Station Filtering Logic 
            return isOrderVisibleOnStation(order, config);
        });
    }, [ordersMap, fulfilledOrders, fulfillmentFilter, sourceFilter, stageFilter, enable_station_routing, selectedStationId, category_station_map, allow_item_station_override, item_station_map, master_screen_view_mode]);

    // Update page info when filtered orders change
    useEffect(() => {
        // Small delay to let DOM update first
        const t = setTimeout(() => updatePageInfo(), 50);
        return () => clearTimeout(t);
    }, [filteredOrders, updatePageInfo]);

    // Observe resize changes
    useEffect(() => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const observer = new ResizeObserver(() => updatePageInfo());
        observer.observe(el);
        return () => observer.disconnect();
    }, [updatePageInfo]);

    // Scroll to page when currentPage changes via footer buttons
    useEffect(() => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const containerWidth = el.clientWidth;
        el.scrollTo({ left: currentPage * containerWidth, behavior: 'smooth' });
    }, [currentPage]);

    // Mock Data Initialization
    useEffect(() => {
        if (Object.keys(ordersMap).length === 0) {

            type MockItem = { id: string; name: string; quantity: number; modifiers: { name: string; groupType: string }[]; categoryId: string };
            type MockOrder = {
                id: string; orderNumber: string; customerName: string;
                fulfillment_type: string; order_source: string;
                createdAt: string; prepTimeMinutes: number;
                stage: string; isDelayed: boolean;
                items: MockItem[];
            };

            const mockOrders: MockOrder[] = [
                // ── FIRED (Cooking) ────────────────────────────────────────────────
                {
                    id: 'f1', orderNumber: '401', customerName: 'Marcus Rivera', fulfillment_type: 'PICKUP', order_source: 'ONLINE',
                    createdAt: new Date(Date.now() - 720000).toISOString(), prepTimeMinutes: 18, stage: 'FIRED', isDelayed: true,
                    items: [
                        { id: 'f1-1', name: 'BBQ Bacon Smash Burger', quantity: 2, modifiers: [{ name: 'Extra Patty', groupType: 'QUANTITY_ONLY' }, { name: 'No Onions', groupType: 'CHOICE_ONE' }, { name: 'Brioche Bun', groupType: 'CHOICE_ONE' }], categoryId: 'burgers' },
                        { id: 'f1-2', name: 'Loaded Nachos', quantity: 1, modifiers: [{ name: 'Extra Jalapeños', groupType: 'PLACEMENT_TOPPING' }, { name: 'Pulled Pork', groupType: 'PLACEMENT_TOPPING' }, { name: 'Sour Cream on Side', groupType: 'CHOICE_ONE' }], categoryId: 'sides' },
                        { id: 'f1-3', name: 'Chocolate Shake', quantity: 2, modifiers: [{ name: 'Extra Thick', groupType: 'CHOICE_ONE' }], categoryId: 'drinks' },
                    ]
                },
                {
                    id: 'f2', orderNumber: '402', customerName: 'Priya Sharma', fulfillment_type: 'DINE_IN', order_source: 'KIOSK',
                    createdAt: new Date(Date.now() - 540000).toISOString(), prepTimeMinutes: 15, stage: 'FIRED', isDelayed: true,
                    items: [
                        { id: 'f2-1', name: 'Margherita Pizza (12")', quantity: 1, modifiers: [{ name: 'Thin Crust', groupType: 'CHOICE_ONE' }, { name: 'Extra Mozzarella', groupType: 'PLACEMENT_TOPPING' }, { name: 'Fresh Basil', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'pizza' },
                        { id: 'f2-2', name: 'Pepperoni Pizza (10")', quantity: 1, modifiers: [{ name: 'Stuffed Crust', groupType: 'CHOICE_ONE' }, { name: 'Double Pepperoni', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'pizza' },
                        { id: 'f2-3', name: 'Caesar Salad', quantity: 1, modifiers: [{ name: 'No Anchovies', groupType: 'CHOICE_ONE' }, { name: 'Dressing on Side', groupType: 'CHOICE_ONE' }], categoryId: 'salads' },
                    ]
                },
                {
                    id: 'f3', orderNumber: '403', customerName: 'Jake Thompson', fulfillment_type: 'DELIVERY', order_source: 'UBER_DIRECT',
                    createdAt: new Date(Date.now() - 480000).toISOString(), prepTimeMinutes: 20, stage: 'FIRED', isDelayed: false,
                    items: [
                        { id: 'f3-1', name: 'Spicy Chicken Tacos', quantity: 3, modifiers: [{ name: 'Corn Tortilla', groupType: 'CHOICE_ONE' }, { name: 'Extra Hot Sauce', groupType: 'PLACEMENT_TOPPING' }, { name: 'Avocado', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'tacos' },
                        { id: 'f3-2', name: 'Beef & Cheese Burrito', quantity: 1, modifiers: [{ name: 'Large Size', groupType: 'CHOICE_ONE' }, { name: 'Black Beans', groupType: 'CHOICE_ONE' }, { name: 'No Cilantro', groupType: 'CHOICE_ONE' }], categoryId: 'burritos' },
                        { id: 'f3-3', name: 'Guacamole & Chips', quantity: 1, modifiers: [], categoryId: 'sides' },
                    ]
                },
                {
                    id: 'f4', orderNumber: '404', customerName: 'Sofia Kim', fulfillment_type: 'PICKUP', order_source: 'POS',
                    createdAt: new Date(Date.now() - 360000).toISOString(), prepTimeMinutes: 12, stage: 'FIRED', isDelayed: false,
                    items: [
                        { id: 'f4-1', name: 'Buffalo Chicken Wings', quantity: 12, modifiers: [{ name: 'Extra Crispy', groupType: 'CHOICE_ONE' }, { name: 'Blue Cheese Dip', groupType: 'CHOICE_ONE' }], categoryId: 'wings' },
                        { id: 'f4-2', name: 'Truffle Parmesan Fries', quantity: 1, modifiers: [{ name: 'Extra Truffle Oil', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'sides' },
                    ]
                },
                {
                    id: 'f5', orderNumber: '405', customerName: 'David Chen', fulfillment_type: 'DINE_IN', order_source: 'ONLINE',
                    createdAt: new Date(Date.now() - 300000).toISOString(), prepTimeMinutes: 25, stage: 'FIRED', isDelayed: false,
                    items: [
                        { id: 'f5-1', name: 'BBQ Chicken Pizza (14")', quantity: 1, modifiers: [{ name: 'Thick Crust', groupType: 'CHOICE_ONE' }, { name: 'Extra BBQ Sauce', groupType: 'PLACEMENT_TOPPING' }, { name: 'Red Onion', groupType: 'PLACEMENT_TOPPING' }, { name: 'Jalapeños', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'pizza' },
                        { id: 'f5-2', name: 'Mozzarella Sticks', quantity: 1, modifiers: [{ name: 'Marinara Dip', groupType: 'CHOICE_ONE' }], categoryId: 'starters' },
                        { id: 'f5-3', name: 'BBQ Pulled Pork Sandwich', quantity: 2, modifiers: [{ name: 'Coleslaw on Top', groupType: 'PLACEMENT_TOPPING' }, { name: 'Pickles', groupType: 'PLACEMENT_TOPPING' }, { name: 'Toasted Bun', groupType: 'CHOICE_ONE' }], categoryId: 'burgers' },
                    ]
                },
                {
                    id: 'f6', orderNumber: '406', customerName: 'Nina Patel', fulfillment_type: 'PICKUP', order_source: 'CALL_CENTER',
                    createdAt: new Date(Date.now() - 240000).toISOString(), prepTimeMinutes: 14, stage: 'FIRED', isDelayed: false,
                    items: [
                        { id: 'f6-1', name: 'Mushroom Swiss Burger', quantity: 1, modifiers: [{ name: 'Medium-Well', groupType: 'CHOICE_ONE' }, { name: 'Gluten-Free Bun', groupType: 'CHOICE_ONE' }, { name: 'Extra Swiss', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'burgers' },
                        { id: 'f6-2', name: 'Chicken Caesar Wrap', quantity: 1, modifiers: [{ name: 'Grilled Chicken', groupType: 'CHOICE_ONE' }, { name: 'No Caesar Dressing', groupType: 'CHOICE_ONE' }, { name: 'Spinach Tortilla', groupType: 'CHOICE_ONE' }], categoryId: 'wraps' },
                        { id: 'f6-3', name: 'Loaded Potato Skins', quantity: 1, modifiers: [{ name: 'Extra Bacon', groupType: 'PLACEMENT_TOPPING' }, { name: 'Extra Cheddar', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'starters' },
                    ]
                },

                // ── READY (Packing) ────────────────────────────────────────────────
                {
                    id: 'r1', orderNumber: '411', customerName: 'Aisha Johnson', fulfillment_type: 'PICKUP', order_source: 'ONLINE',
                    createdAt: new Date(Date.now() - 900000).toISOString(), prepTimeMinutes: 10, stage: 'READY', isDelayed: false,
                    items: [
                        { id: 'r1-1', name: 'Four Cheese Pizza (12")', quantity: 1, modifiers: [{ name: 'Thin Crust', groupType: 'CHOICE_ONE' }, { name: 'No Oregano', groupType: 'CHOICE_ONE' }], categoryId: 'pizza' },
                        { id: 'r1-2', name: 'Spicy Arrabbiata Pasta', quantity: 1, modifiers: [{ name: 'Penne', groupType: 'CHOICE_ONE' }, { name: 'Extra Chili Flakes', groupType: 'PLACEMENT_TOPPING' }, { name: 'Parmesan on Side', groupType: 'CHOICE_ONE' }], categoryId: 'pasta' },
                    ]
                },
                {
                    id: 'r2', orderNumber: '412', customerName: 'Leo Morales', fulfillment_type: 'DINE_IN', order_source: 'KIOSK',
                    createdAt: new Date(Date.now() - 780000).toISOString(), prepTimeMinutes: 12, stage: 'READY', isDelayed: false,
                    items: [
                        { id: 'r2-1', name: 'Double Smash Cheeseburger', quantity: 1, modifiers: [{ name: 'Well Done', groupType: 'CHOICE_ONE' }, { name: 'American Cheese', groupType: 'CHOICE_ONE' }, { name: 'Extra Pickles', groupType: 'PLACEMENT_TOPPING' }, { name: 'Grilled Onions', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'burgers' },
                        { id: 'r2-2', name: 'Sweet Potato Fries', quantity: 1, modifiers: [{ name: 'Chipotle Mayo Dip', groupType: 'CHOICE_ONE' }], categoryId: 'sides' },
                        { id: 'r2-3', name: 'Lemonade', quantity: 1, modifiers: [{ name: 'Less Sugar', groupType: 'CHOICE_ONE' }, { name: 'Mint', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'drinks' },
                    ]
                },
                {
                    id: 'r3', orderNumber: '413', customerName: 'Camille Dubois', fulfillment_type: 'DELIVERY', order_source: 'UBER_DIRECT',
                    createdAt: new Date(Date.now() - 660000).toISOString(), prepTimeMinutes: 15, stage: 'READY', isDelayed: false,
                    items: [
                        { id: 'r3-1', name: 'Chicken Tikka Nachos', quantity: 1, modifiers: [{ name: 'Extra Cheese', groupType: 'PLACEMENT_TOPPING' }, { name: 'Mint Chutney', groupType: 'CHOICE_ONE' }, { name: 'No Onions', groupType: 'CHOICE_ONE' }], categoryId: 'sides' },
                        { id: 'r3-2', name: 'Lamb Kebab Wrap', quantity: 2, modifiers: [{ name: 'Whole Wheat Wrap', groupType: 'CHOICE_ONE' }, { name: 'Tzatziki Sauce', groupType: 'CHOICE_ONE' }, { name: 'Extra Veggies', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'wraps' },
                    ]
                },
                {
                    id: 'r4', orderNumber: '414', customerName: 'Omar Farouk', fulfillment_type: 'PICKUP', order_source: 'POS',
                    createdAt: new Date(Date.now() - 850000).toISOString(), prepTimeMinutes: 8, stage: 'READY', isDelayed: false,
                    items: [
                        { id: 'r4-1', name: 'Veggie Supreme Pizza (14")', quantity: 1, modifiers: [{ name: 'Extra Bell Peppers', groupType: 'PLACEMENT_TOPPING' }, { name: 'Sun-Dried Tomatoes', groupType: 'PLACEMENT_TOPPING' }, { name: 'Vegan Cheese', groupType: 'CHOICE_ONE' }, { name: 'Garlic Drizzle', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'pizza' },
                        { id: 'r4-2', name: 'Garlic Bread', quantity: 2, modifiers: [{ name: 'Extra Garlic Butter', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'sides' },
                    ]
                },
                {
                    id: 'r5', orderNumber: '415', customerName: 'Rachel Sun', fulfillment_type: 'DINE_IN', order_source: 'ONLINE',
                    createdAt: new Date(Date.now() - 920000).toISOString(), prepTimeMinutes: 10, stage: 'READY', isDelayed: false,
                    items: [
                        { id: 'r5-1', name: 'Honey Garlic Wings', quantity: 18, modifiers: [{ name: 'Boneless', groupType: 'CHOICE_ONE' }, { name: 'Ranch Dip', groupType: 'CHOICE_ONE' }, { name: 'Extra Sauce', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'wings' },
                        { id: 'r5-2', name: 'Mac & Cheese Bites', quantity: 1, modifiers: [{ name: 'Truffle Aioli Dip', groupType: 'CHOICE_ONE' }], categoryId: 'starters' },
                    ]
                },

                // ── NEW (Queue) ────────────────────────────────────────────────────
                {
                    id: 'n1', orderNumber: '421', customerName: 'Tyler Brooks', fulfillment_type: 'PICKUP', order_source: 'ONLINE',
                    createdAt: new Date(Date.now() - 60000).toISOString(), prepTimeMinutes: 20, stage: 'NEW', isDelayed: false,
                    items: [
                        { id: 'n1-1', name: 'Meat Lovers Pizza (14")', quantity: 1, modifiers: [{ name: 'Extra Thick Crust', groupType: 'CHOICE_ONE' }, { name: 'Double Sausage', groupType: 'PLACEMENT_TOPPING' }, { name: 'Bacon Crumbles', groupType: 'PLACEMENT_TOPPING' }, { name: 'Spicy Sauce Base', groupType: 'CHOICE_ONE' }], categoryId: 'pizza' },
                        { id: 'n1-2', name: 'Classic Cheeseburger', quantity: 2, modifiers: [{ name: 'Medium Rare', groupType: 'CHOICE_ONE' }, { name: 'No Ketchup', groupType: 'CHOICE_ONE' }, { name: 'Extra Mustard', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'burgers' },
                        { id: 'n1-3', name: 'Onion Rings', quantity: 1, modifiers: [{ name: 'BBQ Dip', groupType: 'CHOICE_ONE' }], categoryId: 'sides' },
                    ]
                },
                {
                    id: 'n2', orderNumber: '422', customerName: 'Fatima Al-Hassan', fulfillment_type: 'DELIVERY', order_source: 'UBER_DIRECT',
                    createdAt: new Date(Date.now() - 45000).toISOString(), prepTimeMinutes: 22, stage: 'NEW', isDelayed: false,
                    items: [
                        { id: 'n2-1', name: 'Shrimp Tacos', quantity: 2, modifiers: [{ name: 'Flour Tortilla', groupType: 'CHOICE_ONE' }, { name: 'Mango Salsa', groupType: 'PLACEMENT_TOPPING' }, { name: 'Chipotle Crema', groupType: 'PLACEMENT_TOPPING' }, { name: 'No Cabbage', groupType: 'CHOICE_ONE' }], categoryId: 'tacos' },
                        { id: 'n2-2', name: 'Steak Nachos', quantity: 1, modifiers: [{ name: 'Medium Steak', groupType: 'CHOICE_ONE' }, { name: 'Pico de Gallo', groupType: 'PLACEMENT_TOPPING' }, { name: 'Extra Queso', groupType: 'PLACEMENT_TOPPING' }, { name: 'Pickled Jalapeños', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'sides' },
                        { id: 'n2-3', name: 'Churros', quantity: 1, modifiers: [{ name: 'Chocolate Dip', groupType: 'CHOICE_ONE' }], categoryId: 'desserts' },
                    ]
                },
                {
                    id: 'n3', orderNumber: '423', customerName: 'James O\'Brien', fulfillment_type: 'DINE_IN', order_source: 'KIOSK',
                    createdAt: new Date(Date.now() - 30000).toISOString(), prepTimeMinutes: 18, stage: 'NEW', isDelayed: false,
                    items: [
                        { id: 'n3-1', name: 'Carbonara Pasta', quantity: 2, modifiers: [{ name: 'Spaghetti', groupType: 'CHOICE_ONE' }, { name: 'Extra Pancetta', groupType: 'PLACEMENT_TOPPING' }, { name: 'Egg Yolk on Top', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'pasta' },
                        { id: 'n3-2', name: 'Burrata & Tomato Bruschetta', quantity: 1, modifiers: [{ name: 'Balsamic Glaze', groupType: 'PLACEMENT_TOPPING' }, { name: 'Extra Olive Oil', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'starters' },
                    ]
                },
                {
                    id: 'n4', orderNumber: '424', customerName: 'Yuki Tanaka', fulfillment_type: 'PICKUP', order_source: 'POS',
                    createdAt: new Date(Date.now() - 20000).toISOString(), prepTimeMinutes: 16, stage: 'NEW', isDelayed: false,
                    items: [
                        { id: 'n4-1', name: 'Sriracha Honey Wings', quantity: 6, modifiers: [{ name: 'Bone-In', groupType: 'CHOICE_ONE' }, { name: 'Extra Sriracha', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'wings' },
                        { id: 'n4-2', name: 'Philly Cheesesteak', quantity: 1, modifiers: [{ name: 'Provolone', groupType: 'CHOICE_ONE' }, { name: 'Sautéed Peppers', groupType: 'PLACEMENT_TOPPING' }, { name: 'Extra Onions', groupType: 'PLACEMENT_TOPPING' }, { name: 'Toasted Hoagie Roll', groupType: 'CHOICE_ONE' }], categoryId: 'sandwiches' },
                        { id: 'n4-3', name: 'Loaded Waffle Fries', quantity: 1, modifiers: [{ name: 'Cheddar Cheese Sauce', groupType: 'PLACEMENT_TOPPING' }, { name: 'Bacon Bits', groupType: 'PLACEMENT_TOPPING' }, { name: 'Green Onions', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'sides' },
                    ]
                },
                {
                    id: 'n5', orderNumber: '425', customerName: 'Isabella Rossi', fulfillment_type: 'DELIVERY', order_source: 'ONLINE',
                    createdAt: new Date(Date.now() - 10000).toISOString(), prepTimeMinutes: 30, stage: 'NEW', isDelayed: false,
                    items: [
                        { id: 'n5-1', name: 'Truffle Mushroom Pizza (12")', quantity: 1, modifiers: [{ name: 'Sourdough Crust', groupType: 'CHOICE_ONE' }, { name: 'White Sauce Base', groupType: 'CHOICE_ONE' }, { name: 'Truffle Oil Drizzle', groupType: 'PLACEMENT_TOPPING' }, { name: 'Arugula', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'pizza' },
                        { id: 'n5-2', name: 'Tiramisu', quantity: 2, modifiers: [{ name: 'Extra Cocoa Dusting', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'desserts' },
                        { id: 'n5-3', name: 'San Pellegrino', quantity: 2, modifiers: [], categoryId: 'drinks' },
                    ]
                },
                {
                    id: 'n6', orderNumber: '426', customerName: 'Carlos Mendez', fulfillment_type: 'DINE_IN', order_source: 'KIOSK',
                    createdAt: new Date(Date.now() - 5000).toISOString(), prepTimeMinutes: 14, stage: 'NEW', isDelayed: false,
                    items: [
                        { id: 'n6-1', name: 'Street Corn Nachos', quantity: 1, modifiers: [{ name: 'Cotija Cheese', groupType: 'PLACEMENT_TOPPING' }, { name: 'Tajín Rim', groupType: 'PLACEMENT_TOPPING' }, { name: 'Lime Crema', groupType: 'CHOICE_ONE' }], categoryId: 'sides' },
                        { id: 'n6-2', name: 'Carne Asada Tacos', quantity: 3, modifiers: [{ name: 'Double Corn Tortilla', groupType: 'CHOICE_ONE' }, { name: 'Onion & Cilantro', groupType: 'PLACEMENT_TOPPING' }, { name: 'Extra Salsa Verde', groupType: 'PLACEMENT_TOPPING' }], categoryId: 'tacos' },
                    ]
                },
            ];

            mockOrders.forEach(o => addOrUpdateOrder({
                ...o,
                updatedAt: new Date().toISOString(),
                trackingToken: `mock-${o.id}`,
                estimatedReadyTime: new Date(
                    new Date(o.createdAt).getTime() + o.prepTimeMinutes * 60000
                ).toISOString(),
            } as any));
        }
    }, [addOrUpdateOrder, ordersMap]);

    if (!isKDSModuleActive(enabledModules)) {
        return (
            <div className="h-screen w-screen bg-white flex flex-col items-center justify-center p-6 text-center">
                <AlertCircle size={40} className="text-red-500 mb-4" />
                <h1 className="text-2xl font-black text-gray-900 uppercase mb-2">KDS Module Inactive</h1>
            </div>
        );
    }

    const selectedOrder = selectedOrderId ? ordersMap[selectedOrderId] : null;

    return (
        <div className="flex flex-col h-screen overflow-hidden kds-root bg-[#F3F4F6]">
            <KDSSidebar />

            {/* Conditional Header */}
            {['KANBAN', 'GRID', 'COMPACT'].includes(viewMode) && <KDSHeader />}

            <main className="flex-1 overflow-hidden relative flex flex-col">
                <div className="flex-1 overflow-hidden relative">
                    <div className="h-full">
                        {viewMode === 'SUMMARY' || viewMode === 'ALL_DAY' ? (
                            <div className="h-full w-full overflow-y-auto p-6 scrollbar-hide">
                                <ProductionSummary />
                            </div>
                        ) : viewMode === 'ROUTING' ? (
                            <RoutingConfig />
                        ) : viewMode === 'SOUND_SETTINGS' ? (
                            <SoundConfig />
                        ) : (
                            <>
                                {viewMode === 'KANBAN' ? (
                                    /* LINE VIEW: Single horizontal row of tickets */
                                    <div
                                        ref={scrollContainerRef}
                                        onScroll={handleScroll}
                                        className="kds-horizontal-scroll p-6 h-full overflow-x-auto overflow-y-hidden"
                                    >
                                        <div className="flex h-full gap-6 items-start w-max min-w-full">
                                            {filteredOrders.map(order => (
                                                <div key={order.id} className="w-[340px] shrink-0">
                                                    <OrderTicket orderId={order.id} onViewDetail={setSelectedOrderId} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    /* GRID & COMPACT VIEWS: Vertically scrollable mosaic */
                                    <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
                                        <div className={`grid gap-6 ${viewMode === 'GRID' ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-3 lg:grid-cols-5 xl:grid-cols-7'}`}>
                                            {filteredOrders.map(order => (
                                                <div key={order.id} className="h-fit">
                                                    <OrderTicket orderId={order.id} onViewDetail={setSelectedOrderId} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {filteredOrders.length === 0 && (Object.keys(ordersMap).length > 0 || stageFilter === 'FULFILLED') && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 pointer-events-none">
                                        <AlertCircle size={48} className="mb-4 text-gray-400" />
                                        <span className="text-gray-400 font-black uppercase tracking-[0.2em] text-sm">No orders match current filters</span>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {['KANBAN', 'GRID', 'COMPACT'].includes(viewMode) && !Object.keys(ordersMap).length && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-gray-300 font-black uppercase tracking-[0.4em] text-lg">Waiting for orders</span>
                        </div>
                    )}
                </div>

                {/* RECENTLY FULFILLED STRIP */}
                {['KANBAN', 'GRID', 'COMPACT'].includes(viewMode) && fulfilledOrders.length > 0 && showRecentlyFulfilled && (
                    <div className="h-[74px] bg-white border-t border-gray-200 flex items-center px-6 gap-6 overflow-x-auto scrollbar-hide shrink-0 animate-in slide-in-from-bottom duration-300 transition-all">
                        <div className="flex items-center gap-2 pr-4 border-r border-gray-100 shrink-0">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Recently Fulfilled</span>
                        </div>
                        <div className="flex gap-4">
                            {fulfilledOrders.slice().reverse().slice(0, 10).map((order) => (
                                <div
                                    key={order.id}
                                    className="flex items-center gap-3 bg-gray-50 border border-gray-200 pl-3 pr-1.5 py-1.5 rounded-lg hover:border-gray-300 transition-all shrink-0 group"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[11px] font-black text-gray-900 leading-tight">#{order.orderNumber}</span>
                                        <span className="text-[9px] font-bold text-gray-400">
                                            {formatTimeOnly(order.updatedAt)}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => recallFulfilledOrder(order.id)}
                                        className="p-2 hover:bg-black hover:text-white rounded-md transition-all text-gray-400"
                                        title="Recall Order"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            {['KANBAN', 'GRID', 'COMPACT', 'SUMMARY', 'ALL_DAY'].includes(viewMode) && <KDSFooter totalPages={totalPages} />}

            {/* Global Order Detail Modal */}
            {selectedOrder && (
                <OrderDetailModal
                    order={selectedOrder}
                    isOpen={!!selectedOrderId}
                    onClose={() => setSelectedOrderId(null)}
                />
            )}
        </div>
    );
}

function formatTimeOnly(dateIso: string) {
    return new Date(dateIso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
