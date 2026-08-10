import Image, { type StaticImageData } from 'next/image';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Text } from '@/components/shared/Text';
import { cn } from '@/lib/utils';

export interface Milestone {
    year: string;
    title: string;
    description: string;
    image?: StaticImageData;
    imageAlt?: string;
}

export interface MilestoneTimelineProps {
    title?: string;
    description?: string;
    items: readonly Milestone[];
    surface?: 'none' | 'alt';
}

export function MilestoneTimeline({
    title,
    description,
    items,
    surface = 'alt',
}: MilestoneTimelineProps) {
    return (
        <Section spacing="2xl" surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container>
                {title ? (
                    <Reveal>
                        <SectionHeading title={title} description={description} align="center" />
                    </Reveal>
                ) : null}

                <ol className="relative flex flex-col gap-20">
                    <span
                        aria-hidden="true"
                        className="bg-border absolute inset-y-0 left-1/2 hidden w-0.5 -translate-x-1/2 md:block"
                    />

                    {items.map((item, index) => {
                        const flipped = index % 2 === 1;

                        return (
                            <Reveal
                                as="li"
                                key={item.year}
                                from={flipped ? 'right' : 'left'}
                                className={cn(
                                    'relative flex flex-col items-center gap-6 text-center md:gap-0',
                                    flipped ? 'md:flex-row-reverse' : 'md:flex-row',
                                )}
                            >
                                <div
                                    className={cn(
                                        'md:w-1/2',
                                        flipped
                                            ? 'md:pl-12 md:text-left'
                                            : 'md:pr-12 md:text-right',
                                    )}
                                >
                                    <Heading as="h3" size="h3">
                                        {item.year}
                                    </Heading>
                                    <p className="text-secondary text-body font-bold">
                                        {item.title}
                                    </p>
                                    <Text muted className="mt-2">
                                        {item.description}
                                    </Text>
                                </div>

                                <span
                                    aria-hidden="true"
                                    className="bg-secondary border-background z-10 size-4 shrink-0 rounded-full border-4"
                                />

                                {item.image ? (
                                    <div
                                        className={cn(
                                            'flex md:w-1/2',
                                            flipped
                                                ? 'md:justify-end md:pr-12'
                                                : 'md:justify-start md:pl-12',
                                        )}
                                    >
                                        <div className="relative h-32 w-48 overflow-hidden rounded-lg shadow-sm">
                                            <Image
                                                src={item.image}
                                                alt={item.imageAlt ?? ''}
                                                fill
                                                sizes="192px"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="hidden md:block md:w-1/2" />
                                )}
                            </Reveal>
                        );
                    })}
                </ol>
            </Container>
        </Section>
    );
}
