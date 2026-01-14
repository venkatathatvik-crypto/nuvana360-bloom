import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--nuvana-navy))] via-background to-background" />

        {/* Planetary glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_hsl(var(--nuvana-turquoise)/0.2)_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,_hsl(var(--nuvana-emerald)/0.15)_0%,_transparent_70%)]" />

        {/* Energy waves */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {/* Decorative element */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-8 animate-pulse-glow">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to transform <span className="gradient-text text-glow">learning</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Launch NuvanaCore today and join thousands of educators and students already experiencing the future of education.
          </p>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <Button
              size="lg"
              className="group relative px-12 py-8 text-xl font-bold hover-glow glow-turquoise transition-all duration-500 overflow-hidden"
            >
              {/* Pulse ring effect */}
              <span className="absolute inset-0 rounded-md bg-primary animate-ping opacity-20" />

              {/* Button content */}
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Launch App
              </span>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className={`mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span>10,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👨‍🏫</span>
              <span>500+ Teachers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏫</span>
              <span>100+ Schools</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-accent/30 rounded-full animate-float delay-200" />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float delay-400" />
    </section>
  );
}
