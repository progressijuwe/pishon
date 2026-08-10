import type { ReactNode } from 'react';

import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
    );
}

export { QueryProvider } from './QueryProvider';
export { ThemeProvider } from './ThemeProvider';
