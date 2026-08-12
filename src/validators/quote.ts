import { z } from 'zod';

import { NIGERIAN_STATES } from './contact';

export const QUOTE_CATEGORIES = [
    'Agricultural Commodities',
    'Solid Minerals',
    'Industrial Parts',
    'Heavy Machinery',
    'Export Logistics',
    'Warehousing',
    'General Importation',
    'Oil & Gas Services',
] as const;

export const QUOTE_UNITS = [
    'Metric Tons (MT)',
    'Kilograms (KG)',
    'Containers (20ft/40ft)',
    'Units / Pieces',
] as const;

export const QUOTE_SHIPPING_METHODS = [
    'Sea Freight (FCL)',
    'Sea Freight (LCL)',
    'Air Freight',
    'Land Transport',
] as const;

export const QUOTE_PACKAGING = [
    'Standard Bulk',
    '50kg Polypropylene Bags',
    'Jumbo Bags (1MT)',
    'Custom Crated',
] as const;

const optionalText = (max: number) => z.string().trim().max(max).optional().or(z.literal(''));

export const quoteSchema = z.object({
    fullName: z.string().trim().min(2, 'Please tell us your name'),
    company: z.string().trim().min(2, 'Please give your company name'),
    jobTitle: optionalText(80),
    email: z.email('Enter a valid business email address'),
    phone: z
        .string()
        .trim()
        .regex(/^[+()\d][\d\s()-]{6,19}$/, 'Enter a valid phone number')
        .optional()
        .or(z.literal('')),
    state: z.enum(NIGERIAN_STATES, 'Select where you are based'),

    category: z.enum(QUOTE_CATEGORIES, 'Select a product category'),
    product: z.string().trim().min(2, 'Name the specific product'),
    quantity: z
        .string()
        .trim()
        .min(1, 'Enter the quantity you need')
        .refine(
            (value) => Number.isFinite(Number(value)) && Number(value) > 0,
            'Quantity must be a number greater than zero',
        )
        .refine(
            (value) => Number(value) <= 1_000_000,
            'Contact us directly for volumes above 1,000,000',
        ),
    unit: z.enum(QUOTE_UNITS, 'Select a unit of measurement'),
    specification: optionalText(2000),

    deliveryLocation: z.string().trim().min(2, 'Where should this be delivered?'),
    portOfDischarge: optionalText(120),
    shippingMethod: z.enum(QUOTE_SHIPPING_METHODS, 'Select a shipping method'),
    targetDate: z
        .string()
        .trim()
        .refine((value) => !value || !Number.isNaN(Date.parse(value)), 'Enter a valid date')
        .refine(
            (value) => !value || Date.parse(value) >= new Date().setHours(0, 0, 0, 0),
            'Target delivery date cannot be in the past',
        )
        .optional()
        .or(z.literal('')),
    packaging: z.enum(QUOTE_PACKAGING, 'Select a packaging preference'),

    notes: optionalText(2000),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

export const QUOTE_STEPS = [
    {
        id: 'business',
        title: 'Business Information',
        fields: ['fullName', 'company', 'jobTitle', 'email', 'phone', 'state'],
    },
    {
        id: 'product',
        title: 'Product Requirements',
        fields: ['category', 'product', 'quantity', 'unit', 'specification'],
    },
    {
        id: 'shipping',
        title: 'Shipping & Logistics',
        fields: [
            'deliveryLocation',
            'portOfDischarge',
            'shippingMethod',
            'targetDate',
            'packaging',
        ],
    },
    { id: 'additional', title: 'Additional Information', fields: ['notes'] },
    { id: 'review', title: 'Review & Submit', fields: [] },
] as const satisfies readonly {
    id: string;
    title: string;
    fields: readonly (keyof QuoteInput)[];
}[];
