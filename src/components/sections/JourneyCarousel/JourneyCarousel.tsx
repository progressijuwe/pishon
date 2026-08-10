'use client';

import { ChevronLeftIcon, ChevronRightIcon, PauseIcon, PlayIcon } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Text } from '@/components/shared/Text';
import { usePrefersReducedMotion } from '@/hooks';
import { cn } from '@/lib/utils';

export interface JourneyStep {
    label: string;
    title: string;
    description: string;
    icon: ReactNode;
    image: StaticImageData;
    imageAlt: string;
}

export interface JourneyCarouselProps {
    title?: string;
    description?: string;
    steps: readonly JourneyStep[];
    interval?: number;
}

export function JourneyCarousel({
    title,
    description,
    steps,
    interval = 5000,
}: JourneyCarouselProps) {
    const [active, setActive] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isHeld, setIsHeld] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    const count = steps.length;
    const go = useCallback((next: number) => setActive((next + count) % count), [count]);

    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
            threshold: 0.25,
        });
        observer.observe(node);

        const onVisibilityChange = () => setIsVisible(!document.hidden);
        document.addEventListener('visibilitychange', onVisibilityChange);

        return () => {
            observer.disconnect();
            document.removeEventListener('visibilitychange', onVisibilityChange);
        };
    }, []);

    const isAdvancing = isPlaying && !isHeld && isVisible && !prefersReducedMotion;

    useEffect(() => {
        if (!isAdvancing) return;
        const timer = window.setTimeout(() => go(active + 1), interval);
        return () => window.clearTimeout(timer);
    }, [isAdvancing, active, interval, go]);

    return (
        <Section spacing="2xl" className="bg-scrim on-scrim overflow-hidden text-white">
            <Container>
                {title ? (
                    <Reveal>
                        <SectionHeading title={title} description={description} align="center" />
                    </Reveal>
                ) : null}

                <Reveal>
                    <div
                        ref={sectionRef}
                        role="group"
                        aria-roledescription="carousel"
                        aria-label={title ?? 'Export journey'}
                        onPointerEnter={() => setIsHeld(true)}
                        onPointerLeave={() => setIsHeld(false)}
                        onFocusCapture={() => setIsHeld(true)}
                        onBlurCapture={(event) => {
                            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                                setIsHeld(false);
                            }
                        }}
                    >
                        <div aria-live={isAdvancing ? 'off' : 'polite'} className="relative">
                            {steps.map((step, index) => {
                                const isActive = index === active;

                                return (
                                    <div
                                        key={step.label}
                                        role="group"
                                        aria-roledescription="slide"
                                        aria-label={`${index + 1} of ${count}: ${step.title}`}
                                        aria-hidden={!isActive}
                                        inert={!isActive}
                                        className={cn(
                                            'border-border bg-card/5 grid grid-cols-1 gap-10 rounded-xl border p-6 transition-opacity duration-500 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-10',
                                            isActive
                                                ? 'opacity-100'
                                                : 'pointer-events-none absolute inset-0 opacity-0',
                                        )}
                                    >
                                        <div className="relative aspect-video overflow-hidden rounded-xl">
                                            <Image
                                                src={step.image}
                                                alt={step.imageAlt}
                                                fill
                                                sizes="(min-width: 1024px) 50vw, 100vw"
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center gap-3">
                                                <span
                                                    aria-hidden="true"
                                                    className="text-secondary [&_svg]:size-7"
                                                >
                                                    {step.icon}
                                                </span>
                                                <span className="text-caption text-secondary font-bold tracking-widest uppercase">
                                                    {step.label}
                                                </span>
                                            </div>

                                            <Heading as="h3" size="h3">
                                                {step.title}
                                            </Heading>

                                            <Text muted>{step.description}</Text>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <Controls
                                label="Previous step"
                                onClick={() => go(active - 1)}
                                icon={<ChevronLeftIcon aria-hidden="true" className="size-5" />}
                            />

                            <ol className="flex items-center">
                                {steps.map((step, index) => {
                                    const isActive = index === active;

                                    return (
                                        <li key={step.label}>
                                            <button
                                                type="button"
                                                onClick={() => go(index)}
                                                aria-label={`Step ${index + 1}: ${step.title}`}
                                                aria-current={isActive ? 'true' : undefined}
                                                className={cn(
                                                    'focus-ring group/dot flex h-6 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                                                    isActive ? 'w-10' : 'w-6',
                                                )}
                                            >
                                                <span
                                                    className={cn(
                                                        'block h-2 rounded-full transition-all duration-300',
                                                        isActive
                                                            ? 'bg-secondary w-6'
                                                            : 'w-2 bg-white/30 group-hover/dot:bg-white/60',
                                                    )}
                                                />
                                            </button>
                                        </li>
                                    );
                                })}
                            </ol>

                            <Controls
                                label="Next step"
                                onClick={() => go(active + 1)}
                                icon={<ChevronRightIcon aria-hidden="true" className="size-5" />}
                            />

                            {prefersReducedMotion ? null : (
                                <Controls
                                    label={isPlaying ? 'Pause the journey' : 'Play the journey'}
                                    onClick={() => setIsPlaying((playing) => !playing)}
                                    pressed={!isPlaying}
                                    icon={
                                        isPlaying ? (
                                            <PauseIcon aria-hidden="true" className="size-4" />
                                        ) : (
                                            <PlayIcon aria-hidden="true" className="size-4" />
                                        )
                                    }
                                />
                            )}
                        </div>
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
}

function Controls({
    label,
    onClick,
    icon,
    pressed,
}: {
    label: string;
    onClick: () => void;
    icon: ReactNode;
    pressed?: boolean;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            aria-pressed={pressed}
            className="focus-ring border-border hover:border-secondary hover:text-secondary flex size-11 shrink-0 items-center justify-center rounded-full border text-white transition-colors"
        >
            {icon}
        </button>
    );
}
