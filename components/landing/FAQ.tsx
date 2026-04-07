import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What businesses can benefit from AI consulting?",
    a: "We help service, tech, and product-based companies streamline operations, improve communication, and unlock growth by integrating intelligent automation systems designed around their specific business needs.",
  },
  {
    q: "How long does the implementation take?",
    a: "Our typical implementation takes two to four weeks. Timelines depend on system complexity, integrations required, and the level of customization needed for optimal performance.",
  },
  {
    q: "What makes your process different?",
    a: "We combine strategy, design, and data to create automation systems that adapt over time, providing ongoing performance improvements and measurable business impact after deployment.",
  },
  {
    q: "Do I need technical knowledge to get started?",
    a: "No technical experience is required. We guide you through every step, from concept to execution, ensuring clarity and simplicity throughout the entire process.",
  },
  {
    q: "What kind of results can I expect?",
    a: "Clients typically see reduced workload, faster workflows, improved communication, and measurable ROI within the first month of system implementation and performance tracking.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-[800px] px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Everything clear. Before the first call.
          </h2>
          <p className="text-[var(--aic-text-muted)]">
            Every system starts with understanding. Here&apos;s everything worth
            knowing before we begin.
          </p>
        </div>

        {/* Accordions */}
        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              className="rounded-[20px] border-none bg-[var(--aic-card)] px-6"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm text-[var(--aic-text-muted)]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
