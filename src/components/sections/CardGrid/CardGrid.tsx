import { ChevronRightIcon } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Text } from '@/components/shared/Text';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

export interface CardGridItem {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
    action?: { label: string; href: string };
}

export interface CardGridProps {
    title?: string;
    description?: string;
    items: readonly CardGridItem[];
    columns?: 2 | 3 | 4;
    surface?: 'none' | 'alt';
}

/* Spelled out rather than interpolated — Tailwind scans source text, so a
   constructed class name like `md:grid-cols-${n}` never reaches the stylesheet. */
const COLUMN_CLASSES = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
} as const;

export function CardGrid({
    title,
    description,
    items,
    columns = 3,
    surface = 'none',
}: CardGridProps) {
    return (
        <Section spacing="2xl" surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container>
                {title ? (
                    <Reveal>
                        <SectionHeading title={title} description={description} align="center" />
                    </Reveal>
                ) : null}

                <div className={cn('grid grid-cols-1 gap-6', COLUMN_CLASSES[columns])}>
                    {items.map((item, index) => (
                        <Reveal key={item.title} delay={index * 100} className="h-full">
                            <Card className="group h-full overflow-hidden border-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                                <div className="relative h-64 shrink-0 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        fill
                                        sizes="(min-width: 768px) 33vw, 100vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <CardContent className="flex-1 p-6">
                                    <Heading as="h3" size="h4" className="mb-4">
                                        {item.title}
                                    </Heading>
                                    <Text size="small" muted>
                                        {item.description}
                                    </Text>
                                </CardContent>

                                {item.action ? (
                                    <CardFooter className="px-6 pb-6">
                                        <Link
                                            href={item.action.href}
                                            className="text-secondary focus-visible:ring-ring inline-flex items-center gap-1 rounded-md font-bold outline-none focus-visible:ring-[3px]"
                                        >
                                            {item.action.label}
                                            <ChevronRightIcon
                                                aria-hidden="true"
                                                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </Link>
                                    </CardFooter>
                                ) : null}
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
