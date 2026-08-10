import Image, { type StaticImageData } from 'next/image';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Text } from '@/components/shared/Text';

export interface ImageTile {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
}

export interface ImageTilesProps {
    title?: string;
    description?: string;
    items: readonly ImageTile[];
    surface?: 'none' | 'alt';
}

export function ImageTiles({ title, description, items, surface = 'none' }: ImageTilesProps) {
    return (
        <Section spacing="2xl" surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container>
                {title ? (
                    <Reveal>
                        <SectionHeading title={title} description={description} />
                    </Reveal>
                ) : null}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {items.map((item, index) => (
                        <Reveal key={item.title} delay={index * 100}>
                            <article className="group relative h-112.5 overflow-hidden rounded-xl">
                                <Image
                                    src={item.image}
                                    alt={item.imageAlt}
                                    fill
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div
                                    aria-hidden="true"
                                    className="from-scrim via-scrim/70 absolute inset-0 bg-linear-to-t via-45% to-transparent to-75%"
                                />

                                <div className="absolute inset-x-0 bottom-0 p-6 text-white transition-transform duration-500 group-hover:-translate-y-2">
                                    <Heading as="h3" size="h4" className="mb-2">
                                        {item.title}
                                    </Heading>
                                    <Text size="small" className="opacity-80">
                                        {item.description}
                                    </Text>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
