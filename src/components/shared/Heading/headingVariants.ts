import { cva } from 'class-variance-authority';

export const headingVariants = cva('text-pretty', {
    variants: {
        size: {
            display: 'text-display',
            h1: 'text-h1',
            h2: 'text-h2',
            h3: 'text-h3',
            h4: 'text-h4',
        },

        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
        },

        muted: {
            true: 'text-muted-foreground',
            false: '',
        },
    },

    defaultVariants: {
        size: 'h2',
        muted: false,
    },
});
