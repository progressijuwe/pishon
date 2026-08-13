import {
    BoxesIcon,
    ContainerIcon,
    ClipboardCheckIcon,
    FileCheckIcon,
    FileTextIcon,
    HandshakeIcon,
    FuelIcon,
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
    WarehouseIcon,
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
    title: 'Services & Export Logistics',
    description:
        'Commodity export logistics, warehousing, general importation and oil and gas support for businesses across Nigeria — from documentation and inspection to freight and delivery.',
    path: '/services',
});

export default function ExportProcessPage() {
    return (
        <>
            <Hero
                title="Services & Export Logistics"
                description="Commodity export logistics, warehousing, general importation and oil and gas support — the operational side of the business, run for our own consignments and for yours."
                image={servicesHeroImage}
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'Talk to an Export Specialist', href: '/contact', variant: 'outline' },
                ]}
            />

            <FeatureGrid
                surface="alt"
                columns={4}
                title="What We Do"
                description="Four service lines, delivered across Nigeria."
                headingAlign="center"
                items={[
                    {
                        icon: <ContainerIcon />,
                        title: 'Commodity Export Logistics',
                        description:
                            'Documentation, inspection, haulage and vessel booking for agricultural commodities and solid minerals leaving Nigeria.',
                    },
                    {
                        icon: <WarehouseIcon />,
                        title: 'Warehousing',
                        description:
                            'Covered storage and handling between production and despatch, with stock recorded against the lot it belongs to.',
                    },
                    {
                        icon: <TruckIcon />,
                        title: 'General Importation',
                        description:
                            'Sourcing, Form M, SONCAP and customs clearance for goods brought into Nigeria on your behalf.',
                    },
                    {
                        icon: <FuelIcon />,
                        title: 'Oil & Gas Services',
                        description:
                            'Supply and logistics support for upstream and downstream operators, including ruggedised parts and consumables.',
                    },
                ]}
            />

            <MediaSplit
                title="End-to-End Export Management"
                body={[
                    'We handle the paperwork, inspection and freight that move a consignment out of Nigeria — or bring imported plant and parts in. Whether you are shipping your own commodity or buying ours, the same documentation desk runs the file.',
                ]}
                image={minerelsLogisticsImage}
                imageAlt="A bulk cargo vessel being loaded at an industrial port terminal."
                action={{ label: 'Talk to an export specialist', href: '/contact' }}
            />

            <JourneyCarousel
                title="How We Move a Consignment"
                description="Ten stages from your brief to a delivered consignment — whether we are supplying the goods or moving yours."
                steps={[
                    {
                        label: 'Step 01',
                        title: 'Your Enquiry',
                        description:
                            'We take your brief — commodity or part, volume, grade and where it needs to land — and confirm what is actually required before anything is priced.',
                        icon: <MailIcon />,
                        image: galleryOfficeImage,
                        imageAlt: 'The glass-fronted corporate headquarters building.',
                    },
                    {
                        label: 'Step 02',
                        title: 'Specification Review',
                        description:
                            'We map the specification, the paperwork the destination will demand, and any site or storage constraints at your end.',
                        icon: <ClipboardCheckIcon />,
                        image: equipmentPartsImage,
                        imageAlt:
                            'Mechanical components laid out across a detailed engineering drawing.',
                    },
                    {
                        label: 'Step 03',
                        title: 'Your Quotation',
                        description:
                            'You receive a costed quotation covering unit price, our handling fees, terms and a delivery window — usually within one to two days.',
                        icon: <ReceiptTextIcon />,
                        image: companyOverviewImage,
                        imageAlt: 'A plant worker handling a bulk sack on the production floor.',
                    },
                    {
                        label: 'Step 04',
                        title: 'Sourcing or Intake',
                        description:
                            'We draw on our own farms and a vetted producer network to secure the goods, or receive your consignment into our care if you are supplying it.',
                        icon: <ShoppingCartIcon />,
                        image: agriSourcingImage,
                        imageAlt:
                            'A quality control officer in a lab coat assessing commodity samples at source.',
                    },
                    {
                        label: 'Step 05',
                        title: 'Inspection & Quality Assurance',
                        description:
                            'Every batch is sampled and inspected against the agreed specification, with independent analysis where the buyer or regulator requires it.',
                        icon: <SearchCheckIcon />,
                        image: servicesQaImage,
                        imageAlt:
                            'A quality technician measuring a machined component with digital calipers.',
                    },
                    {
                        label: 'Step 06',
                        title: 'Packing & Storage',
                        description:
                            'We bag, palletise and brace the load for the journey ahead, and hold it in covered storage until the vessel or vehicle is ready.',
                        icon: <PackageCheckIcon />,
                        image: agriPackagingImage,
                        imageAlt: 'Stacked 50kg industrial bags of commodities on wooden pallets.',
                    },
                    {
                        label: 'Step 07',
                        title: 'Documentation',
                        description:
                            'We prepare and file the documentation — Form M, SONCAP, certificates of origin, bills of lading — so the consignment clears without sitting at a port.',
                        icon: <FileTextIcon />,
                        image: productsInspectionImage,
                        imageAlt:
                            'A quality inspector recording batch details beside a shrink-wrapped export pallet.',
                    },
                    {
                        label: 'Step 08',
                        title: 'Inland Haulage & Port Handling',
                        description:
                            'We move the load from site to terminal and manage the handling and clearance at the port on your behalf.',
                        icon: <TruckIcon />,
                        image: galleryTrucksImage,
                        imageAlt: 'Transport trucks loaded with containers at a port facility.',
                    },
                    {
                        label: 'Step 09',
                        title: 'Freight & Tracking',
                        description:
                            'We book the freight and track the movement, by sea, air or road, and keep you posted at each handover.',
                        icon: <WaypointsIcon />,
                        image: exportTransitImage,
                        imageAlt: 'A cargo freighter cutting through open ocean.',
                    },
                    {
                        label: 'Step 10',
                        title: 'Delivery & Handover',
                        description:
                            'The consignment is handed over at the agreed destination, with the full document pack and condition record for your file.',
                        icon: <HandshakeIcon />,
                        image: aboutTrustImage,
                        imageAlt:
                            'Two executives shaking hands across a desk in an office overlooking Benin City.',
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
                imageAlt="A quality technician measuring a machined component with digital calipers."
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

            <Faq title="Frequently Asked Questions" items={faqs.export} />

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
