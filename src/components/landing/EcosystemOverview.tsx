
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  Tablet,       // Corebook
  LayoutGrid,   // OS
  Brain,        // AI (Dual Intelligence)
  Wifi,         // NuvanaNet
  Radio,        // Core Icon
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { PremiumDoodles } from '@/components/ui/PremiumDoodles';
import { Button } from '@/components/ui/button';

export const EcosystemOverview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widget9Ref = useRef<HTMLDivElement>(null);  // Left
  const widget12Ref = useRef<HTMLDivElement>(null); // Top
  const widget3Ref = useRef<HTMLDivElement>(null);  // Right
  const widget6Ref = useRef<HTMLDivElement>(null);  // Bottom
  const [currentStep, setCurrentStep] = useState(0);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const totalSteps = 4;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Responsive Radius calculation
      const isMobile = window.innerWidth < 768;
      const radius = isMobile ? 140 : 260; // Increased mobile radius to 140px to avoid overlap with core

      // Initial Setup: Widgets at center, hidden, scaled down
      gsap.set([widget9Ref.current, widget12Ref.current, widget3Ref.current, widget6Ref.current], {
        x: 0,
        y: 0,
        xPercent: -50,
        yPercent: -50,
        autoAlpha: 0, // handles opacity + visibility
        scale: 0.5
      });

      // Main Timeline (Paused, controlled by state)
      tl.current = gsap.timeline({ paused: true });

      // --- STAGE 0: Initial State (Core Only) ---
      tl.current.addLabel("step0");

      // --- STAGE 1: Left Widget ---
      tl.current.to(widget9Ref.current, {
        x: -radius,
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "+=0.1");
      tl.current.addLabel("step1");

      // --- STAGE 2: Top Widget ---
      tl.current.to(widget12Ref.current, {
        x: 0,
        y: -radius,
        autoAlpha: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "+=0.1");
      tl.current.addLabel("step2");

      // --- STAGE 3: Right Widget ---
      tl.current.to(widget3Ref.current, {
        x: radius,
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "+=0.1");
      tl.current.addLabel("step3");

      // --- STAGE 4: Bottom Widget ---
      tl.current.to(widget6Ref.current, {
        x: 0,
        y: radius,
        autoAlpha: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "+=0.1");
      tl.current.addLabel("step4");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Update animation when step changes
  useEffect(() => {
    if (tl.current) {
      tl.current.tweenTo(`step${currentStep}`, {
        duration: 0.8,
        ease: "power3.inOut"
      });
    }
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Keyboard Navigation Support
  useEffect(() => {
    const playClickSound = () => {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
      audio.volume = 0.25;
      audio.play().catch(() => { });
    };

    const handleEcosystemKeyDown = (e: KeyboardEvent) => {
      // Only trigger if this section is visible (using a simple scroll check or observer)
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top >= -rect.height / 2 && rect.bottom <= window.innerHeight + rect.height / 2;

      if (!isVisible) return;

      if (e.key === 'ArrowRight') {
        playClickSound();
        nextStep();
      } else if (e.key === 'ArrowLeft') {
        playClickSound();
        prevStep();
      }
    };

    window.addEventListener('keydown', handleEcosystemKeyDown);
    return () => window.removeEventListener('keydown', handleEcosystemKeyDown);
  }, [currentStep]); // Re-bind when currentStep changes to have access to latest state

  // --- PREMIUM UI STYLING ---

  const widgetClass = `
    absolute left-1/2 top-1/2 z-30 invisible 
    flex flex-col items-center justify-center text-center w-32 md:w-64 p-3 md:p-5 
    bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-xl md:rounded-2xl 
    group transition-all duration-300 ease-out 
    hover:-translate-y-2 hover:border-primary/50
    hover:bg-slate-800/80
  `;

  const iconBgClass = `
    flex items-center justify-center w-10 h-10 md:w-14 md:h-14 mb-2 md:mb-4 
    bg-gradient-to-b from-slate-800 to-slate-900 
    border border-white/5 rounded-full 
    text-blue-400
    group-hover:scale-110 group-hover:text-blue-300 group-hover:border-blue-500/30 
    transition-all duration-300
  `;

  const titleClass = "text-[10px] md:text-base font-bold text-white tracking-wide mb-0.5 md:mb-1 transition-colors group-hover:text-blue-200";
  const descClass = "text-[8px] md:text-xs font-medium text-slate-400 group-hover:text-slate-300 transition-colors leading-tight";

  return (
    <section
      id="ecosystem-overview"
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center bg-[#020617] overflow-hidden perspective-1000 snap-start"
    >
      {/* --- CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0B1120] to-slate-950" />
        {/* Subtle radial bloom from center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-900/10 rounded-full blur-[120px]" />
        {/* High-frequency noise texture for realism */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <PremiumDoodles />
      </div>

      {/* --- SECTION BLENDERS --- */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[hsl(var(--background))] to-transparent z-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[hsl(var(--background))] to-transparent z-40 pointer-events-none" />

      {/* --- VISUAL ORBIT RING (Decoration) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[520px] md:h-[520px] rounded-full border border-blue-500/10 z-10 pointer-events-none">
        <div className="absolute inset-[1px] rounded-full border border-white/5 opacity-50" />
      </div>

      {/* --- CORE ELEMENT (Center) --- */}
      <div className="relative flex flex-col items-center justify-center w-28 h-28 md:w-40 md:h-40 z-20 group">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-blue-900/40 backdrop-blur-2xl border border-white/15 shadow-[0_0_40px_rgba(0,0,0,0.4),inset_0_1px_20px_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-b from-white/5 to-transparent rotate-45 pointer-events-none" />
        </div>
        <div className="absolute inset-[10px] rounded-full border border-blue-500/20" />
        <div className="absolute inset-[10px] rounded-full border-t border-b border-blue-400/40 opacity-50 animate-[spin_10s_linear_infinite_reverse]" />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-b from-slate-800 to-slate-950 rounded-2xl border border-blue-500/30 shadow-[0_10px_20px_rgba(0,0,0,0.5)] mb-2 group-hover:translate-y-[-2px] transition-transform duration-300">
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl animate-pulse" />
            <Radio className="w-6 h-6 md:w-8 md:h-8 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
          </div>
          <span className="text-[8px] md:text-[10px] font-bold text-white tracking-[0.3em] pl-1 font-mono uppercase opacity-80 group-hover:opacity-100 transition-opacity">Nuvana</span>
          <span className="text-[6px] md:text-[8px] font-semibold text-blue-400 tracking-[0.2em] uppercase">Core Sync</span>
        </div>
      </div>

      {/* WIDGETS */}
      <div ref={widget9Ref} className={widgetClass}>
        <div className={iconBgClass}>
          <Tablet size={24} />
        </div>
        <h3 className={titleClass}>Nuvana Corebook</h3>
        <p className={descClass}>Hardware device + controlled learning environment</p>
      </div>

      <div ref={widget12Ref} className={widgetClass}>
        <div className={iconBgClass}>
          <LayoutGrid size={24} />
        </div>
        <h3 className={titleClass}>Classroom OS</h3>
        <p className={descClass}>Student–Teacher–Admin operating system</p>
      </div>

      <div ref={widget3Ref} className={widgetClass}>
        <div className={iconBgClass}>
          <Brain size={24} />
        </div>
        <h3 className={titleClass}>Dual Intelligence</h3>
        <p className={descClass}>AI for teachers + AI for students</p>
      </div>

      <div ref={widget6Ref} className={widgetClass}>
        <div className={iconBgClass}>
          <Wifi size={24} />
        </div>
        <h3 className={titleClass}>Nuvanet</h3>
        <p className={descClass}>Internet without infrastructure</p>
      </div>

      {/* --- UI CONTROLS --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[68px] md:translate-y-[108px] z-50 flex flex-col items-center gap-2">
        <div className="flex items-center gap-4 md:gap-8 mb-1 md:mb-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="w-7 h-7 md:w-9 md:h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextStep}
            disabled={currentStep === totalSteps}
            className="w-7 h-7 md:w-9 md:h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all group"
          >
            <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>

        {/* Step Indicators */}
        <div className="flex gap-1 md:gap-1.5 bg-black/40 backdrop-blur-md px-2 md:px-2.5 py-1 rounded-full border border-white/10">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentStep(i);
              }}
              className={`h-[1.5px] md:h-[2px] rounded-full transition-all duration-500 ${currentStep === i
                ? 'w-3 md:w-5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]'
                : 'w-1 bg-white/10'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemOverview;
