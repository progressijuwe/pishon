import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Text } from '@/components/shared/Text';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export interface HeroAction {
    label: string;
    href: string;
    /** `outline` is the white-bordered pill, restated to read on a photograph. */
    variant?: 'primary' | 'outline';
}

export interface HeroProps {
    title: string;
    description?: string;
    image: StaticImageData;
    /** Leave empty for a decorative backdrop; set it when the image is the message. */
    imageAlt?: string;
    actions?: readonly HeroAction[];
    /** Eager-load the image. On by default — a hero is its page's LCP element. */
    priority?: boolean;
}

export function Hero({
    title,
    description,
    image,
    imageAlt = '',
    actions = [],
    priority = true,
}: HeroProps) {
    return (
        <section className="relative flex min-h-dvh items-center overflow-hidden">
            <Image
                src={image}
                alt={imageAlt}
                fill
                priority={priority}
                sizes="100vw"
                className="animate-hero-pan object-cover object-center"
            />

            <div
                aria-hidden="true"
                className="from-scrim/95 to-scrim/40 absolute inset-0 bg-linear-to-r"
            />

            <Container className="relative z-10 w-full pt-20">
                <div className="max-w-2xl text-white">
                    <Reveal>
                        <Heading as="h1" size="h3" className="md:text-h1 mb-6 text-balance">
                            {title}
                        </Heading>
                    </Reveal>

                    {description ? (
                        <Reveal delay={120}>
                            <Text size="body" balance className="mb-10 max-w-xl opacity-90">
                                {description}
                            </Text>
                        </Reveal>
                    ) : null}

                    {actions.length > 0 ? (
                        <Reveal delay={240}>
                            <div className="flex flex-wrap gap-4">
                                {actions.map((action) => (
                                    <Button
                                        key={action.label}
                                        variant={
                                            action.variant === 'outline' ? 'outline' : 'secondary'
                                        }
                                        size="lg"
                                        asChild
                                        className={cn(
                                            'text-label h-12 px-8 transition-transform hover:scale-[1.03]',
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
        </section>
    );
}
