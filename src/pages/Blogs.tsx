import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

const defaultBlogs: BlogPost[] = [
  {
    id: 'synthetic-vs-mineral-oils',
    title: 'Synthetic vs Mineral Oils: Which is Right for Your Vehicle?',
    excerpt: 'Discover the key differences between synthetic and mineral oils, and learn which option is best for your specific vehicle needs and driving conditions.',
    author: 'John Smith',
    date: 'Feb 10, 2026',
    category: 'Engine Oils',
    image: 'bg-gradient-to-br from-primary/20 to-accent/20',
    readTime: '5 min read'
  },
  {
    id: 'motorcycle-maintenance',
    title: 'Complete Guide to Motorcycle Oil Maintenance',
    excerpt: 'Learn the essentials of keeping your motorcycle running smoothly with proper oil changes, selection, and maintenance schedules.',
    author: 'Sarah Johnson',
    date: 'Feb 08, 2026',
    category: 'Motorcycle Oils',
    image: 'bg-gradient-to-br from-secondary/20 to-primary/20',
    readTime: '6 min read'
  },
  {
    id: 'gear-oil-importance',
    title: 'Why Quality Gear Oil Matters for Your Vehicle',
    excerpt: 'Understand the critical role gear oil plays in protecting your transmission and differentials from wear and damage.',
    author: 'Mike Davis',
    date: 'Feb 05, 2026',
    category: 'Gear Oils',
    image: 'bg-gradient-to-br from-accent/20 to-secondary/20',
    readTime: '7 min read'
  },
  {
    id: 'oil-change-intervals',
    title: 'Oil Change Intervals: What You Need to Know',
    excerpt: 'Find out how often you should change your oil based on your vehicle type, driving habits, and climate conditions.',
    author: 'Emma Wilson',
    date: 'Feb 03, 2026',
    category: 'General Maintenance',
    image: 'bg-gradient-to-br from-primary/20 to-secondary/20',
    readTime: '5 min read'
  },
  {
    id: 'greases-bearing-protection',
    title: 'Using the Right Grease for Bearing Protection',
    excerpt: 'Explore how proper grease selection and application can extend the life of bearings and reduce maintenance costs.',
    author: 'Robert Chen',
    date: 'Feb 01, 2026',
    category: 'Greases',
    image: 'bg-gradient-to-br from-secondary/20 to-accent/20',
    readTime: '6 min read'
  },
  {
    id: 'environmental-benefits',
    title: 'Environmental Benefits of Quality Lubricants',
    excerpt: 'Discover how using premium lubricants can reduce emissions and environmental impact while improving fuel efficiency.',
    author: 'Lisa Anderson',
    date: 'Jan 30, 2026',
    category: 'Sustainability',
    image: 'bg-gradient-to-br from-accent/20 to-primary/20',
    readTime: '4 min read'
  }
];

const BlogCard = ({ blog, index }: { blog: BlogPost; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/blogs/${blog.id}`} className="block group">
        <div className="bg-card border border-border/50 rounded-2xl overflow-hidden card-hover hover:border-primary/30 transition-colors">
          {/* Image */}
          <div className={`${blog.image} h-48 w-full`} />

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                {blog.category}
              </span>
              <span className="text-xs text-muted-foreground">{blog.readTime}</span>
            </div>

            <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {blog.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {blog.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-border/30">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {blog.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {blog.date}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Blogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [blogs, setBlogs] = useState<BlogPost[]>(defaultBlogs);

  useEffect(() => {
    // Load admin blogs from localStorage if available
    const adminBlogs = localStorage.getItem('adminBlogs');
    if (adminBlogs) {
      const customBlogs = JSON.parse(adminBlogs);
      // Map admin blogs to blog post format
      const mappedBlogs = customBlogs.map((blog: any) => ({
        id: blog.id,
        title: blog.title,
        excerpt: blog.excerpt,
        author: blog.author,
        date: blog.date,
        category: blog.category,
        image: 'bg-gradient-to-br from-primary/20 to-accent/20',
        readTime: blog.readTime
      }));
      // Combine custom blogs with defaults (custom first)
      setBlogs([...mappedBlogs, ...defaultBlogs]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 border-b border-border/30 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto px-4" ref={ref}>
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4">
                INSIGHTS & TIPS
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Blog & <span className="text-secondary">Resources</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Stay updated with the latest insights on lubricants, vehicle maintenance, and industry trends.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blogs Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
