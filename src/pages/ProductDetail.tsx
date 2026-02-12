import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';

import engineOils from '@/assets/engine-oils.png';
import fourTOils from '@/assets/4t-oils.png';
import threeWheelerOils from '@/assets/3wo-oils.png';
import gearOils from '@/assets/gear-oils.png';
import forkOils from '@/assets/fork-oils.png';
import greases from '@/assets/greases.png';

const productDetails: Record<string, {
  title: string;
  image: string;
  description: string;
  features: string[];
  benefits: string[];
  specifications: string[];
  variants: Array<{ id: string; name: string; grade: string; price: string }>;
}> = {
  'engine-oils': {
    title: 'Heavy Duty Engine Oils',
    image: engineOils,
    description: 'Advanced synthetic and semi-synthetic engine oils designed for high-performance cars, trucks, and commercial vehicles.',
    features: [
      'Superior thermal stability',
      'Advanced anti-wear protection',
      'Enhanced fuel efficiency',
      'Extended drain intervals',
      'Excellent sludge control',
      'Low volatility formula'
    ],
    benefits: [
      'Reduces engine wear by up to 40%',
      'Improves fuel economy by 3-5%',
      'Extends engine life significantly',
      'Better performance in extreme temperatures',
      'Reduces emissions'
    ],
    specifications: [
      'Viscosity: 10W-40, 15W-40, 20W-50',
      'API Standard: SN/SM',
      'Flash Point: 200°C',
      'Pour Point: -25°C',
      'Density at 40°C: 0.87-0.90 g/cm³'
    ],
    variants: [
      { id: '10w40', name: 'Premium 10W-40', grade: '10W-40', price: '₹450/Liter' },
      { id: '15w40', name: 'Ultra 15W-40', grade: '15W-40', price: '₹420/Liter' },
      { id: '20w50', name: 'Heavy Duty 20W-50', grade: '20W-50', price: '₹380/Liter' }
    ]
  },
  'motorcycle-oils': {
    title: '4T Motorcycle Engine Oils',
    image: fourTOils,
    description: 'Specially formulated 4-stroke motorcycle oils that provide maximum protection and performance for two-wheelers.',
    features: [
      'Optimized for wet clutch systems',
      'Superior shear stability',
      'Anti-foaming properties',
      'Enhanced oxidation resistance',
      'Perfect for high RPM engines',
      'Eco-friendly formulation'
    ],
    benefits: [
      'Prevents clutch slippage',
      'Confirms smoother gear shifts',
      'Better engine cooling',
      'Long-lasting protection',
      'Reduced engine noise'
    ],
    specifications: [
      'Viscosity: SAE 10W-30, 15W-40',
      'API Standard: SJ/SH',
      'Flash Point: 195°C',
      'Pour Point: -20°C',
      'Density at 40°C: 0.85-0.88 g/cm³'
    ],
    variants: [
      { id: 'moto-10w30', name: 'Standard 10W-30', grade: '10W-30', price: '₹280/Liter' },
      { id: 'moto-15w40', name: 'Premium 15W-40', grade: '15W-40', price: '₹320/Liter' },
      { id: 'moto-sport', name: 'Sport 15W-40', grade: '15W-40 Sport', price: '₹380/Liter' }
    ]
  },
  'three-wheeler-oils': {
    title: 'Three Wheeler Oils',
    image: threeWheelerOils,
    description: 'Specially formulated oils for auto-rickshaws and three-wheelers, designed to handle the unique demands of these vehicles.',
    features: [
      'Optimized for 4-stroke engines',
      'Superior thermal protection',
      'Anti-wear additives',
      'Excellent fuel economy',
      'Low volatility',
      'Cost-effective performance'
    ],
    benefits: [
      'Maximum engine protection',
      'Improved fuel efficiency',
      'Extended oil change intervals',
      'Better throttle response',
      'Reduced maintenance costs'
    ],
    specifications: [
      'Viscosity: 15W-40, 20W-40',
      'API Standard: SJ/SK',
      'Flash Point: 190°C',
      'Pour Point: -18°C',
      'Density at 40°C: 0.86-0.89 g/cm³'
    ],
    variants: [
      { id: '3w-standard', name: 'Standard 15W-40', grade: '15W-40', price: '₹220/Liter' },
      { id: '3w-premium', name: 'Premium 20W-40', grade: '20W-40', price: '₹240/Liter' },
      { id: '3w-eco', name: 'ECO 20W-40', grade: '20W-40 ECO', price: '₹210/Liter' }
    ]
  },
  'gear-oils': {
    title: 'Gear & Transmission Oils',
    image: gearOils,
    description: 'Premium gear oils designed for maximum protection of transmission and differential systems.',
    features: [
      'Extreme pressure additives',
      'Superior film strength',
      'Antifoam technology',
      'Corrosion prevention',
      'Wide temperature range',
      'Excellent demulsibility'
    ],
    benefits: [
      'Reduced gear wear',
      'Smooth gear operation',
      'Extended component life',
      'Better transmission efficiency',
      'Reduced noise levels'
    ],
    specifications: [
      'Viscosity: ISO VG 32, 46, 68, 100, 150, 220',
      'Flash Point: 220°C+',
      'Pour Point: -15°C',
      'Density at 40°C: 0.80-0.95 g/cm³'
    ],
    variants: [
      { id: 'gear-32', name: 'ISO VG 32', grade: 'VG 32', price: '₹320/Liter' },
      { id: 'gear-68', name: 'ISO VG 68', grade: 'VG 68', price: '₹350/Liter' },
      { id: 'gear-150', name: 'ISO VG 150', grade: 'VG 150', price: '₹380/Liter' }
    ]
  },
  'fork-oils': {
    title: 'Fork Oils',
    image: forkOils,
    description: 'Premium suspension oils for smooth and responsive fork performance on all terrains.',
    features: [
      'Ultra-low viscosity variance',
      'Smooth damping action',
      'Anti-corrosion properties',
      'High thermal stability',
      'Excellent flow at low temperatures',
      'Anti-foam formula'
    ],
    benefits: [
      'Smooth suspension feel',
      'Better bike handling',
      'Long-lasting damping',
      'Consistent performance',
      'Reduced fade'
    ],
    specifications: [
      'Viscosity: ISO VG 5, 10, 15, 20',
      'Flash Point: 180°C+',
      'Pour Point: -30°C',
      'Density at 40°C: 0.78-0.82 g/cm³'
    ],
    variants: [
      { id: 'fork-5', name: 'Light VG 5', grade: 'VG 5', price: '₹280/Liter' },
      { id: 'fork-10', name: 'Standard VG 10', grade: 'VG 10', price: '₹300/Liter' },
      { id: 'fork-15', name: 'Heavy VG 15', grade: 'VG 15', price: '₹320/Liter' }
    ]
  },
  'greases': {
    title: 'Premium Greases',
    image: greases,
    description: 'High-quality lithium and calcium-based greases for superior lubrication and protection.',
    features: [
      'Lithium complex base',
      'Water-resistant formula',
      'Anti-corrosion additives',
      'Extended relubrication intervals',
      'Wide temperature range',
      'Non-toxic formula'
    ],
    benefits: [
      'Long-lasting protection',
      'Water washout resistance',
      'Rust and corrosion prevention',
      'Reduced maintenance needs',
      'Cost-effective solution'
    ],
    specifications: [
      'NLGI Grade: 00, 0, 1, 2, 3',
      'Worked Penetration: 220-280 (Grade 2)',
      'Drop Point: 180-200°C',
      'Water resistance: Good to Excellent'
    ],
    variants: [
      { id: 'grease-nlgi2', name: 'Lithium NLGI 2', grade: 'NLGI 2', price: '₹180/Kg' },
      { id: 'grease-ep', name: 'EP Lithium NLGI 2', grade: 'NLGI 2 EP', price: '₹220/Kg' },
      { id: 'grease-calcium', name: 'Calcium Complex', grade: 'NLGI 1', price: '₹150/Kg' }
    ]
  }
};

