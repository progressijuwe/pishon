import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Manrope } from 'next/font/google';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { siteConfig } from '@/config/site';
import { Providers } from '@/providers';

import './globals.css';

/* `variable` exposes each font as a CSS custom property, which
   styles/tokens.css maps onto `--font-sans` / `--font-mono`.

   The design system specifies Manrope exclusively — it backs both `--font-sans`
   and `--font-heading`. No `weight` here on purpose: Manrope is a variable
   font, and naming weights would pin it to static instances. Left variable, the
   whole 400–700 range the system uses comes from one file. */
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
    /* Required for relative OG/twitter image URLs to resolve to absolute ones. */
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        /* Child routes set only their own title; this appends the site name. */
        template: `%s · ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    openGraph: {
        type: 'website',
        locale: siteConfig.locale,
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        /* No `images` here on purpose: `opengraph-image.tsx` supplies the card
           and its dimensions automatically, and an explicit entry would win
           over it. Twitter falls back to the same image. */
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        creator: siteConfig.creator,
    },
    robots: {
        index: true,
        follow: true,
    },
    /* No `icons` entry: `favicon.ico`, `icon.svg` and `apple-icon.png` in this
       directory are picked up automatically, and an explicit entry would
       replace all three with just the one. */
};

export const viewport: Viewport = {
    /* Two entries so the browser chrome matches the active theme. */
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
        { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            /* next-themes writes the theme class onto <html> from a blocking
               inline script before React hydrates, so the server and client
               markup legitimately differ here. */
            suppressHydrationWarning
            className={`${manrope.variable} ${geistMono.variable} h-full`}
            data-scroll-behavior="smooth"
        >
            <body className="flex min-h-full flex-col">
                <Providers>
                    {/* First tabbable element on the page: lets keyboard and
                        screen-reader users jump past the nav on every route. */}
                    <a
                        href="#main"
                        className="sr-only-focusable bg-primary text-primary-foreground focus:top-4 focus:left-4 focus:rounded-md focus:px-4 focus:py-2"
                    >
                        Skip to content
                    </a>

                    <Header />

                    {/* tabIndex={-1} makes the skip link's target focusable, so
                        focus actually moves here rather than just scrolling. */}
                    <main id="main" tabIndex={-1} className="flex-1">
                        {children}
                    </main>

                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
