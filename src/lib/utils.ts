import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * tailwind-merge resolves conflicts by knowing which utilities belong to the
 * same group. It ships with Tailwind's default scale, so it reads `text-lg` as
 * a font size — but the semantic sizes in `tokens.css` (`text-h2`, `text-body`,
 * `text-label`, …) aren't in that list, and an unrecognised `text-*` is assumed
 * to be a *colour*.
 *
 * Left unregistered, `cn('text-body', 'text-muted-foreground')` collapses to
 * just the colour and the size is silently dropped — which is exactly what
 * `<Text muted>` and `<Heading muted>` produce. Declaring them here keeps size
 * and colour in separate groups so both survive.
 *
 * Any new `--text-*` token must be added to this list.
 */
const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            'font-size': [
                { text: ['display', 'h1', 'h2', 'h3', 'h4', 'body', 'small', 'caption', 'label'] },
            ],
        },
    },
});

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
