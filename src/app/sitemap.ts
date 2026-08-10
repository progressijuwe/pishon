import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

interface Entry {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}

const ENTRIES: readonly Entry[] = [
    { path: '/', priority: 1, changeFrequency: 'monthly' },
    { path: '/products', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/agricultural-commodities', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/solid-minerals', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/mechanical-parts-and-machinery', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/request-quote', priority: 0.9, changeFrequency: 'yearly' },
    { path: '/services', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/export-process', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/gallery', priority: 0.6, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return ENTRIES.map((entry) => ({
        url: new URL(entry.path, siteConfig.url).toString(),
        lastModified,
        changeFrequency: entry.changeFrequency,
        priority: entry.priority,
    }));
}
