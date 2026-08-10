import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

import type { buttonVariants } from './buttonVariants';

export interface ButtonProps
    extends Omit<ComponentProps<'button'>, 'color'>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;

    leftIcon?: ReactNode;

    rightIcon?: ReactNode;

    isLoading?: boolean;

    loadingLabel?: string | null;
}
