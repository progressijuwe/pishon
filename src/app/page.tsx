import {
    ClockIcon,
    DownloadIcon,
    FileTextIcon,
    GlobeIcon,
    HeadsetIcon,
    SearchCheckIcon,
    ShieldCheckIcon,
    TruckIcon,
    WalletIcon,
} from 'lucide-react';
import Link from 'next/link';

import companyOverviewImage from '@/assets/company-overview.jpg';
import divisionAgriculturalImage from '@/assets/division-agricultural.jpg';
import divisionMachineryImage from '@/assets/division-machinery.jpg';
import divisionMineralsImage from '@/assets/division-minerals.jpg';
import heroImage from '@/assets/hero.jpg';
import industryAgricultureImage from '@/assets/industry-agriculture.jpg';
import industryConstructionImage from '@/assets/industry-construction.jpg';
import industryManufacturingImage from '@/assets/industry-manufacturing.jpg';
import productCashewImage from '@/assets/product-cashew.jpg';
import productCoalImage from '@/assets/product-coal.jpg';
import productCocoaImage from '@/assets/product-cocoa.jpg';
import { CardGrid } from '@/components/sections/CardGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Hero } from '@/components/sections/Hero';
import { ImageTiles } from '@/components/sections/ImageTiles';
import { LogoStrip } from '@/components/sections/LogoStrip';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { StatGrid } from '@/components/sections/StatGrid';
import { Heading } from '@/components/shared/Heading';
import { Text } from '@/components/shared/Text';

