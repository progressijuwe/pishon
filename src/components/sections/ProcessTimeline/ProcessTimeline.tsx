import { Container } from '@/components/shared/Container';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Text } from '@/components/shared/Text';

export interface ProcessStep {
    title: string;
    description: string;
}

export interface ProcessTimelineProps {
    title?: string;
    description?: string;
    steps: readonly ProcessStep[];
    surface?: 'none' | 'alt';
}

/**
 * A numbered sequence along a horizontal rail. The rail scrolls rather than
 * wrapping so the order reads unambiguously, and it's an `<ol>` underneath so
 * the sequence survives without the visual rail.
 */
export function ProcessTimeline({
    title,
    description,
    steps,
    surface = 'alt',
}: ProcessTimelineProps) {
    return (
        <Section
            spacing="2xl"
            surface={surface === 'alt' ? 'alt' : 'none'}
            className="overflow-hidden"
        >
            <Container>
                {title ? (
                    <Reveal>
                        <SectionHeading title={title} description={description} />
                    </Reveal>
                ) : null}

                <div className="relative">
                    <span
                        aria-hidden="true"
                        className="bg-border absolute top-8 right-0 left-0 hidden h-0.5 md:block"
                    />

                    {/* Revealed as one block rather than per step: a step scrolled
                        out of the rail horizontally never intersects the viewport,
                        so a per-step observer leaves it blank until dragged into
                        view. */}
                    <Reveal>
                        <ol className="flex snap-x scrollbar-none gap-12 overflow-x-auto pb-12">
                            {steps.map((step, index) => (
                                <li
                                    key={step.title}
                                    className="group relative w-50 shrink-0 snap-start"
                                >
                                    <div className="bg-primary text-primary-foreground group-hover:bg-secondary relative z-10 mb-6 flex size-16 items-center justify-center rounded-full font-bold transition-all duration-300 group-hover:scale-110">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <h3 className="text-body mb-2 font-bold">{step.title}</h3>
                                    <Text size="caption" muted>
                                        {step.description}
                                    </Text>
                                </li>
                            ))}
                        </ol>
                    </Reveal>
                </div>
            </Container>
        </Section>
    );
}
