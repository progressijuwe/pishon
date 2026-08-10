import type { ReactNode } from 'react';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Text } from '@/components/shared/Text';
import { cn } from '@/lib/utils';

export interface FeatureGridItem {
    icon?: ReactNode;
    title: string;
    description: string;
}

export interface FeatureGridProps {
    items: readonly FeatureGridItem[];
    title?: string;
    description?: string;
    headingAlign?: 'start' | 'center';
    aside?: ReactNode;
    columns?: 2 | 3 | 4;
    align?: 'start' | 'center';
    surface?: 'none' | 'alt' | 'primary';
}

const COLUMN_CLASSES = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
} as const;

export function FeatureGrid({
    items,
    title,
    description,
    headingAlign = 'start',
    aside,
    columns = 4,
    align = 'start',
    surface = 'none',
}: FeatureGridProps) {
    const isInverted = surface === 'primary';

    const grid = (
        <div
            className={cn(
                'grid grid-cols-1 gap-6',
                aside ? 'md:grid-cols-2' : COLUMN_CLASSES[columns],
            )}
        >
            {items.map((item, index) => (
                <Reveal key={item.title} delay={index * 100} className="h-full">
                    <div
                        className={cn(
                            'h-full rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1',
                            align === 'center' && 'flex flex-col items-center text-center',
                            isInverted
                                ? 'border-white/10 bg-white/5 hover:bg-white/10'
                                : 'border-border bg-card hover:shadow-md',
                        )}
                    >
                        {item.icon ? (
                            <div aria-hidden="true" className="text-secondary mb-6 [&_svg]:size-10">
                                {item.icon}
                            </div>
                        ) : null}

                        <Heading as="h3" size="h4" className="mb-4">
                            {item.title}
                        </Heading>

                        <Text
                            size="small"
                            muted={!isInverted}
                            className={cn(isInverted && 'opacity-80')}
                        >
                            {item.description}
                        </Text>
                    </div>
                </Reveal>
            ))}
        </div>
    );

    return (
        <Section
            spacing="2xl"
            surface={surface === 'alt' ? 'alt' : 'none'}
            className={cn(isInverted && 'bg-scrim on-scrim text-white')}
        >
            <Container>
                {title && !aside ? (
                    <Reveal>
                        <SectionHeading
                            title={title}
                            description={description}
                            align={headingAlign}
                        />
                    </Reveal>
                ) : null}

                {aside ? (
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                        <Reveal from="left" className="lg:col-span-1">
                            {aside}
                        </Reveal>
                        <div className="lg:col-span-2">{grid}</div>
                    </div>
                ) : (
                    grid
                )}
            </Container>
        </Section>
    );
}
