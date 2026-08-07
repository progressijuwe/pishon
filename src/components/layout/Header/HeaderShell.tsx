'use client';

import type { ReactNode } from 'react';

import { useScrolled } from '@/hooks';
import { cn } from '@/lib/utils';

export type HeaderVariant = 'solid' | 'overlay';

export interface HeaderShellProps {
    variant?: HeaderVariant;
    children: ReactNode;
}

/**
 * The header's chrome and its one piece of state. `solid` is sticky and takes
 * layout space; `overlay` is fixed and floats over a hero, so a page using it
 * must supply its own top offset.
 *
 * The scrolled flag is published as `data-solid` so server-rendered descendants
 * can react with `group-data-[solid=true]/header:` variants.
 */
export function HeaderShell({ variant = 'solid', children }: HeaderShellProps) {
    const scrolled = useScrolled(50);
    const isSolid = variant === 'solid' || scrolled;

    return (
        <header
            data-solid={isSolid}
            className={cn(
                'group/header z-50 w-full transition-all duration-300',
                variant === 'overlay' ? 'fixed inset-x-0 top-0' : 'sticky top-0',
                isSolid && 'bg-background/95 shadow-md backdrop-blur-md',
            )}
        >
            {children}
        </header>
    );
}
