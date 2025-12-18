import { useEffect, useRef, useState } from 'react';
import { BookOpen, Brain, TrendingUp, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Smart Assignments',
    description: 'AI-generated assignments tailored to each student\'s learning level and pace. Automatic grading with detailed feedback.',
    gradient: 'from-[hsl(var(--nuvana-blue))] to-[hsl(var(--nuvana-turquoise))]'
  },
  {
    icon: Brain,
    title: 'AI Explanations',
    description: 'Instant, personalized explanations for any concept. Breaking down complex topics into digestible pieces.',
    gradient: 'from-[hsl(var(--nuvana-turquoise))] to-[hsl(var(--nuvana-emerald))]'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Real-time analytics and insights into student performance. Identify strengths and areas for improvement.',
    gradient: 'from-[hsl(var(--nuvana-emerald))] to-[hsl(var(--nuvana-cyan))]'
  },
  {
    icon: MessageSquare,
    title: 'Instant Feedback',
    description: 'Seamless communication between students and teachers. Quick responses and collaborative learning environment.',
    gradient: 'from-[hsl(var(--nuvana-cyan))] to-[hsl(var(--nuvana-blue))]'
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = feature.icon;

  return (
    <div
      ref={cardRef}
      className={`group relative p-8 rounded-2xl glass gradient-border hover-lift hover-glow cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Glow background on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Icon */}
      <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6`}>
        <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {feature.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {feature.description}
      </p>

      {/* Floating decoration */}
      <div className={`absolute -top-2 -right-2 w-20 h-20 rounded-full bg-gradient-to-br ${feature.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
    </div>
  );
}

export function FeaturesSection() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--nuvana-turquoise)/0.1)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Excel</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools designed to transform the learning experience for both students and educators.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
