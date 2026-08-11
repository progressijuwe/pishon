import {
    BadgeCheckIcon,
    FileTextIcon,
    FuelIcon,
    GlobeIcon,
    PackageSearchIcon,
    ScrollTextIcon,
    ShipIcon,
    WarehouseIcon,
} from 'lucide-react';

import sectorAgricultureImage from '@/assets/sector-agriculture.jpg';
import sectorConstructionImage from '@/assets/sector-construction.jpg';
import sectorManufacturingImage from '@/assets/sector-manufacturing.jpg';
import sectorMiningImage from '@/assets/sector-mining.jpg';
import sectorOilgasImage from '@/assets/sector-oilgas.jpg';
import servicesFreightImage from '@/assets/services-freight.jpg';
import servicesHeroImage from '@/assets/services-hero.jpg';
import servicesIntroImage from '@/assets/services-intro.jpg';
import servicesQaImage from '@/assets/services-qa.jpg';
import { ImageTiles } from '@/components/sections/ImageTiles';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Hero } from '@/components/sections/Hero';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { createMetadata } from '@/lib/seo';
import { faqs } from '@/config/faqs';

export const metadata = createMetadata({
    title: 'Services',
    description:
        'End-to-end sourcing, procurement, logistics and export solutions for global industry — freight, warehousing, documentation and third-party quality inspection.',
    path: '/services',
});

export default function ServicesPage() {
    return (
        <>
            <Hero
                title="Services"
                description="End-to-end sourcing, procurement, logistics and export solutions for global industry. We bridge the gap between complex industrial needs and seamless international execution."
                image={servicesHeroImage}
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Talk to Our Team', href: '/contact', variant: 'outline' },
                ]}
            />

            <MediaSplit
                title="Unlocking Global Supply Chain Potential"
                body={[
                    'Pishon Parts & Machineries Ltd represents the pinnacle of industrial procurement and trade facilitation. Our expertise spans continents, ensuring that high-specification parts and essential commodities reach their destination with zero friction.',
                    'In an era of supply chain volatility, we provide the stability of a seasoned partner. Our on-the-ground presence in key manufacturing hubs and export ports lets us oversee every detail — from the factory floor to the final point of delivery.',
                ]}
                image={servicesIntroImage}
                imageAlt="A quality inspector in a high-visibility vest and hardhat examining industrial stock in a warehouse."
                highlight={{
                    value: '10+',
                    description: 'Years of procurement excellence across 25+ countries.',
                }}
                action={{ label: 'Talk to our trade desk', href: '/contact' }}
            />

            <FeatureGrid
                surface="alt"
                columns={3}
                title="Core Industrial Solutions"
                description="A service architecture built for the demands of modern international trade."
                headingAlign="center"
                items={[
                    {
                        icon: <ShipIcon />,
                        title: 'Global Logistics & Freight',
                        description:
                            'Multimodal transport covering sea, air and land — including customs, hazardous material protocols and oversized industrial freight.',
                    },
                    {
                        icon: <PackageSearchIcon />,
                        title: 'International Procurement',
                        description:
                            'Sourcing high-spec industrial machinery and parts directly from verified manufacturers.',
                    },
                    {
                        icon: <WarehouseIcon />,
                        title: 'Warehousing',
                        description:
                            'Strategic storage at major trade hubs, ensuring both security and rapid dispatch.',
                    },
                    {
                        icon: <FileTextIcon />,
                        title: 'Documentation',
                        description:
                            'Full management of Bill of Lading, Certificate of Origin and export licences.',
                    },
                    {
                        icon: <FuelIcon />,
                        title: 'Oil & Gas Support',
                        description:
                            'Specialised supply chain solutions for upstream and downstream operations.',
                    },
                    {
                        icon: <BadgeCheckIcon />,
                        title: 'Quality Inspection',
                        description:
                            'Rigorous third-party inspection to guarantee parts meet international standards.',
                    },
                ]}
            />

            <MediaSplit
                reverse
                title="Door-to-Door Global Logistics"
                body={[
                    "Our logistics network runs on precision over volume. We don't just ship items, we manage a timeline — pairing real-time tracking with local expertise to navigate international customs and last-mile delivery in emerging markets.",
                ]}
                bullets={[
                    'Specialised heavy-lift transport',
                    'Climate-controlled warehousing',
                    'Customs clearance management',
                ]}
                image={servicesFreightImage}
                imageAlt="The open nose cone of a transport aircraft being loaded with industrial cargo."
            />

            <MediaSplit
                surface="alt"
                title="Uncompromising Inspection Standards"
                body={[
                    'Quality is the foundation of industrial trust. Every order passes a three-tier inspection process, from initial manufacturer vetting to pre-shipment verification, so the components you receive are exactly as specified — no exceptions.',
                ]}
                image={servicesQaImage}
                imageAlt="A technician in a clean suit taking high-precision laser measurements of a component."
            />

            <ImageTiles
                title="Sector Specialisation"
                description="Tailored procurement for the industries that move economies."
                items={[
                    {
                        title: 'Agriculture',
                        description:
                            'Harvest, processing and handling equipment, plus the export of the commodities it produces.',
                        image: sectorAgricultureImage,
                        imageAlt: 'A combine harvester working across a golden wheat field.',
                    },
                    {
                        title: 'Mining',
                        description:
                            'Extraction fleets, crushing plant and wear parts for open-pit and underground operations.',
                        image: sectorMiningImage,
                        imageAlt: 'Dump trucks moving along the terraces of a large open-pit mine.',
                    },
                    {
                        title: 'Construction',
                        description:
                            'Earthmoving, lifting and paving equipment for infrastructure and vertical builds.',
                        image: sectorConstructionImage,
                        imageAlt: 'Tower cranes over a major urban construction site.',
                    },
                    {
                        title: 'Oil & Gas',
                        description:
                            'Ruggedised components for upstream and midstream operations, onshore and offshore.',
                        image: sectorOilgasImage,
                        imageAlt: 'An offshore oil rig platform at sea during golden hour.',
                    },
                    {
                        title: 'Manufacturing',
                        description:
                            'Production line machinery, automation components and spares that keep plants running.',
                        image: sectorManufacturingImage,
                        imageAlt: 'Robotic arms welding a chassis on an automated assembly line.',
                    },
                ]}
            />

            <FeatureGrid
                surface="primary"
                columns={3}
                align="center"
                title="Why Global Industry Chooses Pishon"
                headingAlign="center"
                items={[
                    {
                        icon: <GlobeIcon />,
                        title: 'Reliable Supply Chain',
                        description:
                            'A diverse partner network keeps supply continuous even in challenging geopolitical climates.',
                    },
                    {
                        icon: <ScrollTextIcon />,
                        title: 'Export Expertise',
                        description:
                            "We navigate complex international trade law and regulation so our clients don't have to.",
                    },
                    {
                        icon: <ShipIcon />,
                        title: 'Global Logistics Network',
                        description:
                            'Owned and partner facilities at strategic ports across Africa, Europe and Asia.',
                    },
                ]}
            />

            <Faq title="Service Inquiries" items={faqs.services} />

            <CtaBand
                title="Need a Trusted International Trade Partner?"
                description="Start your next procurement journey with the industrial authority. Our team is ready to optimise your supply chain."
                actions={[
                    { label: 'Get Started', href: '/request-quote' },
                    { label: 'Speak with an Expert', href: '/contact', variant: 'outline' },
                ]}
            />
        </>
    );
}
