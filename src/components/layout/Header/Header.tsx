import Link from 'next/link';

import { Container } from '@/components/shared/Container';
import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/Button';
import { mainNav } from '@/config/site';
import type { NavItem } from '@/types';

import { ThemeToggle } from '../ThemeToggle';
import { HeaderShell, type HeaderVariant } from './HeaderShell';
import { NavMenu } from './NavMenu';

export interface HeaderProps {
    /** `overlay` floats over a hero and needs a dark first section; `solid` is sticky and opaque. */
    variant?: HeaderVariant;
    items?: readonly NavItem[];
    cta?: { label: string; href: string };
}

/**
 * The bar carries no links at any width — all navigation lives in `NavMenu`.
 */
export function Header({ variant = 'overlay', items = mainNav, cta }: HeaderProps) {
    return (
        <HeaderShell variant={variant}>
            <Container>
                <div className="flex h-20 items-center justify-between gap-4">
                    <Logo className="group-data-[solid=true]/header:text-foreground text-white transition-colors duration-300" />

                    <div className="flex items-center gap-2">
                        <span className="group-data-[solid=true]/header:text-foreground text-white transition-colors duration-300">
                            <ThemeToggle />
                        </span>
                        {cta ? (
                            <Button variant="secondary" asChild className="hidden sm:inline-flex">
                                <Link href={cta.href}>{cta.label}</Link>
                            </Button>
                        ) : null}

                        <NavMenu items={items} cta={cta} />
                    </div>
                </div>
            </Container>
        </HeaderShell>
    );
}
