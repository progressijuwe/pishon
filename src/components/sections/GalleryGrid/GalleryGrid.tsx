import Image, { type StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { Container } from '@/components/shared/Container';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';

export interface GalleryItem {
    image: StaticImageData;
    alt: string;
    wide?: boolean;
    tall?: boolean;
}

export interface GalleryGridProps {
    title?: string;
    aside?: ReactNode;
    items: readonly GalleryItem[];
    surface?: 'none' | 'alt';
}

export function GalleryGrid({ title, aside, items, surface = 'none' }: GalleryGridProps) {
    return (
        <Section spacing="2xl" surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container>
                {title ? (
                    <Reveal>
                        <SectionHeading title={title} aside={aside} />
                    </Reveal>
                ) : null}

                <div className="grid auto-rows-[150px] grid-cols-2 gap-6 md:auto-rows-[200px] md:grid-cols-4">
                    {items.map((item, index) => (
                        <Reveal
                            key={item.alt}
                            delay={index * 90}
                            className={cn(item.wide && 'col-span-2', item.tall && 'row-span-2')}
                        >
                            <div className="group relative h-full w-full overflow-hidden rounded-xl shadow-lg">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
