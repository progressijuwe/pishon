'use client';

import { useEffect, useRef, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks';

export interface CountUpProps {
    /** The finished figure, punctuation and all — "25+", "1,200", "99.5%". */
    value: string;
    /** Milliseconds from zero to `value`. */
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

/** Splits "1,200+" into its prefix, number and suffix so only the digits animate. */
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

/**
 * Counts a figure up from zero when it scrolls into view.
 *
 * The animating text is `aria-hidden` with the finished value beside it in an
 * `sr-only` span, so assistive technology reads "25+" once rather than a stream
 * of intermediate numbers. Anything unparseable renders verbatim.
 */
export function CountUp({ value, duration = 1600, className }: CountUpProps) {
    const parsed = parse(value);
    const ref = useRef<HTMLSpanElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    const [display, setDisplay] = useState(value);

    useEffect(() => {
        const element = ref.current;
        /* Re-parsed here rather than closing over the render-scoped object, so
           the effect depends only on the string and doesn't restart on every
           parent re-render. */
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
