import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

import engineOils from '@/assets/engine-oils.png';
import fourTOils from '@/assets/4t-oils.png';
import threeWheelerOils from '@/assets/3wo-oils.png';
import gearOils from '@/assets/gear-oils.png';
import forkOils from '@/assets/fork-oils.png';
import greases from '@/assets/greases.png';

const products = [
  {
    title: 'Heavy Duty Engine Oils',
    description: 'Advanced oils for cars, trucks, and commercial vehicles.',
    image: engineOils,
    color: 'from-primary/20 to-accent/20',
  },
  {
    title: '4T Motorcycle Engine Oils',
    description: 'Superior protection for two-wheelers and motorcycles.',
    image: fourTOils,
    color: 'from-secondary/20 to-primary/20',
  },
  {
    title: 'Three Wheeler Oils',
    description: 'Specially formulated for auto-rickshaws and three-wheelers.',
    image: threeWheelerOils,
    color: 'from-accent/20 to-secondary/20',
  },
  {
    title: 'Gear & Transmission Oils',
    description: 'Maximum protection for gears and transmission systems.',
    image: gearOils,
    color: 'from-primary/20 to-secondary/20',
  },
  {
    title: 'Fork Oils',
    description: 'Premium fork oils for smooth suspension performance.',
    image: forkOils,
    color: 'from-secondary/20 to-accent/20',
  },
  {
    title: 'Premium Greases',
    description: 'Top quality lithium and calcium based greases.',
    image: greases,
    color: 'from-accent/20 to-primary/20',
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative bg-card border border-border/50 rounded-2xl overflow-hidden card-hover">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-50`} />
        
        {/* Image container */}
        <div className="relative aspect-square p-6 flex items-center justify-center">
          <motion.img
            src={product.image}
            alt={product.title}
            className="max-h-48 w-auto object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="relative p-6 bg-gradient-to-t from-card to-transparent">
          <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.description}
          </p>
          <motion.button
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide group/btn"
            whileHover={{ x: 5 }}
          >
            See All Products
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        </div>
      </div>
    </motion.div>
  );
};

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4">
            OUR PRODUCTS
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Premium <span className="text-secondary">Lubricant</span> Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our lubricants are crafted with advanced formulations that deliver 
            unmatched protection, superior performance, and long-lasting reliability.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
