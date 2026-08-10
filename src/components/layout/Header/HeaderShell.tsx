'use client';

import type { ReactNode } from 'react';

import { useScrolled } from '@/hooks';
import { cn } from '@/lib/utils';

export type HeaderVariant = 'solid' | 'overlay';

export interface HeaderShellProps {
    variant?: HeaderVariant;
    children: ReactNode;
}

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
