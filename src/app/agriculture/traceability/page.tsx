import { FileCheckIcon, MapPinnedIcon, ScrollTextIcon, SproutIcon } from 'lucide-react';

import agriFarmerImage from '@/assets/agri-farmer.jpg';
import agriSourcingImage from '@/assets/agri-sourcing.jpg';
import exportTransitImage from '@/assets/export-transit.jpg';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Hero } from '@/components/sections/Hero';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
    title: 'Traceability & Chain of Custody',
    description:
        'We farm our own cocoa and oil palm, so a consignment can be traced to the plot it grew on — with geolocation, harvest records and an unbroken chain of custody from our land to the vessel.',
    path: '/agriculture/traceability',
});

export default function TraceabilityPage() {
    return (
        <>
            <Hero
                title="Traceable to the Plot"
                description="We farm our own cocoa and oil palm. That means a consignment can be traced back to the land it grew on, not to the last middleman who handled it."
                image={agriFarmerImage}
                actions={[
                    { label: 'Request a Quote', href: '/request-quote' },
                    { label: 'Talk to our trade desk', href: '/contact', variant: 'outline' },
                ]}
            />

            <MediaSplit
                title="Why Most West African Supply Cannot Be Traced"
                body={[
                    'A typical Nigerian commodity exporter buys through layers of aggregators, who buy from hundreds of smallholders. By the time a lot reaches the port it has been combined, re-bagged and re-sold, and nobody in the chain can say which farm any given sack came from.',
                    'Because we grow on our own land, that question has an answer. Our farm lots carry plot references from planting through to loading, and we can supply the geolocation data and harvest records that sit behind them.',
                ]}
                image={agriSourcingImage}
                imageAlt="A quality control officer in a lab coat assessing commodity samples at source."
                action={{ label: 'Discuss your documentation needs', href: '/contact' }}
            />

            <FeatureGrid
                surface="alt"
                columns={4}
                title="What We Can Document"
                description="The records that accompany a traceable consignment."
                headingAlign="center"
                items={[
                    {
                        icon: <MapPinnedIcon />,
                        title: 'Plot Geolocation',
                        description:
                            'Coordinates for the plots our farm lots are grown on, supplied with the consignment.',
                    },
                    {
                        icon: <SproutIcon />,
                        title: 'Harvest Records',
                        description:
                            'Harvest window, lot reference and volume, recorded at the farm rather than reconstructed later.',
                    },
                    {
                        icon: <ScrollTextIcon />,
                        title: 'Chain of Custody',
                        description:
                            'An unbroken handover record from our land through processing and bagging to the vessel.',
                    },
                    {
                        icon: <FileCheckIcon />,
                        title: 'Third-Party Analysis',
                        description:
                            'Independent inspection and laboratory certificates issued against the same lot reference.',
                    },
                ]}
            />

            <ProcessTimeline
                surface="none"
                title="How a Lot Stays Traceable"
                description="Each step carries the same lot reference forward, so the record is continuous rather than reassembled at the end."
                steps={[
                    {
                        title: 'Plot Recorded',
                        description: 'The plot is mapped and given a reference before planting.',
                    },
                    {
                        title: 'Harvest Logged',
                        description: 'Volume and date captured against the plot at the farm gate.',
                    },
                    {
                        title: 'Lot Created',
                        description: 'Drying and grading recorded under a single lot reference.',
                    },
                    {
                        title: 'Independent Analysis',
                        description: 'Third-party sampling tied to the same lot reference.',
                    },
                    {
                        title: 'Bagged & Sealed',
                        description: 'Bag marks and seal numbers recorded against the lot.',
                    },
                    {
                        title: 'Loaded',
                        description: 'Container and seal numbers close the chain at the port.',
                    },
                ]}
            />

            <MediaSplit
                reverse
                surface="alt"
                title="Grown Versus Sourced, Stated Plainly"
                body={[
                    'Not every commodity in our catalogue comes from our own land, and we do not pretend otherwise. Cocoa and oil palm are grown on farms we own and operate. The wider basket — sesame, hibiscus, ginger, turmeric, garlic, soybeans and cashew — is bought through a network of vetted cooperatives and aggregators.',
                    'Every product page states which of the two applies. A buyer who needs plot-level provenance knows immediately which lots can carry it, and a buyer who does not is not paying for documentation they will never use.',
                ]}
                image={exportTransitImage}
                imageAlt="A cargo freighter cutting through open ocean."
                action={{ label: 'See the commodity catalogue', href: '/agriculture' }}
            />

            <CtaBand
                title="Need Provenance You Can Show Your Auditor?"
                description="Tell us the commodity, the volume and the documentation your buyer or regulator expects, and we will tell you exactly what we can evidence."
                actions={[
                    { label: 'Request a Quote', href: '/request-quote' },
                    { label: 'Talk to our trade desk', href: '/contact', variant: 'outline' },
                ]}
            />
        </>
    );
}
