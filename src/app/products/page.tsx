import {
    FactoryIcon,
    FileTextIcon,
    HandshakeIcon,
    HardHatIcon,
    LeafIcon,
    PickaxeIcon,
    ScanSearchIcon,
    ShieldCheckIcon,
    ShipIcon,
    SproutIcon,
    TruckIcon,
} from 'lucide-react';

import categoryAgriculturalImage from '@/assets/category-agricultural.jpg';
import divisionMachineryImage from '@/assets/division-machinery.jpg';
import divisionMineralsImage from '@/assets/division-minerals.jpg';
import productCashewImage from '@/assets/product-cashew.jpg';
import productCoalImage from '@/assets/product-coal.jpg';
import productCocoaImage from '@/assets/product-cocoa.jpg';
import productsHeroImage from '@/assets/products-hero.jpg';
import productsInspectionImage from '@/assets/products-inspection.jpg';
import { CardGrid } from '@/components/sections/CardGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Hero } from '@/components/sections/Hero';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { StatGrid } from '@/components/sections/StatGrid';
import { createMetadata } from '@/lib/seo';
import { faqs } from '@/config/faqs';

export const metadata = createMetadata({
    title: 'Products',
    description:
        'Export-quality agricultural commodities, strategic solid minerals, and precision industrial components supplied to global markets.',
    path: '/products',
});

