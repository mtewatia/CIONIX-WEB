import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { allBlogPosts, sectorBadgeColors } from "@/data/blogPosts";

const BlogSection = () => {
  const displayPosts = allBlogPosts.slice(0, 6);

  return (
    <section className="py-20 md:py-32 bg-background" id="blog">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-ryse-orange/10 text-ryse-orange rounded-full text-sm font-medium mb-4">
            Insights & News
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest From All Sectors
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with insights across all our sectors — from technology and healthcare to real estate and media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group card-ryse rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-ryse-orange/10 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-ryse-orange text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${sectorBadgeColors[post.sector]}`}>
                    {post.sectorLabel}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span className="mx-1">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-ryse-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-ryse-orange font-medium text-sm">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ryse-orange text-white font-semibold rounded-full hover:bg-ryse-orange/90 transition-all duration-300 hover:shadow-lg hover:shadow-ryse-orange/30"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
