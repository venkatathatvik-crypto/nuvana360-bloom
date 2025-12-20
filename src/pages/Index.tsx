
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

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
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
      <Assistant />
    </main>
  );
};

export default Index;
