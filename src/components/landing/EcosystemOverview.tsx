
import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Tablet,       // Corebook
  LayoutGrid,   // OS
  Brain,        // AI
  Wifi,         // NuvanaNet
  Shield,
  CheckCircle2,
  PenTool
} from 'lucide-react';
import { PremiumDoodles } from '@/components/ui/PremiumDoodles';

const pyramidLevels = [
  {
    level: 1,
    id: "corebook",
    icons: [Tablet],
    title: "Nuvana Corebook",
    description: "Institution-branded tablets in\u00A0a\u00A0locked environment.",
    features: ["Octa-Core Power", "Firmware Locked", "6000mAh Battery"],
    color: "from-blue-500/20 to-blue-600/5",
    accent: "text-blue-400",
    border: "border-blue-500/30",
    width: "w-[72%] sm:w-[55%] md:w-[48%] lg:w-[42%]"
  },
  {
    level: 2,
    id: "os",
    icons: [LayoutGrid],
    title: "Nuvana 360",
    description: "Central nervous system linking\u00A0all users in\u00A0one unified dashboard.",
    features: ["Live Monitoring", "Instant Sync", "Data Privacy"],
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "text-emerald-400",
    border: "border-emerald-500/30",
    width: "w-[81%] sm:w-[60%] md:w-[55%] lg:w-[48%]"
  },
  {
    level: 3,
    id: "ai",
    icons: [Brain, PenTool],
    iconColors: ["text-blue-400", "text-emerald-400"],
    title: "Dual Intelligence",
    description: "Specialized AI: Archer for\u00A0students & Drona for\u00A0teachers.",
    features: ["Personalized Path", "Auto-grading", "Deep Insights"],
    color: "from-teal-500/20 to-teal-600/5",
    accent: "text-teal-400",
    border: "border-teal-500/30",
    width: "w-[90%] sm:w-[70%] md:w-[65%] lg:w-[59%]"
  },
  {
    level: 4,
    id: "infrastructure",
    icons: [Wifi],
    title: "Nuvanet Infrastructure",
    description: "Managed internet delivering\u00A0high-speed connectivity with\u00A0zero IT overhead.",
    features: ["Instant Deployment", "Zero IT Overhead", "Authorized Access "],
    color: "from-indigo-500/20 to-indigo-600/5",
    accent: "text-indigo-400",
    border: "border-indigo-500/30",
    width: "w-[99%] sm:w-[85%] md:w-[80%] lg:w-[72%]"
  }
];

