import { ChevronRightIcon } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Text } from '@/components/shared/Text';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

export interface CardGridItem {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
    badge?: string;
    status?: string;
    action?: { label: string; href: string };
}

export interface CardGridProps {
    id?: string;
    title?: string;
    description?: string;
    action?: { label: string; href: string };
    items: readonly CardGridItem[];
    columns?: 2 | 3 | 4;
    mediaHeight?: 'tall' | 'short';
    surface?: 'none' | 'alt';
}

const COLUMN_CLASSES = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
} as const;

export function CardGrid({
    id,
    title,
    description,
    action,
    items,
    columns = 3,
    mediaHeight = 'tall',
    surface = 'none',
}: CardGridProps) {
    return (
        <Section id={id} spacing="2xl" surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container>
                {title ? (
                    <Reveal>
                        <SectionHeading
                            title={title}
                            description={description}
                            align={action ? 'start' : 'center'}
                            aside={
                                action ? (
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        asChild
                                        className="h-12 px-8"
                                    >
                                        <Link href={action.href}>{action.label}</Link>
                                    </Button>
                                ) : undefined
                            }
                        />
                    </Reveal>
                ) : null}

                <div className={cn('grid grid-cols-1 gap-6', COLUMN_CLASSES[columns])}>
                    {items.map((item, index) => (
                        <Reveal key={item.title} delay={index * 100} className="h-full">
                            <Card className="group h-full overflow-hidden border-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                                <div
                                    className={cn(
                                        'relative shrink-0 overflow-hidden',
                                        mediaHeight === 'short' ? 'h-48' : 'h-64',
                                    )}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        fill
                                        sizes="(min-width: 768px) 33vw, 100vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {item.status ? (
                                        <span className="bg-success/90 text-success-foreground text-caption absolute top-4 right-4 rounded-full px-3 py-1 font-semibold backdrop-blur-sm">
                                            {item.status}
                                        </span>
                                    ) : null}

                                    {item.badge ? (
                                        <span className="border-secondary text-secondary text-caption bg-background/80 absolute top-4 left-4 shrink-0 rounded border px-2 py-1 font-semibold backdrop-blur-sm">
                                            {item.badge}
                                        </span>
                                    ) : null}
                                </div>

                                <CardContent className="flex-1 p-6">
                                    <div className="mb-4 flex items-start justify-between gap-3">
                                        <Heading as="h3" size="h4">
                                            {item.title}
                                        </Heading>
                                    </div>

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
