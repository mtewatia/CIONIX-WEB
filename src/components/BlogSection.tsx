import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "How Multi-Sector Companies Are Shaping the Future of Business",
    excerpt: "Discover why diversified enterprises like CIONIX are outperforming single-sector companies in today's dynamic market.",
    category: "Business",
    date: "Feb 15, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  },
  {
    title: "Medical Billing in the USA: What Doctors Need to Know in 2026",
    excerpt: "A comprehensive guide to optimizing revenue cycles, reducing claim denials, and choosing the right billing partner.",
    category: "Healthcare",
    date: "Feb 10, 2026",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
  },
  {
    title: "GEO vs SEO: Why Generative Engine Optimization Is the Future",
    excerpt: "Learn how AI-powered search is changing the game and why your business needs to optimize for generative platforms.",
    category: "IT & Marketing",
    date: "Feb 5, 2026",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background" id="blog">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-ryse-orange/10 text-ryse-orange rounded-full text-sm font-medium mb-4">
            Insights & News
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest From Nexorah Global
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with insights across all our sectors — from technology and healthcare to real estate and media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group card-ryse rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-ryse-orange/10 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-ryse-orange text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-ryse-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-ryse-orange font-medium text-sm group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-ryse-orange text-white font-semibold rounded-full hover:bg-ryse-orange/90 transition-all duration-300 hover:shadow-lg hover:shadow-ryse-orange/30">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