const VariantCard = ({ variant, index }: { variant: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors group"
    >
      <h4 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
        {variant.name}
      </h4>
      <p className="text-sm text-muted-foreground mb-4">{variant.grade}</p>
      <p className="text-primary font-semibold text-lg">{variant.price}</p>
    </motion.div>
  );
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productDetails[productId || ''];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-primary-gradient px-6 py-3 rounded-lg font-semibold">
            Back to Products
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Back Button */}
        <div className="container mx-auto px-4 mb-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-16 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                  <img src={product.image} alt={product.title} className="max-h-80 w-auto object-contain drop-shadow-lg" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4">PRODUCT DETAILS</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {product.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-4">
                  <h3 className="font-display font-bold text-foreground">Key Features:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 border-b border-border/30">
          <div className="container mx-auto px-4">
            <motion.h2
              className="font-display text-4xl font-bold text-foreground mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Benefits
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-16 border-b border-border/30">
          <div className="container mx-auto px-4">
            <motion.h2
              className="font-display text-4xl font-bold text-foreground mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Technical Specifications
            </motion.h2>
            <div className="bg-card border border-border/50 rounded-xl p-8 max-w-3xl mx-auto">
              {product.specifications.map((spec, idx) => (
                <motion.div
                  key={idx}
                  className="py-4 border-b border-border/30 last:border-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <p className="text-muted-foreground">{spec}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Variants Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              className="font-display text-4xl font-bold text-foreground mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Available Variants
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.variants.map((variant, idx) => (
                <VariantCard key={variant.id} variant={variant} index={idx} />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-muted-foreground mb-6">Interested in this product?</p>
              <Link to="/contact" className="btn-primary-gradient px-8 py-4 rounded-lg font-semibold inline-block">
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
