import { Container } from '@/components/shared/Container';
import { Reveal } from '@/components/shared/Reveal';
import { Section } from '@/components/shared/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/Accordion';

export interface FaqEntry {
    question: string;
    answer: string;
}

export interface FaqProps {
    title?: string;
    items: readonly FaqEntry[];
    defaultOpen?: string;
    surface?: 'none' | 'alt';
}

export function Faq({ title, items, defaultOpen, surface = 'none' }: FaqProps) {
    const firstQuestion = defaultOpen ?? items[0]?.question;

    return (
        <Section spacing="2xl" surface={surface === 'alt' ? 'alt' : 'none'}>
            <Container size="sm">
                {title ? (
                    <Reveal>
                        <SectionHeading title={title} align="center" />
                    </Reveal>
                ) : null}

                <Accordion
                    type="single"
                    collapsible
                    defaultValue={firstQuestion}
                    className="flex flex-col gap-6"
                >
                    {items.map((item, index) => (
                        <Reveal key={item.question} delay={index * 90}>
                            <AccordionItem
                                value={item.question}
                                className="border-border bg-card hover:border-secondary/40 rounded-xl border px-6 transition-colors last:border-b"
                            >
                                <AccordionTrigger className="text-left font-bold">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </Reveal>
                    ))}
                </Accordion>
            </Container>
        </Section>
    );
}
