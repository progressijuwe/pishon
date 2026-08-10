import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export function Card({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            data-slot="card"
            className={cn(
                'bg-card text-card-foreground border-border flex flex-col rounded-xl border shadow-sm',
                className,
            )}
            {...props}
        />
    );
}

export function CardHeader({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-header"
            className={cn('flex flex-col gap-1.5 p-6', className)}
            {...props}
        />
    );
}

export function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
    return (
        <h3
            data-slot="card-title"
            className={cn('text-h4 leading-none font-semibold', className)}
            {...props}
        />
    );
}

export function CardDescription({ className, ...props }: ComponentProps<'p'>) {
    return (
        <p
            data-slot="card-description"
            className={cn('text-small text-muted-foreground', className)}
            {...props}
        />
    );
}

export function CardContent({ className, ...props }: ComponentProps<'div'>) {
    return <div data-slot="card-content" className={cn('p-6 pt-0', className)} {...props} />;
}

export function CardFooter({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-footer"
            className={cn('mt-auto flex items-center gap-2 p-6 pt-0', className)}
            {...props}
        />
    );
}
