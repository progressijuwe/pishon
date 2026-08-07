import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';

export interface LogoStripProps {
    /** Small caps line above the marks — "Trusted & Certified By". */
    label?: string;
    /** Accreditation wordmarks. Text rather than images, as in the design. */
    items: readonly string[];
}

/** A row of accreditation wordmarks, muted until hovered. */
export function LogoStrip({ label, items }: LogoStripProps) {
    return (
        <Section spacing="xl" className="border-border overflow-hidden border-y">
            <Container>
                <div className="text-center">
                    {label ? (
                        <p className="text-caption text-muted-foreground mb-12 font-bold tracking-widest uppercase">
                            {label}
                        </p>
                    ) : null}

                    <ul className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 lg:gap-30">
                        {items.map((item) => (
                            <li key={item} className="text-h3 text-primary font-bold">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </Section>
    );
}
