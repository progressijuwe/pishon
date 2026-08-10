'use client';

import Image, { type StaticImageData } from 'next/image';
import { useMemo, useState } from 'react';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Text } from '@/components/shared/Text';
import { cn } from '@/lib/utils';

export interface GalleryPhoto {
    image: StaticImageData;
    title: string;
    caption: string;
    alt: string;
    category: string;
}

export interface FilterableGalleryProps {
    title?: string;
    description?: string;
    categories: readonly string[];
    photos: readonly GalleryPhoto[];
    surface?: 'none' | 'alt';
}

const ALL = 'All';

export function FilterableGallery({
    title,
    description,
    categories,
    photos,
    surface = 'alt',
}: FilterableGalleryProps) {
    const [active, setActive] = useState(ALL);

    const filters = useMemo(() => [ALL, ...categories], [categories]);
    const visible = useMemo(
        () => (active === ALL ? photos : photos.filter((photo) => photo.category === active)),
        [active, photos],
    );

    return (
        <Section spacing="2xl" surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container>
                {title ? (
                    <Reveal>
                        <SectionHeading title={title} description={description} align="center" />
                    </Reveal>
                ) : null}

                <Reveal>
                    <div
                        role="group"
                        aria-label="Filter photographs by category"
                        className="mb-10 flex flex-wrap justify-center gap-3"
                    >
                        {filters.map((filter) => {
                            const isActive = filter === active;

                            return (
                                <button
                                    key={filter}
                                    type="button"
                                    onClick={() => setActive(filter)}
                                    aria-pressed={isActive}
                                    className={cn(
                                        'focus-ring text-label rounded-full px-5 py-2.5 font-semibold transition-colors',
                                        isActive
                                            ? 'bg-primary text-primary-foreground shadow-md'
                                            : 'border-border bg-card text-foreground hover:border-secondary hover:text-secondary border',
                                    )}
                                >
                                    {filter}
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                <p aria-live="polite" className="sr-only">
                    {`Showing ${visible.length} of ${photos.length} photographs${
                        active === ALL ? '' : ` in ${active}`
                    }.`}
                </p>

                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {visible.map((photo) => (
                        <li key={photo.title}>
                            <figure className="group relative aspect-4/3 overflow-hidden rounded-xl shadow-lg">
                                <Image
                                    src={photo.image}
                                    alt={photo.alt}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div
                                    aria-hidden="true"
                                    className="from-scrim via-scrim/70 absolute inset-0 bg-linear-to-t via-45% to-transparent to-75%"
                                />

                                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                                    <Heading as="h3" size="h4" className="mb-1">
                                        {photo.title}
                                    </Heading>
                                    <Text size="small">{photo.caption}</Text>
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    );
}
