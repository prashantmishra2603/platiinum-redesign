import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BlogPostDetail {
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  content: string[];
  sections: Array<{
    heading: string;
    content: string[];
  }>;
}

const defaultBlogDetails: Record<string, BlogPostDetail> = {
  'synthetic-vs-mineral-oils': {
    title: 'Synthetic vs Mineral Oils: Which is Right for Your Vehicle?',
    author: 'John Smith',
    date: 'Feb 10, 2026',
    category: 'Engine Oils',
    image: 'bg-gradient-to-br from-primary/20 to-accent/20',
    readTime: '5 min read',
    content: [
      'Choosing the right engine oil is one of the most important decisions you can make for your vehicle\'s longevity and performance. With so many options available, understanding the differences between synthetic and mineral oils is crucial.'
    ],
    sections: [
      {
        heading: 'What are Mineral Oils?',
        content: [
          'Mineral oils are refined directly from crude oil through a simple distillation process. They have been the traditional choice for decades and remain popular due to their cost-effectiveness.',
          'Mineral oils typically require more frequent oil changes (every 3,000-5,000 miles) and are best suited for older vehicles and normal driving conditions.',
          'Key characteristics: Lower cost, adequate protection for standard use, shorter service intervals, suitable for low-stress engines.'
        ]
      },
      {
        heading: 'What are Synthetic Oils?',
        content: [
          'Synthetic oils are chemically engineered to provide superior performance. They are created through a complex manufacturing process that gives them more uniform molecules.',
          'These oils offer extended service intervals (up to 10,000 miles or more), better performance in extreme temperatures, and superior wear protection.',
          'Key characteristics: Higher cost, extended drain intervals, excellent performance in extreme conditions, superior cleanliness, better fuel economy.'
        ]
      },
      {
        heading: 'Comparative Analysis',
        content: [
          'Performance: Synthetic oils consistently outperform mineral oils in protecting against wear, deposits, and oxidation.',
          'Cost: While synthetic oils cost more upfront, their longer service intervals often make them more economical over time.',
          'Temperature Range: Synthetic oils perform better in both extremely cold and hot conditions.',
          'Environmental Impact: Synthetic oils produce fewer emissions due to better fuel economy.',
          'Vehicle Compatibility: Always check your vehicle manual to see which type is recommended.'
        ]
      },
      {
        heading: 'Choosing the Right Oil for Your Vehicle',
        content: [
          'Consider your vehicle\'s age and mileage. Newer vehicles with tight tolerances benefit from synthetic oils.',
          'Think about your climate. Cold climates favor synthetic oils for better cold-start performance.',
          'Factor in your driving habits. Highway driving with consistent speeds is easier on oil.',
          'Consult your vehicle\'s manual for manufacturer recommendations.',
          'When in doubt, choose the oil that matches your vehicle\'s specifications for optimal performance.'
        ]
      },
      {
        heading: 'Conclusion',
        content: [
          'Both mineral and synthetic oils have their place. Mineral oils are economical for vehicles with normal service requirements, while synthetic oils are ideal for high-performance vehicles or those operating in extreme conditions.',
          'The best choice depends on your specific vehicle, driving habits, and budget. Following your manufacturer\'s recommendations ensures maximum engine protection and longevity.'
        ]
      }
    ]
  },
  'motorcycle-maintenance': {
    title: 'Complete Guide to Motorcycle Oil Maintenance',
    author: 'Sarah Johnson',
    date: 'Feb 08, 2026',
    category: 'Motorcycle Oils',
    image: 'bg-gradient-to-br from-secondary/20 to-primary/20',
    readTime: '6 min read',
    content: [
      'Proper motorcycle oil maintenance is essential for keeping your bike running smoothly and ensuring a long engine life. Many riders underestimate the importance of regular oil changes, but this simple maintenance task can make a significant difference.'
    ],
    sections: [
      {
        heading: 'Why Motorcycle Oil is Different',
        content: [
          'Motorcycle oils have to handle unique demands that car oils don\'t face. They must lubricate engines that run at higher RPMs and often share oil with the transmission.',
          'Quality motorcycle oils feature special additives to protect the wet clutch system from degradation.',
          'They must perform effectively across a wider temperature range during extended riding sessions.'
        ]
      },
      {
        heading: 'Recommended Oil Change Intervals',
        content: [
          'For synthetic motorcycle oils: Every 6,000-10,000 kilometers or 6 months',
          'For semi-synthetic oils: Every 4,000-6,000 kilometers or 3-4 months',
          'For mineral oils: Every 2,000-3,000 kilometers or monthly',
          'Always refer to your motorcycle\'s manual for specific recommendations as it varies by model and engine type.'
        ]
      },
      {
        heading: 'How to Check Your Oil Level',
        content: [
          'Park your motorcycle on level ground and let the engine cool for a few minutes.',
          'Locate the sight glass or dipstick (varies by model).',
          'The oil level should be between the minimum and maximum marks.',
          'If low, top up with the recommended oil grade for your motorcycle.',
          'Check the oil color - it should be brown. Black oil indicates it\'s time for a change.'
        ]
      },
      {
        heading: 'Choosing the Right Motorcycle Oil',
        content: [
          'Always use motorcycle-specific oil, never car oil in a motorcycle.',
          'Check the JASO rating (MA, MA2, or MB) to ensure wet clutch compatibility.',
          'Follow your motorcycle manufacturer\'s viscosity recommendations.',
          'Consider synthetic oils for better performance and longer intervals.',
          'Premium quality oils offer better protection and cleanliness.'
        ]
      }
    ]
  },
  'gear-oil-importance': {
    title: 'Why Quality Gear Oil Matters for Your Vehicle',
    author: 'Mike Davis',
    date: 'Feb 05, 2026',
    category: 'Gear Oils',
    image: 'bg-gradient-to-br from-accent/20 to-secondary/20',
    readTime: '7 min read',
    content: [
      'Gear oil is often overlooked by vehicle owners who focus primarily on engine oil changes. However, using quality gear oil is crucial for maintaining your transmission and differential systems.'
    ],
    sections: [
      {
        heading: 'The Role of Gear Oil',
        content: [
          'Gear oil lubricates the high-speed, high-pressure interactions between gears.',
          'It must withstand extreme pressure and temperature variations.',
          'Quality gear oil prevents metal-to-metal contact, reducing wear and noise.',
          'It dissipates heat generated by the heavy loads placed on gears.',
          'Proper gear oil selection extends transmission and differential lifespan significantly.'
        ]
      },
      {
        heading: 'Viscosity Grades Explained',
        content: [
          'Gear oils are classified by ISO viscosity grades: VG 32, 46, 68, 100, 150, 220.',
          'Lower numbers (VG 32, 46) for lighter-duty applications and lower temperatures.',
          'Higher numbers (VG 100, 150, 220) for heavy-duty applications and higher temperatures.',
          'Your vehicle manual specifies the correct grade for optimal performance.'
        ]
      },
      {
        heading: 'When to Change Gear Oil',
        content: [
          'Manual transmissions: Every 40,000-80,000 kilometers',
          'Differentials: Every 40,000-80,000 kilometers',
          'Heavy-duty applications: More frequent changes required',
          'Always check your vehicle manual for specific intervals.',
          'After towing heavy loads, consider early oil changes.'
        ]
      }
    ]
  },
  'oil-change-intervals': {
    title: 'Oil Change Intervals: What You Need to Know',
    author: 'Emma Wilson',
    date: 'Feb 03, 2026',
    category: 'General Maintenance',
    image: 'bg-gradient-to-br from-primary/20 to-secondary/20',
    readTime: '5 min read',
    content: [
      'Understanding correct oil change intervals is fundamental to vehicle maintenance. The "change every 3,000 miles" rule of thumb is outdated, and adhering to proper intervals can save you money and extend your vehicle\'s life.'
    ],
    sections: [
      {
        heading: 'Modern Oil Change Intervals',
        content: [
          'Modern synthetic oils can last 7,500 to 10,000 miles or longer.',
          'Mineral oils typically need changes every 3,000 to 5,000 miles.',
          'Semi-synthetic oils fall between at 5,000 to 7,000 miles.',
          'Always follow your vehicle manufacturer\'s recommendations.',
          'Your owner\'s manual is the authoritative source for your specific vehicle.'
        ]
      },
      {
        heading: 'Factors Affecting Oil Change Intervals',
        content: [
          'Climate: Cold climates require more frequent changes',
          'Driving habits: Stop-and-go driving means more frequent changes',
          'Oil type: Synthetic oils last longer than mineral',
          'Vehicle age: Older vehicles may need more frequent changes',
          'Towing: Heavy towing requires earlier oil changes'
        ]
      }
    ]
  },
  'greases-bearing-protection': {
    title: 'Using the Right Grease for Bearing Protection',
    author: 'Robert Chen',
    date: 'Feb 01, 2026',
    category: 'Greases',
    image: 'bg-gradient-to-br from-secondary/20 to-accent/20',
    readTime: '6 min read',
    content: [
      'Proper bearing lubrication with quality grease is essential for machinery performance and longevity. Selecting and maintaining the right grease can significantly extend bearing life and reduce maintenance costs.'
    ],
    sections: [
      {
        heading: 'Understanding Grease Composition',
        content: [
          'Grease consists of base oil, thickener, and additives.',
          'The thickener holds the oil in place to provide continuous lubrication.',
          'Common thickeners include lithium, polyuria, and calcium.',
          'Additives provide rust protection, anti-wear properties, and oxidation resistance.',
          'The right balance ensures optimal bearing protection.'
        ]
      },
      {
        heading: 'Grease Grades and Applications',
        content: [
          'NLGI Grade 00 to 3: Higher grades for vertical applications',
          'Grade 1-2: Most common for general bearings',
          'Grade 3: For high-temperature applications',
          'Select based on bearing type, speed, temperature, and load.',
          'Using the wrong grade can reduce bearing life significantly.'
        ]
      }
    ]
  },
  'environmental-benefits': {
    title: 'Environmental Benefits of Quality Lubricants',
    author: 'Lisa Anderson',
    date: 'Jan 30, 2026',
    category: 'Sustainability',
    image: 'bg-gradient-to-br from-accent/20 to-primary/20',
    readTime: '4 min read',
    content: [
      'Using quality lubricants isn\'t just good for your vehicle—it\'s good for the environment. Premium oils can significantly reduce emissions and environmental impact through improved efficiency and reduced waste.'
    ],
    sections: [
      {
        heading: 'Reduced Emissions',
        content: [
          'High-quality synthetic oils improve fuel efficiency by 3-5%.',
          'Better lubrication reduces engine friction and parasitic losses.',
          'Lower fuel consumption means fewer emissions per mile traveled.',
          'This translates to measurable environmental benefits over time.',
          'Every liter of fuel saved prevents greenhouse gas emissions.'
        ]
      },
      {
        heading: 'Extended Drain Intervals',
        content: [
          'Synthetic oils can last 2-3 times longer than mineral oils.',
          'Fewer oil changes mean less waste oil requiring disposal.',
          'Reduced used oil generates less environmental contamination risk.',
          'Manufacturing fewer oils reduces overall industrial impact.',
          'Less frequent changes also mean fewer trips to service centers.'
        ]
      },
      {
        heading: 'Biodegradable Options',
        content: [
          'Eco-friendly lubricants are becoming more available.',
          'These break down naturally if spilled, reducing contamination.',
          'Performance matches conventional oils in most applications.',
          'Perfect for environmentally sensitive areas and marine use.',
          'Support sustainable practices by choosing green options when possible.'
        ]
      }
    ]
  }
};

const BlogDetail = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const blog = blogDetails[blogId || ''];

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-24 text-center pt-40">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="btn-primary-gradient px-6 py-3 rounded-lg font-semibold">
            Back to Blogs
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
          <Link to="/blogs" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-12 border-b border-border/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                  {blog.category}
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                {blog.title}
              </h1>
              <div className={`${blog.image} h-96 rounded-2xl mb-8`} />
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/30">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blog.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{blog.readTime}</p>
                </div>
                <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {blog.content.map((paragraph, idx) => (
              <motion.p
                key={idx}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}

            {blog.sections.map((section, sectionIdx) => (
              <motion.div
                key={sectionIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: sectionIdx * 0.1 }}
                className="mb-12"
              >
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  {section.heading}
                </h2>
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Related Blogs CTA */}
        <section className="py-16 border-t border-border/30 bg-card/50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-muted-foreground mb-6">Found this helpful?</p>
              <Link to="/blogs" className="btn-primary-gradient px-8 py-4 rounded-lg font-semibold inline-block">
                Read More Blogs
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
