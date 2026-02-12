import { Navbar } from '@/components/Navbar';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { Footer } from '@/components/Footer';

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <WhyChooseSection />
      </main>
      <Footer />
    </div>
  );
};

export default WhyUs;
