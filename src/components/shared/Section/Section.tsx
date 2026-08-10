import { cva, type VariantProps } from 'class-variance-authority';
import type { ElementType } from 'react';

import { cn } from '@/lib/utils';
import type { PolymorphicProps } from '@/types';

const sectionVariants = cva('', {
    variants: {
        spacing: {
            none: '',
            xs: 'py-1',
            sm: 'py-4',
            md: 'py-6',
            lg: 'py-12',
            xl: 'py-20',
            '2xl': 'py-16 md:py-30',
            hero: 'py-16 md:py-40',
        },
        surface: {
            none: '',
            muted: 'bg-muted/40',
            card: 'bg-card',
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
