import { MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/shared/Container';
import { Text } from '@/components/shared/Text';
import { footerNav, siteConfig } from '@/config/site';
import { mailHref, telHref, whatsappHref } from '@/lib/contact-links';

const SOCIAL_LINKS = [
    {
        label: 'Chat on WhatsApp',
        href: whatsappHref(`Hello ${siteConfig.name}, I have an enquiry.`),
        Icon: MessageCircleIcon,
    },
    { label: 'Email us', href: mailHref, Icon: MailIcon },
    { label: 'Call us', href: telHref, Icon: PhoneIcon },
] as const;

export function Footer() {
    return (
        <footer className="bg-scrim on-scrim mt-auto text-white">
            <Container>
                <div className="grid grid-cols-1 gap-12 py-20 sm:grid-cols-2 lg:grid-cols-6">
                    <div className="lg:col-span-2">
                        <div className="text-h4 mb-6 font-bold tracking-tight">
                            {siteConfig.name}
                        </div>

                        <Text size="small" className="mb-12 max-w-xs opacity-70">
                            {siteConfig.description}
                        </Text>

                        <ul className="flex gap-6">
                            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        aria-label={label}
                                        className="hover:text-secondary focus-visible:ring-ring inline-flex rounded-md p-1 transition-all duration-300 outline-none hover:-translate-y-0.5 focus-visible:ring-[3px]"
                                    >
                                        <Icon aria-hidden="true" className="size-6" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {footerNav.map((group) => (
                        <nav key={group.title} aria-labelledby={`footer-${group.title}`}>
                            <h2 id={`footer-${group.title}`} className="text-body mb-6 font-bold">
                                {group.title}
                            </h2>

                            <ul className="flex flex-col gap-4 opacity-80">
                                {group.items.map((item) => (
                                    <li key={`${group.title}-${item.title}`}>
                                        <Link
                                            href={item.href}
                                            className="text-small hover:text-secondary focus-visible:ring-ring inline-block rounded-md transition-all duration-300 outline-none hover:translate-x-1 focus-visible:ring-[3px]"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                <div className="border-t border-white/10 py-12 text-center opacity-60">
                    <Text size="small">
                        &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights
                        reserved.
                    </Text>
                </div>
            </Container>
        </footer>
    );
}
