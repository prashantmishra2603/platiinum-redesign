import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, BadgeCheck, Package, Thermometer, Wrench, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

import engineOils from '@/assets/engine-oils.png';
import fourTOils from '@/assets/4t-oils.png';
import threeWheelerOils from '@/assets/3wo-oils.png';
import gearOils from '@/assets/gear-oils.png';
import forkOils from '@/assets/fork-oils.png';
import greases from '@/assets/greases.png';

interface Product {
  id: string;
  name: string;
  viscosityGrade: string;
  apiRating: string;
  description: string;
  application: string;
  benefits: string[];
  packaging: string[];
  image: string;
}

const heavyDutyProducts: Product[] = [
  {
    id: 'matrix-15w40-ci4',
    name: 'MATRIX 15W40 CI-4 PLUS',
    viscosityGrade: 'SAE 15W40',
    apiRating: 'API CI-4',
    description: 'High-performance heavy-duty diesel engine oil designed for commercial vehicles operating under high load and long-distance driving conditions.',
    application: 'Commercial vehicles, long-distance trucks, fleet operators',
    benefits: ['Excellent engine cleanliness', 'Strong protection against wear and deposits', 'Improved oil drain intervals', 'Stable viscosity under extreme temperatures'],
    packaging: ['210 L', '50 L', '20 L', '5 L', '1 L', '500 ml'],
    image: engineOils,
  },
  {
    id: 'matrix-20w50-cf4',
    name: 'MATRIX 20W50 CF-4',
    viscosityGrade: 'SAE 20W50',
    apiRating: 'API CF-4',
    description: 'Multigrade diesel engine oil formulated for heavy-duty engines requiring high-temperature stability and extended durability.',
    application: 'Heavy-duty diesel engines, commercial vehicles, agricultural machinery',
    benefits: ['Enhanced thermal stability', 'Reliable engine protection', 'Reduced oil consumption', 'Suitable for older diesel engines'],
    packaging: ['210 L', '50 L', '20 L', '5 L', '1 L', '500 ml'],
    image: engineOils,
  },
  {
    id: 'matrix-15w40-cf4',
    name: 'MATRIX 15W40 CF-4',
    viscosityGrade: 'SAE 15W40',
    apiRating: 'API CF-4',
    description: 'Balanced formulation for heavy-duty diesel engines requiring consistent lubrication and protection.',
    application: 'Diesel engines, commercial vehicles, transport fleets',
    benefits: ['Engine wear reduction', 'Improved fuel efficiency', 'Stable performance under load'],
    packaging: ['210 L', '50 L', '20 L', '5 L', '1 L', '500 ml'],
    image: engineOils,
  },
  {
    id: 'matrix-20w40-cf4',
    name: 'MATRIX 20W40 CF-4',
    viscosityGrade: 'SAE 20W40',
    apiRating: 'API CF-4',
    description: 'Designed for commercial vehicles and agricultural machinery operating in varied Indian conditions.',
    application: 'Agricultural machinery, commercial vehicles, construction equipment',
    benefits: ['Strong film strength', 'Smooth engine performance', 'Cost-effective maintenance solution'],
    packaging: ['210 L', '50 L', '20 L', '5 L', '1 L', '500 ml'],
    image: engineOils,
  },
];

const twoWheelerProducts: Product[] = [
  {
    id: 'bolt-4t',
    name: 'BOLT 4T',
    viscosityGrade: 'SAE 20W40',
    apiRating: 'API SN',
    description: 'Premium motorcycle engine oil designed for high-performance bikes and daily commuting.',
    application: 'Motorcycles, sport bikes, daily commuters',
    benefits: ['Smooth clutch performance', 'Improved acceleration response', 'Enhanced engine protection'],
    packaging: ['1 L', '900 ml'],
    image: fourTOils,
  },
  {
    id: 'sync-4t',
    name: 'SYNC 4T',
    viscosityGrade: 'SAE 10W30',
    apiRating: 'API SN',
    description: 'Advanced formulation for modern motorcycles requiring smoother engine performance.',
    application: 'Modern motorcycles, scooters, gearless two-wheelers',
    benefits: ['Faster cold start protection', 'Better mileage support', 'Clean engine operation'],
    packaging: ['1 L', '900 ml'],
    image: fourTOils,
  },
  {
    id: 'economy-4t',
    name: 'ECONOMY 4T',
    viscosityGrade: 'SAE 20W40',
    apiRating: 'API SM',
    description: 'Cost-effective solution for regular motorcycle maintenance.',
    application: 'Commuter motorcycles, regular use bikes',
    benefits: ['Reliable lubrication', 'Suitable for daily riders', 'Balanced performance and affordability'],
    packaging: ['1 L', '900 ml'],
    image: fourTOils,
  },
  {
    id: 'bolt-4t-scooter',
    name: 'BOLT 4T SCOOTER',
    viscosityGrade: 'SAE 10W30',
    apiRating: 'API SN',
    description: 'Specially formulated for automatic scooters and gearless two-wheelers.',
    application: 'Automatic scooters, gearless scooters, premium scooters',
    benefits: ['Smooth throttle response', 'Engine cleanliness', 'Reduced vibration'],
    packaging: ['800 ml'],
    image: fourTOils,
  },
];

