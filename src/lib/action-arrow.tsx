import { ArrowDownIcon, ArrowRightIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export function actionArrow(href: string): ReactNode {
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return undefined;

    if (href.startsWith('#')) {
        return (
            <ArrowDownIcon
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/button:translate-y-0.5"
            />
        );
    }

    return (
        <ArrowRightIcon
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/button:translate-x-1"
        />
    );
}
