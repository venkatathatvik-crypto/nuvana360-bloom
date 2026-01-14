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
import { HelpCircle } from 'lucide-react';

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
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 1. Short Scroll Whoosh (User's Air Hit Sound)
    scrollAudioRef.current = new Audio('/mixkit-air-in-a-hit-2161.wav');
    scrollAudioRef.current.volume = 0.1;

    // 2. Pre-load Global Button Click Sound for instant playback
    clickAudioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
    clickAudioRef.current.volume = 0.1;
    clickAudioRef.current.load(); // Pre-load the audio

    const playClick = () => {
      if (clickAudioRef.current) {
        clickAudioRef.current.currentTime = 0;
        clickAudioRef.current.play().catch(() => { });
      }
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Trigger if it's a button, inside a button, or looks like a button
      if (target.closest('button') || target.closest('[role="button"]') || target.classList.contains('button-glow')) {
        playClick();
      }
    };

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      // Ignore if typing in an input or textarea
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        return;
      }

      // Removed space key from navigation to allow typing in forms
      const navKeys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End'];
      if (navKeys.includes(e.key)) {
        // Ensure the scroll container has focus for snapping to work correctly
        if (document.activeElement !== containerRef.current) {
          containerRef.current?.focus({ preventScroll: true });
        }
      }
    };

    window.addEventListener('click', handleGlobalClick);
    window.addEventListener('keydown', handleGlobalKeyDown);

    return () => {
      scrollAudioRef.current?.pause();
      clickAudioRef.current?.pause();
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('keydown', handleGlobalKeyDown);
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
    // This is now handled by the global window listener but we keep it here as a backup
    // if the container is already focused.
  };

  const scrollToFAQ = () => {
    const faqElement = document.getElementById('faq');
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Global Section Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-4">
        {[
          { id: 'hero', label: 'Home' },
          { id: 'ecosystem-overview', label: 'Ecosystem' },
          { id: 'hardware', label: 'Hardware' },
          { id: 'classroom-os', label: 'Operating System' },
          { id: 'ai-systems', label: 'AI Intelligence' },
          { id: 'infrastructure', label: 'Nuvanet' },
          { id: 'faq', label: 'FAQ' },
          { id: 'contact', label: 'Contact' }
        ].map((section) => (
          <button
            key={section.id}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative flex items-center justify-end"
          >
            <span className="absolute right-8 px-2 py-1 rounded bg-slate-900 border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
              {section.label}
            </span>
            <div className="w-3 h-3 rounded-full border border-white/20 bg-white/5 transition-all duration-300 group-hover:border-emerald-500 group-hover:scale-125" />
          </button>
        ))}
      </div>

      {/* Vertical Progress Bar */}
      <div className="fixed right-0 top-0 bottom-0 w-1 md:w-1.5 z-[100] bg-white/5 backdrop-blur-sm border-l border-white/5 transition-all duration-300 hover:w-3 group">
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-emerald-400 to-emerald-600 origin-top group-hover:brightness-125"
          style={{ scaleY, height: '100%' }}
        />
      </div>


      <main
        ref={containerRef}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
        className="bg-background overflow-x-hidden outline-none"
      >
        <section className="relative z-10"><HeroSection /></section>
        <section className="relative z-10"><EcosystemOverview /></section>
        <section className="relative z-10"><HardwareSection /></section>
        <section className="relative z-10"><ClassroomOSSection /></section>
        <section className="relative z-10"><AISystemsSection /></section>
        <section className="relative z-10"><InfrastructureSection /></section>
        <section className="relative z-10"><FAQ /></section>
        <section className="relative z-10"><Contact /></section>
        <Footer />
      </main>
      <Assistant />
    </>
  );
};

export default Index;
