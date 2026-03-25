import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";

interface SectorBlogSectionProps {
  posts: BlogPost[];
  sectorPath: string;
  accentColor: string; // gradient class
  accentText: string; // text color class
  bgClass?: string; // custom background class
  cardClass?: string; // custom card class
  textClass?: string; // custom text classes
}

const SectorBlogSection = ({ posts, sectorPath, accentColor, accentText, bgClass, cardClass, textClass }: SectorBlogSectionProps) => {
  const displayPosts = posts.slice(0, 3);

  return (
    <section className={`section-padding ${bgClass || "bg-muted/50"}`}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-subtitle">Insights & Articles</p>
          <h2 className={`section-title ${textClass ? "text-white" : "text-foreground"}`}>
            Latest From Our <span className={`bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>Blog</span>
          </h2>
          <p className={`text-lg mt-4 ${textClass ? "text-white/50" : "text-muted-foreground"}`}>
            Stay informed with the latest insights, trends, and best practices from our experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <Link
              key={post.id}
              to={`${sectorPath}/blog/${post.id}`}
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
                <span className={`text-sm font-semibold ${accentText}`}>{post.category}</span>
                <h3 className="text-lg font-bold font-heading mt-2 mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                  <span className="mx-1">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to={`${sectorPath}/blog`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-all"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectorBlogSection;
