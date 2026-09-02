import type { NavItem } from '@/types';

import { env } from './env';

export const siteConfig = {
    name: 'Pishon Parts',
    displayName: 'Pishon Parts & Machineries Ltd',
    legalName: 'Pishon Parts & Machineries Ltd',
    description:
        'A Nigerian producer, supplier and logistics partner — farm commodities, solid minerals, industrial sourcing, warehousing and export logistics for businesses across Nigeria.',
    tagline: 'Commodities, Minerals & Industrial Supply in Nigeria',
    phone: '+234 816 872 9344',
    url: env.NEXT_PUBLIC_APP_URL,
    locale: 'en_US',
} as const;

export const mainNav: readonly NavItem[] = [
    {
        title: 'Divisions',
        href: '/#divisions',
        children: [
            { title: 'Agriculture & Commodities', href: '/agriculture' },
            { title: 'Solid Minerals', href: '/minerals' },
            { title: 'Industrial Sourcing', href: '/industrial' },
            { title: 'Paint Manufacturing', href: '/paint' },
        ],
    },
    { title: 'Services', href: '/services' },
    { title: 'About', href: '/about' },
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
        title: 'Divisions',
        items: [
            { title: 'Agriculture & Commodities', href: '/agriculture' },
            { title: 'Solid Minerals', href: '/minerals' },
            { title: 'Industrial Sourcing', href: '/industrial' },
            { title: 'Paint Manufacturing', href: '/paint' },
        ],
    },
    {
        title: 'Services',
        items: [
            { title: 'Services & Logistics', href: '/services' },
            { title: 'Traceability', href: '/agriculture/traceability' },
            { title: 'Gallery', href: '/gallery' },
        ],
    },
    {
        title: 'Company',
        items: [
            { title: 'About Us', href: '/about' },
            { title: 'Contact', href: '/contact' },
        ],
    },
    {
        title: 'Get Started',
        items: [
            { title: 'Request a Quote', href: '/request-quote' },
            { title: 'Contact Sales', href: '/contact' },
        ],
    },
] as const;
