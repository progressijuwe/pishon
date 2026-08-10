import { NextResponse } from 'next/server';

import { contactSchema } from '@/validators/contact';

export async function POST(request: Request) {
    let payload: unknown;

    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ message: 'Expected a JSON body.' }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(payload);

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

    const inbox = process.env.CONTACT_INBOX;

    if (!inbox) {
        console.warn('[contact] CONTACT_INBOX is not set — enquiry was not delivered.');

        return NextResponse.json(
            {
                message:
                    'Our enquiry system is not accepting messages yet. Please email us directly and we will respond within one business day.',
                code: 'delivery_not_configured',
            },
            { status: 503 },
        );
    }

    return NextResponse.json({ data: null }, { status: 202 });
}
