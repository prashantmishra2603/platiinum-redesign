import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Beaker, CheckCircle, Award, Thermometer, TestTube, ArrowRight } from 'lucide-react';

const qualityPoints = [
  {
    icon: Beaker,
    title: 'Premium-Grade Base Oils',
    description: 'We source only the finest base oils from trusted suppliers for consistent quality.',
  },
  {
    icon: TestTube,
    title: 'Trusted Additives',
    description: 'Premium additives from recognized international suppliers ensure optimal performance.',
  },
  {
    icon: Shield,
    title: 'Batch-Wise Laboratory Testing',
    description: 'Every batch undergoes rigorous laboratory testing to meet our quality standards.',
  },
  {
    icon: Thermometer,
    title: 'Viscosity & Performance Stability',
    description: 'Comprehensive checks for viscosity consistency and performance under extreme conditions.',
  },
  {
    icon: CheckCircle,
    title: 'Multi-Stage Inspection',
    description: 'Our formulations pass through multiple stages of inspection for guaranteed quality.',
  },
  {
    icon: Award,
    title: 'Extreme Temperature Testing',
    description: 'Tested for stable performance under extreme temperatures and heavy operating loads.',
  },
];

const Quality = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-card via-background to-card overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary)) 2px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10" ref={ref}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4">QUALITY ASSURANCE</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Commitment to <span className="text-secondary">Quality Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Quality is the foundation of Platinum Lubricants. We ensure that every product meets the highest standards of performance and reliability.
            </p>
          </motion.div>

          {/* Quality Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityPoints.map((item, index) => (
              <motion.div
                key={item.title}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full card-hover">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quality Commitment Banner */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-primary/20 via-card/80 to-secondary/20 border border-border/50 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Engineered for Indian Conditions
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our formulations are engineered to deliver stable performance under extreme temperatures and heavy operating loads. Whether it's the scorching heat of summer or the heavy loads of commercial transportation, Platinum Lubricants deliver consistent performance you can trust.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground text-sm font-medium">Tested for Extreme Heat</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground text-sm font-medium">Heavy Load Performance</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground text-sm font-medium">Long-Distance Reliability</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="/become-dealer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              Partner with Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quality;
