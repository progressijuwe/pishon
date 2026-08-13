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
import { MediaSplit } from '@/components/sections/MediaSplit';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { StatGrid } from '@/components/sections/StatGrid';
import { Heading } from '@/components/shared/Heading';
import { Text } from '@/components/shared/Text';
import { productSpecs } from '@/config/specs';
import paintManufacturingImage from '@/assets/paint-manufacturing.jpg';

export default function HomePage() {
    return (
        <>
            <Hero
                title="We Farm It, Mine It, and Ship It"
                description="A Nigerian producer and exporter of agricultural commodities and solid minerals, and a sourcing desk for the industrial parts West African operators run on. Choose the division you are buying from."
                image={heroImage}
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Explore Products', href: '/#divisions', variant: 'outline' },
                ]}
            />

            <MediaSplit
                title="The Backbone of Nigeria's International Trade"
                body={[
                    'Pishon Parts & Machineries Ltd is a vertically integrated producer and trader. We operate cocoa, banga and oil palm farms, supply solid minerals from Nigerian sites, and run a sourcing desk for industrial parts and machinery.',
                    'Because we farm our own cocoa and oil palm, a consignment can be traced back to the plot it grew on rather than to the last aggregator who handled it.',
                ]}
                image={companyOverviewImage}
                imageAlt="An export manager inspecting mechanical parts in a modern warehouse facility."
                highlight={{
                    value: 'Own farms',
                    description: 'Cocoa and oil palm grown on land we operate.',
                }}
                action={{ label: 'Learn more about our heritage', href: '/about' }}
            />

            <CardGrid
                id="divisions"
                surface="alt"
                title="Four Divisions, Four Kinds of Buyer"
                description="Each division serves a different buyer with different requirements. Start where your purchase sits."
                items={[
                    {
                        title: 'Agriculture & Commodities',
                        description:
                            'Cocoa and oil palm grown on our own farms, plus sesame, cashew and spices sourced through vetted cooperatives. For confectioners, processors and commodity buyers.',
                        image: divisionAgriculturalImage,
                        imageAlt: 'Cocoa beans and cashew nuts presented in burlap sacks.',
                        action: {
                            label: 'View Division',
                            href: '/agriculture',
                        },
                    },
                    {
                        title: 'Solid Minerals',
                        description:
                            'Coal, lithium ore, limestone and iron ore, moved from mine site to international port. For mills, smelters and battery supply chains.',
                        image: divisionMineralsImage,
                        imageAlt:
                            'Samples of coal, lithium ore and iron ore on a dark studio surface.',
                        action: { label: 'View Division', href: '/minerals' },
                    },
                    {
                        title: 'Industrial Sourcing',
                        description:
                            'We find, vet and import spare parts and heavy machinery for plant operators across Nigeria and West Africa. For maintenance leads and project procurement.',
                        image: divisionMachineryImage,
                        imageAlt: 'Gears, bearings and hydraulic parts on a steel workbench.',
                        action: {
                            label: 'View Division',
                            href: '/industrial',
                        },
                    },
                    {
                        title: 'Paint Manufacturing',
                        description:
                            'Paint formulated and filled at our own plant, supplied direct to distributors, contractors and developers. For merchants and project buyers.',
                        image: paintManufacturingImage,
                        imageAlt:
                            'Sealed tins and buckets of paint stacked on a pallet inside a manufacturing plant.',
                        action: { label: 'View Division', href: '/paint' },
                    },
                ]}
            />

            <ProductGrid
                eyebrow="Export Portfolio"
                title="High-Demand Products"
                action={{ label: 'View All Products', href: '/#divisions' }}
                items={[
                    {
                        title: productSpecs.cocoa.name,
                        image: productCocoaImage,
                        imageAlt: 'Fermented Nigerian cocoa beans spread across a wooden surface.',
                        specs: productSpecs.cocoa.specs,
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: productSpecs.cashew.name,
                        image: productCashewImage,
                        imageAlt: 'Raw cashew nuts in their shells in a concrete tray.',
                        specs: productSpecs.cashew.specs,
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: productSpecs.coal.name,
                        image: productCoalImage,
                        imageAlt: 'Chunks of industrial-grade sub-bituminous coal.',
                        specs: productSpecs.coal.specs,
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
                            Explore Our Services
                            <DownloadIcon aria-hidden="true" className="size-5" />
                        </Link>
                    </>
                }
                items={[
                    {
                        icon: <GlobeIcon />,
                        title: 'Commodity Export',
                        description:
                            'Direct sourcing from primary producers, with quality assurance against the specification a client actually orders to.',
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
                            'Comprehensive handling of Form M, Certificates of Origin, Bills of Lading, and all regulatory export compliance.',
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
                        value: '50+',
                        label: 'Product Lines',
                        description: 'From farm commodities and minerals to industrial spares.',
                    },
                    {
                        value: '24–48h',
                        label: 'Quotation Turnaround',
                        description: 'Costed response on a standard enquiry.',
                    },
                ]}
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
