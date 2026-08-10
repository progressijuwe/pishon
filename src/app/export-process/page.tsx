import {
    BoxesIcon,
    ClipboardCheckIcon,
    FileCheckIcon,
    FileTextIcon,
    HandshakeIcon,
    LayersIcon,
    MailIcon,
    PackageCheckIcon,
    PlaneIcon,
    ReceiptTextIcon,
    RouteIcon,
    ScrollTextIcon,
    SearchCheckIcon,
    ShieldCheckIcon,
    ShoppingCartIcon,
    TruckIcon,
    WaypointsIcon,
} from 'lucide-react';

import aboutTrustImage from '@/assets/about-trust.jpg';
import agriPackagingImage from '@/assets/agri-packaging.jpg';
import agriSourcingImage from '@/assets/agri-sourcing.jpg';
import companyOverviewImage from '@/assets/company-overview.jpg';
import equipmentPartsImage from '@/assets/equipment-parts.jpg';
import exportTransitImage from '@/assets/export-transit.jpg';
import galleryOfficeImage from '@/assets/gallery-office.jpg';
import galleryTrucksImage from '@/assets/gallery-trucks.jpg';
import minerelsLogisticsImage from '@/assets/minerals-logistics.jpg';
import productsInspectionImage from '@/assets/products-inspection.jpg';
import servicesHeroImage from '@/assets/services-hero.jpg';
import servicesQaImage from '@/assets/services-qa.jpg';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Hero } from '@/components/sections/Hero';
import { JourneyCarousel } from '@/components/sections/JourneyCarousel';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { createMetadata } from '@/lib/seo';
import { faqs } from '@/config/faqs';

export const metadata = createMetadata({
    title: 'Export Process',
    description:
        'A ten-step export journey from enquiry to delivery — sourcing, inspection, export-grade packaging, documentation and global freight, managed end to end.',
    path: '/export-process',
});

