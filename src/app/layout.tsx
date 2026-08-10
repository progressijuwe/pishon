import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Manrope } from 'next/font/google';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { StructuredData } from '@/components/seo/StructuredData';
import { siteConfig } from '@/config/site';
import { Providers } from '@/providers';

import './globals.css';

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin'],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} — ${siteConfig.tagline}`,
        template: `%s · ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    openGraph: {
        type: 'website',
        locale: siteConfig.locale,
        url: siteConfig.url,
        title: `${siteConfig.name} — ${siteConfig.tagline}`,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.name} — ${siteConfig.tagline}`,
        description: siteConfig.description,
    },
    alternates: { canonical: '/' },
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
        { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${manrope.variable} ${geistMono.variable} h-full`}
            data-scroll-behavior="smooth"
        >
            <body className="flex min-h-full flex-col">
                <StructuredData />

                <Providers>
                    <a
                        href="#main"
                        className="sr-only-focusable bg-primary text-primary-foreground focus:top-4 focus:left-4 focus:rounded-md focus:px-4 focus:py-2"
                    >
                        Skip to content
                    </a>

                    <Header />

                    <main id="main" tabIndex={-1} className="flex-1">
                        {children}
                    </main>

                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
