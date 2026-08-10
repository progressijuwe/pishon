import Link from 'next/link';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { Text } from '@/components/shared/Text';
import { Button } from '@/components/ui/Button';
import { actionArrow } from '@/lib/action-arrow';
import { cn } from '@/lib/utils';

export interface CtaAction {
    label: string;
    href: string;
    variant?: 'primary' | 'outline';
}

export interface CtaBandProps {
    title: string;
    description?: string;
    actions?: readonly CtaAction[];
}

export function CtaBand({ title, description, actions = [] }: CtaBandProps) {
    return (
        <Section spacing="hero" className="bg-scrim on-scrim relative overflow-hidden text-white">
            <div
                aria-hidden="true"
                className="from-secondary absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] to-transparent opacity-10"
            />

            <Container className="relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    <Reveal>
                        <Heading as="h2" size="h1" className="mb-6 text-balance">
                            {title}
                        </Heading>
                    </Reveal>

                    {description ? (
                        <Reveal delay={120}>
                            <Text balance className="mb-12 opacity-80">
                                {description}
                            </Text>
                        </Reveal>
                    ) : null}

                    {actions.length > 0 ? (
                        <Reveal delay={240}>
                            <div className="flex flex-col justify-center gap-6 sm:flex-row">
                                {actions.map((action) => (
                                    <Button
                                        key={action.label}
                                        variant={
                                            action.variant === 'outline' ? 'outline' : 'secondary'
                                        }
                                        size="lg"
                                        asChild
                                        rightIcon={actionArrow(action.href)}
                                        className={cn(
                                            'text-label h-12 px-12 transition-transform hover:scale-[1.03]',
                                            action.variant === 'outline' &&
                                                'hover:text-scrim border-2 border-white bg-transparent text-white hover:bg-white dark:border-white dark:bg-transparent dark:hover:bg-white',
                                        )}
                                    >
                                        <Link href={action.href}>{action.label}</Link>
                                    </Button>
                                ))}
                            </div>
                        </Reveal>
                    ) : null}
                </div>
            </Container>
        </Section>
    );
}
