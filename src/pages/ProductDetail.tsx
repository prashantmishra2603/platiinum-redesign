import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Thermometer, BadgeCheck, Package, FileText, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import engineOils from '@/assets/engine-oils.png';
import fourTOils from '@/assets/4t-oils.png';
import threeWheelerOils from '@/assets/3wo-oils.png';
import gearOils from '@/assets/gear-oils.png';
import forkOils from '@/assets/fork-oils.png';
import greases from '@/assets/greases.png';

const products: Record<string, {
  name: string;
  viscosityGrade: string;
  apiRating: string;
  description: string;
  application: string;
  benefits: string[];
  packaging: string[];
  image: string;
}> = {
  // Heavy Duty Diesel Engine Oils
  'matrix-15w40-ci4': {
    name: 'MATRIX 15W40 CI-4 PLUS',
    viscosityGrade: 'SAE 15W40',
    apiRating: 'API CI-4',
    description: 'High-performance heavy-duty diesel engine oil designed for commercial vehicles operating under high load and long-distance driving conditions. Formulated with advanced additive technology to deliver superior engine protection and extended drain intervals.',
    application: 'Commercial vehicles, long-distance trucks, fleet operators, transport companies',
    benefits: [
      'Excellent engine cleanliness and deposit control',
      'Strong protection against wear and tear',
      'Improved oil drain intervals up to 50,000 km',
      'Stable viscosity under extreme temperatures',
      'Reduced oil consumption',
      'Enhanced fuel efficiency'
    ],
    packaging: ['210 L', '50 L', '20 L', '5 L', '1 L', '500 ml'],
    image: engineOils,
  },
  'matrix-20w50-cf4': {
    name: 'MATRIX 20W50 CF-4',
    viscosityGrade: 'SAE 20W50',
    apiRating: 'API CF-4',
    description: 'Multigrade diesel engine oil formulated for heavy-duty engines requiring high-temperature stability and extended durability. Ideal for engines operating in hot climates and under continuous load.',
    application: 'Heavy-duty diesel engines, commercial vehicles, agricultural machinery, construction equipment',
    benefits: [
      'Enhanced thermal stability',
      'Reliable engine protection',
      'Reduced oil consumption',
      'Suitable for older diesel engines',
      'Excellent oxidation resistance',
      'Superior film strength'
    ],
    packaging: ['210 L', '50 L', '20 L', '5 L', '1 L', '500 ml'],
    image: engineOils,
  },
  'matrix-15w40-cf4': {
    name: 'MATRIX 15W40 CF-4',
    viscosityGrade: 'SAE 15W40',
    apiRating: 'API CF-4',
    description: 'Balanced formulation for heavy-duty diesel engines requiring consistent lubrication and protection. Provides excellent wear protection and sludge control.',
    application: 'Diesel engines, commercial vehicles, transport fleets, buses',
    benefits: [
      'Engine wear reduction',
      'Improved fuel efficiency',
      'Stable performance under load',
      'Excellent deposit control',
      'Extended drain intervals',
      'Reliable cold start protection'
    ],
    packaging: ['210 L', '50 L', '20 L', '5 L', '1 L', '500 ml'],
    image: engineOils,
  },
  'matrix-20w40-cf4': {
    name: 'MATRIX 20W40 CF-4',
    viscosityGrade: 'SAE 20W40',
    apiRating: 'API CF-4',
    description: 'Designed for commercial vehicles and agricultural machinery operating in varied Indian conditions. Provides reliable protection in both high and low temperature operations.',
    application: 'Agricultural machinery, commercial vehicles, construction equipment, generators',
    benefits: [
      'Strong film strength',
      'Smooth engine performance',
      'Cost-effective maintenance solution',
      'Excellent anti-wear properties',
      'Good thermal stability',
      'Suitable for varied operating conditions'
    ],
    packaging: ['210 L', '50 L', '20 L', '5 L', '1 L', '500 ml'],
    image: engineOils,
  },
  // Two Wheeler Oils
  'bolt-4t': {
    name: 'BOLT 4T',
    viscosityGrade: 'SAE 20W40',
    apiRating: 'API SN',
    description: 'Premium motorcycle engine oil designed for high-performance bikes and daily commuting. Formulated with advanced additives to provide excellent protection and performance.',
    application: 'Motorcycles, sport bikes, premium commuters, touring bikes',
    benefits: [
      'Smooth clutch performance',
      'Improved acceleration response',
      'Enhanced engine protection',
      'Excellent high-temperature stability',
      'Reduced engine noise',
      'Clean engine operation'
    ],
    packaging: ['1 L', '900 ml'],
    image: fourTOils,
  },
  'sync-4t': {
    name: 'SYNC 4T',
    viscosityGrade: 'SAE 10W30',
    apiRating: 'API SN',
    description: 'Advanced formulation for modern motorcycles requiring smoother engine performance. Low viscosity formula ensures quick oil circulation and fast cold start protection.',
    application: 'Modern motorcycles, scooters, gearless two-wheelers, premium scooters',
    benefits: [
      'Faster cold start protection',
      'Better mileage support',
      'Clean engine operation',
      'Reduced friction',
      'Improved fuel economy',
      'Excellent oxidation stability'
    ],
    packaging: ['1 L', '900 ml'],
    image: fourTOils,
  },
  'economy-4t': {
    name: 'ECONOMY 4T',
    viscosityGrade: 'SAE 20W40',
    apiRating: 'API SM',
    description: 'Cost-effective solution for regular motorcycle maintenance. Provides reliable lubrication and protection for everyday riding conditions.',
    application: 'Commuter motorcycles, regular use bikes, entry-level motorcycles',
    benefits: [
      'Reliable lubrication',
      'Suitable for daily riders',
      'Balanced performance and affordability',
      'Good wear protection',
      'Stable performance',
      'Affordable maintenance'
    ],
    packaging: ['1 L', '900 ml'],
    image: fourTOils,
  },
  'bolt-4t-scooter': {
    name: 'BOLT 4T SCOOTER',
    viscosityGrade: 'SAE 10W30',
    apiRating: 'API SN',
    description: 'Specially formulated for automatic scooters and gearless two-wheelers. Provides smooth operation and protection for CVT systems.',
    application: 'Automatic scooters, gearless scooters, premium scooters, electric scooters',
    benefits: [
      'Smooth throttle response',
      'Engine cleanliness',
      'Reduced vibration',
      'Optimal CVT performance',
      'Excellent cold flow',
      'Protects transmission components'
    ],
    packaging: ['800 ml'],
    image: fourTOils,
  },
  // Three Wheeler Oils
  'cng-3wheeler': {
    name: 'CNG 3 WHEELER 20W50',
    viscosityGrade: 'SAE 20W50',
    apiRating: 'API SF/CF',
    description: 'Specially developed for CNG-powered three-wheelers operating in city traffic conditions. Formulated to handle the unique demands of gas-powered engines.',
    application: 'CNG auto-rickshaws, gas-powered three-wheelers, LPG vehicles',
    benefits: [
      'Stable lubrication for gas engines',
      'Reduced deposit formation',
      'Improved engine durability',
      'Protection against valve wear',
      'Low ash formulation',
      'Extended service life'
    ],
    packaging: ['3 L', '1 L', '500 ml'],
    image: threeWheelerOils,
  },
  'auto-king-15w40': {
    name: 'AUTO KING 15W40',
    viscosityGrade: 'SAE 15W40',
    apiRating: 'API CI-4',
    description: 'Premium oil for three-wheeler diesel engines delivering strong performance under commercial use. Provides excellent wear protection and deposit control.',
    application: 'Diesel auto-rickshaws, three-wheeler commercial vehicles, small diesel engines',
    benefits: [
      'Superior wear protection',
      'Clean engine operation',
      'Extended drain intervals',
      'Excellent sludge control',
      'Reliable hot and cold performance',
      'Reduced maintenance costs'
    ],
    packaging: ['3 L', '1 L', '500 ml'],
    image: threeWheelerOils,
  },
  'platinum-20w50': {
    name: 'PLATINUM 20W50',
    viscosityGrade: 'SAE 20W50',
    apiRating: 'API SF/CF',
    description: 'Suitable for both three-wheelers and select four-wheelers requiring high viscosity engine oil. Versatile formulation for mixed fleet use.',
    application: 'Three-wheelers, older four-wheelers, mixed fleet, light commercial vehicles',
    benefits: [
      'Reliable engine protection',
      'Suitable for mixed fleet use',
      'Cost-efficient solution',
      'Good high-temperature performance',
      'Wide application range',
      'Proven durability'
    ],
    packaging: ['3 L', '1 L', '500 ml'],
    image: threeWheelerOils,
  },
  // Default/Generic
  'engine-oils': {
    name: 'Heavy Duty Engine Oils',
    viscosityGrade: 'SAE 15W40 / 20W50',
    apiRating: 'API CI-4 / CF-4',
    description: 'Advanced heavy-duty diesel engine oils designed for commercial vehicles, trucks, and fleet operations. Formulated for maximum engine protection and extended drain intervals.',
    application: 'Commercial vehicles, trucks, buses, fleet operators, construction equipment',
    benefits: [
      'Superior engine protection',
      'Extended drain intervals',
      'Excellent thermal stability',
      'Reduced oil consumption',
      'Improved fuel efficiency',
      'Enhanced engine cleanliness'
    ],
    packaging: ['210 L', '50 L', '20 L', '5 L', '1 L'],
    image: engineOils,
  },
  'motorcycle-oils': {
    name: '4T Motorcycle Engine Oils',
    viscosityGrade: 'SAE 10W30 / 20W40',
    apiRating: 'API SN / SM',
    description: 'Premium 4-stroke motorcycle oils designed for high-performance bikes and daily commuters. Provides excellent protection and smooth operation.',
    application: 'Motorcycles, scooters, sport bikes, commuter bikes',
    benefits: [
      'Smooth clutch performance',
      'Excellent engine protection',
      'Improved acceleration',
      'Reduced engine noise',
      'Clean engine operation',
      'Enhanced fuel efficiency'
    ],
    packaging: ['1 L', '900 ml', '800 ml'],
    image: fourTOils,
  },
  'three-wheeler-oils': {
    name: 'Three Wheeler Oils',
    viscosityGrade: 'SAE 15W40 / 20W50',
    apiRating: 'API SF/CF / CI-4',
    description: 'Specialized oils for three-wheeler vehicles including CNG, diesel, and petrol variants. Formulated for the unique demands of auto-rickshaws.',
    application: 'Auto-rickshaws, three-wheelers, small commercial vehicles',
    benefits: [
      'Reliable engine protection',
      'Suitable for CNG/LPG/diesel',
      'Extended engine life',
      'Reduced maintenance costs',
      'Excellent wear protection',
      'Cost-effective solution'
    ],
    packaging: ['3 L', '1 L', '500 ml'],
    image: threeWheelerOils,
  },
  'gear-oils': {
    name: 'Gear & Transmission Oils',
    viscosityGrade: 'SAE 80W90 / 85W140',
    apiRating: 'API GL-4 / GL-5',
    description: 'High-performance gear oils for manual transmissions, differentials, and gearboxes. Provides excellent wear protection and smooth gear shifting.',
    application: 'Manual transmissions, differentials, gearboxes, transfer cases',
    benefits: [
      'Excellent wear protection',
      'Smooth gear shifting',
      'Extended gear life',
      'Wide temperature range',
      'Reduced gear noise',
      'Protects against corrosion'
    ],
    packaging: ['210 L', '50 L', '20 L', '5 L', '1 L'],
    image: gearOils,
  },
  'fork-oils': {
    name: 'Fork Oils',
    viscosityGrade: 'SAE 5W / 10W / 15W',
    apiRating: 'ISO VG',
    description: 'Premium fork oils for motorcycle and scooter suspension systems. Provides smooth suspension action and protects against wear.',
    application: 'Motorcycle forks, scooter suspension, bicycle forks',
    benefits: [
      'Smooth suspension action',
      'Reduced friction',
      'Protects seals',
      'Consistent performance',
      'Extends fork life',
      'Temperature stable'
    ],
    packaging: ['1 L', '500 ml', '250 ml'],
    image: forkOils,
  },
  'greases': {
    name: 'Premium Greases',
    viscosityGrade: 'NLGI 1 / 2 / 3',
    apiRating: ' lithium / calcium',
    description: 'High-quality greases for automotive and industrial applications. Provides long-lasting lubrication and protection against wear.',
    application: 'Wheel bearings, chassis points, universal joints, industrial machinery',
    benefits: [
      'Long-lasting lubrication',
      'Water resistant',
      'Wide temperature range',
      'Excellent adhesion',
      'Protects against corrosion',
      'Reduces maintenance'
    ],
    packaging: ['25 kg', '5 kg', '1 kg', '400 g', '200 g'],
    image: greases,
  },
};

