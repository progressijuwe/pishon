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
import galleryLabImage from '@/assets/gallery-lab.jpg';
import galleryOfficeImage from '@/assets/gallery-office.jpg';
import galleryTrucksImage from '@/assets/gallery-trucks.jpg';
import galleryWarehouseImage from '@/assets/gallery-warehouse.jpg';
import heroImage from '@/assets/hero.jpg';
import industryAgricultureImage from '@/assets/industry-agriculture.jpg';
import industryConstructionImage from '@/assets/industry-construction.jpg';
import industryManufacturingImage from '@/assets/industry-manufacturing.jpg';
import productCashewImage from '@/assets/product-cashew.jpg';
import productCoalImage from '@/assets/product-coal.jpg';
import productCocoaImage from '@/assets/product-cocoa.jpg';
import { CardGrid } from '@/components/sections/CardGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { Hero } from '@/components/sections/Hero';
import { ImageTiles } from '@/components/sections/ImageTiles';
import { LogoStrip } from '@/components/sections/LogoStrip';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { StatGrid } from '@/components/sections/StatGrid';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { Heading } from '@/components/shared/Heading';
import { Text } from '@/components/shared/Text';

/**
 * A Server Component by default — no `'use client'` here, so this page's markup
 * is rendered on the server and only the interactive leaves ship JavaScript.
 *
 * Copy and imagery live here rather than inside the section components: the
 * sections own layout, the page owns content, so the same band can be reused on
 * another route with different words.
 */
export default function HomePage() {
    return (
        <>
            <Hero
                title="Connecting Global Markets with Nigerian Excellence"
                description="Reliable export of high-grade commodities and industrial machinery parts across five continents. We bridge the gap between Nigerian production and international demand."
                image={heroImage}
                actions={[
                    { label: 'Request Quote', href: '/contact' },
                    { label: 'Explore Products', href: '/products', variant: 'outline' },
                ]}
            />

            <MediaSplit
                title="The Backbone of Nigeria's International Trade"
                body={[
                    'Pishon Parts & Machineries Ltd. stands as a premier facilitator in the global supply chain. Founded on the principles of integrity and mechanical precision, we have evolved from a machinery specialist into a multi-sector export powerhouse.',
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
                        action: { label: 'Request Quote', href: '/contact' },
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
                        action: { label: 'Request Quote', href: '/contact' },
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
                        action: { label: 'Request Quote', href: '/contact' },
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

            <ProcessTimeline
                title="Our Streamlined Export Process"
                description="A transparent 8-step journey from initial inquiry to final delivery."
                steps={[
                    {
                        title: 'Inquiry',
                        description: 'Submit your specifications and volume requirements.',
                    },
                    {
                        title: 'Quotation',
                        description: 'Detailed RFQ response with pricing and delivery timelines.',
                    },
                    {
                        title: 'Agreement',
                        description: 'Contract signing and payment terms finalization.',
                    },
                    {
                        title: 'Inspection',
                        description: 'SGS or Intertek quality certification of products.',
                    },
                    {
                        title: 'Packaging',
                        description: 'Secure crating or bagging for sea-freight durability.',
                    },
                    {
                        title: 'Documentation',
                        description: 'Preparation of BL, CO, and custom clearances.',
                    },
                    { title: 'Shipping', description: 'Vessel loading and dispatch notification.' },
                    { title: 'Delivery', description: 'Port of destination arrival and handover.' },
                ]}
            />

            <StatGrid
                stats={[
                    {
                        value: '10+',
                        label: 'Years Experience',
                        description: 'A decade of industrial and agricultural trade expertise.',
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

            <GalleryGrid
                title="Operations Gallery"
                aside={
                    <Text muted className="max-w-lg">
                        Authentic glimpses into our warehouses, processing facilities, and shipping
                        operations.
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

            <TestimonialGrid
                surface="alt"
                title="Global Trust"
                items={[
                    {
                        quote: 'Pishon has been our primary supplier for Nigerian cocoa for 5 years. Their consistency in bean quality and documentation accuracy is unparalleled in the West African market.',
                        author: 'Marcus Lehmann',
                        role: 'Procurement Director, German Confectionery Group',
                    },
                    {
                        quote: 'Sourcing zinc ore from Nigeria was complex until we partnered with Pishon. They managed the entire logistics chain from the mine to the port in Shanghai flawlessly.',
                        author: 'Li Wei',
                        role: 'Global Logistics Head, Asian Metals Corp',
                    },
                ]}
            />

            <Faq
                title="Frequently Asked Questions"
                items={[
                    {
                        question: 'What are your standard payment terms for exports?',
                        answer: 'We typically accept Irrevocable Letters of Credit (LC) at sight or T/T payments (30% deposit, 70% against documents). We are flexible and can discuss tailored terms for long-term contract partners.',
                    },
                    {
                        question: 'How do you ensure the quality of agricultural products?',
                        answer: 'Every shipment undergoes multi-stage inspections. We have internal QC teams and partner with international agencies like SGS and Intertek for final certification before loading.',
                    },
                    {
                        question: 'Do you handle international shipping and logistics?',
                        answer: 'Yes, we offer both FOB (Free On Board) and CIF (Cost, Insurance, and Freight) terms. Our logistics team coordinates sea freight through major global carriers to any safe port worldwide.',
                    },
                ]}
            />

            <CtaBand
                title="Ready to Start Your Export Journey?"
                description="Join dozens of international enterprises who trust Pishon Parts for their Nigerian commodity and machinery needs."
                actions={[
                    { label: 'Request Quote', href: '/contact' },
                    { label: 'Contact Us', href: '/contact', variant: 'outline' },
                ]}
            />
        </>
    );
}