export default function ProductsPage() {
    return (
        <>
            <Hero
                title="Premium Products for Global Markets"
                description="Unshakeable reliability in the sourcing and supply of export-quality agricultural commodities, strategic solid minerals, and precision industrial components."
                image={productsHeroImage}
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Contact Sales', href: '/contact', variant: 'outline' },
                ]}
            />

            <MediaSplit
                reverse
                title="Excellence in Sourcing & Supply"
                body={[
                    'Our global supply chain is built on a foundation of rigorous quality control and ethical procurement. From the fertile fields of West Africa to industrial manufacturing hubs, we ensure that every product meeting our name exceeds international standards.',
                    'We specialize in large-scale bulk procurement for international commodity traders and procurement managers, offering transparent documentation and end-to-end logistics support.',
                ]}
                image={productsInspectionImage}
                imageAlt="A quality inspector recording batch details beside a shrink-wrapped export pallet."
                action={{ label: 'Talk to our trade desk', href: '/contact' }}
            />

            <CardGrid
                surface="alt"
                title="Our Strategic Portfolios"
                description="Three portfolios, each with its own sourcing network, inspection regime and export documentation."
                items={[
                    {
                        title: 'Agricultural Commodities',
                        description:
                            'Export-grade cocoa, cashews, and ginger sourced from certified farms with full traceability.',
                        image: categoryAgriculturalImage,
                        imageAlt: 'Cocoa and cashew trees in fruit across a plantation at sunrise.',
                        action: {
                            label: 'View Portfolio',
                            href: '/products/agricultural-commodities',
                        },
                    },
                    {
                        title: 'Solid Minerals',
                        description:
                            'Strategic minerals and industrial ores including high-calorific coal and metallic concentrates.',
                        image: divisionMineralsImage,
                        imageAlt: 'Samples of coal, zinc ore and lead on a dark studio surface.',
                        action: { label: 'View Portfolio', href: '/products/solid-minerals' },
                    },
                    {
                        title: 'Mechanical Parts & Machinery',
                        description:
                            'Critical components for manufacturing, mining, and heavy equipment maintenance.',
                        image: divisionMachineryImage,
                        imageAlt: 'Gears, bearings and hydraulic parts on a steel workbench.',
                        action: {
                            label: 'View Portfolio',
                            href: '/products/mechanical-parts-and-machinery',
                        },
                    },
                ]}
            />

            <ProductGrid
                eyebrow="Portfolio Selection"
                title="Featured Trade Items"
                action={{ label: 'Request Full Catalogue', href: '/contact' }}
                items={[
                    {
                        title: 'Premium Cocoa Beans',
                        image: productCocoaImage,
                        imageAlt: 'Fermented Nigerian cocoa beans spread across a wooden surface.',
                        specs: [
                            { label: 'Origin', value: 'West Africa' },
                            { label: 'Moisture', value: '< 7.5%' },
                            { label: 'Grade', value: 'Main Crop Grade 1' },
                        ],
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Large Cashew Nuts',
                        image: productCashewImage,
                        imageAlt: 'Raw cashew nuts in their shells in a concrete tray.',
                        specs: [
                            { label: 'Nut Count', value: '180 - 200 / lb' },
                            { label: 'Outturn', value: '48 - 52 lbs' },
                            { label: 'Processing', value: 'Raw / Dried' },
                        ],
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Industrial Grade Coal',
                        image: productCoalImage,
                        imageAlt: 'Chunks of industrial-grade anthracite coal.',
                        specs: [
                            { label: 'Calorific Val', value: '6500+ kcal/kg' },
                            { label: 'Sulfur Content', value: '< 0.8%' },
                            { label: 'Application', value: 'Power & Steel' },
                        ],
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                ]}
            />

            <FeatureGrid
                surface="alt"
                columns={2}
                title="Quality Assurance"
                description="Two commitments that sit behind every consignment we ship."
                headingAlign="center"
                items={[
                    {
                        icon: <SproutIcon />,
                        title: 'Ethical Sourcing',
                        description:
                            'We work directly with cooperatives and farmers to ensure fair trade practices and sustainable environmental stewardship throughout the first mile of supply.',
                    },
                    {
                        icon: <ScanSearchIcon />,
                        title: 'Rigorous Inspection',
                        description:
                            'Every batch undergoes multi-level inspection at our consolidation hubs. We verify moisture content, purity, and technical specifications before a single pallet is loaded for export.',
                    },
                ]}
            />

            <FeatureGrid
                columns={3}
                align="center"
                title="Industries We Serve"
                description="Supporting global development through reliable supply across diverse industrial sectors."
                headingAlign="center"
                items={[
                    {
                        icon: <FactoryIcon />,
                        title: 'Food Manufacturing',
                        description:
                            'Confectioners and processors sourcing traceable raw agricultural inputs.',
                    },
                    {
                        icon: <HardHatIcon />,
                        title: 'Construction',
                        description:
                            'Aggregates, minerals and heavy equipment parts for infrastructure programmes.',
                    },
                    {
                        icon: <PickaxeIcon />,
                        title: 'Mining',
                        description:
                            'Replacement components and consumables that keep extraction fleets running.',
                    },
                    {
                        icon: <LeafIcon />,
                        title: 'Agriculture',
                        description:
                            'Machinery and spares supporting mechanised farming across the region.',
                    },
                    {
                        icon: <TruckIcon />,
                        title: 'Oil & Gas',
                        description:
                            'Industrial-grade parts and materials for upstream and midstream operators.',
                    },
                ]}
            />

            <FeatureGrid
                surface="primary"
                columns={4}
                title="The Pishon Advantage"
                description="What procurement managers get when they buy through us."
                headingAlign="center"
                items={[
                    {
                        icon: <ShipIcon />,
                        title: 'Reliable Supply Chains',
                        description:
                            'Our logistics network spans continents, ensuring delivery deadlines are met regardless of global market fluctuations.',
                    },
                    {
                        icon: <FileTextIcon />,
                        title: 'Full Documentation',
                        description:
                            'We handle certificates of origin, quality analysis reports and export compliance paperwork to streamline customs.',
                    },
                    {
                        icon: <ShieldCheckIcon />,
                        title: 'Quality Guaranteed',
                        description:
                            'Third-party verification available on all bulk shipments to ensure absolute product fidelity.',
                    },
                    {
                        icon: <HandshakeIcon />,
                        title: 'Global Partnerships',
                        description:
                            'We build long-term relationships based on transparency and mutual growth with international clients.',
                    },
                ]}
            />

            <StatGrid
                surface="alt"
                columns={3}
                size="compact"
                stats={[
                    { value: '250+', label: 'MT agricultural, monthly capacity' },
                    { value: '750+', label: 'MT solid minerals, monthly capacity' },
                    { value: '7', label: 'Days a week, air and sea freight' },
                ]}
            />

            <Faq title="Frequently Asked Questions" items={faqs.products} />

            <CtaBand
                title="Looking for a Reliable Product Supplier?"
                description="Get in touch with our procurement specialists to receive a detailed technical specification sheet and pricing quote for your next bulk order."
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Contact Sales', href: '/contact', variant: 'outline' },
                ]}
            />
        </>
    );
}
