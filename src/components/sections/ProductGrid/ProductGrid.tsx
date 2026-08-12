import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';
import { actionArrow } from '@/lib/action-arrow';

export interface ProductSpec {
    label: string;
    value: string;
}

export interface ProductGridItem {
    title: string;
    image: StaticImageData;
    imageAlt: string;
    specs?: readonly ProductSpec[];
    action?: { label: string; href: string };
}

export interface ProductGridProps {
    eyebrow?: string;
    title?: string;
    action?: { label: string; href: string };
    items: readonly ProductGridItem[];
    surface?: 'none' | 'alt';
}

export function ProductGrid({ eyebrow, title, action, items, surface = 'none' }: ProductGridProps) {
    return (
        <Section spacing="2xl" surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container>
                {title ? (
                    <Reveal>
                        <SectionHeading
                            eyebrow={eyebrow}
                            title={title}
                            aside={
                                action ? (
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        asChild
                                        rightIcon={actionArrow(action.href)}
                                        className="h-12 px-8 transition-transform hover:scale-[1.03]"
                                    >
                                        <Link href={action.href}>{action.label}</Link>
                                    </Button>
                                ) : undefined
                            }
                        />
                    </Reveal>
                ) : null}

                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {items.map((item, index) => (
                        <Reveal key={item.title} delay={index * 100} className="h-full">
                            <article className="border-border bg-card group flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <div className="relative mb-6 aspect-square overflow-hidden rounded-lg">
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        fill
                                        sizes="(min-width: 768px) 33vw, 100vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <Heading as="h3" size="h4" className="mb-2">
                                    {item.title}
                                </Heading>

                                {item.specs?.length ? (
                                    <ul className="mb-6 flex-1">
                                        {item.specs.map((spec) => (
                                            <li
                                                key={spec.label}
                                                className="border-border text-caption flex justify-between gap-4 border-b py-2"
                                            >
                                                <span className="text-muted-foreground">
                                                    {spec.label}
                                                </span>
                                                <span className="text-right font-semibold">
                                                    {spec.value}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}

                                {item.action ? (
                                    <Button asChild fullWidth className="text-label mt-auto h-11">
                                        <Link href={item.action.href}>{item.action.label}</Link>
                                    </Button>
                                ) : null}
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
