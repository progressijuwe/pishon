import { NextResponse } from 'next/server';

import { sendEnquiryEmail } from '@/lib/mail';
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

    const enquiry = parsed.data;

    const outcome = await sendEnquiryEmail({
        subject: `Enquiry — ${enquiry.category} — ${enquiry.company}`,
        heading: 'New website enquiry',
        replyTo: enquiry.email,
        fields: [
            { label: 'Name', value: enquiry.fullName },
            { label: 'Company', value: enquiry.company },
            { label: 'Email', value: enquiry.email },
            { label: 'Phone', value: enquiry.phone ?? '' },
            { label: 'State', value: enquiry.state },
            { label: 'Category', value: enquiry.category },
            { label: 'Message', value: enquiry.message },
        ],
    });

    if (outcome.status === 'not_configured') {
        console.warn('[contact] RESEND_API_KEY or ENQUIRY_INBOX is unset — enquiry not delivered.');

        return NextResponse.json(
            {
                message:
                    'Our enquiry system is not accepting messages yet. Please email us directly and we will respond within one business day.',
                code: 'delivery_not_configured',
            },
            { status: 503 },
        );
    }

    if (outcome.status === 'failed') {
        console.error('[contact] delivery failed:', outcome.reason);

        return NextResponse.json(
            {
                message:
                    'We could not send your enquiry just now. Please try again, or email us directly.',
                code: 'delivery_failed',
            },
            { status: 502 },
        );
    }

    return NextResponse.json({ data: null }, { status: 202 });
}
