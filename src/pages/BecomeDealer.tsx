import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { TrendingUp, Users, Gift, Truck, Handshake, ArrowRight, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const partnerBenefits = [
  {
    icon: TrendingUp,
    title: 'High-Margin Product Portfolio',
    description: 'Competitive margins that ensure profitable returns on every sale.',
  },
  {
    icon: Gift,
    title: 'Strong Brand Positioning',
    description: 'Partner with a trusted brand with 50+ years of industry credibility.',
  },
  {
    icon: Users,
    title: 'Marketing & Promotional Support',
    description: 'Access to marketing materials, display units, and promotional campaigns.',
  },
  {
    icon: Truck,
    title: 'Assured Supply Chain Reliability',
    description: 'Consistent product availability with reliable delivery schedules.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Growth Partnership',
    description: 'We build lasting relationships focused on mutual growth and success.',
  },
];

const BecomeDealer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    businessType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll get back to you within 24-48 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      businessType: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-card via-background to-card overflow-hidden">
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
            <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4">BECOME A PARTNER</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Grow Your Business With <span className="text-secondary">Platinum Lubricants</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join our expanding dealer and distributor network across India and build a profitable business with a trusted brand.
            </p>
          </motion.div>

          {/* Partner Benefits */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Partner Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full card-hover">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Become an Authorized Partner
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                    >
                      <option value="">Select type</option>
                      <option value="dealer">Dealer</option>
                      <option value="distributor">Distributor</option>
                      <option value="retailer">Retailer</option>
                      <option value="mechanic">Mechanic/Workshop</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                      placeholder="State"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground resize-none"
                    placeholder="Tell us about your business..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary-gradient py-4 rounded-lg font-bold text-lg tracking-wide flex items-center justify-center gap-2 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-primary-foreground">
                    {isSubmitting ? 'Submitting...' : 'Apply Now'}
                  </span>
                  <Send className="w-5 h-5 text-primary-foreground" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Option */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-muted-foreground mb-4">Prefer to talk to us directly?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BecomeDealer;
