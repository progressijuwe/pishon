import { ArrowRightIcon } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { Text } from '@/components/shared/Text';
import { cn } from '@/lib/utils';

export interface MediaSplitHighlight {
    value: string;
    description: string;
}

export interface MediaSplitProps {
    title: string;
    /** One string per paragraph. */
    body?: readonly string[];
    image: StaticImageData;
    imageAlt: string;
    action?: { label: string; href: string };
    /** Card overlapping the image's corner. Two-column layouts only. */
    highlight?: MediaSplitHighlight;
    reverse?: boolean;
    surface?: 'none' | 'alt';
}

export function MediaSplit({
    title,
    body = [],
    image,
    imageAlt,
    action,
    highlight,
    reverse = false,
    surface = 'none',
}: MediaSplitProps) {
    return (
        <Section spacing="2xl" surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container>
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-30">
                    <Reveal
                        from={reverse ? 'right' : 'left'}
                        className={cn('relative', reverse && 'lg:order-2')}
                    >
                        <div className="group relative aspect-4/5 overflow-hidden rounded-xl shadow-xl">
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {highlight ? (
                            <div className="bg-primary text-primary-foreground absolute -right-12 -bottom-12 hidden max-w-70 rounded-xl p-12 lg:block">
                                <div className="text-h3 mb-1">{highlight.value}</div>
                                <Text size="small" className="opacity-80">
                                    {highlight.description}
                                </Text>
                            </div>
                        ) : null}
                    </Reveal>

                    <Reveal
                        from={reverse ? 'left' : 'right'}
                        delay={120}
                        className={cn('flex flex-col gap-6', reverse && 'lg:order-1')}
                    >
                        <Heading as="h2" size="h3" className="md:text-h2 text-balance">
                            {title}
                        </Heading>

                        {body.map((paragraph) => (
                            <Text key={paragraph.slice(0, 32)} muted>
                                {paragraph}
                            </Text>
                        ))}

                        {action ? (
                            <div className="pt-2">
                                <Link
                                    href={action.href}
                                    className="text-secondary focus-visible:ring-ring inline-flex items-center gap-2 rounded-md font-semibold transition-all outline-none hover:gap-4 hover:opacity-80 focus-visible:ring-[3px]"
                                >
                                    {action.label}
                                    <ArrowRightIcon aria-hidden="true" className="size-5" />
                                </Link>
                            </div>
                        ) : null}
                    </Reveal>
                </div>
            </Container>
        </Section>
    );
}
