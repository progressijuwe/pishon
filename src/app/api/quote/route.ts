import { NextResponse } from 'next/server';

import { quoteSchema } from '@/validators/quote';

export async function POST(request: Request) {
    let payload: unknown;

    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ message: 'Expected a JSON body.' }, { status: 400 });
    }

    const parsed = quoteSchema.safeParse(payload);

    if (!parsed.success) {
        const errors: Record<string, string[]> = {};

        for (const issue of parsed.error.issues) {
            const field = issue.path.join('.');
            errors[field] = [...(errors[field] ?? []), issue.message];
        }

        return NextResponse.json(
            { message: 'Some details need checking.', code: 'validation_error', errors },
            { status: 422 },
        );
    }

    const inbox = process.env.QUOTE_INBOX ?? process.env.CONTACT_INBOX;

    if (!inbox) {
        console.warn('[quote] QUOTE_INBOX is not set — quotation request was not delivered.');

        return NextResponse.json(
            {
                message:
                    'Our quotation system is not accepting requests yet. Please email your specifications directly and we will respond within one business day.',
                code: 'delivery_not_configured',
            },
            { status: 503 },
        );
    }

    return NextResponse.json({ data: null }, { status: 202 });
}
