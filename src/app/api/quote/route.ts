import { NextResponse } from 'next/server';

import { sendEnquiryEmail } from '@/lib/mail';
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

    const quote = parsed.data;

    const outcome = await sendEnquiryEmail({
        subject: `RFQ — ${quote.product} — ${quote.quantity} ${quote.unit} — ${quote.company}`,
        heading: 'New quotation request',
        replyTo: quote.email,
        fields: [
            { label: 'Name', value: quote.fullName },
            { label: 'Job title', value: quote.jobTitle ?? '' },
            { label: 'Company', value: quote.company },
            { label: 'Email', value: quote.email },
            { label: 'Phone', value: quote.phone ?? '' },
            { label: 'State', value: quote.state },
            { label: 'Category', value: quote.category },
            { label: 'Product', value: quote.product },
            { label: 'Quantity', value: `${quote.quantity} ${quote.unit}` },
            { label: 'Specification', value: quote.specification ?? '' },
            { label: 'Delivery location', value: quote.deliveryLocation },
            { label: 'Port of discharge', value: quote.portOfDischarge ?? '' },
            { label: 'Shipping method', value: quote.shippingMethod },
            { label: 'Target delivery date', value: quote.targetDate ?? '' },
            { label: 'Packaging', value: quote.packaging },
            { label: 'Notes', value: quote.notes ?? '' },
        ],
    });

    if (outcome.status === 'not_configured') {
        console.warn('[quote] RESEND_API_KEY or ENQUIRY_INBOX is unset — request not delivered.');

        return NextResponse.json(
            {
                message:
                    'Our quotation system is not accepting requests yet. Please email your specifications directly and we will respond within one business day.',
                code: 'delivery_not_configured',
            },
            { status: 503 },
        );
    }

    if (outcome.status === 'failed') {
        console.error('[quote] delivery failed:', outcome.reason);

        return NextResponse.json(
            {
                message:
                    'We could not submit your request just now. Please try again, or email your specifications directly.',
                code: 'delivery_failed',
            },
            { status: 502 },
        );
    }

    return NextResponse.json({ data: null }, { status: 202 });
}
