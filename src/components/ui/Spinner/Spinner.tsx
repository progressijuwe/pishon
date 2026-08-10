import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2Icon } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

const spinnerVariants = cva('animate-spin', {
    variants: {
        size: {
            xs: 'size-3',
            sm: 'size-4',
            default: 'size-5',
            lg: 'size-6',
            xl: 'size-8',
        },
    },
    defaultVariants: {
        size: 'default',
    },
});

export interface SpinnerProps
    extends Omit<ComponentProps<'span'>, 'children'>, VariantProps<typeof spinnerVariants> {
    label?: string | null;
}

export function Spinner({ className, size, label = 'Loading', ...props }: SpinnerProps) {
    return (
        <span
            data-slot="spinner"
            role="status"
            className={cn('inline-flex items-center justify-center', className)}
            {...props}
        >
            <Loader2Icon className={cn(spinnerVariants({ size }))} aria-hidden="true" />
            {label ? <span className="sr-only">{label}</span> : null}
        </span>
    );
}

export { spinnerVariants };
