import aboutTrustImage from '@/assets/about-trust.jpg';
import agriFarmerImage from '@/assets/agri-farmer.jpg';
import agriPackagingImage from '@/assets/agri-packaging.jpg';
import agriSourcingImage from '@/assets/agri-sourcing.jpg';
import equipmentPartsImage from '@/assets/equipment-parts.jpg';
import galleryContainerTerminalImage from '@/assets/gallery-container-terminal.jpg';
import galleryLabImage from '@/assets/gallery-lab.jpg';
import galleryPartsWarehouseImage from '@/assets/gallery-parts-warehouse.jpg';
import galleryTrucksImage from '@/assets/gallery-trucks.jpg';
import galleryWarehouseImage from '@/assets/gallery-warehouse.jpg';
import sectorManufacturingImage from '@/assets/sector-manufacturing.jpg';
import sectorMiningImage from '@/assets/sector-mining.jpg';
import servicesHeroImage from '@/assets/services-hero.jpg';
import { CardGrid } from '@/components/sections/CardGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { FilterableGallery } from '@/components/sections/FilterableGallery';
import { Hero } from '@/components/sections/Hero';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
    title: 'Gallery',
    description:
        'Photography of Pishon Parts operations — mineral extraction, agricultural sourcing, quality laboratories, warehousing and international export handling.',
    path: '/gallery',
});

const CATEGORIES = [
    'Agricultural Commodities',
    'Solid Minerals',
    'Mechanical Parts',
    'Warehouses',
    'Export Operations',
];

export default function GalleryPage() {
    return (
        <>
            <Hero
                title="Gallery"
                description="Explore our operations, products and international trading capabilities through authentic photography of our global supply chain."
                image={galleryContainerTerminalImage}
                actions={[
                    { label: 'Request Quote', href: '/request-quote' },
                    { label: 'View Products', href: '/products', variant: 'outline' },
                ]}
            />

            <MediaSplit
                title="Global Presence, Unmatched Reliability"
                body={[
                    'We believe in radical transparency. This gallery shows the real-world scale of our operations — from the depths of solid mineral mining sites to the precision of modern manufacturing floors and the activity of international shipping ports.',
                ]}
                bullets={[
                    'Quality assurance — rigorous testing at every stage',
                    'Global logistics — seamless international trading',
                ]}
                image={galleryPartsWarehouseImage}
                imageAlt="A modern industrial warehouse filled with organised racks of mechanical components."
                action={{ label: 'Talk to our team', href: '/contact' }}
            />

            <FilterableGallery
                categories={CATEGORIES}
                photos={[
                    {
                        title: 'Quality Control',
                        caption: 'Laboratory analysis of mineral samples.',
                        category: 'Solid Minerals',
                        image: galleryLabImage,
                        alt: 'A technician inspecting mineral samples under a microscope.',
                    },
                    {
                        title: 'Field Extraction',
                        caption: 'Heavy-duty operations at our mining sites.',
                        category: 'Solid Minerals',
                        image: sectorMiningImage,
                        alt: 'Dump trucks moving along the terraces of a large open-pit mine.',
                    },
                    {
                        title: 'Manufacturing',
                        caption: 'Industrial component fabrication.',
                        category: 'Mechanical Parts',
                        image: sectorManufacturingImage,
                        alt: 'Robotic arms welding a chassis on an automated assembly line.',
                    },
                    {
                        title: 'Product Sampling',
                        caption: 'Technical inspection of mechanical parts.',
                        category: 'Mechanical Parts',
                        image: equipmentPartsImage,
                        alt: 'Turbine blades, pistons and gears laid out on an engineering drawing.',
                    },
                    {
                        title: 'Agricultural Sourcing',
                        caption: 'Farm-gate inspection at the point of harvest.',
                        category: 'Agricultural Commodities',
                        image: agriFarmerImage,
                        alt: 'A farmer holding freshly harvested produce in an agricultural field.',
                    },
                    {
                        title: 'Commodity Grading',
                        caption: 'Sample assessment before a batch is accepted.',
                        category: 'Agricultural Commodities',
                        image: agriSourcingImage,
                        alt: 'A quality control officer in a lab coat assessing commodity samples at source.',
                    },
                    {
                        title: 'Parts Warehousing',
                        caption: 'Organised racking across our component stores.',
                        category: 'Warehouses',
                        image: galleryPartsWarehouseImage,
                        alt: 'A modern industrial warehouse filled with organised racks of mechanical components.',
                    },
                    {
                        title: 'Commodity Storage',
                        caption: 'Palletised stock held ready for despatch.',
                        category: 'Warehouses',
                        image: galleryWarehouseImage,
                        alt: 'Sacks of cocoa beans stacked on pallets in a commodity warehouse.',
                    },
                    {
                        title: 'Export Packing',
                        caption: 'Export-grade bagging and palletisation.',
                        category: 'Warehouses',
                        image: agriPackagingImage,
                        alt: 'Stacked 50kg industrial bags of commodities on wooden pallets.',
                    },
                    {
                        title: 'Logistics & Shipping',
                        caption: 'Port operations for international export.',
                        category: 'Export Operations',
                        image: servicesHeroImage,
                        alt: 'A container port at twilight with gantry cranes working a berthed vessel.',
                    },
                    {
                        title: 'Inland Haulage',
                        caption: 'Container movement between site and terminal.',
                        category: 'Export Operations',
                        image: galleryTrucksImage,
                        alt: 'Transport trucks loaded with containers at a port facility.',
                    },
                    {
                        title: 'Vessel Loading',
                        caption: 'Cargo consolidation at the container terminal.',
                        category: 'Export Operations',
                        image: galleryContainerTerminalImage,
                        alt: 'An aerial view of a cargo ship being loaded at a container terminal.',
                    },
                ]}
            />

            <CardGrid
                columns={2}
                title="The Experts Behind the Quality"
                description="Reliability is a human commitment. Meet the professionals who hold our industrial standards in place."
                items={[
                    {
                        title: 'Scientific Precision',
                        description:
                            'Our laboratory team confirms every shipment meets international commodity standards through rigorous testing.',
                        image: galleryLabImage,
                        imageAlt: 'A technician inspecting mineral samples under a microscope.',
                    },
                    {
                        title: 'Strategic Oversight',
                        description:
                            'Our leadership bridges the gap between local resources and global enterprise requirements.',
                        image: aboutTrustImage,
                        imageAlt:
                            'Two executives shaking hands in a boardroom overlooking an industrial terminal.',
                    },
                ]}
            />

            <MediaSplit
                surface="alt"
                reverse
                title="Documented End to End"
                body={[
                    'Every stage of the flow — intake, grading, packing, loading — is photographed and recorded against the batch it belongs to. Buyers receive that record with their documentation, so the condition of a shipment is never a matter of trust alone.',
                ]}
                bullets={[
                    'Batch-level photographic records',
                    'Pre-shipment condition reports',
                    'Loading and seal verification',
                ]}
                image={agriPackagingImage}
                imageAlt="Stacked 50kg industrial bags of commodities on wooden pallets."
                action={{ label: 'Request a sample report', href: '/contact' }}
            />

            <CtaBand
                title="See Our Operations. Experience Our Quality."
                description="Arrange a facility visit or request the photographic record for a live consignment."
                actions={[
                    { label: 'Start Collaboration', href: '/request-quote' },
                    { label: 'Contact Sales Team', href: '/contact', variant: 'outline' },
                ]}
            />
        </>
    );
}
