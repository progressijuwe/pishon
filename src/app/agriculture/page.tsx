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
import commodityCashewImage from '@/assets/product-cashew.jpg';
import commodityCocoaShellsImage from '@/assets/commodity-cocoa-shells.jpg';
import commodityCocoaImage from '@/assets/commodity-cocoa.jpg';
import commodityGarlicImage from '@/assets/commodity-garlic.jpg';
import commodityGingerImage from '@/assets/commodity-ginger.jpg';
import commodityHibiscusImage from '@/assets/commodity-hibiscus.jpg';
import commoditySesameImage from '@/assets/commodity-sesame.jpg';
import commoditySoybeansImage from '@/assets/commodity-soybeans.jpg';
import commodityBitterKolaImage from '@/assets/commodity-bitterkola.jpg';
import commodityCharcoalImage from '@/assets/commodity-charcoal.jpg';
import commodityTurmericImage from '@/assets/commodity-turmeric.jpg';
import commodityKolaNutImage from '@/assets/commodity-kolanuts.jpg';
import commodityMoringaImage from '@/assets/commodity-moringa.jpg';
import commodityPalmFruitImage from '@/assets/commodity-palm-fruit.jpg';
import commodityPeanutsImage from '@/assets/commodity-peanuts.jpg';
import commodityTigernutImage from '@/assets/commodity-tigernut.jpg';
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
    path: '/agriculture',
});

export default function AgriculturalCommoditiesPage() {
    return (
        <>
            <Hero
                title="Agricultural Commodities, Grown and Sourced"
                description="Export-grade commodities sourced directly from certified farms across Sub-Saharan Africa, inspected batch by batch and shipped with full documentation."
                image={productCocoaImage}
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Browse Products', href: '#catalogue', variant: 'outline' },
                ]}
            />

            <MediaSplit
                title="From Our Farms to Nigerian Processors"
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
                description="Items marked ‘Grown on our farms’ come from land we own and operate, and can be traced to the plot. The rest are sourced through vetted cooperatives and aggregators."
                action={{ label: 'Request Specification Sheets', href: '/contact' }}
                items={[
                    {
                        title: 'Cocoa Beans',
                        badge: 'Main Crop, Grade 1',
                        status: 'Grown on our farms',
                        description: 'Main crop fermented beans with high oil content.',
                        image: commodityCocoaImage,
                        imageAlt: 'Premium raw cocoa beans on a neutral industrial surface.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Cocoa Shells',
                        badge: 'Export Standard',
                        status: 'Grown on our farms',
                        description: 'Perfectly dried shells for animal feed and beverages.',
                        image: commodityCocoaShellsImage,
                        imageAlt: 'Dried cocoa shells in a professional container.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Palm Fruit & Palm Nut',
                        badge: 'Banga / Tenera',
                        status: 'Grown on our farms',
                        description:
                            'Fresh fruit bunches and loose palm nut from our own banga and oil palm plantations, for millers and oil processors.',
                        image: commodityPalmFruitImage,
                        imageAlt:
                            'Freshly harvested ripe red oil palm fruit bunches with loose palm nuts.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Cashew Nuts',
                        badge: 'Kernel grades W180 – W320',
                        description: 'Raw or roasted kernels sourced from select groves.',
                        image: commodityCashewImage,
                        imageAlt: 'Premium raw cashew nuts in a clean industrial tray.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Sesame Seeds',
                        badge: '99.9% Purity',
                        description: 'Hulled and unhulled seeds for oil and bakery use.',
                        image: commoditySesameImage,
                        imageAlt: 'Dried sesame seeds of export quality.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Ginger',
                        badge: 'Split Dried',
                        description: 'High-pungency ginger roots for pharma and spices.',
                        image: commodityGingerImage,
                        imageAlt: 'Clean, high-quality fresh ginger roots.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Garlic',
                        badge: 'Export Grade',
                        description: 'Premium dried garlic bulbs for culinary processing.',
                        image: commodityGarlicImage,
                        imageAlt: 'Premium export grade garlic bulbs.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Turmeric',
                        badge: 'High Curcumin',
                        description: 'Cleaned and dried finger rhizomes for global export.',
                        image: commodityTurmericImage,
                        imageAlt: 'Dried turmeric roots of industrial quality.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Hibiscus',
                        badge: 'Whole Flowers',
                        description: 'Sifted or whole calyxes for beverage industries.',
                        image: commodityHibiscusImage,
                        imageAlt: 'Dried whole hibiscus flowers of export grade.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Soybeans',
                        badge: 'Non-GMO',
                        description: 'Premium grade for oil production and animal feed.',
                        image: commoditySoybeansImage,
                        imageAlt: 'Premium soybeans in a clean container.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Bitter Kola',
                        badge: 'Export Grade',
                        description:
                            'Premium dried bitter kola nuts, carefully selected for traditional, nutritional, and commercial use.',
                        image: commodityBitterKolaImage,
                        imageAlt: 'Premium bitter kola nuts prepared for export.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Kolanut',
                        badge: 'Fresh & Dried',
                        description:
                            'Quality kola nuts sourced from trusted growers for traditional, beverage, and commercial applications.',
                        image: commodityKolaNutImage,
                        imageAlt: 'Fresh and dried kola nuts prepared for commercial supply.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Charcoal',
                        badge: 'Premium Grade',
                        description:
                            'High-quality charcoal with excellent heat output for domestic, commercial, and industrial applications.',
                        image: commodityCharcoalImage,
                        imageAlt: 'Premium hardwood charcoal prepared for export.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Moringa',
                        badge: 'Premium Quality',
                        description:
                            'Carefully processed moringa leaves and products valued for nutritional, herbal, and wellness applications.',
                        image: commodityMoringaImage,
                        imageAlt: 'Premium dried moringa leaves prepared for processing.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Peanuts',
                        badge: 'Export Grade',
                        description:
                            'Quality raw peanuts selected for food processing, oil production, and animal feed applications.',
                        image: commodityPeanutsImage,
                        imageAlt: 'Premium raw peanuts prepared for export.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Tigernut',
                        badge: 'Premium Grade',
                        description:
                            'Clean, naturally sweet tigernuts suitable for beverages, snacks, flour, and food processing.',
                        image: commodityTigernutImage,
                        imageAlt: 'Premium dried tigernuts prepared for export.',
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
                description="Serving manufacturers, processors and traders across Nigeria."
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
