import { useState } from "react";
import { Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { useBlogPosts, formatDate } from "@/hooks/useBlogPosts";

const sectorBadgeColors: Record<string, string> = {
  technologies: "bg-primary/10 text-primary",
  media: "bg-purple-500/10 text-purple-600",
  medline: "bg-emerald-500/10 text-emerald-600",
  realty: "bg-blue-500/10 text-blue-600",
};

const sectorFilters = [
  { key: "all", label: "All Sectors" },
  { key: "technologies", label: "Technologies" },
  { key: "media", label: "Media" },
  { key: "medline", label: "Medline" },
  { key: "realty", label: "Realty" },
];

const Blog = () => {
  const [activeSector, setActiveSector] = useState("all");
  const { data: allPosts = [], isLoading } = useBlogPosts();

  const filtered = activeSector === "all"
    ? allPosts
    : allPosts.filter((p) => p.sector === activeSector);

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => p !== featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHeader
        title="Blog"
        subtitle="Insights and strategies from experts across all CIONIX sectors."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 mb-12">
            {sectorFilters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveSector(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSector === filter.key
                    ? "bg-primary text-white"
                    : "bg-muted hover:bg-primary/10 text-foreground"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {isLoading ? (
            <p className="text-center text-muted-foreground py-12">Loading posts...</p>
          ) : filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No posts yet. Check back soon!</p>
          ) : (
            <>
              {featured && (
                <Link to={`/blog/${featured.slug}`} className="card-ryse overflow-hidden block mb-12 group">
                  <div className="grid lg:grid-cols-2">
                    <div className="aspect-video lg:aspect-auto overflow-hidden">
                      <img src={featured.image || "/placeholder.svg"} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-primary text-sm font-semibold">{featured.category}</span>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${sectorBadgeColors[featured.sector] || ""}`}>{featured.sector_label}</span>
                        <span className="text-muted-foreground text-sm">• Featured</span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">{featured.title}</h2>
                      <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><User className="h-4 w-4" />{featured.author}</span>
                        <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{formatDate(featured.created_at)}</span>
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{featured.read_time}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="card-ryse overflow-hidden group">
                    <div className="aspect-video overflow-hidden">
                      <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary text-sm font-semibold">{post.category}</span>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${sectorBadgeColors[post.sector] || ""}`}>{post.sector_label}</span>
                      </div>
                      <h3 className="text-lg font-bold font-heading mt-1 mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{formatDate(post.created_at)}</span><span>{post.read_time}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
