import { QuoteIcon } from 'lucide-react';

import { Container } from '@/components/shared/Container';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Text } from '@/components/shared/Text';

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    /** Falls back to the author's initials. */
    initials?: string;
}

export interface TestimonialGridProps {
    title?: string;
    items: readonly Testimonial[];
    surface?: 'none' | 'alt';
}

function initialsOf(name: string) {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? '')
        .join('');
}

export function TestimonialGrid({ title, items, surface = 'alt' }: TestimonialGridProps) {
    return (
        <Section spacing="2xl" surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container>
                {title ? (
                    <Reveal>
                        <SectionHeading title={title} align="center" />
                    </Reveal>
                ) : null}

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {items.map((item, index) => (
                        <Reveal key={item.author} delay={index * 120} className="h-full">
                            <figure className="border-border bg-card h-full rounded-xl border p-12 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <QuoteIcon
                                    aria-hidden="true"
                                    className="text-secondary mb-6 size-10"
                                />

                                <blockquote className="text-body mb-12 italic">
                                    {item.quote}
                                </blockquote>

                                <figcaption className="flex items-center gap-6">
                                    <div
                                        aria-hidden="true"
                                        className="bg-secondary text-secondary-foreground flex size-12 shrink-0 items-center justify-center rounded-full font-bold"
                                    >
                                        {item.initials ?? initialsOf(item.author)}
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.author}</div>
                                        <Text size="caption" muted>
                                            {item.role}
                                        </Text>
                                    </div>
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
