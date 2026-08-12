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
                <ul className={cn('grid grid-cols-1 gap-12 text-center', COLUMN_CLASSES[columns])}>
                    {stats.map((stat, index) => (
                        <Reveal as="li" key={stat.label} delay={index * 120}>
                            <div className="flex flex-col-reverse">
                                <span
                                    className={cn(
                                        'text-secondary mb-1 block font-semibold',
                                        isCompact
                                            ? 'text-caption tracking-wider uppercase'
                                            : 'text-h3',
                                    )}
                                >
                                    {stat.label}
                                </span>
                                <span
                                    className={cn(
                                        'text-primary mb-4 block leading-none',
                                        isCompact ? 'text-h2' : 'text-display',
                                    )}
                                >
                                    <CountUp value={stat.value} />
                                </span>
                            </div>

                            {stat.description ? (
                                <Text muted balance>
                                    {stat.description}
                                </Text>
                            ) : null}
                        </Reveal>
                    ))}
                </ul>
            </Container>
        </Section>
    );
}
