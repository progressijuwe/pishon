import { Container } from '@/components/shared/Container';
import { CountUp } from '@/components/shared/CountUp';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { Text } from '@/components/shared/Text';

export interface Stat {
    value: string;
    label: string;
    description?: string;
}

export interface StatGridProps {
    stats: readonly Stat[];
    surface?: 'none' | 'alt';
}

/**
 * Headline figures as a definition list. `flex-col-reverse` shows the value
 * above its label while the reading order stays label-then-value for assistive
 * technology.
 */
export function StatGrid({ stats, surface = 'none' }: StatGridProps) {
    return (
        <Section spacing="2xl" surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container>
                <dl className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <Reveal key={stat.label} delay={index * 120}>
                            <div className="flex flex-col-reverse">
                                <dt className="text-h3 text-secondary mb-1 font-semibold">
                                    {stat.label}
                                </dt>
                                <dd className="text-display text-primary mb-4 leading-none">
                                    <CountUp value={stat.value} />
                                </dd>
                            </div>

                            {stat.description ? (
                                <Text muted balance>
                                    {stat.description}
                                </Text>
                            ) : null}
                        </Reveal>
                    ))}
                </dl>
            </Container>
        </Section>
    );
}
