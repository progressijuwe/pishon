'use client';

import { ChevronDownIcon } from 'lucide-react';
import { useId, type ComponentProps, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps extends Omit<ComponentProps<'select'>, 'id' | 'children'> {
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
    options: readonly SelectOption[];
    placeholder?: string;
    id?: string;
}

export function Select({
    className,
    label,
    description,
    error,
    options,
    placeholder,
    id: idProp,
    'aria-describedby': describedByProp,
    ...props
}: SelectProps) {
    const generatedId = useId();
    const id = idProp ?? generatedId;
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;

    const showDescription = Boolean(description) && !error;

    const describedBy =
        [describedByProp, showDescription ? descriptionId : null, error ? errorId : null]
            .filter(Boolean)
            .join(' ') || undefined;

    return (
        <div className="flex w-full flex-col gap-1.5">
            {label ? (
                <label htmlFor={id} className="text-small text-foreground font-medium">
                    {label}
                </label>
            ) : null}

            <div className="relative">
                <select
                    id={id}
                    data-slot="select"
                    aria-invalid={error ? true : undefined}
                    aria-describedby={describedBy}
                    className={cn(
                        'border-input bg-background text-foreground flex h-9 w-full appearance-none rounded-lg border px-3 py-1 pr-9 text-base shadow-sm transition-colors md:text-sm',
                        'focus-visible:border-ring focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px]',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
                        className,
                    )}
                    {...props}
                >
                    {placeholder ? (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    ) : null}

                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <ChevronDownIcon
                    aria-hidden="true"
                    className="text-muted-foreground pointer-events-none absolute inset-y-0 right-3 my-auto size-4"
                />
            </div>

            {showDescription ? (
                <p id={descriptionId} className="text-caption text-muted-foreground">
                    {description}
                </p>
            ) : null}

            {error ? (
                <p id={errorId} role="alert" className="text-caption text-destructive font-medium">
                    {error}
                </p>
            ) : null}
        </div>
    );
}
