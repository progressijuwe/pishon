import type { FaqEntry } from '@/components/sections/Faq';

export const faqs = {
    export: [
        {
            question: 'What are your typical shipping lead times?',
            answer: 'Air freight runs 3–7 days and suits critical replacement parts. Sea freight ranges from 15 days to regional hubs up to 45 days for distant ports. Stocked mechanical parts dispatch within 7–14 days; heavy machinery typically takes 30–60 days including port clearance.',
        },
        {
            question: 'How do you handle customs clearance and documentation?',
            answer: 'Our documentation team prepares every export paper — commercial invoice, packing list, Bill of Lading, certificate of origin and phytosanitary certificates where required. Our documentation team handles Form M, SONCAP and NCS procedures, and we work with licensed clearing agents at the ports.',
        },
        {
            question: 'Do you handle international shipping end to end?',
            answer: 'Yes. We provide end-to-end logistics across sea, air and land freight, from inland haulage at origin through to handover at the destination port or site.',
        },
        {
            question: 'What is the Minimum Order Quantity (MOQ)?',
            answer: 'MOQs start at one 20ft container — roughly 18–25 metric tonnes — for agricultural commodities and bulk minerals. For mechanical parts there is often no MOQ, since we consolidate smaller orders. Contact the trade desk for a specific line item.',
        },
        {
            question: 'What are your standard payment terms?',
            answer: 'We typically work with a 100% irrevocable Letter of Credit at sight, or T/T payments of 30% deposit and 70% against documents. Terms are negotiable based on order history and volume.',
        },
        {
            question: 'How do you ensure quality before dispatch?',
            answer: 'Every consignment passes three rounds of inspection: manufacturer factory self-assessment and audit reports, Pishon on-site verification against specification, and independent third-party inspection before crating.',
        },
    ],

    agricultural: [
        {
            question: 'Do you provide independent lab analysis?',
            answer: 'Yes. All shipments are inspected by third-party firms such as SGS or Intertek prior to loading, and those certificates form part of the standard export documentation package.',
        },
        {
            question: 'Can you provide custom packaging?',
            answer: 'Yes. Our standard is 25kg or 50kg PP bags, but we can supply jumbo bags of 1,000kg or custom-branded retail-ready packaging for large-scale contracts.',
        },
    ],

    minerals: [
        {
            question: 'Do you provide third-party quality inspection reports?',
            answer: 'Yes. We work with globally recognised inspection agencies such as SGS or Bureau Veritas to provide independent verification of quality, weight and grade before shipment.',
        },
    ],

    industrial: [
        {
            question: 'Do you provide on-site installation for heavy machinery?',
            answer: 'Yes. Our technical team and local engineering partners provide full on-site assembly, commissioning and operator training for all heavy equipment purchased through Pishon.',
        },
        {
            question: 'What certifications do your parts carry?',
            answer: 'Parts are sourced from OEM or certified manufacturers, and we provide full traceability with material certificates on request for critical industrial components.',
        },
        {
            question: 'Can you source specialised or discontinued parts?',
            answer: 'Yes. Our Legacy Part service draws on a global network of salvage and specialty fabrication partners to find or recreate discontinued components.',
        },
    ],

    requestQuote: [
        {
            question: 'How long does it take to receive a quotation?',
            answer: 'Standard quotations are processed within 24 to 48 hours. Complex custom machinery or multi-port logistics requests may take up to 72 hours to prepare thoroughly.',
        },
        {
            question: 'Can I submit a bulk RFQ?',
            answer: 'Yes. Summarise the line items in the message field and our procurement team will follow up for the full schedule — we handle high-volume inventory replenishment quotes routinely.',
        },
        {
            question: 'Do you provide samples before bulk procurement?',
            answer: 'Yes. For most agricultural and mineral commodities, samples can be couriered for laboratory testing. Shipping costs are usually borne by the buyer and credited against the first order.',
        },
    ],
} as const satisfies Record<string, readonly FaqEntry[]>;
