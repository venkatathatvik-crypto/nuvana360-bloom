
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PremiumDoodles } from "@/components/ui/PremiumDoodles";

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "What is NuvanaCore?",
    answer: "NuvanaCore is a unified digital learning ecosystem built specifically for schools, combining Hardware, OS, AI, and connectivity."
  },
  {
    question: "Do we need to procure hardware separately?",
    answer: "No. We provide an end-to-end solution covering hardware, software, and connectivity under a single vendor model."
  },
  {
    question: "Who manages the internet infrastructure?",
    answer: "We manage connectivity as part of the solution, ensuring zero school infrastructure is needed."
  },
  {
    question: "How is pricing structured?",
    answer: "Pricing is based on number of students, hardware units, and subscription period."
  },
  {
    question: "How long does it take to deploy?",
    answer: "Post procurement, deployment takes 2-3 days, including system setup and full training."
  }
];

export const FAQ = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleInternalScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      setScrollProgress(scrollTop / (scrollHeight - clientHeight));
    }
  };

  return (
    <section id="faq" className="min-h-screen flex items-center relative py-8 md:py-24 bg-slate-950 snap-start">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020617_80%)]" />
        <PremiumDoodles />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-lg md:text-5xl font-bold text-white mb-2 md:mb-4">Common Questions</h2>
          <p className="text-xs md:text-base text-slate-400">Everything you need to know about NuvanaCore.</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <Card className="bg-slate-900/40 backdrop-blur-md border border-white/10 overflow-hidden max-h-[50vh] flex flex-col">
            <div
              ref={scrollRef}
              onScroll={handleInternalScroll}
              className="overflow-y-auto p-4 md:p-8 premium-scrollbar"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-white/5">
                    <AccordionTrigger className="text-white hover:text-primary py-3 md:py-4 text-left text-sm md:text-base font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 pb-3 md:pb-4 text-xs md:text-base leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;