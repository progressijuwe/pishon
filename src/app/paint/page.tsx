import {
    BuildingIcon,
    DropletsIcon,
    FactoryIcon,
    HandshakeIcon,
    PaintRollerIcon,
    StoreIcon,
} from 'lucide-react';

import aboutFacilityImage from '@/assets/about-facility.jpg';
import paintManufacturingImage from '@/assets/paint-manufacturing.jpg';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { Hero } from '@/components/sections/Hero';
import { MediaSplit } from '@/components/sections/MediaSplit';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
    title: 'Paint Manufacturing',
    description:
        'We manufacture paint in Nigeria — supplying distributors, contractors and developers direct from our plant. Talk to us about trade supply, project volumes or becoming a dealer.',
    path: '/paint',
});

export default function PaintPage() {
    return (
        <>
            <Hero
                title="Paint, Made Here"
                description="We manufacture paint rather than trade it. That means the batch, the schedule and the price come from our own plant — and you deal with the people who made it."
                image={paintManufacturingImage}
                imageAlt="Sealed tins and buckets of paint stacked on a pallet inside a manufacturing plant."
                actions={[
                    { label: 'Enquire About Supply', href: '/contact' },
                    { label: 'Become a Dealer', href: '/contact', variant: 'outline' },
                ]}
            />

            <MediaSplit
                title="A Manufacturer, Not a Middleman"
                body={[
                    'Most paint sold in Nigeria passes through several hands before it reaches a site. Ours does not. We formulate and fill at our own plant, which is what lets us hold batch consistency across a repeat order and quote without a reseller margin stacked on top.',
                    'That matters most on jobs where colour has to match across phases — an estate, a hotel refurbishment, a retail rollout — because we can trace a repeat order back to the batch that filled the first one.',
                ]}
                image={paintManufacturingImage}
                imageAlt="Mixing vats and filling equipment inside a paint manufacturing plant."
                highlight={{
                    value: 'Own plant',
                    description: 'Formulated and filled in-house, not bought in.',
                }}
                action={{ label: 'Talk to the paint desk', href: '/contact' }}
            />

            <FeatureGrid
                surface="alt"
                columns={3}
                title="Who We Supply"
                description="Three routes to market, each with its own commercial terms."
                headingAlign="center"
                items={[
                    {
                        icon: <StoreIcon />,
                        title: 'Distributors & Dealers',
                        description:
                            'Trade pricing, agreed territories and restocking schedules for paint retailers and building-material merchants.',
                    },
                    {
                        icon: <BuildingIcon />,
                        title: 'Contractors & Developers',
                        description:
                            'Project volumes priced per job, with delivery phased to the programme rather than dumped on site at week one.',
                    },
                    {
                        icon: <FactoryIcon />,
                        title: 'Industrial & Commercial',
                        description:
                            'Protective and functional coatings for plant, warehousing and commercial interiors.',
                    },
                ]}
            />

            <MediaSplit
                reverse
                title="What to Send Us"
                body={[
                    'For a useful quotation we need the surface, the area in square metres, the finish you want and the number of coats specified — plus the colour reference if you already have one.',
                    'If you are pricing a project, tell us the programme dates. Paint is easy to make and hard to store, so a delivery schedule usually gets you a better number than a single bulk order.',
                ]}
                bullets={[
                    'Surface and substrate',
                    'Coverage area and coat specification',
                    'Colour reference, if fixed',
                    'Delivery phasing for project work',
                ]}
                image={aboutFacilityImage}
                imageAlt="Technicians monitoring precision machinery on an automated production line."
                action={{ label: 'Send your requirement', href: '/contact' }}
            />

            <FeatureGrid
                surface="primary"
                columns={3}
                align="center"
                title="Working With Us"
                headingAlign="center"
                items={[
                    {
                        icon: <PaintRollerIcon />,
                        title: 'Batch Consistency',
                        description:
                            'Repeat orders matched against the original batch so a later phase does not arrive a shade off.',
                    },
                    {
                        icon: <DropletsIcon />,
                        title: 'Made to Order',
                        description:
                            'Volumes filled to your schedule rather than drawn from whatever a wholesaler happens to hold.',
                    },
                    {
                        icon: <HandshakeIcon />,
                        title: 'Direct Terms',
                        description:
                            'You deal with the manufacturer, so pricing and lead time are ours to agree, not a reseller’s to relay.',
                    },
                ]}
            />

            <CtaBand
                title="Talk to the Paint Division"
                description="Tell us what you are coating, how much of it there is and when you need it. We will come back with a price and a schedule."
                actions={[
                    { label: 'Enquire About Supply', href: '/contact' },
                    { label: 'Become a Dealer', href: '/contact', variant: 'outline' },
                ]}
            />
        </>
    );
}
