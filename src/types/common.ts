import type { ComponentPropsWithoutRef, ElementType } from 'react';

export type PolymorphicProps<T extends ElementType, Own = object> = Own &
    Omit<ComponentPropsWithoutRef<T>, keyof Own | 'as'> & {
        as?: T;
    };

export interface NavItem {
    title: string;
    href: string;
    external?: boolean;
    disabled?: boolean;
    children?: readonly NavItem[];
}
