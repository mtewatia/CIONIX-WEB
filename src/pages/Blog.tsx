import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/layout/PageHeader";

const blogPosts = [
  {
    id: "geo-future-of-search",
    title: "GEO: The Future of Search in an AI-First World",
    excerpt: "How generative engine optimization is revolutionizing the way brands get discovered online.",
    category: "GEO",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "content-strategy-2025",
    title: "Content Strategy for 2025: What's Changing",
    excerpt: "The key trends shaping content marketing and how to stay ahead of the curve.",
    category: "Content",
    author: "Marcus Johnson",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "social-media-roi",
    title: "Maximizing Social Media ROI: A Data-Driven Approach",
    excerpt: "Learn how to measure and optimize your social media performance for real business results.",
    category: "Social Media",
    author: "Elena Rodriguez",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "email-automation-guide",
    title: "The Complete Guide to Email Marketing Automation",
    excerpt: "From welcome sequences to win-back campaigns, master the art of automated email marketing.",
    category: "Email",
    author: "David Kim",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "video-marketing-trends",
    title: "Video Marketing Trends You Can't Ignore",
    excerpt: "Short-form, live streaming, and interactive video—which formats drive the most engagement?",
    category: "Video",
    author: "Sarah Chen",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "ux-conversion-optimization",
    title: "UX Design Principles That Boost Conversions",
    excerpt: "How small design changes can lead to significant improvements in your conversion rates.",
    category: "Design",
    author: "Marcus Johnson",
    date: "Dec 2, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    featured: false
  }
];

const categories = ["All", "GEO", "Content", "Social Media", "Email", "Video", "Design"];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        title="Blog"
        subtitle="Insights, strategies, and trends from our growth experts."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" }
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-white"
                    : "bg-muted hover:bg-primary/10 text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Link 
              to={`/blog/${featuredPost.id}`}
              className="card-ryse overflow-hidden block mb-12 group"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-primary text-sm font-semibold mb-3">
                    {featuredPost.category} • Featured
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.id}`}
                className="card-ryse overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-semibold">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold font-heading mt-2 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
