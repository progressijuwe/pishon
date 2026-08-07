'use client';

import { useCallback, useSyncExternalStore } from 'react';

/**
 * Whether the page has scrolled past `threshold` pixels.
 *
 * Returns a boolean rather than the raw offset so React only re-renders on the
 * two frames where it flips, not on every pixel of scroll.
 */
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
