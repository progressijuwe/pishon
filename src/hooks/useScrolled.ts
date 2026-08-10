'use client';

import { useCallback, useSyncExternalStore } from 'react';

export function useScrolled(threshold = 50): boolean {
    const subscribe = useCallback((onChange: () => void) => {
        window.addEventListener('scroll', onChange, { passive: true });
        return () => window.removeEventListener('scroll', onChange);
    }, []);

    return useSyncExternalStore(
        subscribe,
        () => window.scrollY > threshold,
        () => false,
    );
}
