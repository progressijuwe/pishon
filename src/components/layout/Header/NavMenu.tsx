'use client';

import { ChevronDownIcon, ChevronRightIcon, MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog as DialogPrimitive, VisuallyHidden } from 'radix-ui';
import { useCallback, useEffect, useId, useRef, useState } from 'react';

import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { useDisclosure, useMediaQuery } from '@/hooks';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types';

export interface NavMenuProps {
    items: readonly NavItem[];
    cta?: { label: string; href: string };
}

export function NavMenu({ items, cta }: NavMenuProps) {
    const { isOpen, setOpen, close } = useDisclosure();
    const pathname = usePathname();
    const previousPathname = useRef(pathname);

    const isDesktop = useMediaQuery('(min-width: 64rem)');

    const [expandedHref, setExpandedHref] = useState<string | null>(null);
    const submenuIdBase = useId();

    const closeMenu = useCallback(() => {
        close();
        setExpandedHref(null);
    }, [close]);

    const handleOpenChange = useCallback(
        (open: boolean) => {
            setOpen(open);
            if (!open) setExpandedHref(null);
        },
        [setOpen],
    );

    useEffect(() => {
        if (previousPathname.current === pathname) return;
        previousPathname.current = pathname;
        closeMenu();
    }, [pathname, closeMenu]);

    const expandedItem =
        items.find((item) => item.href === expandedHref && item.children?.length) ?? null;

    const submenuId = (item: NavItem) => `${submenuIdBase}-${item.href}`;

    const topLevelClasses = cn(
        'rounded-md font-semibold transition-colors outline-none',
        'hover:text-secondary focus-visible:ring-ring focus-visible:ring-[3px]',
        isDesktop ? 'text-h3' : 'text-h4',
    );

    function renderItem(item: NavItem) {
        const children = item.children ?? [];

        if (children.length === 0) {
            return (
                <li key={item.href}>
                    <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(topLevelClasses, 'block')}
                    >
                        {item.title}
                    </Link>
                </li>
            );
        }

        const isExpanded = expandedHref === item.href;

        return (
            <li key={item.href}>
                <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={submenuId(item)}
                    onClick={() => setExpandedHref(isExpanded ? null : item.href)}
                    className={cn(topLevelClasses, 'flex w-full items-center gap-3 text-left')}
                >
                    {item.title}
                    {isDesktop ? (
                        <ChevronRightIcon
                            aria-hidden="true"
                            className={cn(
                                'size-6 shrink-0 transition-transform duration-200',
                                isExpanded && 'translate-x-1',
                            )}
                        />
                    ) : (
                        <ChevronDownIcon
                            aria-hidden="true"
                            className={cn(
                                'size-5 shrink-0 transition-transform duration-200',
                                isExpanded && 'rotate-180',
                            )}
                        />
                    )}
                </button>

                {!isDesktop ? (
                    <div
                        inert={!isExpanded}
                        className={cn(
                            'ease-out-quart grid transition-all duration-300',
                            isExpanded
                                ? 'grid-rows-[1fr] opacity-100'
                                : 'grid-rows-[0fr] opacity-0',
                        )}
                    >
                        <div className="overflow-hidden">
                            <ul
                                id={submenuId(item)}
                                className={cn(
                                    'ease-out-quart flex flex-col gap-4 pt-4 pl-1 transition-transform duration-300',
                                    isExpanded ? 'translate-y-0' : '-translate-y-2',
                                )}
                            >
                                {children.map((child) => (
                                    <li key={child.href}>
                                        <Link
                                            href={child.href}
                                            onClick={closeMenu}
                                            className="text-body hover:text-secondary focus-visible:ring-ring block rounded-md transition-colors outline-none focus-visible:ring-[3px]"
                                        >
                                            {child.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : null}
            </li>
        );
    }

    const mainList = (
        <nav aria-label="Main">
            <ul className="flex flex-col gap-6">{items.map(renderItem)}</ul>
        </nav>
    );

    const ctaButton = cta ? (
        <Button variant="secondary" size="lg" fullWidth={!isDesktop} asChild>
            <Link href={cta.href} onClick={closeMenu}>
                {cta.label}
            </Link>
        </Button>
    ) : null;

    return (
        <DialogPrimitive.Root open={isOpen} onOpenChange={handleOpenChange}>
            <DialogPrimitive.Trigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="group-data-[solid=true]/header:text-foreground focus-visible:ring-ring cursor-pointer text-white hover:bg-white/10 focus-visible:ring-[3px]"
                    aria-label="Open menu"
                >
                    <MenuIcon />
                </Button>
            </DialogPrimitive.Trigger>

            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay className="bg-scrim/60 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 fixed inset-0 z-50 backdrop-blur-sm" />

                <DialogPrimitive.Content
                    className={cn(
                        'bg-scrim on-scrim data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col text-white shadow-xl duration-300',
                        isDesktop
                            ? 'data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top inset-x-0 top-0 h-dvh w-full'
                            : 'data-[state=open]:slide-in-from-end data-[state=closed]:slide-out-to-end inset-y-0 right-0 h-dvh w-full',
                    )}
                >
                    <VisuallyHidden.Root>
                        <DialogPrimitive.Title>Site navigation</DialogPrimitive.Title>
                    </VisuallyHidden.Root>

                    <div className="shrink-0 border-b border-white/10">
                        <Container className={cn(!isDesktop && 'px-6')}>
                            <div className="flex h-20 items-center justify-between gap-4">
                                <span className="text-h4 font-bold tracking-tight">
                                    {siteConfig.name}
                                </span>
                                <DialogPrimitive.Close asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="focus-visible:ring-ring cursor-pointer text-white hover:bg-white/10 focus-visible:ring-[3px]"
                                        aria-label="Close menu"
                                    >
                                        <XIcon />
                                    </Button>
                                </DialogPrimitive.Close>
                            </div>
                        </Container>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {isDesktop ? (
                            <Container className="grid grid-cols-2 gap-16 py-16">
                                {mainList}

                                <div>
                                    {expandedItem ? (
                                        <ul
                                            id={submenuId(expandedItem)}
                                            className="animate-in fade-in-0 slide-in-from-left-2 flex flex-col gap-5 border-l border-white/20 pl-8"
                                        >
                                            {(expandedItem.children ?? []).map((child) => (
                                                <li key={child.href}>
                                                    <Link
                                                        href={child.href}
                                                        onClick={closeMenu}
                                                        className="text-h4 hover:text-secondary focus-visible:ring-ring block rounded-md font-medium transition-colors outline-none focus-visible:ring-[3px]"
                                                    >
                                                        {child.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </div>
                            </Container>
                        ) : (
                            <div className="px-6 py-8">{mainList}</div>
                        )}
                    </div>

                    {ctaButton ? (
                        <div className="shrink-0 border-t border-white/10">
                            <Container className={cn('py-6', !isDesktop && 'px-6')}>
                                {ctaButton}
                            </Container>
                        </div>
                    ) : null}
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    );
}
