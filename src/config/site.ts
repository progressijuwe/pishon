import type { NavItem } from '@/types';

import { env } from './env';

export const siteConfig = {
    name: 'Pishon Parts',
    displayName: 'Pishon Parts & Machineries Ltd',
    legalName: 'Pishon Parts & Machineries Ltd',
    description:
        "Connecting Nigeria's natural resources and industrial needs with the global economy through precision and integrity.",
    tagline: 'Industrial Procurement & Commodity Export from Nigeria',
    keywords: [
        'industrial procurement Nigeria',
        'agricultural commodity export',
        'solid minerals supplier',
        'mechanical parts and machinery',
        'export logistics Nigeria',
        'cocoa cashew sesame export',
        'RFQ industrial parts',
    ],
    email: 'info@pishonparts.com',
    phone: '+234 000 000 0000',
    url: env.NEXT_PUBLIC_APP_URL,
    locale: 'en_US',
} as const;

export const mainNav: readonly NavItem[] = [
    {
        title: 'About',
        href: '/about',
        children: [
            { title: 'Company Overview', href: '/about' },
            { title: 'Our Divisions', href: '/products' },
            { title: 'Export Process', href: '/export-process' },
        ],
    },
    {
        title: 'Products',
        href: '/products',
        children: [
            { title: 'All Products', href: '/products' },
            { title: 'Agricultural Commodities', href: '/products/agricultural-commodities' },
            { title: 'Solid Minerals', href: '/products/solid-minerals' },
            {
                title: 'Mechanical Parts and Machinery',
                href: '/products/mechanical-parts-and-machinery',
            },
        ],
    },
    { title: 'Services', href: '/services' },
    { title: 'Export Process', href: '/export-process' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Contact', href: '/contact' },
] as const;

export const primaryCta = { label: 'Request a Quote', href: '/request-quote' } as const;

export interface NavGroup {
    title: string;
    items: readonly NavItem[];
}

export const footerNav: readonly NavGroup[] = [
    {
        title: 'Company',
        items: [
            { title: 'About Us', href: '/about' },
            { title: 'Our Process', href: '/export-process' },
            { title: 'Gallery', href: '/gallery' },
            { title: 'Contact', href: '/contact' },
        ],
    },
    {
        title: 'Products',
        items: [
            { title: 'Agro-Exports', href: '/products/agricultural-commodities' },
            { title: 'Solid Minerals', href: '/products/solid-minerals' },
            { title: 'Machinery Parts', href: '/products/mechanical-parts-and-machinery' },
            { title: 'Industrial Gear', href: '/products' },
        ],
    },
    {
        title: 'Services',
        items: [
            { title: 'Logistics', href: '/services' },
            { title: 'Sourcing', href: '/services' },
            { title: 'Inspection', href: '/services' },
            { title: 'All Services', href: '/services' },
        ],
    },
    {
        title: 'Get Started',
        items: [
            { title: 'Request a Quote', href: '/request-quote' },
            { title: 'Contact Sales', href: '/contact' },
            { title: 'Export Process', href: '/export-process' },
        ],
    },
] as const;

export type SiteConfig = typeof siteConfig;
