import {
    ClockIcon,
    HandshakeIcon,
    InfoIcon,
    LockIcon,
    MapPinIcon,
    MessageCircleIcon,
    PhoneIcon,
    ReceiptTextIcon,
    TruckIcon,
} from 'lucide-react';

import galleryOfficeImage from '@/assets/gallery-office.jpg';
import servicesIntroImage from '@/assets/services-intro.jpg';
import { ContactForm } from '@/components/forms/ContactForm';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Hero } from '@/components/sections/Hero';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Text } from '@/components/shared/Text';
import { siteConfig } from '@/config/site';
import { telHref, whatsappHref } from '@/lib/contact-links';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
    title: 'Contact',
    description:
        'Speak to our procurement and logistics specialists. Submit an enquiry with your specifications and receive a costed response within one business day.',
    path: '/contact',
});

export default function ContactPage() {
    return (
        <>
            <Hero
                title="Contact Us"
                description="Connect with our industrial experts to streamline your global procurement and logistics requirements."
                image={galleryOfficeImage}
                actions={[
                    { label: 'Send an Enquiry', href: '#enquiry' },
                    { label: 'Request a Quote', href: '/request-quote', variant: 'outline' },
                ]}
            />

            <MediaSplit
                title="Your Strategic Procurement Partner"
                body={[
                    'We understand that industrial downtime is not an option. Our team of logistics and procurement specialists is on hand to facilitate your global requirements.',
                ]}
                image={servicesIntroImage}
                imageAlt="A quality inspector measuring a steel gear with digital calipers in a parts warehouse."
                highlight={{
                    value: '24–48h',
                    description: 'Detailed response to every enterprise enquiry.',
                }}
            />

            <FeatureGrid
                surface="alt"
                columns={4}
                title="Global Departments"
                description="Tell us which division you need and your enquiry is routed straight to it."
                headingAlign="center"
                items={[
                    {
                        icon: <InfoIcon />,
                        title: 'General',
                        description: 'Corporate information and general business matters.',
                    },
                    {
                        icon: <ReceiptTextIcon />,
                        title: 'Sales & RFQ',
                        description: 'Requests for quotation and industrial part procurement.',
                    },
                    {
                        icon: <TruckIcon />,
                        title: 'Logistics',
                        description: 'Shipment tracking and customs compliance.',
                    },
                    {
                        icon: <HandshakeIcon />,
                        title: 'Partnership',
                        description:
                            'Producers and manufacturers looking to supply into our network.',
                    },
                ]}
            />

            <Section id="enquiry" spacing="2xl">
                <Container>
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
                        <div className="flex flex-col gap-10">
                            <SectionHeading
                                title="Enquiry Portal"
                                description="Complete the enquiry form and our technical team will review your specifications and respond with a comprehensive answer."
                            />

                            <ul className="flex flex-col gap-6">
                                <ContactDetail
                                    icon={<MapPinIcon />}
                                    label="Headquarters"
                                    lines={[
                                        '5 Osayi Street, off Ewah Road,',
                                        'Benin City, Edo State, Nigeria',
                                    ]}
                                />
                                <ContactDetail
                                    icon={<ClockIcon />}
                                    label="Business hours"
                                    lines={[
                                        'Monday – Friday: 08:00 – 18:00 (WAT)',
                                        'Saturday: by appointment',
                                    ]}
                                />
                                <ContactDetail
                                    icon={<PhoneIcon />}
                                    label="Telephone"
                                    lines={[siteConfig.phone]}
                                    href={telHref}
                                />
                                <ContactDetail
                                    icon={<MessageCircleIcon />}
                                    label="WhatsApp"
                                    lines={['Message our trade desk']}
                                    href={whatsappHref(
                                        `Hello ${siteConfig.name}, I have an enquiry.`,
                                    )}
                                />
                            </ul>

                            <p className="text-caption text-muted-foreground flex items-center gap-2">
                                <LockIcon aria-hidden="true" className="text-secondary size-4" />
                                Your details are transmitted over an encrypted connection and used
                                only to answer your enquiry.
                            </p>
                        </div>

                        <div className="bg-card border-border rounded-xl border p-6 shadow-lg md:p-10">
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </Section>

            <CtaBand
                title="Let's Build Long-Term Business Together"
                description="Send us your specification and our procurement officers will respond within one business day."
                actions={[
                    { label: 'Send an Enquiry', href: '#enquiry' },
                    {
                        label: 'Message on WhatsApp',
                        href: whatsappHref(`Hello ${siteConfig.name}, I have an enquiry.`),
                        variant: 'outline',
                    },
                ]}
            />
        </>
    );
}

function ContactDetail({
    icon,
    label,
    lines,
    href,
}: {
    icon: React.ReactNode;
    label: string;
    lines: readonly string[];
    href?: string;
}) {
    return (
        <li className="flex items-start gap-4">
            <span aria-hidden="true" className="text-secondary mt-1 [&_svg]:size-5">
                {icon}
            </span>

            <div>
                <Heading as="h3" size="h4" className="text-body mb-1 font-bold">
                    {label}
                </Heading>

                {lines.map((line) =>
                    href ? (
                        <a
                            key={line}
                            href={href}
                            className="text-secondary focus-ring block rounded-sm font-medium hover:underline"
                        >
                            {line}
                        </a>
                    ) : (
                        <Text key={line} size="small" muted>
                            {line}
                        </Text>
                    ),
                )}
            </div>
        </li>
    );
}
