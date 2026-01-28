import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const footerLinks = {
  products: [
    { name: 'Heavy Duty Engine Oils', href: '#products' },
    { name: '4T Motorcycle Oils', href: '#products' },
    { name: 'Three Wheeler Oils', href: '#products' },
    { name: 'Gear & Transmission Oils', href: '#products' },
    { name: 'Premium Greases', href: '#products' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#' },
  ],
  support: [
    { name: 'Product Catalog', href: '#' },
    { name: 'Technical Data', href: '#' },
    { name: 'Distributor Portal', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Blog', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCHlJHtUin3F9yiclr2kG7Dw', label: 'YouTube' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-card/80 border-t border-border/50">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-display font-bold text-xl text-primary-foreground">P</span>
              </div>
              <div>
                <h1 className="font-display text-xl font-bold text-foreground tracking-wider">
                  PLATIINUM
                </h1>
                <p className="text-xs text-muted-foreground tracking-widest">LUBRICANTS</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              With 50 years of expertise, we engineer trust through premium lubricants 
              that deliver unmatched protection and superior performance.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Neelam Chemicals. All rights reserved. | Platiinum Lubricants
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};
