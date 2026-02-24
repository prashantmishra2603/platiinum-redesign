import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Factory, Beaker, Package, Truck, CheckCircle, ArrowRight } from 'lucide-react';

const manufacturingHighlights = [
  {
    icon: Factory,
    title: 'Monthly Capacity: 300 KL',
    description: 'State-of-the-art blending facility with scalable operations to meet growing demand.',
  },
  {
    icon: Beaker,
    title: 'Automated Blending Control',
    description: 'Precision-controlled processes with accurate batch formulation systems.',
  },
  {
    icon: CheckCircle,
    title: 'Strict Formulation Accuracy',
    description: 'Every batch undergoes controlled processing to ensure performance stability.',
  },
  {
    icon: Package,
    title: 'Flexible Packaging',
    description: 'Solutions from small packs to bulk packaging to meet diverse customer needs.',
  },
  {
    icon: Truck,
    title: 'Secure Raw Material Handling',
    description: 'Proper storage infrastructure and quality-controlled material management.',
  },
  {
    icon: Beaker,
    title: 'Product Consistency',
    description: 'Rigorous testing and quality checks for consistent product performance.',
  },
];

const Manufacturing = () => {
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
            <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4">OUR INFRASTRUCTURE</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Advanced Manufacturing <span className="text-secondary">& Infrastructure</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our lubricants are produced in a modern blending facility equipped with controlled processes, accurate batch formulation systems, and proper storage infrastructure.
            </p>
          </motion.div>

          {/* Manufacturing Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturingHighlights.map((item, index) => (
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

          {/* Additional Info */}
          <motion.div
            className="mt-16 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Quality-Driven Manufacturing
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every batch undergoes controlled processing to ensure performance stability and product consistency. Our manufacturing process is designed to deliver lubricants that meet the highest standards of quality and performance.
                </p>
                <ul className="space-y-3">
                  {[
                    'Advanced blending technology',
                    'Rigorous quality testing',
                    'ISO-compliant processes',
                    'Skilled technical team'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <Factory className="w-32 h-32 text-primary/30" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary/10 rounded-xl p-4">
                  <p className="text-primary font-bold text-2xl">300 KL</p>
                  <p className="text-muted-foreground text-sm">Monthly Capacity</p>
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
              href="/quality"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              Learn about our Quality Assurance
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing;
