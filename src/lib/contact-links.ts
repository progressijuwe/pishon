import { siteConfig } from '@/config/site';

const digits = (value: string) => value.replace(/\D/g, '');

export const telHref = `tel:+${digits(siteConfig.phone)}`;

export const mailHref = `mailto:${siteConfig.email}`;

export function whatsappHref(message?: string) {
    const base = `https://wa.me/${digits(siteConfig.phone)}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const isContactNumberConfigured = /[1-9]/.test(digits(siteConfig.phone).slice(3));
