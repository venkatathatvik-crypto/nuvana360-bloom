import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
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
  const [isMuted, setIsMuted] = useState(true);

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
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);
  const scrollAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 1. Background Wind Ambience (Continuous Loop)
    bgAudioRef.current = new Audio('/mixkit-wind-blowing-ambience-2658.wav');
    bgAudioRef.current.loop = true;
    bgAudioRef.current.volume = 0.08; // Minimal background level

    // 2. Short Scroll Whoosh (User's Air Hit Sound)
    scrollAudioRef.current = new Audio('/mixkit-air-in-a-hit-2161.wav');
    scrollAudioRef.current.volume = 0.3;

    return () => {
      bgAudioRef.current?.pause();
      scrollAudioRef.current?.pause();
    };
  }, []);

  // Sync mute state with audio elements
  useEffect(() => {
    if (bgAudioRef.current) {
      bgAudioRef.current.muted = isMuted;
      if (!isMuted) {
        bgAudioRef.current.play().catch(() => {
          setIsMuted(true); // Re-mute if autoplay blocked
        });
      } else {
        bgAudioRef.current.pause();
      }
    }
  }, [isMuted]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const sectionHeight = window.innerHeight;
    const currentSection = Math.round(scrollTop / sectionHeight);

    if (currentSection !== lastSectionRef.current) {
      lastSectionRef.current = currentSection;

      if (!isMuted && scrollAudioRef.current) {
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

      {/* Global Mute Control */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMuted(!isMuted)}
          className="w-12 h-12 rounded-full border-white/10 bg-black/40 backdrop-blur-md text-white hover:bg-white/10 shadow-lg group transition-all"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
          )}
        </Button>
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
