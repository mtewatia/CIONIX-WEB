import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import { Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";
import { getBlogsBySector } from "@/data/blogPosts";

const navLinks = [
  { name: "Home", href: "/media" },
  {
    name: "Services",
    href: "/media/services",
    children: [
      { name: "YouTube Automation", href: "/media/services" },
      { name: "Video Production", href: "/media/services" },
      { name: "Content Production", href: "/media/services" },
      { name: "Podcast Production", href: "/media/services" },
    ],
  },
  { name: "Blog", href: "/media/blog" },
];

const MediaBlog = () => {
  const posts = getBlogsBySector("media");
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <SectorHeader sectorName="Media" sectorColor="from-purple-500 to-pink-500" navLinks={navLinks} contactHref="/media/services" homePath="/media" />

      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Media Blog</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Tips and strategies for YouTube, video production, podcasting, and digital media.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {featured && (
            <Link to={`/media/blog/${featured.id}`} className="card-ryse overflow-hidden block mb-12 group">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-purple-600 text-sm font-semibold mb-3">{featured.category} • Featured</span>
                  <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4 group-hover:text-purple-600 transition-colors">{featured.title}</h2>
                  <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="h-4 w-4" />{featured.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{featured.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.id} to={`/media/blog/${post.id}`} className="card-ryse overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-purple-600 text-sm font-semibold">{post.category}</span>
                  <h3 className="text-lg font-bold font-heading mt-2 mb-3 group-hover:text-purple-600 transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.date}</span><span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectorFooter sectorName="Media" description="CIONIX Media delivers end-to-end media production and YouTube automation services." serviceLinks={[{ name: "YouTube Automation", href: "/media/services" }, { name: "Video Production", href: "/media/services" }]} quickLinks={[{ name: "Home", href: "/media" }, { name: "Blog", href: "/media/blog" }, { name: "Main Site", href: "/" }]} email="media@cionix.com" phone="+1 (555) 234-5678" location="Dubai, UAE" />
    </div>
  );
};

export default MediaBlog;
