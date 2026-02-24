import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProductsSection } from '@/components/ProductsSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { TechnicalExpertiseSection } from '@/components/TechnicalExpertiseSection';
import { ApplicationIndustriesSection } from '@/components/ApplicationIndustriesSection';
import { FAQSection } from '@/components/FAQSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechnicalExpertiseSection />
        <ProductsSection />
        <ApplicationIndustriesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
