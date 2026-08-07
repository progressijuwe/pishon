import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';

export interface LogoProps {
    className?: string;
    /** Render the wordmark alongside the glyph. */
    showText?: boolean;
    /** Render as plain content instead of a link — for use inside a footer heading. */
    asLink?: boolean;
}

/**
 * Brand mark.
 *
 * The artwork from `public/logo.svg` is inlined here rather than loaded through
 * `next/image`, and its fill is `currentColor`. An SVG referenced as an image is
 * an isolated document that can't inherit page colour, so the file's hardcoded
 * black would stay black — invisible on the overlay header, the nav drawer and
 * the navy footer. Inlined, the mark takes whatever colour its context sets.
 *
 * The glyph is `aria-hidden` because the adjacent text already names the site.
 * When `showText` is false the link carries an `aria-label` instead, so it is
 * never an unlabelled link.
 */
export function Logo({ className, showText = true, asLink = true }: LogoProps) {
    const content = (
        <>
            <svg
                viewBox="0 0 64 64"
                aria-hidden="true"
                className="size-8 shrink-0"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M33.543 22.531h-5.464v8.543h5.464c1.384 0 2.46-.348 3.228-1.043s1.151-1.797 1.151-3.307s-.384-2.586-1.151-3.229s-1.844-.964-3.228-.964" />
                <path d="M31.999 2c-16.568 0-30 13.432-30 30s13.432 30 30 30C48.568 62 62 48.568 62 32S48.568 2 31.999 2m9.398 31.949c-1.699 1.418-4.125 2.125-7.277 2.125h-6.041v10.434h-6.023V17.492h12.458c2.872 0 5.162.748 6.87 2.244c1.707 1.496 2.562 3.813 2.562 6.949c-.001 3.424-.85 5.846-2.549 7.264" />
            </svg>
            {showText ? (
                <span className="text-body font-semibold tracking-tight">{siteConfig.name}</span>
            ) : null}
        </>
    );

    const classes = cn(
        'inline-flex items-center gap-2 rounded-md outline-none focus-visible:ring-ring focus-visible:ring-[3px]',
        className,
    );

    if (!asLink) {
        return <span className={classes}>{content}</span>;
    }

    return (
        <Link
            href={ROUTES.home}
            className={classes}
            aria-label={showText ? undefined : `${siteConfig.name} — home`}
        >
            {content}
        </Link>
    );
}
