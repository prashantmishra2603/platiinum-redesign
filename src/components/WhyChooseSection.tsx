import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, TrendingUp, ShieldCheck, Gauge } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description: 'Formulated with cutting-edge additives for optimal engine health.',
    color: 'from-primary to-accent',
  },
  {
    icon: TrendingUp,
    title: 'Proven Performance',
    description: 'Tested to perform in Indian roads & climatic conditions.',
    color: 'from-secondary to-primary',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Protection',
    description: 'Extends engine life and reduces wear & tear.',
    color: 'from-accent to-secondary',
  },
  {
    icon: Gauge,
    title: 'Unmatched Efficiency',
    description: 'Enhances mileage with smoother engine performance.',
    color: 'from-primary to-secondary',
  },
];

export const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
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
          <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4">
            WHY CHOOSE US
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Why Choose <span className="text-secondary">Platiinum</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full card-hover text-center">
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-10 h-10 text-primary" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
