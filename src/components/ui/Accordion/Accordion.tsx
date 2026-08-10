'use client';

import { ChevronDownIcon } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({
    className,
    ...props
}: ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn('border-b last:border-b-0', className)}
            {...props}
        />
    );
}

export function AccordionTrigger({
    className,
    children,
    ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    'focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
                    className,
                )}
                {...props}
            >
                {children}
                <ChevronDownIcon
                    aria-hidden="true"
                    className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 data-[state=open]:rotate-180"
                />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

export function AccordionContent({
    className,
    children,
    ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className={cn(
                'overflow-hidden text-sm',
                'data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up',
            )}
            {...props}
        >
            <div className={cn('text-muted-foreground pt-0 pb-4', className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
}
