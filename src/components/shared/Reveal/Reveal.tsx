'use client';

import { type ElementType, type ReactNode, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

export interface RevealProps {
    children: ReactNode;
    /** Milliseconds to hold before animating — stagger siblings with this. */
    delay?: number;
    from?: 'up' | 'left' | 'right' | 'none';
    as?: ElementType;
    className?: string;
}

const FROM_CLASSES = {
    up: 'translate-y-8',
    left: '-translate-x-8',
    right: 'translate-x-8',
    none: '',
} as const;

/**
 * Fades content in as it scrolls into view, once.
 *
 * Content starts visible and is hidden only after the observer attaches, so
 * anything rendered without JavaScript stays readable rather than stranded at
 * `opacity-0`. `prefers-reduced-motion` is handled globally in `base.css`,
 * which collapses the transition to zero.
 */
export function Reveal({ children, delay = 0, from = 'up', as, className }: RevealProps) {
    const Component = (as ?? 'div') as ElementType;
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setVisible] = useState(false);
    const [isArmed, setArmed] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        /* Already scrolled past before this attached — which happens when the
           reader scrolls during hydration. Show it outright: an observer would
           report "not intersecting" and leave the content invisible for good. */
        if (element.getBoundingClientRect().bottom <= 0) {
            setVisible(true);
            return;
        }

        setArmed(true);

        const reveal = () => {
            setVisible(true);
            observer.disconnect();
            window.removeEventListener('scroll', onScroll);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) reveal();
            },
            { threshold: 0.1, rootMargin: '0px 0px -80px 0px' },
        );

        /**
         * Safety net for content the observer never gets to report on.
         *
         * An observer only fires when a threshold is *crossed*. A jump — an
         * anchor link, restored scroll position, hard flick on a long page —
         * can move an element from below the fold to above it between frames
         * without ever crossing one, so no callback runs and the content stays
         * invisible behind the reader. This catches that case; the observer
         * still owns the timing for anything scrolled to normally.
         */
        const onScroll = () => {
            if (element.getBoundingClientRect().bottom <= 0) reveal();
        };

        observer.observe(element);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const isHidden = isArmed && !isVisible;

    return (
        <Component
            ref={ref}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            className={cn(
                'ease-out-quart transition-all duration-700',
                isHidden
                    ? cn('opacity-0', FROM_CLASSES[from])
                    : 'translate-x-0 translate-y-0 opacity-100',
                className,
            )}
        >
            {children}
        </Component>
    );
}
