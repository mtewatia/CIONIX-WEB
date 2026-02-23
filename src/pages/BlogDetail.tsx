import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPosts = {
  "geo-future-of-search": {
    title: "GEO: The Future of Search in an AI-First World",
    excerpt: "How generative engine optimization is revolutionizing the way brands get discovered online.",
    category: "GEO",
    author: "Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    content: `
      <p>The search landscape is undergoing its most significant transformation since the introduction of mobile-first indexing. With AI-powered platforms like ChatGPT, Google's AI Overviews, and Perplexity becoming primary discovery tools for millions of users, a new discipline has emerged: Generative Engine Optimization (GEO).</p>

      <h2>What is GEO?</h2>
      <p>Generative Engine Optimization (GEO) is the practice of optimizing your digital content to appear prominently in AI-generated responses. Unlike traditional SEO, which focuses on ranking in search engine results pages (SERPs), GEO ensures your brand and content are cited, referenced, and recommended by AI systems.</p>

      <h2>Why GEO Matters Now</h2>
      <p>According to recent studies, over 60% of Gen Z users now prefer AI chatbots over traditional search engines for information gathering. This shift represents a fundamental change in how information is discovered and consumed online.</p>

      <blockquote>"The brands that understand and adapt to GEO early will have a significant competitive advantage in the AI-first future." — Industry Analyst</blockquote>

      <h2>Key GEO Strategies</h2>
      <p>Here are the foundational strategies for optimizing your presence in AI-generated content:</p>

      <h3>1. Entity Optimization</h3>
      <p>AI systems rely heavily on knowledge graphs and entity relationships. Ensuring your brand, products, and key personnel are properly represented in knowledge bases like Wikidata and Google's Knowledge Graph is crucial.</p>

      <h3>2. Authoritative Content Creation</h3>
      <p>AI models are trained on vast amounts of web content. Creating comprehensive, authoritative content that establishes your expertise helps AI systems recognize you as a reliable source.</p>

      <h3>3. Citation Building</h3>
      <p>Similar to link building in SEO, citation building in GEO focuses on getting your brand mentioned across authoritative sources that AI models use for training and retrieval.</p>

      <h2>The Future of Search</h2>
      <p>As AI continues to evolve, the line between traditional search and AI-powered discovery will blur. Brands that invest in GEO today are positioning themselves for success in this new paradigm.</p>

      <p>The key is to start now—building the foundation of entity recognition, authoritative content, and strategic citations that will power your visibility in the AI-first future.</p>
    `
  },
  "content-strategy-2025": {
    title: "Content Strategy for 2025: What's Changing",
    excerpt: "The key trends shaping content marketing and how to stay ahead of the curve.",
    category: "Content",
    author: "Marcus Johnson",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop",
    content: `
      <p>Content marketing continues to evolve at a rapid pace. As we approach 2025, several key trends are reshaping how brands create, distribute, and measure content success.</p>

      <h2>The Rise of AI-Assisted Content</h2>
      <p>AI tools are becoming integral to content creation workflows. However, the most successful brands use AI to augment human creativity, not replace it. The winning formula combines AI efficiency with human insight and emotional intelligence.</p>

      <h2>Video-First Strategies</h2>
      <p>Video content continues to dominate engagement metrics across all platforms. Short-form video, in particular, has become essential for reaching younger audiences and driving social engagement.</p>

      <h2>Personalization at Scale</h2>
      <p>Advanced segmentation and dynamic content delivery enable brands to provide personalized experiences to every user without sacrificing efficiency.</p>

      <p>The brands that thrive in 2025 will be those that embrace these changes while maintaining their authentic voice and providing genuine value to their audiences.</p>
    `
  }
};

const BlogDetail = () => {
  const { blogId } = useParams();
  const post = blogPosts[blogId as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-custom section-padding text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
      </div>

      <article className="container-custom -mt-32 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Article Header */}
          <div className="bg-background rounded-2xl p-8 shadow-xl mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <span className="text-primary font-semibold">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Share:</span>
                <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Facebook className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-16
              prose-headings:font-heading prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
              prose-strong:text-foreground
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="card-ryse p-8 text-center mb-16">
            <h3 className="text-2xl font-bold font-heading mb-4">
              Ready to Transform Your Growth Strategy?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help you implement these strategies.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
