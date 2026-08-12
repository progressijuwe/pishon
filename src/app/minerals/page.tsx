import {
    FileCheckIcon,
    FlaskConicalIcon,
    LeafIcon,
    ScaleIcon,
    SearchCheckIcon,
    ShipIcon,
    SproutIcon,
    WrenchIcon,
} from 'lucide-react';

import divisionMineralsImage from '@/assets/division-minerals.jpg';
import mineralIronOreImage from '@/assets/mineral-iron-ore.jpg';
import mineralLimestoneImage from '@/assets/mineral-limestone.jpg';
import mineralLithiumImage from '@/assets/mineral-lithium.jpg';
import mineralsHeroImage from '@/assets/minerals-hero.jpg';
import mineralsLogisticsImage from '@/assets/minerals-logistics.jpg';
import productCoalImage from '@/assets/product-coal.jpg';
import { CardGrid } from '@/components/sections/CardGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Hero } from '@/components/sections/Hero';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { createMetadata } from '@/lib/seo';
import { Faq } from '@/components/sections/Faq';
import { faqs } from '@/config/faqs';

export const metadata = createMetadata({
    title: 'Solid Minerals',
    description:
        "Strategically sourcing and supplying premium solid minerals from Nigeria's geological reserves — coal, lithium ore, limestone and iron ore, with full export compliance.",
    path: '/minerals',
});

export default function SolidMineralsPage() {
    return (
        <>
            <Hero
                title="Solid Minerals"
                description="Coal, lithium ore, limestone and iron ore from Nigerian sites, supplied to mills, smelters and processors — with responsible sourcing, independent assay and the logistics to land it."
                image={mineralsHeroImage}
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Browse Portfolio', href: '#portfolio', variant: 'outline' },
                ]}
            />

            <MediaSplit
                reverse
                title="Responsible Sourcing & Unmatched Quality Control"
                body={[
                    'Pishon Parts & Machineries Ltd stands at the forefront of the Nigerian solid minerals sector. We understand that industrial precision starts with the raw materials, and our sourcing network extends across the mineral-rich states to ensure a steady supply of high-grade commodities.',
                    'Every consignment is traced from mine site to vessel, with independent chemical analysis and full export permitting handled in-house.',
                ]}
                image={divisionMineralsImage}
                imageAlt="Coal, lithium ore and iron ore samples arranged on a dark studio surface."
                highlight={{
                    value: '99.8%',
                    description: 'Purity standards met across shipments.',
                }}
                action={{ label: 'Talk to our trade desk', href: '/contact' }}
            />

            <CardGrid
                id="portfolio"
                surface="alt"
                columns={4}
                mediaHeight="short"
                title="Our Mineral Portfolio"
                description="High-demand minerals essential for global manufacturing, energy, and construction."
                items={[
                    {
                        title: 'Sub-Bituminous Coal',
                        badge: '6500+ kcal/kg',
                        status: 'In Stock',
                        description:
                            'Primary fuel for industrial boilers and power generation with high calorific value.',
                        image: productCoalImage,
                        imageAlt: 'Chunks of industrial-grade sub-bituminous coal.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Lithium Ore',
                        badge: 'Spodumene',
                        status: 'In Stock',
                        description:
                            'Spodumene and lepidolite varieties essential for the global EV battery supply chain.',
                        image: mineralLithiumImage,
                        imageAlt: 'Lithium ore mineral samples on a clean industrial background.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'Industrial Limestone',
                        badge: 'High Calcium',
                        status: 'In Stock',
                        description:
                            'High-calcium limestone for cement production, agriculture, and steel smelting.',
                        image: mineralLimestoneImage,
                        imageAlt: 'Raw limestone rocks for industrial use.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                    {
                        title: 'High-Grade Iron Ore',
                        badge: 'Magnetite / Hematite',
                        status: 'In Stock',
                        description:
                            'Premium magnetite and hematite ores with optimal Fe content for steel mills.',
                        image: mineralIronOreImage,
                        imageAlt: 'Iron ore mineral samples in close detail.',
                        action: { label: 'Request Quote', href: '/request-quote' },
                    },
                ]}
            />

            <FeatureGrid
                columns={3}
                title="Rigorous Process Compliance"
                description="Three checkpoints stand between a mine site and a loaded vessel."
                headingAlign="center"
                items={[
                    {
                        icon: <SearchCheckIcon />,
                        title: 'Site Inspection',
                        description:
                            'Physical verification of mineral stock at mining sites to confirm consistency, grain size, and volume availability before procurement.',
                    },
                    {
                        icon: <FlaskConicalIcon />,
                        title: 'Laboratory Testing',
                        description:
                            'Certified independent labs conduct SGS or equivalent chemical analysis for purity, moisture content, and composition.',
                    },
                    {
                        icon: <FileCheckIcon />,
                        title: 'Export Compliance',
                        description:
                            'Expert management of NXP, Clean Certificate of Inspection, and Mineral Export Permits required for global trade.',
                    },
                ]}
            />

            <MediaSplit
                surface="alt"
                title="Streamlined Logistics & Bulk Export"
                body={[
                    'Operating out of major Nigerian ports, we handle the complex logistics of bulk mineral export. From rail transport to port stacking and vessel loading, our team ensures your cargo arrives on time and in specification.',
                ]}
                image={mineralsLogisticsImage}
                imageAlt="A bulk cargo vessel being loaded at an industrial port terminal."
                action={{ label: 'Enquire for bulk supply', href: '/request-quote' }}
            />

            <FeatureGrid
                surface="primary"
                columns={4}
                align="center"
                title="Explore Other Divisions"
                headingAlign="center"
                items={[
                    {
                        icon: <SproutIcon />,
                        title: 'Agricultural Commodities',
                        description: 'Cocoa, cashews, sesame and spices from certified farms.',
                    },
                    {
                        icon: <WrenchIcon />,
                        title: 'Machinery & Parts',
                        description: 'Critical components for manufacturing and mining fleets.',
                    },
                    {
                        icon: <ShipIcon />,
                        title: 'International Logistics',
                        description: 'Multimodal freight from interior sites to destination port.',
                    },
                    {
                        icon: <ScaleIcon />,
                        title: 'Trade Compliance',
                        description: 'Permits, certificates and customs documentation handled.',
                    },
                ]}
            />

            <FeatureGrid
                columns={2}
                title="Sourced Responsibly"
                description="Extraction partners are audited against the standards our buyers are held to."
                headingAlign="center"
                items={[
                    {
                        icon: <LeafIcon />,
                        title: 'Environmental Compliance',
                        description:
                            'Strict adherence to local labour and environmental law across every site we buy from.',
                    },
                    {
                        icon: <FlaskConicalIcon />,
                        title: 'Batch-Level Analysis',
                        description:
                            'Every batch undergoes rigorous chemical analysis before it is cleared for loading.',
                    },
                ]}
            />

            <Faq title="Frequently Asked Questions" items={faqs.minerals} />

            <CtaBand
                title="Looking for a Reliable Solid Mineral Supplier?"
                description="Send us your specification and volume requirements, and our trade desk will return a detailed quotation with delivery terms."
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Contact Sales', href: '/contact', variant: 'outline' },
                ]}
            />
        </>
    );
}
