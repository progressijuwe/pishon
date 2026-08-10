import { cn } from '@/lib/utils';

import { headingVariants } from './headingVariants';
import type { HeadingElement, HeadingProps } from './Heading.types';

export function Heading<T extends HeadingElement = 'h2'>({
    as,
    size,
    align,
    muted,
    className,
    children,
    ...props
}: HeadingProps<T>) {
    const Component = (as ?? 'h2') as HeadingElement;

    return (
        <Component className={cn(headingVariants({ size, align, muted }), className)} {...props}>
            {children}
        </Component>
    );
}
