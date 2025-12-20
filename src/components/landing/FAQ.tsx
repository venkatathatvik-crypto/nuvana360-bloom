import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "What is Nuvana360 Bloom?",
    answer:
      "Nuvana360 Bloom is a modern, interactive learning platform  assistant that helps schools and teams engage with our application.",
  },
  {
    question: "Do we need to procure hardware separately?",
    answer:
      "No. We provide an end-to-end solution covering hardware, software, and connectivity under a single vendor model.",
  },
  {
    question: "Who manages the internet and SIM infrastructure?",
    answer:
      "We manage connectivity as part of the solution, including monitoring uptime and usage.",
  },
  {
    question: "Is the pilot paid or free??",
    answer:
      "Pilots are paid to ensure seriousness, support quality, and measurable outcomes.",
  },
  {
    question: " How is pricing structured?",
    answer:
      "Pricing is based on number of students, hardware units, and subscription period, with clear year-wise visibility.",
  },
  {
    question: "What happens if the company stops operations in the future?",
    answer:
      " Schools retain access to deployed systems as per contract terms, and data remains retrievable.",
  },
  {
    question: "How do we know this is not an early-stage experiment?",
    answer:
      "The solution is already being piloted with multiple institutions, and infrastructure partners are contracted long-term.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Dedicated Support Lines based on rollout volume, critical support will be resolved within 24 hours, Non critical support within 48 hours.",
  },
  {
    question: "Can we customize branding and access levels?",
    answer:
      "Yes. Schools can have custom branding, admin controls, and role-based access."
  },
  {
    question: "How long does it take to deploy the solution in a school?",
    answer:
      "post hardware procurement, deployment takes 2-3 days, this includes system setup, admin access creation, student onboarding and both student and teacher training."
  },
];

import { PremiumDoodles } from "@/components/ui/PremiumDoodles";

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-slate-950 via-[#020817] to-slate-950 overflow-hidden">
      {/* Seamless Transition Blender (Top) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

      {/* Space Background & Green Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-slate-950/50 to-slate-950" />
        {/* Custom Green Stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-500/30 blur-[1px] animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
        <PremiumDoodles />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-emerald-100/60">Quick answers about Nuvana's experience, features, and onboarding.</p>
        </div>

        <Card className="mx-auto max-w-3xl bg-slate-900/60 backdrop-blur-xl border-emerald-500/20 shadow-2xl shadow-emerald-900/10">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-emerald-500/10 px-6">
                <AccordionTrigger className="text-emerald-50 hover:text-emerald-400 transition-colors text-left py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>

      {/* Bottom Blender */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default FAQ;