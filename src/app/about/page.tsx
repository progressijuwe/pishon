import type { Metadata } from 'next';
import {
    EyeIcon,
    GlobeIcon,
    HandshakeIcon,
    LightbulbIcon,
    RocketIcon,
    ShieldCheckIcon,
    SparklesIcon,
    UsersIcon,
} from 'lucide-react';
import Image from 'next/image';

import aboutFacilityImage from '@/assets/about-facility.jpg';
import aboutHeroImage from '@/assets/about-hero.jpg';
import aboutTrustImage from '@/assets/about-trust.jpg';
import divisionAgriculturalImage from '@/assets/division-agricultural.jpg';
import divisionMachineryImage from '@/assets/division-machinery.jpg';
import divisionMineralsImage from '@/assets/division-minerals.jpg';
import galleryLabImage from '@/assets/gallery-lab.jpg';
import galleryOfficeImage from '@/assets/gallery-office.jpg';
import galleryTrucksImage from '@/assets/gallery-trucks.jpg';
import galleryWarehouseImage from '@/assets/gallery-warehouse.jpg';
import milestone2015Image from '@/assets/milestone-2015.jpg';
import milestone2017Image from '@/assets/milestone-2017.jpg';
import milestone2019Image from '@/assets/milestone-2019.jpg';
import milestone2021Image from '@/assets/milestone-2021.jpg';
import milestone2024Image from '@/assets/milestone-2024.jpg';
import { CardGrid } from '@/components/sections/CardGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { Hero } from '@/components/sections/Hero';
import { LogoStrip } from '@/components/sections/LogoStrip';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { MilestoneTimeline } from '@/components/sections/MilestoneTimeline';
import { StatGrid } from '@/components/sections/StatGrid';
import { StatementCards } from '@/components/sections/StatementCards';
import { Heading } from '@/components/shared/Heading';
import { Text } from '@/components/shared/Text';

export const metadata: Metadata = {
    title: 'About Us',
    description:
        'Since 2015, Pishon Parts & Machineries Ltd has grown from a specialised parts supplier into a diversified global trade leader.',
};

