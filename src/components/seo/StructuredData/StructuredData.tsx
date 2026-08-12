import { siteConfig } from '@/config/site';

export function StructuredData() {
    const graph = [
        {
            '@type': 'Organization',
            '@id': `${siteConfig.url}/#organization`,
            name: siteConfig.legalName,
            alternateName: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/logo.svg`,
            },
            address: {
                '@type': 'PostalAddress',
                streetAddress: '5 Osayi Street, off Ewah Road',
                addressLocality: 'Benin City',
                addressRegion: 'Edo',
                addressCountry: 'NG',
            },
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: siteConfig.email,
                telephone: siteConfig.phone,
                areaServed: 'NG',
                availableLanguage: 'English',
            },
        },
        {
            '@type': 'WebSite',
            '@id': `${siteConfig.url}/#website`,
            url: siteConfig.url,
            name: siteConfig.name,
            description: siteConfig.description,
            publisher: { '@id': `${siteConfig.url}/#organization` },
            inLanguage: 'en',
        },
    ];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@graph': graph,
                }).replace(/</g, '\\u003c'),
            }}
        />
    );
}
