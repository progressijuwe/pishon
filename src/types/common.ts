import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export interface BaseProps {
    className?: string;
    children?: ReactNode;
}

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

export type RequireKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type LooseAutocomplete<T extends string> = T | (string & {});

export type Nullable<T> = T | null;
