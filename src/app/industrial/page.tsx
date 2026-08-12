import { ShipIcon, SproutIcon, WrenchIcon } from 'lucide-react';

import equipmentMachineryImage from '@/assets/equipment-machinery.jpg';
import equipmentPartsImage from '@/assets/equipment-parts.jpg';
import equipmentSystemsImage from '@/assets/equipment-systems.jpg';
import machineryConstructionImage from '@/assets/machinery-construction.jpg';
import machineryHeroImage from '@/assets/machinery-hero.jpg';
import machineryOilgasImage from '@/assets/machinery-oilgas.jpg';
import machineryPrecisionImage from '@/assets/machinery-precision.jpg';
import { CardGrid } from '@/components/sections/CardGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Hero } from '@/components/sections/Hero';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { createMetadata } from '@/lib/seo';
import { faqs } from '@/config/faqs';

export const metadata = createMetadata({
    title: 'Industrial Sourcing & Machinery',
    description:
        'We source and import high-spec mechanical components and heavy machinery for operators across Nigeria and West Africa, from Tier-1 manufacturers to your site.',
    path: '/industrial',
});

export default function MechanicalPartsAndMachineryPage() {
    return (
        <>
            <Hero
                title="Industrial Parts, Sourced and Landed"
                description="We source, vet and import high-spec components and heavy machinery for operators across Nigeria and West Africa — from Tier-1 manufacturers to your site."
                image={machineryHeroImage}
                actions={[
                    { label: 'View Equipment Catalogue', href: '#catalogue' },
                    { label: 'Technical Specifications', href: '/contact', variant: 'outline' },
                ]}
            />

            <MediaSplit
                title="Engineering Excellence at Every Level"
                body={[
                    'Pishon Parts & Machineries Ltd provides uncompromised quality in the procurement of critical mechanical assets. We partner with world-class manufacturers to ensure every bolt, gear and engine exceeds international safety and performance standards.',
                    'Specifications are verified against your site conditions before an order is placed, so what arrives is what your operation can actually run.',
                ]}
                image={machineryPrecisionImage}
                imageAlt="Close-up of precision-machined steel gears and bearings on a workshop bench."
                highlight={{
                    value: 'Tier-1',
                    description: 'OEM and manufacturer partnerships worldwide.',
                }}
                action={{ label: 'Talk to our engineering desk', href: '/contact' }}
            />

            <CardGrid
                id="catalogue"
                surface="alt"
                columns={3}
                title="Premium Equipment Catalogue"
                description="Curated heavy machinery and precision-engineered parts."
                items={[
                    {
                        title: 'Industrial Machinery',
                        description:
                            'Earthmovers, cranes and specialised plant equipment for large-scale mining and construction projects.',
                        image: equipmentMachineryImage,
                        imageAlt:
                            'A modern industrial excavator and heavy-duty crawler crane on a work site.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Precision Components',
                        description:
                            'OEM-grade mechanical parts, from high-pressure seals to transmission gears for critical machinery maintenance.',
                        image: equipmentPartsImage,
                        imageAlt:
                            'Turbine blades, pistons, bearings and gears laid out on an engineering drawing.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Operational Systems',
                        description:
                            'Power generation, HVAC systems and material handling solutions designed for extreme industrial environments.',
                        image: equipmentSystemsImage,
                        imageAlt:
                            'Large diesel power generators and industrial HVAC units in a plant yard.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                ]}
            />

            <MediaSplit
                reverse
                title="Construction & Infrastructure"
                body={[
                    'We provide the hardware backbone for national development. From high-rise skeletons to transport networks, our machinery delivery keeps project timelines intact.',
                ]}
                bullets={[
                    'Vertical construction machinery',
                    'Road-building & paving equipment',
                    'Heavy-duty material logistics',
                ]}
                image={machineryConstructionImage}
                imageAlt="Tower cranes and structural steel silhouetted against a sunset over a construction site."
            />

            <MediaSplit
                surface="alt"
                title="Energy, Oil & Gas"
                body={[
                    'Supporting upstream and midstream operations with ruggedised mechanical parts that withstand high-pressure, corrosive and extreme-temperature environments.',
                ]}
                bullets={[
                    'Drilling & completion equipment',
                    'Pipeline integrity components',
                    'Industrial power solutions',
                ]}
                image={machineryOilgasImage}
                imageAlt="An offshore oil platform at dawn, surrounded by open ocean."
            />

            <ProcessTimeline
                surface="none"
                title="Streamlined Procurement Flow"
                description="Our logistics and technical support framework carries an order from specification to site delivery."
                steps={[
                    {
                        title: 'Specification',
                        description:
                            'Precise technical requirements and site-readiness assessment.',
                    },
                    {
                        title: 'Sourcing',
                        description:
                            'Engagement with Tier-1 global manufacturers and OEM partners.',
                    },
                    {
                        title: 'Logistics',
                        description: 'Cross-border maritime and overland transport management.',
                    },
                    {
                        title: 'Integration',
                        description: 'Final delivery, assembly and commissioning on site.',
                    },
                ]}
            />

            <FeatureGrid
                surface="primary"
                columns={3}
                align="center"
                title="Explore Our Other Global Portfolios"
                headingAlign="center"
                items={[
                    {
                        icon: <WrenchIcon />,
                        title: 'Solid Minerals',
                        description:
                            'Coal, lithium ore, limestone and iron ore for mills and processors.',
                    },
                    {
                        icon: <SproutIcon />,
                        title: 'Agricultural Commodities',
                        description: 'Cocoa, cashews, sesame and spices from certified farms.',
                    },
                    {
                        icon: <ShipIcon />,
                        title: 'International Logistics',
                        description: 'Multimodal freight from interior sites to destination port.',
                    },
                ]}
            />

            <Faq title="Frequently Asked Questions" items={faqs.industrial} />

            <CtaBand
                title="Ready to Power Your Next Major Industrial Project?"
                description="Send us your equipment list or technical drawings and our procurement engineers will return a costed proposal with delivery terms."
                actions={[
                    { label: 'Request a Quote', href: '/request-quote' },
                    { label: 'Speak to an Engineer', href: '/contact', variant: 'outline' },
                ]}
            />
        </>
    );
}
