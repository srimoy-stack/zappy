import { Category, ModifierGroup, Item } from '../types/items';

export const mockCategories: Category[] = [
    { id: 'cat-1', name: 'Signature Pizza', description: 'Our chef special pizzas' },
    { id: 'cat-2', name: 'Traditional Pizza', description: 'Classic favorites' },
    { id: 'cat-3', name: 'Sides', description: 'Garlic bread, wings and more' },
    { id: 'cat-4', name: 'Drinks', description: 'Soft drinks and water' }
];

export const mockModifierGroups: ModifierGroup[] = [
    {
        id: 'mg-1',
        name: 'Pizza Toppings',
        minSelection: 0,
        maxSelection: 10,
        isHalfAndHalfEnabled: true,
        isPremiumRuleEnabled: true,
        options: [
            { id: 'opt-1', name: 'Onions', price: 0.5, isFree: false, isAvailable: true },
            { id: 'opt-2', name: 'Mushrooms', price: 0.75, isFree: false, isAvailable: true },
            { id: 'opt-3', name: 'Pepperoni', price: 1.5, isFree: false, isAvailable: true },
            { id: 'opt-4', name: 'Extra Cheese', price: 2.0, isFree: false, isAvailable: true }
        ]
    },
    {
        id: 'mg-2',
        name: 'Crust Type',
        minSelection: 1,
        maxSelection: 1,
        isHalfAndHalfEnabled: false,
        isPremiumRuleEnabled: false,
        options: [
            { id: 'opt-5', name: 'Classic Crust', price: 0, isFree: true, isAvailable: true },
            { id: 'opt-6', name: 'Thin Crust', price: 0, isFree: true, isAvailable: true },
            { id: 'opt-7', name: 'Stuffed Crust', price: 3.5, isFree: false, isAvailable: true }
        ]
    }
];

export const mockItems: Item[] = [
    {
        id: 'item-1',
        type: 'PIZZA',
        name: 'Veggie Supreme',
        description: 'Loaded with fresh vegetables and mozzarella cheese.',
        imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
        categoryId: 'cat-1',
        isAvailable: true,
        modifierGroupIds: ['mg-1', 'mg-2'],
        variants: [
            {
                id: 'v-1',
                name: 'Medium',
                basePrice: 12.99,
                isAvailable: true,
                recipe: [
                    { ingredientId: 'ing-1', quantity: 1 }, // Dough
                    { ingredientId: 'ing-2', quantity: 0.15 }, // Sauce
                    { ingredientId: 'ing-3', quantity: 0.2 }, // Cheese
                ]
            },
            {
                id: 'v-2',
                name: 'Large',
                basePrice: 15.99,
                isAvailable: true,
                recipe: [
                    { ingredientId: 'ing-1', quantity: 1.5 }, // Dough
                    { ingredientId: 'ing-2', quantity: 0.2 }, // Sauce
                    { ingredientId: 'ing-3', quantity: 0.3 }, // Cheese
                ]
            }
        ],
        modifierMappings: [
            { modifierOptionId: 'opt-1', ingredientId: 'ing-5', quantity: 0.05 }, // Onions
            { modifierOptionId: 'opt-2', ingredientId: 'ing-6', quantity: 0.05 }, // Mushrooms
            { modifierOptionId: 'opt-3', ingredientId: 'ing-4', quantity: 0.08 }, // Pepperoni
        ],
        storeOverrides: [],
        auditLog: [
            { timestamp: '2024-01-20T10:00:00Z', user: 'Admin', action: 'Created Item' }
        ]
    }
];
