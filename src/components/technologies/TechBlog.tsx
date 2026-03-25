import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";

const TechBlog = () => {
  const { data: posts = [] } = useBlogPosts("technologies");
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="relative py-24 md:py-32 bg-secondary">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-subtitle">Insights</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
              Latest from the <span className="gradient-text">Lab</span>
            </h2>
          </div>
          <Link to="/technologies/blog" className="hidden md:flex items-center gap-2 text-primary hover:text-ryse-orange-light text-sm font-medium transition-colors">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.length > 0 ? latestPosts.map((post) => (
            <Link
              key={post.id}
              to={`/technologies/blog/${post.slug}`}
              className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
            >
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full gradient-orange text-white mb-5">
                {post.category}
              </span>
              <h3 className="text-lg font-bold font-heading text-white mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed mb-5">{post.excerpt}</p>
              <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          )) : (
            <p className="text-white/50 col-span-3 text-center py-8">No posts yet.</p>
          )}
        </div>

        <div className="md:hidden text-center mt-8">
          <Link to="/technologies/blog" className="text-primary text-sm font-medium">
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechBlog;
