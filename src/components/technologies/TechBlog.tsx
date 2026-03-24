import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "GEO: The Future of AI Search",
    excerpt: "How Generative Engine Optimization is reshaping digital visibility and why businesses need to adapt now.",
    tag: "GEO",
    tagColor: "from-primary to-ryse-orange-light",
  },
  {
    title: "Web App Architecture in 2026",
    excerpt: "Modern patterns for building scalable, maintainable web applications — from micro-frontends to edge computing.",
    tag: "Engineering",
    tagColor: "from-purple-500 to-blue-500",
  },
  {
    title: "Flutter vs React Native",
    excerpt: "An honest comparison of the two leading cross-platform frameworks — performance, DX, and real-world trade-offs.",
    tag: "Mobile",
    tagColor: "from-emerald-500 to-teal-400",
  },
];

const TechBlog = () => (
  <section className="relative py-24 md:py-32 bg-[#07080f]">
    <div className="container-custom">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-purple-400 text-sm uppercase tracking-widest font-semibold mb-4">Insights</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
            Latest from the <span className="bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-transparent">Lab</span>
          </h2>
        </div>
        <Link to="/technologies/blog" className="hidden md:flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
          View All <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <article
            key={i}
            className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 hover:border-purple-500/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
          >
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${post.tagColor} text-white mb-5`}>
              {post.tag}
            </span>
            <h3 className="text-lg font-bold font-heading text-white mb-3 group-hover:text-purple-300 transition-colors">
              {post.title}
            </h3>
            <p className="text-white/35 text-sm leading-relaxed mb-5">{post.excerpt}</p>
            <span className="text-purple-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Read More <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </article>
        ))}
      </div>

      <div className="md:hidden text-center mt-8">
        <Link to="/technologies/blog" className="text-purple-400 text-sm font-medium">
          View All Posts →
        </Link>
      </div>
    </div>
  </section>
);

export default TechBlog;
