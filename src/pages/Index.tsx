import { useRef, useEffect } from 'react';
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
import { Button } from '@/components/ui/button';

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

  // Audio References
  const lastSectionRef = useRef(0);
  const scrollAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Short Scroll Whoosh (User's Air Hit Sound)
    scrollAudioRef.current = new Audio('/mixkit-air-in-a-hit-2161.wav');
    scrollAudioRef.current.volume = 0.8;

    return () => {
      scrollAudioRef.current?.pause();
    };
  }, []);


  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const sectionHeight = window.innerHeight;
    const currentSection = Math.round(scrollTop / sectionHeight);

    if (currentSection !== lastSectionRef.current) {
      lastSectionRef.current = currentSection;

      if (scrollAudioRef.current) {
        scrollAudioRef.current.currentTime = 0;
        scrollAudioRef.current.play().catch(() => { });
      }
    }
  };

  // Ensure keyboard focus for snapping to work with arrow keys
  useEffect(() => {
    const focusMain = (e?: MouseEvent) => {
      // Don't steal focus if clicking on interactive elements
      const target = e?.target as HTMLElement;
      if (
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.tagName === 'BUTTON' ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.closest('button')
      ) {
        return;
      }
      containerRef.current?.focus();
    };

    focusMain();
    window.addEventListener('mousedown', focusMain);
    return () => window.removeEventListener('mousedown', focusMain);
  }, []);

  // Professional Keyboard Navigation Handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!containerRef.current) return;

    // List of keys we want to capture for section-to-section navigation
    const navKeys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '];

    if (navKeys.includes(e.key)) {
      // Small delay to allow the browser's native snapping to kick in if it's already focused
      // Otherwise, we can manually trigger a scroll if needed, but standard snapping 
      // is most reliable once the element has focus.
      containerRef.current.focus();
    }
  };

  return (
    <>
      {/* Vertical Progress Bar */}
      <div className="fixed right-0 top-0 bottom-0 w-1 md:w-1.5 z-[100] bg-white/5 backdrop-blur-sm border-l border-white/5 transition-all duration-300 hover:w-3 group">
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-emerald-400 to-emerald-600 origin-top group-hover:brightness-125"
          style={{ scaleY, height: '100%' }}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-emerald-500/10" />
      </div>


      <main
        ref={containerRef}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
        className="bg-background overflow-x-hidden outline-none"
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
      </main>
      <Assistant />
    </>
  );
};

export default Index;
