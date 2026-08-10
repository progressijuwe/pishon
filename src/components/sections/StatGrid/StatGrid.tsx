import { Container } from '@/components/shared/Container';
import { CountUp } from '@/components/shared/CountUp';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { Text } from '@/components/shared/Text';
import { cn } from '@/lib/utils';

export interface Stat {
    value: string;
    label: string;
    description?: string;
}

export interface StatGridProps {
    stats: readonly Stat[];
    columns?: 3 | 4 | 5;
    size?: 'display' | 'compact';
    surface?: 'none' | 'alt';
}

const COLUMN_CLASSES = {
    3: 'md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-5',
} as const;

export function StatGrid({
    stats,
    columns = 3,
    size = 'display',
    surface = 'none',
}: StatGridProps) {
    const isCompact = size === 'compact';

    return (
        <Section spacing={isCompact ? 'xl' : '2xl'} surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container>
                <dl className={cn('grid grid-cols-1 gap-12 text-center', COLUMN_CLASSES[columns])}>
                    {stats.map((stat, index) => (
                        <Reveal key={stat.label} delay={index * 120}>
                            <div className="flex flex-col-reverse">
                                <dt
                                    className={cn(
                                        'text-secondary mb-1 font-semibold',
                                        isCompact
                                            ? 'text-caption tracking-wider uppercase'
                                            : 'text-h3',
                                    )}
                                >
                                    {stat.label}
                                </dt>
                                <dd
                                    className={cn(
                                        'text-primary mb-4 leading-none',
                                        isCompact ? 'text-h2' : 'text-display',
                                    )}
                                >
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
