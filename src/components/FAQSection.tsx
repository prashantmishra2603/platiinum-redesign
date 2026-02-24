import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How often should I change my engine oil?",
    answer: "The frequency of oil changes depends on your vehicle type, usage, and operating conditions. Generally, we recommend changing engine oil every 5,000-7,500 km for passenger vehicles. For heavy-duty applications or extreme conditions, more frequent changes may be necessary. Always refer to your vehicle manufacturer's recommendations."
  },
  {
    question: "What is the difference between synthetic and mineral oil?",
    answer: "Synthetic oils are manufactured using chemically engineered base stocks, offering better performance at extreme temperatures, longer drain intervals, and improved engine protection. Mineral oils are derived from crude oil and are more economical but may not perform as well under severe conditions. Platinum offers both synthetic and mineral options to meet different needs and budgets."
  },
  {
    question: "How do I choose the right viscosity grade?",
    answer: "The right viscosity grade depends on your vehicle manufacturer's recommendations, which can be found in your owner's manual. The recommended grade is typically indicated by codes like 5W-30, 10W-40, etc. The first number (with W for Winter) indicates cold weather performance, while the second number indicates high-temperature viscosity."
  },
  {
    question: "Can I use your products for my two-wheeler?",
    answer: "Yes, Platinum offers a specific range of products for two-wheelers, including 4T engine oils designed for motorcycles and scooters. Our 4T oils are formulated to provide excellent protection and performance for both commuter and premium motorcycles."
  },
  {
    question: "Do you offer bulk pricing for fleet operators?",
    answer: "Yes, we offer competitive bulk pricing for fleet operators, logistics companies, and industrial users. Our bulk solutions include competitive pricing, dedicated account management, and flexible delivery schedules. Contact our sales team to discuss your specific requirements."
  },
  {
    question: "How can I become a dealer or distributor?",
    answer: "We are always looking to expand our network of dealers and distributors across India. Interested partners can apply through our Become a Dealer page or contact us directly. We offer attractive margins, marketing support, and ongoing training to help our partners succeed."
  },
  {
    question: "What makes Platinum Lubricants different from other brands?",
    answer: "Platinum Lubricants combines over 50 years of industry experience with formulations specifically optimized for Indian conditions. Our products are designed to perform in extreme heat, heavy loads, and demanding terrains common across India. We focus on delivering consistent quality, competitive pricing, and strong partnership support."
  },
  {
    question: "Where are your products manufactured?",
    answer: "Our lubricants are manufactured in our modern blending facility with state-of-the-art equipment and strict quality control processes. We maintain rigorous standards to ensure consistent product quality and performance across all our product lines."
  },
];

export const FAQSection = () => {
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-primary" />
            <p className="text-primary font-semibold tracking-[0.2em] text-sm">FREQUENTLY ASKED QUESTIONS</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Common <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Find answers to the most commonly asked questions about our products and services.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">Can't find the answer you're looking for?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};
