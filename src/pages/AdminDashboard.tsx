import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, LogOut, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  readTime: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    if (!localStorage.getItem('adminAuthenticated')) {
      navigate('/admin/login');
      return;
    }

    // Load blogs from localStorage
    const savedBlogs = localStorage.getItem('adminBlogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      // Load default blogs
      setBlogs([
        {
          id: 'synthetic-vs-mineral-oils',
          title: 'Synthetic vs Mineral Oils: Which is Right for Your Vehicle?',
          category: 'Engine Oils',
          author: 'John Smith',
          date: 'Feb 10, 2026',
          excerpt: 'Discover the key differences between synthetic and mineral oils...',
          readTime: '5 min read'
        },
        {
          id: 'motorcycle-maintenance',
          title: 'Complete Guide to Motorcycle Oil Maintenance',
          category: 'Motorcycle Oils',
          author: 'Sarah Johnson',
          date: 'Feb 08, 2026',
          excerpt: 'Learn the essentials of keeping your motorcycle running smoothly...',
          readTime: '6 min read'
        }
      ]);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/admin/login');
  };

  const handleDelete = (id: string) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('adminBlogs', JSON.stringify(updatedBlogs));
    setDeleteConfirm(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 border-b border-border/30 bg-card/95 backdrop-blur-xl"
      >
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-display font-bold text-white">P</span>
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground">PLATIINUM Admin</h1>
              <p className="text-xs text-muted-foreground">Blog Management</p>
            </div>
          </div>
          <motion.button
            onClick={handleLogout}
            className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <h2 className="font-display text-4xl font-bold text-foreground mb-2">Blog Management</h2>
          <p className="text-muted-foreground">Create, edit, and manage blog posts</p>
        </div>

        {/* Action Bar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to="/admin/editor"
            className="inline-flex items-center gap-2 btn-primary-gradient px-6 py-3 rounded-lg font-semibold"
          >
            <Plus className="w-4 h-4" />
            New Blog Post
          </Link>
        </motion.div>

        {/* Blogs List */}
        <div className="grid gap-6">
          {blogs.length === 0 ? (
            <motion.div
              className="text-center py-16 bg-card border border-border/50 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground mb-4">No blog posts yet</p>
              <Link
                to="/admin/editor"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Create your first blog post
              </Link>
            </motion.div>
          ) : (
            blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        {blog.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/blogs/${blog.id}`}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      title="View"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <Link
                      to={`/admin/editor/${blog.id}`}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => setDeleteConfirm(blog.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Delete Confirmation */}
                {deleteConfirm === blog.id && (
                  <motion.div
                    className="mt-4 pt-4 border-t border-border/30 flex items-center justify-between gap-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    <p className="text-sm text-destructive">Delete this blog post?</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="px-4 py-2 bg-destructive/10 text-destructive rounded-lg text-sm font-medium hover:bg-destructive/20 transition-colors"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))
          )}
        </div>

        {/* Stats */}
        {blogs.length > 0 && (
          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
              <p className="text-muted-foreground text-sm mb-2">Total Posts</p>
              <p className="font-display text-4xl font-bold text-primary">{blogs.length}</p>
            </div>
            <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
              <p className="text-muted-foreground text-sm mb-2">Categories</p>
              <p className="font-display text-4xl font-bold text-primary">
                {new Set(blogs.map(b => b.category)).size}
              </p>
            </div>
            <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
              <p className="text-muted-foreground text-sm mb-2">Authors</p>
              <p className="font-display text-4xl font-bold text-primary">
                {new Set(blogs.map(b => b.author)).size}
              </p>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
