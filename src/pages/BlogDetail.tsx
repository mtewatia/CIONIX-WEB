import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogById, sectorBadgeColors } from "@/data/blogPosts";

const BlogDetail = () => {
  const { blogId } = useParams();
  const post = getBlogById(blogId || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-custom section-padding text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild><Link to="/blog">Back to Blog</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="relative h-[50vh] min-h-[400px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
      </div>

      <article className="container-custom -mt-32 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-xl mb-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-semibold">{post.category}</span>
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${sectorBadgeColors[post.sector]}`}>{post.sectorLabel}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">{post.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Share:</span>
                <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"><Twitter className="h-4 w-4" /></button>
                <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"><Linkedin className="h-4 w-4" /></button>
                <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"><Facebook className="h-4 w-4" /></button>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-16 prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic prose-strong:text-foreground" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="card-ryse p-8 text-center mb-16">
            <h3 className="text-2xl font-bold font-heading mb-4">Ready to Transform Your Growth Strategy?</h3>
            <p className="text-muted-foreground mb-6">Let's discuss how we can help you implement these strategies.</p>
            <Button size="lg" asChild><a href="mailto:info@cionix.com">Get in Touch</a></Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