export default function ExportProcessPage() {
    return (
        <>
            <Hero
                title="Export Process"
                description="Precision, transparency and international compliance at every stage of the procurement lifecycle."
                image={servicesHeroImage}
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Talk to an Export Specialist', href: '/contact', variant: 'outline' },
                ]}
            />

            <MediaSplit
                title="End-to-End Export Management"
                body={[
                    "Our export operations are built on a foundation of absolute reliability and international expertise. We navigate the complexities of global trade so you don't have to, ensuring that every piece of machinery or raw commodity reaches its destination with surgical precision.",
                ]}
                image={minerelsLogisticsImage}
                imageAlt="A bulk cargo vessel being loaded at an industrial port terminal."
                highlight={{
                    value: '25+',
                    description: 'Countries served, with zero compliance errors.',
                }}
                action={{ label: 'Talk to an export specialist', href: '/contact' }}
            />

            <JourneyCarousel
                title="The Export Journey"
                description="A ten-step roadmap to procurement success."
                steps={[
                    {
                        label: 'Step 01',
                        title: 'Customer Enquiry',
                        description:
                            'Your journey begins with a dedicated consultation to analyse your commodity requirements and destination logistics.',
                        icon: <MailIcon />,
                        image: galleryOfficeImage,
                        imageAlt: 'The glass-fronted corporate headquarters building.',
                    },
                    {
                        label: 'Step 02',
                        title: 'Requirement Analysis',
                        description:
                            'We translate your brief into a bespoke export strategy, mapping specifications, destination compliance and site-readiness before a price is quoted.',
                        icon: <ClipboardCheckIcon />,
                        image: equipmentPartsImage,
                        imageAlt:
                            'Mechanical components laid out across a detailed engineering drawing.',
                    },
                    {
                        label: 'Step 03',
                        title: 'Quotation & RFQ Approval',
                        description:
                            'A detailed quotation covering unit pricing, trade terms and delivery windows — typically returned within one to two days of enquiry.',
                        icon: <ReceiptTextIcon />,
                        image: companyOverviewImage,
                        imageAlt:
                            'An export manager inspecting mechanical parts in a modern warehouse facility.',
                    },
                    {
                        label: 'Step 04',
                        title: 'Product Sourcing',
                        description:
                            'Our procurement specialists leverage long-standing relationships with Nigerian producers to secure high-quality commodities at competitive market rates.',
                        icon: <ShoppingCartIcon />,
                        image: agriSourcingImage,
                        imageAlt:
                            'A quality control officer in a lab coat assessing commodity samples at source.',
                    },
                    {
                        label: 'Step 05',
                        title: 'Inspection & Quality Assurance',
                        description:
                            'Every batch undergoes rigorous multi-stage inspection to confirm compliance with international quality standards before it is cleared to ship.',
                        icon: <SearchCheckIcon />,
                        image: servicesQaImage,
                        imageAlt:
                            'A technician taking high-precision laser measurements of a component.',
                    },
                    {
                        label: 'Step 06',
                        title: 'Export-Grade Packaging',
                        description:
                            'Palletisation, vapour-barrier packing and container bracing designed to hold product integrity through long-haul transit.',
                        icon: <PackageCheckIcon />,
                        image: agriPackagingImage,
                        imageAlt: 'Stacked 50kg industrial bags of commodities on wooden pallets.',
                    },
                    {
                        label: 'Step 07',
                        title: 'Export Documentation',
                        description:
                            'We handle the bureaucracy of international trade, ensuring full compliance with both Nigerian and destination-country customs regulations.',
                        icon: <FileTextIcon />,
                        image: productsInspectionImage,
                        imageAlt:
                            'A quality inspector recording batch details beside a shrink-wrapped export pallet.',
                    },
                    {
                        label: 'Step 08',
                        title: 'Inland Haulage & Port Handling',
                        description:
                            "Efficient inland haulage and terminal handling at Nigeria's major ports, with customs clearance managed on your behalf.",
                        icon: <TruckIcon />,
                        image: galleryTrucksImage,
                        imageAlt: 'Transport trucks loaded with containers at a port facility.',
                    },
                    {
                        label: 'Step 09',
                        title: 'Ocean & Air Transit',
                        description:
                            'Real-time tracking of vessel movement across international waters, with air freight available where the timeline is critical.',
                        icon: <WaypointsIcon />,
                        image: exportTransitImage,
                        imageAlt: 'A cargo freighter cutting through open ocean.',
                    },
                    {
                        label: 'Step 10',
                        title: 'Delivery & Partnership',
                        description:
                            'Successful delivery at the destination port or site — and the start of a long-term trading relationship.',
                        icon: <HandshakeIcon />,
                        image: aboutTrustImage,
                        imageAlt:
                            'Two executives shaking hands in a boardroom overlooking an industrial terminal.',
                    },
                ]}
            />

            <MediaSplit
                reverse
                title="Rigorous Quality Inspection"
                body={[
                    'Every component undergoes a multi-point technical evaluation by our certified inspectors. We use digital calipers and advanced diagnostic tools to confirm factory specifications are met or exceeded before an item leaves our facility.',
                ]}
                bullets={[
                    'Visual defect analysis and surface profiling',
                    'Tolerance measurement to within 0.01mm',
                    'Randomised sampling consistent with ISO standards',
                ]}
                image={servicesQaImage}
                imageAlt="A technician taking high-precision laser measurements of a component."
            />

            <FeatureGrid
                surface="alt"
                columns={3}
                title="Fortified Packaging & Handling"
                description="Industrial-grade protection for transit across oceans and continents."
                headingAlign="center"
                items={[
                    {
                        icon: <BoxesIcon />,
                        title: 'Heavy-Duty Palletisation',
                        description:
                            'Reinforced wooden and plastic pallets designed for maximum load stability and easy forklift manoeuvring.',
                    },
                    {
                        icon: <LayersIcon />,
                        title: 'Vapour Barrier Packing',
                        description:
                            'Protection against humidity and corrosion during long-haul sea freight using high-spec vapour seal technology.',
                    },
                    {
                        icon: <PackageCheckIcon />,
                        title: 'Container Loading',
                        description:
                            'Strategic weight distribution and bracing inside 20ft and 40ft containers to prevent shift-related damage.',
                    },
                ]}
            />

            <MediaSplit
                title="Global Reach, Local Expertise"
                body={[
                    'We draw on a network of premier carriers and port facilities to offer flexible shipping tailored to your urgency and budget.',
                ]}
                bullets={[
                    'Air freight — 3–5 business days, best for critical parts',
                    'Ocean freight (LCL/FCL) — 15–45 days, most cost-effective in bulk',
                    'Consolidated multimodal routing on request',
                ]}
                image={exportTransitImage}
                imageAlt="A cargo freighter cutting through open ocean."
            />

            <FeatureGrid
                surface="alt"
                columns={4}
                title="The Paperwork, Perfected"
                description="Every document required for seamless customs clearance, handled in-house."
                headingAlign="center"
                items={[
                    {
                        icon: <ReceiptTextIcon />,
                        title: 'Commercial Invoice',
                        description:
                            'Detailed valuation and product breakdown for regulatory compliance.',
                    },
                    {
                        icon: <FileCheckIcon />,
                        title: 'Packing List',
                        description:
                            'Itemised inventory of container contents for rapid verification.',
                    },
                    {
                        icon: <ScrollTextIcon />,
                        title: 'Bill of Lading',
                        description: 'The legal title and transport agreement for your cargo.',
                    },
                    {
                        icon: <ShieldCheckIcon />,
                        title: 'Certificate of Origin',
                        description:
                            'Verified documentation of manufacturing locality for trade tariffs.',
                    },
                ]}
            />

            <FeatureGrid
                surface="primary"
                columns={3}
                align="center"
                title="Why Our Process Works"
                description="Eliminating technical errors and administrative delays keeps your projects on schedule and within budget."
                headingAlign="center"
                items={[
                    {
                        icon: <RouteIcon />,
                        title: 'Centralised Tracking',
                        description: 'One point of contact for the entire journey.',
                    },
                    {
                        icon: <ShieldCheckIcon />,
                        title: 'Risk Mitigation',
                        description: 'Insurance and compliance checks at every gate.',
                    },
                    {
                        icon: <PlaneIcon />,
                        title: 'Flexible Freight',
                        description: 'Air and ocean routing matched to your deadline.',
                    },
                ]}
            />

            <Faq title="Frequently Asked Questions" items={faqs.exportProcess} />

            <CtaBand
                title="Ready to Export with Confidence?"
                description="Join the industrial firms who trust Pishon Parts with their critical procurement needs."
                actions={[
                    { label: 'Start Your Quote', href: '/request-quote' },
                    { label: 'Talk to an Export Specialist', href: '/contact', variant: 'outline' },
                ]}
            />
        </>
    );
}
