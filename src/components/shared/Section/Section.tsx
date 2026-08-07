import { cva, type VariantProps } from 'class-variance-authority';
import type { ElementType } from 'react';

import { cn } from '@/lib/utils';
import type { PolymorphicProps } from '@/types';

const sectionVariants = cva('', {
    variants: {
        /**
         * The page's vertical rhythm scale. Defined here rather than as
         * `--spacing-*` theme tokens on purpose: t-shirt-named spacing tokens
         * shadow Tailwind's container scale, which silently breaks `max-w-lg`
         * and friends. See the note in styles/tokens.css.
         *
         * Re-tuning the rhythm is still a single edit — just this block.
         */
        spacing: {
            none: '',
            xs: 'py-1',
            sm: 'py-4',
            md: 'py-6',
            lg: 'py-12',
            xl: 'py-20',
            /**
             * The system's signature section padding — 120px desktop, 160px for
             * hero bands. Both reflow to 64px on mobile, which keeps momentum
             * without giving up the "spacious" brand promise.
             */
            '2xl': 'py-16 md:py-30',
            hero: 'py-16 md:py-40',
        },
        surface: {
            none: '',
            muted: 'bg-muted/40',
            card: 'bg-card',
            /* Section Alt — a tonal break between long-form content areas. */
            alt: 'bg-muted',
        },
    },
    defaultVariants: {
        spacing: 'xl',
        surface: 'none',
    },
});

export type SectionProps<T extends ElementType = 'section'> = PolymorphicProps<
    T,
    VariantProps<typeof sectionVariants>
>;

/**
 * Vertical rhythm for a page band. Owns padding and background only — put a
 * Container inside for the horizontal gutter, so the background can run
 * full-bleed while the content stays aligned.
 */
export function Section<T extends ElementType = 'section'>({
    as,
    spacing,
    surface,
    className,
    children,
    ...props
}: SectionProps<T>) {
    const Component = (as ?? 'section') as ElementType;

    return (
        <Component className={cn(sectionVariants({ spacing, surface }), className)} {...props}>
            {children}
        </Component>
    );
}

export { sectionVariants };