const ProductDetail = () => {
  const { productId } = useParams();
  const { toast } = useToast();
  
  const product = products[productId || ''] || products['engine-oils'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Back Button */}
        <div className="container mx-auto px-4 mb-8">
          <Link 
            to="/#products" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>

        {/* Product Hero */}
        <section className="relative py-12 bg-gradient-to-br from-card/30 via-background to-card/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />
                  <div className="relative bg-card/50 border border-border/50 rounded-2xl p-12 flex items-center justify-center">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="max-h-64 w-auto object-contain"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 text-sm bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                    <Thermometer className="w-4 h-4" />
                    {product.viscosityGrade}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm bg-secondary/20 text-secondary px-3 py-1 rounded-full font-medium">
                    <BadgeCheck className="w-4 h-4" />
                    {product.apiRating}
                  </span>
                </div>

                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-2">Application:</h3>
                  <p className="text-muted-foreground">{product.application}</p>
                </div>

                <div className="mb-8">
                  <h3 className="font-semibold text-foreground mb-3">Available Packaging:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.packaging.map((pack) => (
                      <span 
                        key={pack}
                        className="inline-flex items-center gap-1 text-sm bg-card border border-border/50 text-foreground px-3 py-1 rounded-lg"
                      >
                        <Package className="w-4 h-4 text-primary" />
                        {pack}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="btn-primary-gradient px-8 py-4 rounded-lg font-bold text-lg"
                  >
                    <span className="text-primary-foreground">Request Quote</span>
                  </Link>
                  <Link
                    to="/become-dealer"
                    className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-secondary/50 text-secondary hover:bg-secondary/10 transition-colors"
                  >
                    Become a Dealer
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                Key <span className="text-secondary">Benefits</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {product.benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 bg-card/50 border border-border/50 rounded-xl p-4"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Info */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-card/80 border border-border/50 rounded-2xl p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-xl font-bold text-foreground">Technical Specifications</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-background/50 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Viscosity Grade</p>
                    <p className="font-semibold text-foreground">{product.viscosityGrade}</p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">API Rating</p>
                    <p className="font-semibold text-foreground">{product.apiRating}</p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Packaging</p>
                    <p className="font-semibold text-foreground">{product.packaging.join(', ')}</p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Application</p>
                    <p className="font-semibold text-foreground">View Details</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need More Information?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Contact our technical team for product recommendations or to request a detailed technical data sheet.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="btn-primary-gradient px-8 py-4 rounded-lg font-bold text-lg"
                >
                  <span className="text-primary-foreground flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Contact Us
                  </span>
                </Link>
                <Link
                  to="/products"
                  className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-border/50 text-foreground hover:bg-card/50 transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
