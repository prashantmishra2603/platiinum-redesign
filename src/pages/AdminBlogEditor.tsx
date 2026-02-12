import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  content: string[];
  sections: Array<{
    heading: string;
    content: string[];
  }>;
}

const categories = [
  'Engine Oils',
  'Motorcycle Oils',
  'Gear Oils',
  'Fork Oils',
  'General Maintenance',
  'Greases',
  'Sustainability',
  'Testimonials',
  'Product Review'
];

const AdminBlogEditor = () => {
  const navigate = useNavigate();
  const { blogId } = useParams<{ blogId: string }>();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<BlogPost>({
    id: '',
    title: '',
    author: '',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    category: '',
    excerpt: '',
    readTime: '',
    content: [''],
    sections: [{ heading: '', content: [''] }]
  });

  useEffect(() => {
    if (!localStorage.getItem('adminAuthenticated')) {
      navigate('/admin/login');
      return;
    }

    if (blogId) {
      // Load existing blog
      const savedBlogs = localStorage.getItem('adminBlogs');
      if (savedBlogs) {
        const blogs = JSON.parse(savedBlogs);
        const blog = blogs.find((b: BlogPost) => b.id === blogId);
        if (blog) {
          setFormData(blog);
        }
      }
    }
    setLoading(false);
  }, [blogId, navigate]);

  const handleSave = () => {
    setError('');

    // Validation
    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }
    if (!formData.author.trim()) {
      setError('Author name is required');
      return;
    }
    if (!formData.category) {
      setError('Category is required');
      return;
    }
    if (!formData.excerpt.trim()) {
      setError('Excerpt is required');
      return;
    }
    if (!formData.readTime.trim()) {
      setError('Read time is required');
      return;
    }
    if (!formData.content[0]?.trim()) {
      setError('Blog content is required');
      return;
    }

    setSaving(true);

    // Generate ID from title if new
    let blogId = formData.id;
    if (!blogId) {
      blogId = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setFormData(prev => ({ ...prev, id: blogId }));
    }

    // Save to localStorage
    const savedBlogs = localStorage.getItem('adminBlogs');
    let blogs: BlogPost[] = savedBlogs ? JSON.parse(savedBlogs) : [];

    const existingIndex = blogs.findIndex(b => b.id === formData.id);
    if (existingIndex >= 0) {
      blogs[existingIndex] = { ...formData, id: blogId };
    } else {
      blogs.push({ ...formData, id: blogId });
    }

    localStorage.setItem('adminBlogs', JSON.stringify(blogs));

    setTimeout(() => {
      setSaving(false);
      navigate('/admin/dashboard');
    }, 1000);
  };

  const addContentParagraph = () => {
    setFormData(prev => ({
      ...prev,
      content: [...prev.content, '']
    }));
  };

  const addSection = () => {
    setFormData(prev => ({
      ...prev,
      sections: [...prev.sections, { heading: '', content: [''] }]
    }));
  };

  const addSectionContent = (sectionIndex: number) => {
    setFormData(prev => {
      const newSections = [...prev.sections];
      newSections[sectionIndex].content.push('');
      return { ...prev, sections: newSections };
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 border-b border-border/30 bg-card/95 backdrop-blur-xl"
      >
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <motion.button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 btn-primary-gradient px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Save className="w-4 h-4" />
            {saving ? 'Saving...' : 'Save Blog'}
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {error && (
          <motion.div
            className="mb-6 bg-destructive/10 border border-destructive/30 text-destructive px-6 py-4 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        )}

        {/* Basic Info */}
        <motion.div
          className="bg-card border border-border/50 rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Basic Information</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter blog title"
                className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Author *</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                  placeholder="Author name"
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Date *</label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  placeholder="Feb 10, 2026"
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all"
                >
                  <option value="">Select category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Read Time *</label>
                <input
                  type="text"
                  value={formData.readTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
                  placeholder="e.g., 5 min read"
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Excerpt *</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Brief summary of the blog post"
                rows={3}
                className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-card border border-border/50 rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Main Content</h2>

          <div className="space-y-4 mb-4">
            {formData.content.map((para, idx) => (
              <textarea
                key={idx}
                value={para}
                onChange={(e) => {
                  const newContent = [...formData.content];
                  newContent[idx] = e.target.value;
                  setFormData(prev => ({ ...prev, content: newContent }));
                }}
                placeholder={`Paragraph ${idx + 1}`}
                rows={3}
                className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
              />
            ))}
          </div>
          <button
            onClick={addContentParagraph}
            className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
          >
            + Add Paragraph
          </button>
        </motion.div>

        {/* Sections */}
        <motion.div
          className="bg-card border border-border/50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Sections</h2>

          <div className="space-y-8">
            {formData.sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="pb-8 border-b border-border/30 last:border-0 last:pb-0">
                <input
                  type="text"
                  value={section.heading}
                  onChange={(e) => {
                    const newSections = [...formData.sections];
                    newSections[sectionIdx].heading = e.target.value;
                    setFormData(prev => ({ ...prev, sections: newSections }));
                  }}
                  placeholder={`Section ${sectionIdx + 1} Heading`}
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all font-bold mb-4"
                />

                <div className="space-y-3 ml-4">
                  {section.content.map((content, contentIdx) => (
                    <textarea
                      key={contentIdx}
                      value={content}
                      onChange={(e) => {
                        const newSections = [...formData.sections];
                        newSections[sectionIdx].content[contentIdx] = e.target.value;
                        setFormData(prev => ({ ...prev, sections: newSections }));
                      }}
                      placeholder={`Content ${contentIdx + 1}`}
                      rows={2}
                      className="w-full px-4 py-2 bg-background border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all resize-none text-sm"
                    />
                  ))}
                  <button
                    onClick={() => addSectionContent(sectionIdx)}
                    className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                  >
                    + Add Content
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addSection}
            className="mt-6 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
          >
            + Add Section
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default AdminBlogEditor;
