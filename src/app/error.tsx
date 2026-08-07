'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Reveal } from '@/components/shared/Reveal';
import { Text } from '@/components/shared/Text';
import { Button } from '@/components/ui/Button';
import { isDevelopment } from '@/config/env';
import { ROUTES } from '@/constants/routes';

/**
 * Route-level error boundary. Must be a Client Component — React needs to catch
 * the error during render on the client.
 *
 * Rendered inside the root layout under the `overlay` header, so it uses the
 * same full-viewport `--scrim` band as `not-found`: on a light background the
 * header's white brand mark would be invisible.
 */
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        /* Replace with your error reporter (Sentry, etc.). `digest` is the
           server-side identifier Next.js logs, which is how you correlate this
           with the stack trace the user never sees. */
        console.error(error);
    }, [error]);

    return (
        <section className="bg-scrim relative flex min-h-dvh items-center overflow-hidden text-white">
            <div
                aria-hidden="true"
                className="from-destructive absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] to-transparent opacity-10"
            />

            <Container className="relative z-10 w-full pt-20">
                <div className="mx-auto max-w-2xl text-center">
                    <Reveal>
                        <p className="text-caption text-secondary mb-6 font-bold tracking-widest uppercase">
                            Something went wrong
                        </p>
                    </Reveal>

                    <Reveal delay={100}>
                        <Heading as="h1" size="h1" className="mb-6 text-balance">
                            This page didn&apos;t load
                        </Heading>
                    </Reveal>

                    <Reveal delay={200}>
                        <Text balance className="mb-12 opacity-80">
                            An unexpected error occurred on our side. Trying again may be enough —
                            if it keeps happening, get in touch and quote the reference below.
                        </Text>
                    </Reveal>

                    {/* The raw message can leak internals, so it's dev-only. In
                        production the digest is all the user needs to quote. */}
                    {isDevelopment ? (
                        <pre className="text-caption mb-12 max-w-full overflow-x-auto rounded-lg border border-white/10 bg-white/5 p-4 text-left">
                            {error.message}
                        </pre>
                    ) : error.digest ? (
                        <Text size="caption" className="mb-12 opacity-60">
                            Reference: {error.digest}
                        </Text>
                    ) : null}

                    <Reveal delay={300}>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button
                                variant="secondary"
                                size="lg"
                                onClick={reset}
                                className="text-label h-12 px-8 transition-transform hover:scale-[1.03]"
                            >
                                Try again
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                                className="hover:text-scrim text-label h-12 border-2 border-white bg-transparent px-8 text-white transition-transform hover:scale-[1.03] hover:bg-white dark:border-white dark:bg-transparent dark:hover:bg-white"
                            >
                                <Link href={ROUTES.home}>Back to home</Link>
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
