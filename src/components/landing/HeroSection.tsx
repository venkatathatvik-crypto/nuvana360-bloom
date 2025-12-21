import { useEffect, useRef, useState } from 'react';
import { EducationalScene } from './EducationalScene';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { PremiumDoodles } from '@/components/ui/PremiumDoodles';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToEcosystem = () => {
    document.getElementById('ecosystem-overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
      {/* 3D Background Scene */}
      <EducationalScene />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_70%)] z-10" />

      {/* Background Doodles */}
      <PremiumDoodles />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className={`flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass gradient-border mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground">End-to-End Digital Solution</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 px-4">
            <span className="text-emerald-500 font-black">N</span><span className="text-white font-black">uvana</span><span className="text-white font-thin">core</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 font-light max-w-[30ch] md:max-w-2xl leading-relaxed mb-10 px-4">
            Built to work together, not stitched together. <br className="hidden md:block" />
            <span className="text-primary font-normal">Hardware + OS + AI + Internet</span>
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              size="lg"
              onClick={scrollToEcosystem}
              className="group relative px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Ecosystem
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
