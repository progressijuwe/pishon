'use client';

import { type ElementType, type ReactNode, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

export interface RevealProps {
    children: ReactNode;
    delay?: number;
    from?: 'up' | 'left' | 'right' | 'none';
    as?: ElementType;
    className?: string;
}

const FROM_CLASSES = {
    up: 'translate-y-8',
    left: 'translate-y-8 md:translate-y-0 md:-translate-x-8',
    right: 'translate-y-8 md:translate-y-0 md:translate-x-8',
    none: '',
} as const;

export function Reveal({ children, delay = 0, from = 'up', as, className }: RevealProps) {
    const Component = (as ?? 'div') as ElementType;
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setVisible] = useState(false);
    const [isArmed, setArmed] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

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
