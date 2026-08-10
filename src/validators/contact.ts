import { z } from 'zod';

export const ENQUIRY_COUNTRIES = [
    'Nigeria',
    'Ghana',
    'South Africa',
    'United Kingdom',
    'United States',
    'Germany',
    'Netherlands',
    'China',
    'India',
    'United Arab Emirates',
    'Other',
] as const;

export const ENQUIRY_CATEGORIES = [
    'Agricultural Commodities',
    'Solid Minerals',
    'Mechanical Parts & Machinery',
    'Logistics & Freight',
    'Other',
] as const;

export const contactSchema = z.object({
    fullName: z.string().trim().min(2, 'Please tell us your name'),
    company: z.string().trim().min(2, 'Please give your company name'),
    email: z.email('Enter a valid business email address'),
    phone: z
        .string()
        .trim()
        .regex(/^[+()\d][\d\s()-]{6,19}$/, 'Enter a valid phone number')
        .optional()
        .or(z.literal('')),
    country: z.enum(ENQUIRY_COUNTRIES, 'Select a destination country'),
    category: z.enum(ENQUIRY_CATEGORIES, 'Select a product category'),
    message: z
        .string()
        .trim()
        .min(20, 'Please give us a little more detail (20 characters minimum)')
        .max(2000, 'Message must be under 2000 characters'),
});

export type ContactInput = z.infer<typeof contactSchema>;