export default function AboutPage() {
    return (
        <>
            <Hero
                title="About Us"
                description="Connecting global markets with Nigerian excellence through reliability, quality, and a commitment to international trade standards."
                image={aboutHeroImage}
            />

            <MediaSplit
                reverse
                title="A Tradition of Industrial Excellence and Global Trade"
                body={[
                    "Since our foundation in 2015, Pishon Parts & Machineries Ltd has evolved from a specialized parts supplier into a diversified global trade leader. We bridge the gap between Nigeria's rich natural resources and the world's most demanding industrial sectors.",
                    'Our commitment to quality is the cornerstone of our operations. Whether we are sourcing premium agricultural commodities, high-grade solid minerals, or precision mechanical components, we adhere to rigorous international standards that ensure our clients receive only the best.',
                    'By integrating deep local expertise with a sophisticated understanding of global supply chains, we provide a reliable channel for international procurement managers and commodity traders seeking consistency and excellence.',
                ]}
                image={aboutFacilityImage}
                imageAlt="Technicians monitoring precision machinery on an automated assembly line."
                highlight={{ value: '9+ Years', description: 'of industry experience.' }}
                action={{ label: 'Request a quote', href: '/contact' }}
            />

            <MilestoneTimeline
                title="Our Journey"
                description="Milestones that defined our growth and commitment to global trade."
                items={[
                    {
                        year: '2015',
                        title: 'The Foundation',
                        description:
                            "Pishon Parts & Machineries Ltd was established with a focus on providing high-quality industrial spare parts to Nigeria's growing manufacturing sector.",
                        image: milestone2015Image,
                        imageAlt:
                            'The original office and warehouse, stacked with industrial components.',
                    },
                    {
                        year: '2017',
                        title: 'First International Export',
                        description:
                            'Successfully completed our first international shipment of high-grade Nigerian minerals, marking our entry into the global trade arena.',
                        image: milestone2017Image,
                        imageAlt: 'Unprocessed solid ore samples resting on a shipping ledger.',
                    },
                    {
                        year: '2019',
                        title: 'Division Expansion',
                        description:
                            'Launched dedicated divisions for Agricultural Commodities and Mechanical Machinery to better serve our diverse international clientele.',
                        image: milestone2019Image,
                        imageAlt:
                            'A warehouse floor split into cocoa, mineral and machinery zones.',
                    },
                    {
                        year: '2021',
                        title: 'Quality ISO Certification',
                        description:
                            'Achieved international quality management certifications, solidifying our reputation as a trusted partner for global trade compliance.',
                        image: milestone2021Image,
                        imageAlt: 'A framed ISO 9001 certification document on an office desk.',
                    },
                    {
                        year: '2024',
                        title: 'Global Trade Leader',
                        description:
                            'Recognized as a leading West African trade partner, managing a robust supply chain across three continents.',
                        image: milestone2024Image,
                        imageAlt: 'A digital globe linking Lagos to ports across three continents.',
                    },
                ]}
            />

            <StatementCards
                items={[
                    {
                        icon: <RocketIcon />,
                        title: 'Our Mission',
                        statement:
                            'To deliver premium Nigerian commodities and industrial solutions through trusted partnerships.',
                        emphasis: true,
                    },
                    {
                        icon: <EyeIcon />,
                        title: 'Our Vision',
                        statement:
                            'To be the preferred global partner for West African trade and industrial supply.',
                    },
                ]}
            />

            <FeatureGrid
                surface="alt"
                columns={3}
                items={[
                    {
                        icon: <ShieldCheckIcon />,
                        title: 'Integrity',
                        description:
                            'Uncompromising transparency in all our business dealings and trade documentation.',
                    },
                    {
                        icon: <SparklesIcon />,
                        title: 'Quality',
                        description:
                            'A relentless focus on meeting and exceeding international product standards.',
                    },
                    {
                        icon: <HandshakeIcon />,
                        title: 'Reliability',
                        description:
                            'Consistency in supply and delivery, regardless of global market fluctuations.',
                    },
                    {
                        icon: <LightbulbIcon />,
                        title: 'Innovation',
                        description:
                            'Leveraging modern logistics and technology to streamline the supply chain.',
                    },
                    {
                        icon: <UsersIcon />,
                        title: 'Customer Focus',
                        description:
                            'Building long-term value by understanding the unique needs of our partners.',
                    },
                    {
                        icon: <GlobeIcon />,
                        title: 'Global Partnership',
                        description:
                            'Fostering cross-border relationships that promote sustainable economic growth.',
                    },
                ]}
            />

            <CardGrid
                title="Specialized Business Divisions"
                description="Precision focus across three key verticals to serve the diverse needs of the global industrial economy."
                items={[
                    {
                        title: 'Agricultural Commodities',
                        description:
                            'Sourcing and exporting the finest Nigerian Cocoa, Cashew Nuts, and Ginger to global confectioners and food processors.',
                        image: divisionAgriculturalImage,
                        imageAlt: 'Cocoa beans and cashew nuts presented in burlap sacks.',
                        action: {
                            label: 'View Division',
                            href: '/products/agricultural-commodities',
                        },
                    },
                    {
                        title: 'Solid Minerals',
                        description:
                            'Reliable supply chains for coal, zinc ore, and lead ore. We handle the logistics from mine site to international port.',
                        image: divisionMineralsImage,
                        imageAlt: 'Samples of coal, zinc ore and lead on a dark studio surface.',
                        action: { label: 'View Division', href: '/products/solid-minerals' },
                    },
                    {
                        title: 'Parts & Machinery',
                        description:
                            'Critical spare parts and heavy machinery sourcing for the manufacturing, construction, and mining sectors.',
                        image: divisionMachineryImage,
                        imageAlt: 'Gears, bearings and hydraulic parts on a steel workbench.',
                        action: {
                            label: 'View Division',
                            href: '/products/mechanical-parts-and-machinery',
                        },
                    },
                ]}
            />

            <FeatureGrid
                surface="primary"
                columns={2}
                aside={
                    <>
                        <Heading as="h2" size="h2" className="mb-6 text-balance">
                            Why Clients Trust Us
                        </Heading>
                        <div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-xl">
                            <Image
                                src={aboutTrustImage}
                                alt="Two executives shaking hands in a boardroom overlooking an industrial terminal."
                                fill
                                sizes="(min-width: 1024px) 33vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </>
                }
                items={[
                    {
                        title: 'Experienced Team',
                        description:
                            'Our leaders bring decades of collective experience in international logistics and procurement.',
                    },
                    {
                        title: 'Export Expertise',
                        description:
                            'Deep knowledge of Nigerian export regulations and international trade laws.',
                    },
                    {
                        title: 'Reliable Supply Chain',
                        description:
                            'Redundant logistics networks to guarantee on-time deliveries across oceans.',
                    },
                    {
                        title: 'Quality Assurance',
                        description:
                            'Rigorous multi-stage inspection processes for every batch we ship.',
                    },
                    {
                        title: 'International Standards',
                        description: 'Adherence to ISO, SGS, and other global quality benchmarks.',
                    },
                    {
                        title: 'Long-Term Partnerships',
                        description:
                            'We prioritize lasting business relationships over transactional gains.',
                    },
                ]}
            />

            <StatGrid
                surface="alt"
                columns={5}
                size="compact"
                stats={[
                    { value: '10+', label: 'Years' },
                    { value: '25+', label: 'Countries' },
                    { value: '50+', label: 'Products' },
                    { value: '500+', label: 'Shipments' },
                    { value: '100+', label: 'Partners' },
                ]}
            />

            <LogoStrip
                label="Certified Compliance"
                items={['NEPC', 'SGS', 'MAN', 'ISO:9001', 'ICC']}
            />

            <GalleryGrid
                title="Operations in Action"
                aside={
                    <Text muted className="max-w-lg">
                        Inside our warehouses, processing facilities and shipping operations.
                    </Text>
                }
                items={[
                    {
                        image: galleryWarehouseImage,
                        alt: 'Sacks of cocoa beans stacked on pallets in a commodity warehouse.',
                        wide: true,
                        tall: true,
                    },
                    {
                        image: galleryLabImage,
                        alt: 'A technician inspecting mineral samples under a microscope.',
                    },
                    {
                        image: galleryTrucksImage,
                        alt: 'Transport trucks loaded with containers at a port facility.',
                        tall: true,
                    },
                    {
                        image: galleryOfficeImage,
                        alt: 'The glass-fronted corporate headquarters building.',
                    },
                ]}
            />

            <CtaBand
                title="Let's Build a Long-Term Business Partnership"
                description="Talk to our trade desk about volumes, specifications and delivery terms for your next shipment."
                actions={[
                    { label: 'Request Quote', href: '/contact' },
                    { label: 'Explore Products', href: '/products', variant: 'outline' },
                ]}
            />
        </>
    );
}
