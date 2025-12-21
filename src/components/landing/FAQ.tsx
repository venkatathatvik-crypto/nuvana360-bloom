import { useRef, useState } from "react";
import { motion } from "framer-motion";
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
    question: "Who manages the internet infrastructure?",
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleInternalScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const progress = scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(progress);
    }
  };

  return (
    <section id="faq" className="h-screen flex items-center relative py-12 bg-gradient-to-b from-slate-950 via-[#020817] to-slate-950 overflow-hidden snap-start">
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
        <div className="mx-auto max-w-3xl text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-lg text-emerald-100/60">Quick answers about Nuvana's features and onboarding.</p>
        </div>

        <div className="mx-auto max-w-3xl relative">
          {/* Internal Progress Line */}
          <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-primary origin-top"
              style={{ scaleY: scrollProgress, height: '100%' }}
            />
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes border-pulse {
              0% { border-color: rgba(59, 130, 246, 0.2); box-shadow: 0 0 5px rgba(59, 130, 246, 0.1); }
              50% { border-color: rgba(59, 130, 246, 1); box-shadow: 0 0 25px rgba(59, 130, 246, 0.6); }
              100% { border-color: rgba(59, 130, 246, 0.2); box-shadow: 0 0 5px rgba(59, 130, 246, 0.1); }
            }
            .animate-border-blink {
              animation: border-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
          `}} />

          <Card className="bg-slate-900/60 backdrop-blur-xl border-2 border-blue-500/20 animate-border-blink overflow-hidden max-h-[60vh] flex flex-col relative z-20">
            <div
              ref={scrollRef}
              onScroll={handleInternalScroll}
              className="overflow-y-auto flex-1 p-2 md:p-4 scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style dangerouslySetInnerHTML={{
                __html: `
                .scrollbar-none::-webkit-scrollbar { display: none; }
              `}} />
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-primary/10 px-6">
                    <AccordionTrigger className="text-white hover:text-primary transition-colors text-left py-4 font-bold md:text-xl">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-200 pb-4 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Blender */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default FAQ;