import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

export interface PageMetadataInput {
    title: string;
    description: string;
    path: string;
}

export function createMetadata({ title, description, path }: PageMetadataInput): Metadata {
    const url = new URL(path, siteConfig.url).toString();

    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: 'website',
            locale: siteConfig.locale,
            siteName: siteConfig.name,
            title: `${title} · ${siteConfig.name}`,
            description,
            url,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} · ${siteConfig.name}`,
            description,
        },
    };
}