const threeWheelerProducts: Product[] = [
  {
    id: 'cng-3wheeler',
    name: 'CNG 3 WHEELER 20W50',
    viscosityGrade: 'SAE 20W50',
    apiRating: 'API SF/CF',
    description: 'Specially developed for CNG-powered three-wheelers operating in city traffic conditions.',
    application: 'CNG auto-rickshaws, gas-powered three-wheelers',
    benefits: ['Stable lubrication for gas engines', 'Reduced deposit formation', 'Improved engine durability'],
    packaging: ['3 L', '1 L', '500 ml'],
    image: threeWheelerOils,
  },
  {
    id: 'auto-king-15w40',
    name: 'AUTO KING 15W40',
    viscosityGrade: 'SAE 15W40',
    apiRating: 'API CI-4',
    description: 'Premium oil for three-wheeler diesel engines delivering strong performance under commercial use.',
    application: 'Diesel auto-rickshaws, three-wheeler commercial vehicles',
    benefits: ['Superior wear protection', 'Clean engine operation', 'Extended drain intervals'],
    packaging: ['3 L', '1 L', '500 ml'],
    image: threeWheelerOils,
  },
  {
    id: 'platinum-20w50',
    name: 'PLATINUM 20W50',
    viscosityGrade: 'SAE 20W50',
    apiRating: 'API SF/CF',
    description: 'Suitable for both three-wheelers and select four-wheelers requiring high viscosity engine oil.',
    application: 'Three-wheelers, older four-wheelers, mixed fleet',
    benefits: ['Reliable engine protection', 'Suitable for mixed fleet use', 'Cost-efficient solution'],
    packaging: ['3 L', '1 L', '500 ml'],
    image: threeWheelerOils,
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="bg-card border border-border/50 rounded-xl overflow-hidden card-hover h-full flex flex-col">
        {/* Product Image */}
        <div className="relative p-6 bg-gradient-to-br from-card/50 to-background flex items-center justify-center min-h-[160px]">
          <motion.img
            src={product.image}
            alt={product.name}
            className="max-h-28 w-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          {/* API Badge */}
          <div className="absolute top-3 right-3 bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">
            {product.apiRating}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          {/* Specs */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center gap-1 text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
              <Thermometer className="w-3 h-3" />
              {product.viscosityGrade}
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>

          {/* Packaging */}
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-1">Available Packs:</p>
            <p className="text-xs text-foreground">{product.packaging.join(', ')}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-auto">
            <Link
              to={`/products/${product.id}`}
              className="flex-1 text-center py-2 text-sm font-semibold bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
            >
              View Details
            </Link>
            <Link
              to="/contact"
              className="flex-1 text-center py-2 text-sm font-semibold bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductCategory = ({ 
  title, 
  icon: Icon, 
  products, 
  defaultOpen = true 
}: { 
  title: string; 
  icon: any; 
  products: Product[]; 
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
    >
      {/* Category Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-card/80 border border-border/50 rounded-xl p-5 mb-6 hover:bg-card transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="text-left">
            <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{products.length} products</p>
          </div>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
      </button>

      {/* Products Grid */}
      {isOpen && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      )}
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
            Product <span className="text-secondary">Catalog</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of high-performance lubricants engineered for Indian conditions.
          </p>
        </motion.div>

        {/* Product Categories */}
        <ProductCategory
          title="🚛 Heavy Duty Diesel Engine Oils"
          icon={Wrench}
          products={heavyDutyProducts}
        />
        <ProductCategory
          title="🏍 Two Wheeler Engine Oils"
          icon={BadgeCheck}
          products={twoWheelerProducts}
        />
        <ProductCategory
          title="🛺 Three & Four Wheeler Engine Oils"
          icon={Package}
          products={threeWheelerProducts}
          defaultOpen={false}
        />

        {/* How to Choose Section */}
        <motion.div
          className="mt-16 bg-card/80 border border-border/50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-primary" />
            <h3 className="font-display text-2xl font-bold text-foreground">How to Choose the Right Oil</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Viscosity Grade</h4>
              <p className="text-sm text-muted-foreground">
                The viscosity grade (like 15W40, 20W50) indicates how the oil flows at different temperatures. Lower numbers (with W for Winter) flow better in cold weather, while higher numbers provide better protection in hot conditions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">API Rating</h4>
              <p className="text-sm text-muted-foreground">
                The API service classification (SN, CI-4, CF-4, etc.) indicates the oil meets specific engine protection standards. Higher ratings like CI-4 offer better protection for modern engines.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Application</h4>
              <p className="text-sm text-muted-foreground">
                Choose based on your vehicle type - heavy-duty diesel engines need different oil than petrol engines or two-wheelers. Always refer to your vehicle manufacturer's recommendations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 btn-primary-gradient px-8 py-4 rounded-lg font-bold text-lg"
          >
            <span className="text-primary-foreground">Request Product Catalog</span>
            <ArrowRight className="w-5 h-5 text-primary-foreground" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