export default function HomePage() {
    return (
        <>
            <Hero
                title="Connecting Global Markets with Nigerian Excellence"
                description="Reliable export of high-grade commodities and industrial machinery parts across five continents. We bridge the gap between Nigerian production and international demand."
                image={heroImage}
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Explore Products', href: '/products', variant: 'outline' },
                ]}
            />

            <MediaSplit
                title="The Backbone of Nigeria's International Trade"
                body={[
                    'Pishon Parts & Machineries Ltd stands as a premier facilitator in the global supply chain. Founded on the principles of integrity and mechanical precision, we have evolved from a machinery specialist into a multi-sector export powerhouse.',
                    'Whether it is the raw energy of solid minerals, the richness of West African cocoa, or critical industrial components, we ensure every shipment meets stringent international standards and arrives with mathematical precision.',
                ]}
                image={companyOverviewImage}
                imageAlt="An export manager inspecting mechanical parts in a modern warehouse facility."
                highlight={{
                    value: 'Over 25',
                    description:
                        'Strategic partnerships across Europe, Asia, and North America for seamless commodity flow.',
                }}
                action={{ label: 'Learn more about our heritage', href: '/about' }}
            />

            <CardGrid
                surface="alt"
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

            <ProductGrid
                eyebrow="Export Portfolio"
                title="High-Demand Products"
                action={{ label: 'View All Products', href: '/products' }}
                items={[
                    {
                        title: 'Premium Cocoa Beans',
                        image: productCocoaImage,
                        imageAlt: 'Fermented Nigerian cocoa beans spread across a wooden surface.',
                        specs: [
                            { label: 'Grade', value: 'Main Crop / Grade 1' },
                            { label: 'Moisture', value: '< 7.5%' },
                            { label: 'Origin', value: 'Nigeria (Ondo/Ogun)' },
                        ],
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Raw Cashew Nuts',
                        image: productCashewImage,
                        imageAlt: 'Raw cashew nuts in their shells in a concrete tray.',
                        specs: [
                            { label: 'KOR', value: '48 - 52 lbs' },
                            { label: 'Nut Count', value: '180 - 200/kg' },
                            { label: 'Origin', value: 'Nigeria (Kogi/Ogbomosho)' },
                        ],
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'High-Calorie Coal',
                        image: productCoalImage,
                        imageAlt: 'Chunks of industrial-grade anthracite coal.',
                        specs: [
                            { label: 'Fixed Carbon', value: '75% - 85%' },
                            { label: 'Ash Content', value: '< 10%' },
                            { label: 'Sulphur', value: '< 0.6%' },
                        ],
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                ]}
            />

            <FeatureGrid
                surface="primary"
                columns={2}
                aside={
                    <>
                        <Heading as="h2" size="h2" className="mb-6 text-balance">
                            Our Integrated Service Model
                        </Heading>
                        <Text className="mb-12 opacity-80">
                            We provide an end-to-end ecosystem that simplifies international trade,
                            ensuring safety, speed, and transparency at every milestone.
                        </Text>
                        <Link
                            href="/services"
                            className="text-secondary focus-visible:ring-ring inline-flex items-center gap-2 rounded-md font-bold outline-none hover:underline focus-visible:ring-[3px]"
                        >
                            Download Service Brochure
                            <DownloadIcon aria-hidden="true" className="size-5" />
                        </Link>
                    </>
                }
                items={[
                    {
                        icon: <GlobeIcon />,
                        title: 'Commodity Export',
                        description:
                            'Direct sourcing from primary producers with rigorous quality assurance protocols to meet international buyer specifications.',
                    },
                    {
                        icon: <TruckIcon />,
                        title: 'Logistics Management',
                        description:
                            'Multimodal transport solutions covering trucking from interior locations to sea ports and air freight for urgent parts.',
                    },
                    {
                        icon: <SearchCheckIcon />,
                        title: 'Strategic Sourcing',
                        description:
                            'Identifying and vetting reliable manufacturers for specialized machinery and industrial components needed in Africa.',
                    },
                    {
                        icon: <FileTextIcon />,
                        title: 'Trade Documentation',
                        description:
                            'Comprehensive handling of Form M, Certificates of Origin, Bill of Ladings, and all regulatory export compliance.',
                    },
                ]}
            />

            <FeatureGrid
                columns={4}
                align="center"
                items={[
                    {
                        icon: <ShieldCheckIcon />,
                        title: 'Unmatched Quality',
                        description:
                            'Strict adherence to ASTM and ISO standards for all exported products.',
                    },
                    {
                        icon: <ClockIcon />,
                        title: 'Timely Delivery',
                        description:
                            'Optimized lead times through strategic port-to-port logistics partnerships.',
                    },
                    {
                        icon: <WalletIcon />,
                        title: 'Secure Transactions',
                        description:
                            'Multiple payment instrument options including Letters of Credit (LC) and Escrow.',
                    },
                    {
                        icon: <HeadsetIcon />,
                        title: 'Expert Support',
                        description:
                            'Dedicated account managers providing 24/7 shipment tracking and updates.',
                    },
                ]}
            />

            <StatGrid
                stats={[
                    {
                        value: '10+',
                        label: 'Years Experience',
                        description: 'Industrial and agricultural trade expertise.',
                    },
                    {
                        value: '25+',
                        label: 'Countries Served',
                        description: 'Global reach across Europe, Asia, and the Americas.',
                    },
                    {
                        value: '50+',
                        label: 'Products Exported',
                        description: 'Diverse portfolio from minerals to complex machinery.',
                    },
                ]}
            />

            <LogoStrip
                label="Trusted & Certified By"
                items={['NEPC', 'SGS', 'MAN', 'ISO:9001', 'ICC']}
            />

            <ImageTiles
                title="Industries We Empower"
                items={[
                    {
                        title: 'Manufacturing',
                        description:
                            'Supporting heavy industries with critical mechanical components and raw processing materials.',
                        image: industryManufacturingImage,
                        imageAlt: 'An automated manufacturing production line in a modern factory.',
                    },
                    {
                        title: 'Construction',
                        description:
                            'Supplying essential minerals and heavy-duty machinery parts for infrastructure projects.',
                        image: industryConstructionImage,
                        imageAlt: 'Earthmoving machinery on a large construction site.',
                    },
                    {
                        title: 'Agriculture',
                        description:
                            'From farm-gate sourcing of cocoa to supplying tractors, we bridge the gap in the agri-value chain.',
                        image: industryAgricultureImage,
                        imageAlt: 'Tractors and irrigation systems across green farmland.',
                    },
                ]}
            />

            <CtaBand
                title="Ready to Start Your Export Journey?"
                description="Join dozens of international enterprises who trust Pishon Parts for their Nigerian commodity and machinery needs."
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Contact Us', href: '/contact', variant: 'outline' },
                ]}
            />
        </>
    );
}
