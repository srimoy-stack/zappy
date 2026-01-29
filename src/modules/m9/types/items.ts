export type ItemType = 'PIZZA' | 'SIDE' | 'DRINK' | 'COMBO' | 'RETAIL' | 'SERVICE';

export interface Category {
    id: string;
    name: string;
    description?: string;
    isHiddenPerChannel?: {
        pos: boolean;
        online: boolean;
        uber: boolean;
    };
}

export interface ModifierOption {
    id: string;
    name: string;
    price: number;
    isFree: boolean;
    isAvailable: boolean;
    // Recipe/BOM is handled in the Recipe tab or backend
}

export interface ModifierGroup {
    id: string;
    name: string;
    minSelection: number;
    maxSelection: number;
    isHalfAndHalfEnabled: boolean;
    isPremiumRuleEnabled: boolean;
    options: ModifierOption[];
}

export interface ItemVariant {
    id: string;
    name: string; // e.g. "Medium", "Large"
    basePrice: number;
    sku?: string;
    isAvailable: boolean;
    recipe?: RecipeEntry[]; // BOM per variant
}

export interface StoreOverride {
    storeId: string;
    price?: number;
    isAvailable?: boolean;
    isPremiumRuleEnabled?: boolean;
    modifierOverrides?: {
        modifierId: string;
        isAvailable: boolean;
    }[];
}



export interface Item {
    id: string;
    type: ItemType;
    name: string;
    description: string;
    imageUrl?: string;
    categoryId: string;
    variants: ItemVariant[];
    modifierGroupIds: string[]; // Reference to global Modifier Groups
    isAvailable: boolean;
    taxRate?: number;
    storeOverrides: StoreOverride[];
    modifierMappings?: ModifierIngredientMapping[]; // Mapping for modifier options used in this item
    auditLog?: {
        timestamp: string;
        user: string;
        action: string;
    }[];
}

export interface Ingredient {
    id: string;
    name: string;
    unit: 'kg' | 'liter' | 'piece' | 'g' | 'ml'; // Standardized units
}

export interface RecipeEntry {
    ingredientId: string;
    quantity: number;
}

export interface ModifierIngredientMapping {
    modifierOptionId: string;
    ingredientId: string;
    quantity: number; // Base quantity for full placement
}
