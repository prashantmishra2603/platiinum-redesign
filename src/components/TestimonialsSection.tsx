import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "A brand that grows with us",
    content: "As a distributor, I've seen many lubricant brands, but Platiinum stands out. The quality of the product builds trust with customers, and the company's support makes it easy for us to expand sales. It's not just a product — it's a partnership.",
    name: "Manoj Mehta",
    role: "Authorized Distributor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote: "Performance I can rely on",
    content: "I've been using Platiinum Bolt 4T in my bike for the last year, and the difference is clear. Smoother rides, better mileage, and no engine issues. It's the only oil I trust now.",
    name: "Sunil Narang",
    role: "Travel Enthusiast",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote: "Perfect for tough conditions",
    content: "With Platiinum UTTO, I get excellent performance without any overheating issues. My tractor runs smoothly through long hours of fieldwork. Highly recommended for fellow farmers.",
    name: "Kishan Singh",
    role: "Farmer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote: "City traffic champion",
    content: "I drive daily in city traffic, and engine oils usually don't last long. But Platiinum Sync 4T has been amazing — my bike runs smoother and I've noticed improved fuel efficiency.",
    name: "Anjani Verma",
    role: "Daily Commuter",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote: "Fleet owner's choice",
    content: "I am a fleet owner and Platiinum lubricants maintains costs and engines run stronger. The consistent quality across all their products has made fleet management much easier.",
    name: "Ramshivam Yadav",
    role: "Logistics Business Owner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
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
            TESTIMONIALS
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            What Our <span className="text-secondary">Customers</span> Say
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
            {/* Quote icon */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />

            {/* Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-secondary mb-6">
                "{current.quote}"
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                "{current.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
                />
                <div className="text-left">
                  <h4 className="font-display font-bold text-foreground">{current.name}</h4>
                  <p className="text-sm text-muted-foreground">{current.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-6'
                        : 'bg-border hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
