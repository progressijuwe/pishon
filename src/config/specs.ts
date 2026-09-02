export interface Spec {
    label: string;
    value: string;
}

export const productSpecs = {
    cocoa: {
        name: 'Premium Cocoa Beans',
        grade: 'Main Crop, Grade 1',
        origin: 'Nigeria (Ondo / Ogun)',
        specs: [
            { label: 'Grade', value: 'Main Crop, Grade 1' },
            { label: 'Moisture', value: '< 7.5%' },
            { label: 'Origin', value: 'Nigeria (Ondo / Ogun)' },
        ],
    },
    cashew: {
        name: 'Raw Cashew Nuts',
        grade: 'Outturn 48 – 52 lbs',
        origin: 'Nigeria (Kogi / Oyo)',
        specs: [
            { label: 'Nut count', value: '180 – 200 per kg' },
            { label: 'Outturn (KOR)', value: '48 – 52 lbs' },
            { label: 'Origin', value: 'Nigeria (Kogi / Oyo)' },
        ],
    },
    coal: {
        name: 'Sub-Bituminous Coal',
        grade: '6,500+ kcal/kg',
        origin: 'Nigeria (Enugu / Kogi)',
        specs: [
            { label: 'Calorific value', value: '6,500+ kcal/kg (GAR)' },
            { label: 'Sulphur', value: '< 0.8%' },
            { label: 'Ash content', value: '< 10%' },
        ],
    },
} as const satisfies Record<
    string,
    { name: string; grade: string; origin: string; specs: readonly Spec[] }
>;
