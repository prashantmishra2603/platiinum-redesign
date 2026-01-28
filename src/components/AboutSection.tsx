import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Target, Shield, Zap } from 'lucide-react';

const stats = [
  { number: '50+', label: 'Years of Excellence', icon: Award },
  { number: '1000+', label: 'Products Range', icon: Target },
  { number: '500+', label: 'Distributors', icon: Shield },
  { number: '10M+', label: 'Engines Protected', icon: Zap },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4">OUR LEGACY</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            <span className="text-secondary">50 Years</span> of Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With 50 years of expertise and innovation, our mission is to keep engines performing 
            at their peak, mile after mile. Our lubricants are crafted with advanced formulations 
            that deliver unmatched protection, superior performance, and long-lasting reliability.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center card-hover">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm text-muted-foreground tracking-wide">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video placeholder */}
        <motion.div
          className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="aspect-video bg-card border border-border/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/8rEodcB0540"
              title="Platiinum Lubricants Manufacturing Facility"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-muted-foreground mt-4 text-sm">
            Platiinum Lubricants Manufacturing Facility, Gorakhpur, Uttar Pradesh, India
          </p>
        </motion.div>
      </div>
    </section>
  );
};
