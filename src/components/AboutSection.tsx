import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Target, Shield, Zap, Eye, Rocket, Clock, Users } from 'lucide-react';

const stats = [
  { number: '50+', label: 'Years of Industry Experience', icon: Clock },
  { number: '3rd', label: 'Generation Leadership', icon: Users },
  { number: '500+', label: 'Trusted Dealers Nationwide', icon: Shield },
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
          <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4">ABOUT US</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-secondary">Platinum Lubricants</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Platinum Lubricants is an Indian lubricant manufacturing company with deep industry roots dating back to 1965. Managed today by a third-generation entrepreneur, we combine legacy expertise with modern technology to deliver reliable and performance-driven lubrication solutions.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            With over 50 years of collective industry experience, our leadership ensures consistent quality, ethical trade practices, and long-term partnerships across India.
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

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become one of India's most trusted lubricant brands by delivering high-performance products engineered specifically for Indian engines and operating environments.
            </p>
          </motion.div>
          <motion.div
            className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To manufacture high-quality lubricants that extend engine life, improve fuel efficiency, reduce operating costs, and deliver consistent performance. We are committed to innovation, quality control, and building strong business partnerships nationwide.
            </p>
          </motion.div>
        </div>

        {/* Our Journey */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="font-display text-3xl font-bold text-foreground text-center mb-8">Our Journey</h3>
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Since 1965, we have been actively involved in lubricant formulation and trading. Over decades, we developed strong technical knowledge, deep market understanding, and long-standing industry relationships. Today, Platinum Lubricants continues this legacy with modern blending facilities and scalable operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Automotive Workshops</span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">Fleet Operators</span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Dealers & Distributors</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Industrial Units</span>
            </div>
          </div>
        </motion.div>

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
