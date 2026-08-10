import {
    BeakerIcon,
    CoffeeIcon,
    CookingPotIcon,
    DrumstickIcon,
    SparklesIcon,
    StoreIcon,
} from 'lucide-react';

import agriFarmerImage from '@/assets/agri-farmer.jpg';
import agriSourcingImage from '@/assets/agri-sourcing.jpg';
import commodityCashewImage from '@/assets/commodity-cashew.jpg';
import commodityCocoaShellsImage from '@/assets/commodity-cocoa-shells.jpg';
import commodityCocoaImage from '@/assets/commodity-cocoa.jpg';
import commodityGarlicImage from '@/assets/commodity-garlic.jpg';
import commodityGingerImage from '@/assets/commodity-ginger.jpg';
import commodityHibiscusImage from '@/assets/commodity-hibiscus.jpg';
import commoditySesameImage from '@/assets/commodity-sesame.jpg';
import commoditySoybeansImage from '@/assets/commodity-soybeans.jpg';
import commodityTurmericImage from '@/assets/commodity-turmeric.jpg';
import productCocoaImage from '@/assets/product-cocoa.jpg';
import { CardGrid } from '@/components/sections/CardGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Hero } from '@/components/sections/Hero';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { createMetadata } from '@/lib/seo';
import { faqs } from '@/config/faqs';

export const metadata = createMetadata({
    title: 'Agricultural Commodities',
    description:
        'Export-grade cocoa, cashews, sesame, ginger and more — sourced from certified West African farms with full traceability and phytosanitary compliance.',
    path: '/products/agricultural-commodities',
});

export default function AgriculturalCommoditiesPage() {
    return (
        <>
            <Hero
                title="Premium Agricultural Commodities for Global Markets"
                description="Export-grade commodities sourced directly from certified farms across Sub-Saharan Africa, inspected batch by batch and shipped with full documentation."
                image={productCocoaImage}
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Browse Products', href: '#catalogue', variant: 'outline' },
                ]}
            />

            <MediaSplit
                title="Bridging African Orchards to Global Industries"
                body={[
                    "At Pishon Parts & Machineries Ltd, we leverage a decade of industrial logistics expertise to provide a seamless supply chain for high-grade agricultural commodities. We don't just export; we ensure every metric ton meets international phytosanitary standards.",
                    'Our network spans the most fertile regions of Sub-Saharan Africa, where we partner directly with farmers to implement sustainable cultivation and harvesting practices, ensuring a reliable year-round supply for our enterprise clients.',
                ]}
                image={agriFarmerImage}
                imageAlt="A cocoa farmer holding freshly harvested seeds in a sunlit grove."
                highlight={{ value: '100%', description: 'Traceable supply, farm to vessel.' }}
                action={{ label: 'Talk to our trade desk', href: '/contact' }}
            />

            <CardGrid
                id="catalogue"
                surface="alt"
                columns={3}
                mediaHeight="short"
                title="Industrial Grade Catalog"
                description="Our core commodity offerings, sorted by industrial grade and global availability."
                action={{ label: 'Download Specs Catalogue', href: '/contact' }}
                items={[
                    {
                        title: 'Cocoa Beans',
                        badge: 'Grade A / Premium',
                        status: 'In Stock',
                        description: 'Main crop fermented beans with high oil content.',
                        image: commodityCocoaImage,
                        imageAlt: 'Premium raw cocoa beans on a neutral industrial surface.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Cocoa Shells',
                        badge: 'Export Standard',
                        status: 'In Stock',
                        description: 'Perfectly dried shells for animal feed and beverages.',
                        image: commodityCocoaShellsImage,
                        imageAlt: 'Dried cocoa shells in a professional container.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Cashew Nuts',
                        badge: 'W180 - W320',
                        status: 'In Stock',
                        description: 'Raw or roasted kernels sourced from select groves.',
                        image: commodityCashewImage,
                        imageAlt: 'Premium raw cashew nuts in a clean industrial tray.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Sesame Seeds',
                        badge: '99.9% Purity',
                        status: 'In Stock',
                        description: 'Hulled and unhulled seeds for oil and bakery use.',
                        image: commoditySesameImage,
                        imageAlt: 'Dried sesame seeds of export quality.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Ginger',
                        badge: 'Split Dried',
                        status: 'In Stock',
                        description: 'High-pungency ginger roots for pharma and spices.',
                        image: commodityGingerImage,
                        imageAlt: 'Clean, high-quality fresh ginger roots.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Garlic',
                        badge: 'Export Grade',
                        status: 'In Stock',
                        description: 'Premium dried garlic bulbs for culinary processing.',
                        image: commodityGarlicImage,
                        imageAlt: 'Premium export grade garlic bulbs.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Turmeric',
                        badge: 'High Curcumin',
                        status: 'In Stock',
                        description: 'Cleaned and dried finger rhizomes for global export.',
                        image: commodityTurmericImage,
                        imageAlt: 'Dried turmeric roots of industrial quality.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Hibiscus',
                        badge: 'Whole Flowers',
                        status: 'In Stock',
                        description: 'Sifted or whole calyxes for beverage industries.',
                        image: commodityHibiscusImage,
                        imageAlt: 'Dried whole hibiscus flowers of export grade.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Soybeans',
                        badge: 'Non-GMO',
                        status: 'In Stock',
                        description: 'Premium grade for oil production and animal feed.',
                        image: commoditySoybeansImage,
                        imageAlt: 'Premium soybeans in a clean container.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                ]}
            />

            <MediaSplit
                title="Direct Sourcing & Inspection"
                body={[
                    'We maintain an on-ground presence at the source. Our expert inspectors evaluate commodities directly at the harvest site, checking for initial moisture content, sizing, and colour uniformity before they even reach our facility.',
                ]}
                image={agriSourcingImage}
                imageAlt="A quality control officer in a lab coat assessing commodity samples at source."
            />

            <FeatureGrid
                surface="primary"
                columns={3}
                align="center"
                title="Industrial Applications"
                description="Serving diverse manufacturing and trade sectors worldwide."
                headingAlign="center"
                items={[
                    {
                        icon: <CookingPotIcon />,
                        title: 'Food Manufacturing',
                        description: 'Traceable raw inputs for processors and confectioners.',
                    },
                    {
                        icon: <CoffeeIcon />,
                        title: 'Beverages',
                        description: 'Calyxes, shells and botanicals for infusions and drinks.',
                    },
                    {
                        icon: <BeakerIcon />,
                        title: 'Pharmaceuticals',
                        description: 'High-pungency roots and rhizomes for active ingredients.',
                    },
                    {
                        icon: <SparklesIcon />,
                        title: 'Cosmetics',
                        description: 'Oil-bearing seeds and botanicals for formulation.',
                    },
                    {
                        icon: <DrumstickIcon />,
                        title: 'Animal Feed',
                        description: 'Shells, meal and protein inputs for compound feed.',
                    },
                    {
                        icon: <StoreIcon />,
                        title: 'Wholesale',
                        description: 'Bulk lots for distributors and regional traders.',
                    },
                ]}
            />

            <Faq title="Procurement FAQ" items={faqs.agricultural} />

            <CtaBand
                title="Looking for Premium Agricultural Commodities?"
                description="Partner with Pishon Parts & Machineries for a secure, transparent, high-volume commodity supply chain."
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Contact Sales', href: '/contact', variant: 'outline' },
                ]}
            />
        </>
    );
}