export const EcosystemOverview: React.FC = () => {
  const levelVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section
      id="ecosystem-overview"
      className="relative min-h-screen py-8 md:py-16 flex flex-col items-center justify-center bg-[#020617] snap-start px-4 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[1000px] h-[1000px] bg-emerald-600/[0.02] rounded-full blur-[120px]" />
        <PremiumDoodles />
      </div>

      <div className="container mx-auto relative z-20 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-2 md:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-0.5 md:px-4 md:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mb-2 md:mb-6">
            <Shield className="w-2.5 h-2.5 md:w-3 md:h-3 shrink-0" />
            <span>Operational Architecture</span>
          </div>
          <h2 className="w-full text-lg md:text-5xl lg:text-6xl font-black text-white mb-2 md:mb-6 leading-tight tracking-tighter whitespace-nowrap text-center flex items-center justify-center">
            THE NUVANA <span className="gradient-text ml-[0.3em]">PYRAMID</span>
          </h2>
          <div className="h-1 w-12 md:w-20 bg-emerald-500 mx-auto rounded-full mb-3 md:mb-8" />
          <p className="hidden md:block text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            A master-structured hierarchy where hardware, OS, and AI  <br className="hidden md:block" />
            are powered by a managed internet foundation.
          </p>
        </motion.div>

        {/* Pyramid Stack */}
        <div className="relative w-full flex flex-col items-center gap-2 md:gap-4">
          {/* Internal Navigation Dots (Centred vertically to the right of the pyramid) */}
          <div className="hidden md:flex absolute -right-2 md:-right-20 top-1/2 -translate-y-1/2 z-30 flex-col gap-6">
            {pyramidLevels.map((l) => (
              <button
                key={l.id}
                onClick={() => document.getElementById(`layer-${l.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="group relative flex items-center justify-center w-4 h-4"
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/10 border border-white/20 transition-all duration-300 group-hover:bg-emerald-500 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                <span className="absolute right-10 px-3 py-1.5 rounded bg-slate-900 border border-white/10 text-[10px] font-black text-white uppercase tracking-tighter opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-all">
                  {l.title}
                </span>
              </button>
            ))}
          </div>

          {pyramidLevels.map((item, index) => (
            <motion.div
              key={item.id}
              id={`layer-${item.id}`}
              custom={index}
              variants={levelVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`relative ${item.width} group scroll-mt-32`}
            >
              <div className={`
                relative overflow-hidden flex flex-col
                rounded-[1rem] md:rounded-[2rem] border ${item.border}
                bg-slate-900/30 backdrop-blur-xl p-1.5 md:p-6
                hover:border-emerald-500/40 hover:bg-slate-900/50 
                transition-all duration-700 shadow-2xl shadow-black/50
              `}>
                {/* Background Detail */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.05),transparent)] pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

                {/* Layer Badge - CENTRAL */}
                <div className="w-full flex justify-center mb-1.5 md:mb-3">
                  <div className={`
                    px-2 md:px-3 py-0.5 rounded-full bg-white/5 border border-white/10 
                    text-[6px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] ${item.accent}
                    flex items-center gap-1 md:gap-1.5
                  `}>
                    <div className={`w-0.5 h-0.5 md:w-1 md:h-1 rounded-full ${item.accent.replace('text', 'bg')} animate-pulse`} />
                    LEVEL 0{item.level}
                    <div className={`w-0.5 h-0.5 md:w-1 md:h-1 rounded-full ${item.accent.replace('text', 'bg')} animate-pulse`} />
                  </div>
                </div>

                <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[theme(spacing.24)_1fr_theme(spacing.24)] lg:grid-cols-[theme(spacing.28)_1fr_theme(spacing.28)] items-center gap-0 md:gap-2">
                  {/* Icon Column - LEFT (Fixed width) */}
                  <div className={`flex flex-col items-start -mt-2.5 md:mt-0 ${item.id === 'ai' ? 'justify-between py-1' : 'pt-2 md:pt-3'}`}>
                    {item.icons.map((Icon, i) => (
                      <div key={i} className={`
                        w-5 h-5 md:w-8 md:h-8 rounded-lg bg-slate-950 border border-white/5
                        flex items-center justify-center
                        group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-1000 ease-out
                        shadow-[0_0_15px_rgba(0,0,0,0.5)]
                      `}>
                        <Icon className={`w-2.5 h-2.5 md:w-4 md:h-4 ${item.iconColors?.[i] || item.accent}`} />
                      </div>
                    ))}
                  </div>

                  {/* Content - CENTRAL (Mathematically Centered) */}
                  <div className="flex flex-col justify-center text-center px-0.5 overflow-hidden min-w-0">
                    <h3 className="text-[7px] md:text-sm lg:text-base font-black text-white mb-0.5 tracking-tighter uppercase leading-[1.1] whitespace-normal md:whitespace-nowrap">
                      {item.title}
                    </h3>
                    <p className="hidden md:block text-slate-400 text-[6.5px] md:text-[9px] leading-tight max-w-full md:max-w-[180px] lg:max-w-xs mx-auto font-bold uppercase opacity-60">
                      {item.description}
                    </p>
                  </div>

                  {/* Features - RIGHT (Fixed width) */}
                  <div className="flex flex-col items-end justify-center gap-1 py-1">
                    {item.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1 bg-white/3 hover:bg-emerald-500/5 px-1.5 py-0.5 rounded border border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                        <span className="text-[4.5px] md:text-[8px] font-bold uppercase tracking-wider text-slate-400 whitespace-normal md:whitespace-nowrap text-right leading-[1.1]">
                          {f}
                        </span>
                        <CheckCircle2 size={7} className="text-emerald-500/60" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stack Connectors */}
              {index < pyramidLevels.length - 1 && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-20">
                  <div className="w-1 h-1 rounded-full bg-emerald-500" />
                  <div className="w-px h-4 bg-gradient-to-b from-emerald-500 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Global Footer of Section */}
        <div className="mt-4 md:mt-24 w-full md:w-auto flex flex-col items-center gap-2 md:gap-4">
          <div className="relative w-full md:w-auto flex items-center justify-between md:justify-center gap-3 md:gap-6 px-4 py-2 md:px-8 md:py-4 rounded-full bg-slate-900/60 border border-white/5 backdrop-blur-md opacity-40">
            <span className="font-mono text-[7px] md:text-[9px] tracking-[0.3em] md:tracking-[0.5em] text-white uppercase">End-To-End Integration</span>

            {/* Blinking Dot - Absolutely Centered on Mobile to ensure it's exact */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse" />

            <span className="font-mono text-[7px] md:text-[9px] tracking-[0.3em] md:tracking-[0.5em] text-white uppercase text-right">One Vendor. One Stack.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemOverview;
