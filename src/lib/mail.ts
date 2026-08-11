import { Resend } from 'resend';

import { env } from '@/config/env';
import { siteConfig } from '@/config/site';

export type MailOutcome =
    | { status: 'sent'; id?: string }
    | { status: 'not_configured' }
    | { status: 'failed'; reason: string };

export interface EnquiryField {
    label: string;
    value: string;
}

export interface EnquiryEmail {
    subject: string;
    heading: string;
    fields: readonly EnquiryField[];
    replyTo?: string;
}

const DEFAULT_FROM = `${siteConfig.name} Website <onboarding@resend.dev>`;

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function renderHtml({ heading, fields }: EnquiryEmail) {
    const rows = fields
        .map(({ label, value }) => {
            const shown = value.trim() === '' ? '—' : escapeHtml(value).replace(/\n/g, '<br>');
            return `<tr>
                <td style="padding:10px 16px 10px 0;vertical-align:top;color:#475569;font-size:14px;white-space:nowrap;">${escapeHtml(label)}</td>
                <td style="padding:10px 0;vertical-align:top;color:#0f172a;font-size:15px;font-weight:500;">${shown}</td>
            </tr>`;
        })
        .join('');

    return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f8fafc;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #cbd5e1;border-radius:12px;border-collapse:separate;">
        <tr><td style="padding:24px 28px;background:#0f2747;border-radius:12px 12px 0 0;">
            <div style="color:#ffffff;font-size:18px;font-weight:700;">${escapeHtml(heading)}</div>
            <div style="color:#b2c7f0;font-size:13px;margin-top:4px;">${escapeHtml(siteConfig.legalName)}</div>
        </td></tr>
        <tr><td style="padding:8px 28px 24px;">
            <table role="presentation" style="width:100%;border-collapse:collapse;">${rows}</table>
        </td></tr>
    </table>
</body></html>`;
}

function renderText({ heading, fields }: EnquiryEmail) {
    const body = fields
        .map(({ label, value }) => `${label}: ${value.trim() === '' ? '—' : value}`)
        .join('\n');
    return `${heading}\n${'='.repeat(heading.length)}\n\n${body}\n`;
}

export async function sendEnquiryEmail(email: EnquiryEmail): Promise<MailOutcome> {
    const { RESEND_API_KEY, ENQUIRY_INBOX, ENQUIRY_FROM } = env;

    if (!RESEND_API_KEY || !ENQUIRY_INBOX) return { status: 'not_configured' };

    try {
        const resend = new Resend(RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
            from: ENQUIRY_FROM ?? DEFAULT_FROM,
            to: [ENQUIRY_INBOX],
            subject: email.subject,
            html: renderHtml(email),
            text: renderText(email),
            ...(email.replyTo ? { replyTo: email.replyTo } : {}),
        });

        if (error) return { status: 'failed', reason: error.message };

        return { status: 'sent', id: data?.id };
    } catch (cause) {
        return {
            status: 'failed',
            reason: cause instanceof Error ? cause.message : 'Unknown error',
        };
    }
}
