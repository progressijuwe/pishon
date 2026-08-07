import type { ReactNode } from 'react';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { cn } from '@/lib/utils';

export interface Statement {
    icon?: ReactNode;
    title: string;
    /** The claim itself, set large — this is the card's payload, not a caption. */
    statement: string;
    /** Inverts the card to the brand navy. Use on one of a pair, not both. */
    emphasis?: boolean;
}

export interface StatementCardsProps {
    items: readonly Statement[];
    surface?: 'none' | 'alt';
}

/**
 * A pair of tall cards carrying a single sentence each — mission and vision,
 * promise and proof.
 *
 * Not `FeatureGrid`: these are two statements given room to breathe rather than
 * a row of equal features, the type is set at heading size, and one card
 * inverts to carry more weight than its neighbour.
 */
export function StatementCards({ items, surface = 'none' }: StatementCardsProps) {
    return (
        <Section spacing="2xl" surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {items.map((item, index) => (
                        <Reveal key={item.title} delay={index * 120} className="h-full">
                            <div
                                className={cn(
                                    'flex h-full min-h-60 flex-col justify-between rounded-xl p-6 md:min-h-100',
                                    item.emphasis
                                        ? 'bg-scrim text-white'
                                        : 'border-border bg-muted text-foreground border',
                                )}
                            >
                                <div>
                                    {item.icon ? (
                                        <div
                                            aria-hidden="true"
                                            className="text-secondary mb-6 [&_svg]:size-12"
                                        >
                                            {item.icon}
                                        </div>
                                    ) : null}

                                    <Heading as="h2" size="h3" className="mb-6">
                                        {item.title}
                                    </Heading>
                                </div>

                                <p className="text-body md:text-h4 leading-tight font-semibold text-balance">
                                    {item.statement}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
