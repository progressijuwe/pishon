import Link from 'next/link';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Text } from '@/components/shared/Text';
import { Button } from '@/components/ui/Button';
import { mainNav } from '@/config/site';
import { ROUTES } from '@/constants/routes';

export default function NotFound() {
    return (
        <section className="bg-scrim on-scrim relative flex min-h-dvh items-center overflow-hidden text-white">
            <div
                aria-hidden="true"
                className="from-secondary absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] to-transparent opacity-10"
            />

            <Container className="relative z-10 w-full pt-20">
                <div className="mx-auto max-w-2xl text-center">
                    <Reveal>
                        <p className="text-display text-secondary leading-none font-bold">404</p>
                    </Reveal>

                    <Reveal delay={100}>
                        <Heading as="h1" size="h1" className="mt-6 mb-6 text-balance">
                            We couldn&apos;t find that page
                        </Heading>
                    </Reveal>

                    <Reveal delay={200}>
                        <Text balance className="mb-12 opacity-80">
                            The link may be broken, or the page may have moved. Head back to the
                            homepage, or pick up the trail from one of the sections below.
                        </Text>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
                            <Button
                                variant="secondary"
                                size="lg"
                                asChild
                                className="text-label h-12 px-8 transition-transform hover:scale-[1.03]"
                            >
                                <Link href={ROUTES.home}>Back to home</Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                                className="hover:text-scrim text-label h-12 border-2 border-white bg-transparent px-8 text-white transition-transform hover:scale-[1.03] hover:bg-white dark:border-white dark:bg-transparent dark:hover:bg-white"
                            >
                                <Link href="/contact">Contact us</Link>
                            </Button>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <nav aria-labelledby="not-found-links">
                            <h2
                                id="not-found-links"
                                className="text-caption mb-6 font-bold tracking-widest uppercase opacity-60"
                            >
                                Explore the site
                            </h2>

                            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                                {mainNav.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-small hover:text-secondary focus-visible:ring-ring rounded-md font-semibold transition-colors outline-none focus-visible:ring-[3px]"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
