import { cva, type VariantProps } from 'class-variance-authority';
import type { ElementType } from 'react';

import { cn } from '@/lib/utils';
import type { PolymorphicProps } from '@/types';

const textVariants = cva('', {
    variants: {
        size: {
            body: 'text-body',
            small: 'text-small',
            caption: 'text-caption',
        },
        weight: {
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
        },
        muted: {
            true: 'text-muted-foreground',
            false: '',
        },
        balance: {
            true: 'text-pretty',
            false: '',
        },
    },
    defaultVariants: {
        size: 'body',
        weight: 'normal',
        muted: false,
        balance: false,
    },
});

export type TextProps<T extends ElementType = 'p'> = PolymorphicProps<
    T,
    VariantProps<typeof textVariants>
>;

export function Text<T extends ElementType = 'p'>({
    as,
    size,
    weight,
    align,
    muted,
    balance,
    className,
    children,
    ...props
}: TextProps<T>) {
    const Component = (as ?? 'p') as ElementType;

    return (
        <Component
            className={cn(textVariants({ size, weight, align, muted, balance }), className)}
            {...props}
        >
            {children}
        </Component>
    );
}

export { textVariants };
