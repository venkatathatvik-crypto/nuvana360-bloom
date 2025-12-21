import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HeroSection } from '@/components/landing/HeroSection';
import { EcosystemOverview } from '@/components/landing/EcosystemOverview';
import { HardwareSection } from '@/components/landing/HardwareSection';
import { ClassroomOSSection } from '@/components/landing/ClassroomOSSection';
import { AISystemsSection } from '@/components/landing/AISystemsSection';
import { InfrastructureSection } from '@/components/landing/InfrastructureSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';
import { FAQ } from '@/components/landing/FAQ';
import { Contact } from '@/components/landing/Contact';
import Assistant from '@/components/landing/Assistant';

const Index = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Vertical Progress Bar */}
      <div className="fixed right-0 top-0 bottom-0 w-1 md:w-1.5 z-[100] bg-white/5 backdrop-blur-sm border-l border-white/5 transition-all duration-300 hover:w-3 group">
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-emerald-400 to-emerald-600 origin-top shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:brightness-125"
          style={{ scaleY, height: '100%' }}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-emerald-500/10" />
      </div>

      <main
        ref={containerRef}
        className="bg-background overflow-x-hidden"
      >
        <HeroSection />
        <EcosystemOverview />
        <HardwareSection />
        <ClassroomOSSection />
        <AISystemsSection />
        <InfrastructureSection />

        {/* Supporting Sections */}
        {/* <TestimonialsSection /> */}
        <FAQ />
        <Contact />
        {/* CTASection removed */}
        <Footer />
        <Assistant />
      </main>
    </>
  );
};

export default Index;
