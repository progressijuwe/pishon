import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

export interface PageMetadataInput {
    title: string;
    description: string;
    path: string;
}

const SHARE_IMAGE = {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: `${siteConfig.legalName} — ${siteConfig.tagline}`,
};

export function createMetadata({ title, description, path }: PageMetadataInput): Metadata {
    const url = new URL(path, siteConfig.url).toString();
    const fullTitle = `${title} · ${siteConfig.name}`;

    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: 'website',
            locale: siteConfig.locale,
            siteName: siteConfig.name,
            title: fullTitle,
            description,
            url,
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [SHARE_IMAGE],
        },
    };
}
