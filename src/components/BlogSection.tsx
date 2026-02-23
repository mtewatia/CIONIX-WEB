import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "10 SEO Strategies That Will Dominate in 2025",
    excerpt: "Discover the latest SEO trends and techniques that will help your business rank higher and drive more organic traffic.",
    category: "SEO",
    date: "Dec 28, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  },
  {
    title: "The Ultimate Guide to Social Media Marketing",
    excerpt: "Learn how to create engaging content and build a loyal following across all major social media platforms.",
    category: "Social Media",
    date: "Dec 25, 2024",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
  },
  {
    title: "How AI is Transforming Digital Marketing",
    excerpt: "Explore the revolutionary impact of artificial intelligence on marketing strategies and customer engagement.",
    category: "Technology",
    date: "Dec 22, 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background" id="blog">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-ryse-orange/10 text-ryse-orange rounded-full text-sm font-medium mb-4">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What's Latest
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in digital marketing
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group card-ryse rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-ryse-orange/10 hover:-translate-y-2"
            >
              {/* Image */}
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

              {/* Content */}
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

        {/* View All Button */}
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
