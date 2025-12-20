import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PremiumDoodles } from '@/components/ui/PremiumDoodles';

const previewSlides = [
  {
    title: 'Dashboard Overview',
    description: 'Get a complete view of your academic progress at a glance.',
    placeholder: 'Dashboard Preview'
  },
  {
    title: 'Smart Assignments',
    description: 'AI-powered assignments that adapt to your learning style.',
    placeholder: 'Assignments Preview'
  },
  {
    title: 'Real-time Analytics',
    description: 'Track progress with detailed insights and visualizations.',
    placeholder: 'Analytics Preview'
  },
  {
    title: 'Communication Hub',
    description: 'Seamless messaging between students and teachers.',
    placeholder: 'Communication Preview'
  }
];

export function AppPreviewSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % previewSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + previewSlides.length) % previewSlides.length);
  };

  return (
    <section
      id="app-preview"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--nuvana-emerald)/0.15)_0%,_transparent_60%)]" />
      <PremiumDoodles />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
            App Preview
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="text-white">NUVANA</span><span className="text-[hsl(var(--nuvana-emerald))]">360</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the future of academic management with our intuitive interface.
          </p>
        </div>

        {/* Device Mockup */}
        <div className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {/* Laptop Frame */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--nuvana-blue)/0.3)] via-[hsl(var(--nuvana-turquoise)/0.3)] to-[hsl(var(--nuvana-emerald)/0.3)] rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />

            {/* Screen container */}
            <div className="relative glass-strong rounded-2xl p-2 md:p-4">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-muted/30 rounded-full px-4 py-1.5 text-sm text-muted-foreground text-center max-w-md mx-auto">
                    app.nuvana360.com
                  </div>
                </div>
              </div>

              {/* Screen content */}
              <div className="relative aspect-[16/10] rounded-b-xl overflow-hidden bg-card">
                {previewSlides.map((slide, index) => (
                  <div
                    key={slide.title}
                    className={`absolute inset-0 transition-all duration-500 ${index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : index < currentSlide
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                      }`}
                  >
                    {/* Placeholder for actual screenshots */}
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary/50 to-muted/50">
                      <div className="text-6xl mb-4 opacity-30">📱</div>
                      <div className="text-center px-4">
                        <h3 className="text-2xl font-bold mb-2 text-foreground">{slide.title}</h3>
                        <p className="text-muted-foreground">{slide.description}</p>
                        <p className="text-sm text-primary mt-4">[ Your {slide.placeholder} Here ]</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* 3D Tilt effect indicator */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Laptop base */}
            <div className="hidden md:block relative mt-2">
              <div className="h-4 bg-gradient-to-b from-muted/40 to-muted/20 rounded-b-xl mx-16" />
              <div className="h-2 bg-muted/30 rounded-b-lg mx-32" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full glass border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {previewSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full glass border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Slide info */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              {currentSlide + 1} / {previewSlides.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
