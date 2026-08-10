'use client';

import { useEffect, useRef, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks';

export interface CountUpProps {
    value: string;
    duration?: number;
    className?: string;
}

interface ParsedValue {
    prefix: string;
    target: number;
    suffix: string;
    decimals: number;
    grouped: boolean;
}

function parse(value: string): ParsedValue | null {
    const match = /^(\D*?)([\d,]+(?:\.\d+)?)(.*)$/.exec(value);
    if (!match) return null;

    const [, prefix = '', digits = '', suffix = ''] = match;
    const plain = digits.replace(/,/g, '');
    const target = Number(plain);
    if (!Number.isFinite(target)) return null;

    return {
        prefix,
        target,
        suffix,
        decimals: plain.split('.')[1]?.length ?? 0,
        grouped: digits.includes(','),
    };
}

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

export function CountUp({ value, duration = 1600, className }: CountUpProps) {
    const parsed = parse(value);
    const ref = useRef<HTMLSpanElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    const [display, setDisplay] = useState(value);

    useEffect(() => {
        const element = ref.current;
        const config = parse(value);
        if (!element || !config || prefersReducedMotion) return;

        const { prefix, target, suffix, decimals, grouped } = config;
        const format = (n: number) =>
            `${prefix}${n.toLocaleString('en-US', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
                useGrouping: grouped,
            })}${suffix}`;

        setDisplay(format(0));

        let frame = 0;
        let start: number | null = null;

        const tick = (now: number) => {
            start ??= now;
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(format(target * easeOutQuart(progress)));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry?.isIntersecting) return;
                observer.disconnect();
                frame = requestAnimationFrame(tick);
            },
            { threshold: 0.4 },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [value, duration, prefersReducedMotion]);

    if (!parsed) return <span className={className}>{value}</span>;

    return (
        <span ref={ref} className={className}>
            <span aria-hidden="true">{display}</span>
            <span className="sr-only">{value}</span>
        </span>
    );
}
