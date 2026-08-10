import { cva, type VariantProps } from 'class-variance-authority';
import type { ElementType } from 'react';

import { cn } from '@/lib/utils';
import type { PolymorphicProps } from '@/types';

const containerVariants = cva('mx-auto w-full px-4 sm:px-6 lg:px-8', {
    variants: {
        size: {
            sm: 'max-w-3xl',
            md: 'max-w-5xl',
            lg: 'max-w-7xl',
            prose: 'max-w-[68ch]',
            full: 'max-w-none',
        },
    },
    defaultVariants: {
        size: 'lg',
    },
});

export type ContainerProps<T extends ElementType = 'div'> = PolymorphicProps<
    T,
    VariantProps<typeof containerVariants>
>;

export function Container<T extends ElementType = 'div'>({
    as,
    size,
    className,
    children,
    ...props
}: ContainerProps<T>) {
    const Component = (as ?? 'div') as ElementType;

    return (
        <Component className={cn(containerVariants({ size }), className)} {...props}>
            {children}
        </Component>
    );
}

export { containerVariants };
