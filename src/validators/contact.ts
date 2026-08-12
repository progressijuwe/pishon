import { z } from 'zod';

export const NIGERIAN_STATES = [
    'Abia',
    'Adamawa',
    'Akwa Ibom',
    'Anambra',
    'Bauchi',
    'Bayelsa',
    'Benue',
    'Borno',
    'Cross River',
    'Delta',
    'Ebonyi',
    'Edo',
    'Ekiti',
    'Enugu',
    'FCT — Abuja',
    'Gombe',
    'Imo',
    'Jigawa',
    'Kaduna',
    'Kano',
    'Katsina',
    'Kebbi',
    'Kogi',
    'Kwara',
    'Lagos',
    'Nasarawa',
    'Niger',
    'Ogun',
    'Ondo',
    'Osun',
    'Oyo',
    'Plateau',
    'Rivers',
    'Sokoto',
    'Taraba',
    'Yobe',
    'Zamfara',
    'Outside Nigeria',
] as const;

export const ENQUIRY_CATEGORIES = [
    'Agricultural Commodities',
    'Solid Minerals',
    'Industrial Parts & Machinery',
    'Export Logistics',
    'Warehousing',
    'General Importation',
    'Oil & Gas Services',
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
    state: z.enum(NIGERIAN_STATES, 'Select where you are based'),
    category: z.enum(ENQUIRY_CATEGORIES, 'Select what your enquiry is about'),
    message: z
        .string()
        .trim()
        .min(20, 'Please give us a little more detail (20 characters minimum)')
        .max(2000, 'Message must be under 2000 characters'),
});

export type ContactInput = z.infer<typeof contactSchema>;
