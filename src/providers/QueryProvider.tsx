'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { useState, type ReactNode } from 'react';

import { isDevelopment } from '@/config/env';
import { getQueryClient } from '@/lib/query-client';

const ReactQueryDevtools = dynamic(
    () => import('@tanstack/react-query-devtools').then((mod) => mod.ReactQueryDevtools),
    { ssr: false },
);

export function QueryProvider({ children }: { children: ReactNode }) {
    const [queryClient] = useState(getQueryClient);

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {isDevelopment && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
    );
}
