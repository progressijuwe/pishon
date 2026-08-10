import {
    FileTextIcon,
    GlobeIcon,
    HeadsetIcon,
    LockIcon,
    ShieldCheckIcon,
    UnlockIcon,
} from 'lucide-react';

import aboutFacilityImage from '@/assets/about-facility.jpg';
import servicesQaImage from '@/assets/services-qa.jpg';
import { QuoteWizard } from '@/components/forms/QuoteWizard';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Hero } from '@/components/sections/Hero';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { Container } from '@/components/shared/Container';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { createMetadata } from '@/lib/seo';
import { faqs } from '@/config/faqs';

export const metadata = createMetadata({
    title: 'Request a Quote',
    description:
        'Submit your specifications, quantity and destination through our guided procurement portal and receive a tailored quotation within one business day.',
    path: '/request-quote',
});

export default function RequestQuotePage() {
    return (
        <>
            <Hero
                title="Request a Quote"
                description="Tell us about your product requirements and our team will prepare a tailored quotation based on your specifications, quantity and destination."
                image={aboutFacilityImage}
                actions={[
                    { label: 'Start Your Request', href: '#portal' },
                    { label: 'Talk to a Sales Specialist', href: '/contact', variant: 'outline' },
                ]}
            />

            <Section id="portal" spacing="2xl">
                <Container size="sm">
                    <Reveal>
                        <SectionHeading
                            title="Guided Procurement Portal"
                            description="Complete the steps below to receive your detailed quotation. Nothing is sent until you review it on the final step."
                        />
                    </Reveal>

                    <div className="bg-card border-border mt-10 rounded-xl border p-6 shadow-lg md:p-10">
                        <QuoteWizard />
                    </div>
                </Container>
            </Section>

            <FeatureGrid
                surface="alt"
                columns={4}
                title="What You Get"
                description="A quotation from Pishon comes with the things that make it usable."
                headingAlign="center"
                items={[
                    {
                        icon: <UnlockIcon />,
                        title: 'No Obligation',
                        description: 'Quotations are provided free of cost with no commitment.',
                    },
                    {
                        icon: <HeadsetIcon />,
                        title: 'Expert Support',
                        description: 'Direct access to industry experts during the quote process.',
                    },
                    {
                        icon: <LockIcon />,
                        title: 'Secure Handling',
                        description:
                            'Your business data and specifications are handled with strict privacy.',
                    },
                    {
                        icon: <GlobeIcon />,
                        title: 'Global Network',
                        description:
                            'Connected to major shipping lines and port authorities worldwide.',
                    },
                ]}
            />

            <MediaSplit
                title="Not Sure What You Need?"
                body={[
                    'Our procurement specialists can help you define specifications, identify cost-saving logistics routes, and confirm the exact grade of material your operation requires — before you commit to anything.',
                ]}
                image={servicesQaImage}
                imageAlt="A technician taking high-precision laser measurements of a component."
                action={{ label: 'Talk to an expert', href: '/contact' }}
            />

            <FeatureGrid
                columns={2}
                title="Why Your Quotation Holds Up"
                description="A number is only as good as the process behind it."
                headingAlign="center"
                items={[
                    {
                        icon: <ShieldCheckIcon />,
                        title: 'Uncompromising Reliability',
                        description:
                            'Rigorous quality control and documentation standards mean what you request is what you receive, backed by international inspection reports.',
                    },
                    {
                        icon: <FileTextIcon />,
                        title: 'Full Export Documentation',
                        description:
                            'We manage the complexities of international trade — Bill of Lading, Certificate of Origin and phytosanitary certificates — simplifying your import process.',
                    },
                ]}
            />

            <Faq title="Frequently Asked Questions" items={faqs.requestQuote} />

            <CtaBand
                title="Ready When You Are"
                description="Start the guided portal, or speak to a procurement specialist if you would rather talk it through first."
                actions={[
                    { label: 'Start Your Request', href: '#portal' },
                    { label: 'Talk to Sales', href: '/contact', variant: 'outline' },
                ]}
            />
        </>
    );
}
