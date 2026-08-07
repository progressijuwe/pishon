import type { ReactNode } from 'react';

import { Heading } from '@/components/shared/Heading';
import { Text } from '@/components/shared/Text';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'start' | 'center';
    /**
     * Right-hand slot — a "view all" button, or a paragraph balancing the
     * title. Supplying it switches the block to a split row on desktop and
     * forces left alignment, since a centred title beside a right-hand action
     * reads as a mistake.
     */
    aside?: ReactNode;
    as?: 'h2' | 'h3';
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'start',
    aside,
    as = 'h2',
}: SectionHeadingProps) {
    const isCentered = align === 'center' && !aside;

    const titleBlock = (
        <div>
            {eyebrow ? (
                <span className="text-secondary text-small mb-2 block font-bold tracking-widest uppercase">
                    {eyebrow}
                </span>
            ) : null}

            <Heading as={as} size="h2" className="text-balance">
                {title}
            </Heading>

            {description && !aside ? (
                <Text muted balance className={cn('mt-4 max-w-2xl', isCentered && 'mx-auto')}>
                    {description}
                </Text>
            ) : null}
        </div>
    );

    if (!aside) {
        return <div className={cn('mb-20', isCentered && 'text-center')}>{titleBlock}</div>;
    }

    return (
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {titleBlock}
            <div className="shrink-0">{aside}</div>
        </div>
    );
}
