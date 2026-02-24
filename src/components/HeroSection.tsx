import { motion } from 'framer-motion';
import heroBike from '@/assets/hero-bike.png';
import highwayBg from '@/assets/highway-bg.jpg';
import movingBike from '@/assets/moving-bike.png';
import movingTruck from '@/assets/moving-truck.png';
import oilSplash from '@/assets/oil-splash.png';

// Floating oil fluid component
const FloatingOil = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating oil splash images */}
      {[...Array(3)].map((_, i) => (
        <motion.img
          key={i}
          src={oilSplash}
          alt=""
          className="absolute w-20 h-20 md:w-32 md:h-32 object-contain opacity-30 blur-sm"
          style={{
            left: `${20 + i * 30}%`,
            top: `${15 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Oil drops */}
      {Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 4,
        size: 8 + Math.random() * 16,
      })).map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute rounded-full bg-gradient-to-b from-secondary/50 to-secondary/10"
          style={{
            left: `${drop.left}%`,
            width: drop.size,
            height: drop.size * 1.5,
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 0.8, 0.8, 0],
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

// Moving vehicles component
const MovingVehicles = () => {
  return (
    <div className="absolute bottom-20 md:bottom-32 left-0 right-0 overflow-hidden pointer-events-none">
      {/* Moving Bike - Left to Right */}
      <motion.div
        className="absolute bottom-0"
        animate={{ x: ['-30vw', '130vw'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <img
          src={movingBike}
          alt=""
          className="h-16 md:h-24 lg:h-32 w-auto object-contain drop-shadow-2xl"
          style={{ filter: 'brightness(0.9) contrast(1.1)' }}
        />
      </motion.div>

      {/* Moving Truck - Right to Left */}
      <motion.div
        className="absolute bottom-4"
        animate={{ x: ['130vw', '-40vw'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 5 }}
      >
        <img
          src={movingTruck}
          alt=""
          className="h-20 md:h-28 lg:h-36 w-auto object-contain drop-shadow-2xl"
          style={{ filter: 'brightness(0.85) contrast(1.1)', transform: 'scaleX(-1)' }}
        />
      </motion.div>

      {/* Second bike with delay */}
      <motion.div
        className="absolute bottom-2"
        animate={{ x: ['-20vw', '120vw'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear', delay: 10 }}
      >
        <img
          src={movingBike}
          alt=""
          className="h-12 md:h-20 lg:h-24 w-auto object-contain opacity-70 drop-shadow-xl"
          style={{ filter: 'brightness(0.8) contrast(1.05)' }}
        />
      </motion.div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image - Highway */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{ backgroundImage: `url(${highwayBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Floating Oil Animation */}
      <FloatingOil />

      {/* Moving Vehicles - Real Images */}
      <MovingVehicles />

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
              PLATINUM LUBRICANTS
            </motion.p>
            
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-glow">Engineered for Indian Roads.</span>
              <br />
              <span className="text-glow-gold">Built for Long-Lasting Performance.</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              For over five decades, we have powered engines across India with high-performance lubricants designed specifically for Indian driving conditions, heavy loads, extreme temperatures, and demanding terrains.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Advanced additive technology
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                Precision blending
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                Performance you can rely on
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="/products"
                className="btn-primary-gradient px-8 py-4 rounded-lg font-bold text-lg tracking-wide animate-pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-primary-foreground">Explore Products</span>
              </motion.a>
              <motion.a
                href="/become-dealer"
                className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-secondary/50 text-secondary hover:bg-secondary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Dealer
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
