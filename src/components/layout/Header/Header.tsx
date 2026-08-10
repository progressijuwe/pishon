import Link from 'next/link';

import { Container } from '@/components/shared/Container';
import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/Button';
import { mainNav, primaryCta } from '@/config/site';
import type { NavItem } from '@/types';

import { ThemeToggle } from '../ThemeToggle';
import { HeaderShell, type HeaderVariant } from './HeaderShell';
import { NavMenu } from './NavMenu';
import { actionArrow } from '@/lib/action-arrow';

export interface HeaderProps {
    variant?: HeaderVariant;
    items?: readonly NavItem[];
    cta?: { label: string; href: string };
}

export function Header({ variant = 'overlay', items = mainNav, cta = primaryCta }: HeaderProps) {
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
                            <Button
                                variant="secondary"
                                asChild
                                className="hidden sm:inline-flex"
                                rightIcon={actionArrow(cta.href)}
                            >
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
