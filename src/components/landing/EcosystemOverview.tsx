
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Tablet,       // Corebook
  LayoutGrid,   // OS
  Brain,        // AI (Dual Intelligence)
  Wifi,         // NuvanaNet
  Radio         // Core Icon
} from 'lucide-react';
import { PremiumDoodles } from '@/components/ui/PremiumDoodles';

// Register standard ScrollTrigger integration
gsap.registerPlugin(ScrollTrigger);

export const EcosystemOverview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const widget9Ref = useRef<HTMLDivElement>(null);  // Left
  const widget12Ref = useRef<HTMLDivElement>(null); // Top
  const widget3Ref = useRef<HTMLDivElement>(null);  // Right
  const widget6Ref = useRef<HTMLDivElement>(null);  // Bottom

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Responsive Radius calculation
      const isMobile = window.innerWidth < 768;
      const radius = isMobile ? 55 : 260; // Micro-compact 55px radius for mobile

      // Initial Setup: Widgets at center, hidden, scaled down
      // using xPercent/yPercent for perfect centering without CSS transform conflicts
      gsap.set([widget9Ref.current, widget12Ref.current, widget3Ref.current, widget6Ref.current], {
        x: 0,
        y: 0,
        xPercent: -50,
        yPercent: -50,
        autoAlpha: 0, // handles opacity + visibility
        scale: 0.5
      });

      // Main Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // Reduced from 600% for faster, 1-scroll-per-widget feel
          pin: true,
          scrub: 0.5, // Reduced scrub delay for snappier response
          snap: {
            snapTo: "labels", // Snap strictly to stage labels
            duration: { min: 0.2, max: 0.4 },
            delay: 0.1,
            ease: "power1.inOut"
          }
        }
      });

      // --- STAGE 0: Initial State (Core Only) ---
      tl.addLabel("stage0");

      // --- STAGE 1: Left Widget (9 o'clock) ---
      // Move to x: -radius, y: 0
      tl.to(widget9Ref.current, {
        x: -radius,
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      });
      tl.addLabel("stage1");
      // Pause/spacer for scroll feel
      tl.to({}, { duration: 0.2 });

      // --- STAGE 2: Top Widget (12 o'clock) ---
      // Move to x: 0, y: -radius
      tl.to(widget12Ref.current, {
        x: 0,
        y: -radius,
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      });
      tl.addLabel("stage2");
      tl.to({}, { duration: 0.2 });

      // --- STAGE 3: Right Widget (3 o'clock) ---
      // Move to x: radius, y: 0
      tl.to(widget3Ref.current, {
        x: radius,
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      });
      tl.addLabel("stage3");
      tl.to({}, { duration: 0.2 });

      // --- STAGE 4: Bottom Widget (6 o'clock) ---
      // Move to x: 0, y: radius
      tl.to(widget6Ref.current, {
        x: 0,
        y: radius,
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      });
      tl.addLabel("stage4");

      // --- STAGE 5: Release ---
      // Extra buffer before unpinning
      tl.to({}, { duration: 0.5 });
      tl.addLabel("end");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // --- PREMIUM UI STYLING ---

  // Card Glassmorphism & Hover States
  // Added: group-hover:translate-y-[-6px] (smooth lift), border-white/10 (subtle),
  // shadow-[0_0_30px_rgba(0,0,0,0.3)] (depth), backdrop-blur-2xl (premium frosting)
  const widgetClass = `
    absolute left-1/2 top-1/2 z-30 invisible 
    flex flex-col items-center justify-center text-center w-24 md:w-64 p-1.5 md:p-5 
    bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-xl md:rounded-2xl 
    shadow-[0_8px_32px_rgb(0,0,0,0.4)] 
    group transition-all duration-300 ease-out 
    hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]
    hover:bg-slate-800/80
  `;
  // Note: Increased width to w-64 to accommodate longer titles/descriptions

  // Icon Container
  const iconBgClass = `
    flex items-center justify-center w-8 h-8 md:w-14 md:h-14 mb-1.5 md:mb-4 
    bg-gradient-to-b from-slate-800 to-slate-900 
    border border-white/5 rounded-full 
    text-blue-400 shadow-inner
    group-hover:scale-110 group-hover:text-blue-300 group-hover:border-blue-500/30 
    group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
    transition-all duration-300
  `;

  const titleClass = "text-[9px] md:text-base font-bold text-white tracking-wide mb-0.5 md:mb-1 transition-colors group-hover:text-blue-200";
  const descClass = "text-[7px] md:text-xs font-medium text-slate-400 group-hover:text-slate-300 transition-colors leading-[1.1]";

  return (
    <section
      id="ecosystem-overview"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-[#020617] overflow-hidden perspective-1000"
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
      {/* Matches radius=260px => diameter=520px */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] md:w-[520px] md:h-[520px] rounded-full border border-blue-500/10 z-10 pointer-events-none">
        {/* Secondary inner ring for depth */}
        <div className="absolute inset-[1px] rounded-full border border-white/5 opacity-50" />
        {/* Glowing glow effect on the ring */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_100px_rgba(59,130,246,0.05)]" />
      </div>

      {/* --- CORE ELEMENT (Center) --- */}
      {/* Premium Glass Core Unit */}
      <div className="relative flex flex-col items-center justify-center w-40 h-40 z-20 group">
        {/* Outer Glass Shell with Edge Highlight */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-blue-900/40 backdrop-blur-2xl border border-white/15 shadow-[0_0_40px_rgba(0,0,0,0.4),inset_0_1px_20px_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]">
          {/* Internal Reflection */}
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-b from-white/5 to-transparent rotate-45 pointer-events-none" />
        </div>

        {/* Inner Concentric Rings for Tech Feel */}
        <div className="absolute inset-[10px] rounded-full border border-blue-500/20" />
        <div className="absolute inset-[10px] rounded-full border-t border-b border-blue-400/40 opacity-50 animate-[spin_10s_linear_infinite_reverse]" />

        {/* Center Floating Hub */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-b from-slate-800 to-slate-950 rounded-2xl border border-blue-500/30 shadow-[0_10px_20px_rgba(0,0,0,0.5)] mb-2 group-hover:translate-y-[-2px] transition-transform duration-300">
            {/* Inner Blue Glow */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl animate-pulse" />
            <Radio size={32} className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
          </div>
          <span className="text-[10px] font-bold text-white tracking-[0.3em] pl-1 font-mono uppercase opacity-80 group-hover:opacity-100 transition-opacity">Nuvana</span>
          <span className="text-[8px] font-semibold text-blue-400 tracking-[0.2em] uppercase">Core Sync</span>
        </div>
      </div>

      {/* WIDGET 1: LEFT (9 o'clock) -> Nuvana Corebook */}
      <div ref={widget9Ref} className={widgetClass}>
        <div className={iconBgClass}>
          <Tablet size={4} />
        </div>
        <h3 className={titleClass}>Nuvana Corebook</h3>
        <p className={descClass}>Hardware device + controlled learning environment</p>
      </div>

      {/* WIDGET 2: TOP (12 o'clock) -> Classroom OS */}
      <div ref={widget12Ref} className={widgetClass}>
        <div className={iconBgClass}>
          <LayoutGrid size={4} />
        </div>
        <h3 className={titleClass}>Classroom OS</h3>
        <p className={descClass}>Student–Teacher–Admin operating system</p>
      </div>

      {/* WIDGET 3: RIGHT (3 o'clock) -> Dual Intelligence */}
      <div ref={widget3Ref} className={widgetClass}>
        <div className={iconBgClass}>
          <Brain size={4} />
        </div>
        <h3 className={titleClass}>Dual Intelligence</h3>
        <p className={descClass}>AI for teachers + AI for students</p>
      </div>

      {/* WIDGET 4: BOTTOM (6 o'clock) -> NuvanaNet */}
      <div ref={widget6Ref} className={widgetClass}>
        <div className={iconBgClass}>
          <Wifi size={4} />
        </div>
        <h3 className={titleClass}>Nuvanet</h3>
        <p className={descClass}>Internet without infrastructure</p>
      </div>
    </section>
  );
};

export default EcosystemOverview;
