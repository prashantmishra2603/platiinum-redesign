import { motion } from 'framer-motion';
import heroBike from '@/assets/hero-bike.png';
import heroBg from '@/assets/hero-bg.jpg';

// Floating oil drops component
const OilDrops = () => {
  const drops = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
    size: 10 + Math.random() * 20,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute rounded-full bg-gradient-to-b from-secondary/60 to-secondary/20"
          style={{
            left: `${drop.left}%`,
            width: drop.size,
            height: drop.size * 1.5,
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Oil Drops Animation */}
      <OilDrops />

      {/* Moving vehicles */}
      <div className="absolute bottom-32 left-0 right-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute"
          animate={{ x: ['-100vw', '100vw'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="120" height="60" viewBox="0 0 120 60" fill="currentColor" className="text-primary">
            <rect x="10" y="20" width="80" height="25" rx="5" />
            <rect x="90" y="25" width="25" height="15" rx="3" />
            <circle cx="30" cy="50" r="10" />
            <circle cx="80" cy="50" r="10" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute"
          animate={{ x: ['100vw', '-100vw'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear', delay: 3 }}
        >
          <svg width="60" height="40" viewBox="0 0 60 40" fill="currentColor" className="text-secondary">
            <ellipse cx="30" cy="20" rx="25" ry="12" />
            <circle cx="15" cy="35" r="6" />
            <circle cx="45" cy="35" r="6" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              className="text-primary font-semibold tracking-[0.3em] text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              NEELAM CHEMICALS PRESENTS
            </motion.p>
            
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-glow">'PLATIINUM</span>
              <br />
              <span className="text-glow">LUBRICANTS'</span>
            </motion.h1>

            <motion.h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-glow-gold">Power That Lasts..</span>
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              We don't just make lubricants — we engineer trust
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#products"
                className="btn-primary-gradient px-8 py-4 rounded-lg font-bold text-lg tracking-wide animate-pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-primary-foreground">Our Products</span>
              </motion.a>
              <motion.a
                href="#about"
                className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-primary/50 text-primary hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl rounded-full scale-75" />
              
              <motion.img
                src={heroBike}
                alt="Platiinum Lubricants - Motorcycle with oil splash"
                className="relative z-10 w-full max-w-2xl mx-auto drop-shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
