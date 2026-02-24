import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Tractor, Construction, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    icon: Truck,
    title: 'Transport Fleets',
    description: 'Heavy-duty lubricants for commercial transport fleets, ensuring reliable performance across long distances.',
    color: 'from-primary to-accent',
  },
  {
    icon: Tractor,
    title: 'Agriculture',
    description: 'Specialized oils for tractors and agricultural machinery operating in demanding field conditions.',
    color: 'from-secondary to-primary',
  },
  {
    icon: Construction,
    title: 'Construction',
    description: 'High-performance lubricants for construction equipment and machinery under extreme loads.',
    color: 'from-accent to-secondary',
  },
  {
    icon: Factory,
    title: 'Manufacturing Plants',
    description: 'Industrial-grade oils for manufacturing plants, hydraulic systems, and industrial machinery.',
    color: 'from-primary to-secondary',
  },
];

export const ApplicationIndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
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
          <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4">APPLICATION INDUSTRIES</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Industries We <span className="text-secondary">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Platinum Lubricants serves a diverse range of industries with specialized formulations designed for specific applications and operating conditions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.color} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                      <industry.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/btn"
                    >
                      View Products
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
          >
            Discuss Your Requirements
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
