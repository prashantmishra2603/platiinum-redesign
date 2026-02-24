import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FlaskConical, Microscope, BookOpen, Code, CheckCircle } from 'lucide-react';

const expertiseAreas = [
  {
    icon: FlaskConical,
    title: 'Formulation Knowledge',
    description: 'Deep understanding of lubricant chemistry and additive packages for optimal performance.',
  },
  {
    icon: Microscope,
    title: 'R&D Capability',
    description: 'Continuous research and development to improve formulations and develop new products.',
  },
  {
    icon: BookOpen,
    title: 'Technical Documentation',
    description: 'Comprehensive technical data sheets and product specifications for all products.',
  },
  {
    icon: Code,
    title: 'Custom Formulations',
    description: 'Ability to develop customized solutions for specific customer requirements.',
  },
];

export const TechnicalExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
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
          <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4">TECHNICAL EXPERTISE</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Our Technical <span className="text-secondary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            With decades of experience in lubricant formulation and manufacturing, our technical team brings deep knowledge and innovation to every product.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full card-hover text-center">
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-0.5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <area.icon className="w-10 h-10 text-primary" />
                  </div>
                </motion.div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Quality You Can Trust
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our commitment to technical excellence ensures that every product meets the highest standards of quality and performance. We continuously invest in upgrading our technical capabilities to deliver innovative solutions.
              </p>
              <ul className="space-y-3">
                {[
                  'ISO-compliant manufacturing processes',
                  'State-of-the-art laboratory facilities',
                  'Skilled technical professionals',
                  'Industry partnerships for innovation'
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
                <FlaskConical className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
