import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { getBlogsBySector } from "@/data/blogPosts";

const navLinks = [
  { name: "Home", href: "/technologies" },
  { name: "Services", href: "/technologies/services" },
  { name: "Blog", href: "/technologies/blog" },
];

const TechnologiesBlog = () => {
  const posts = getBlogsBySector("technologies");
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <SectorHeader sectorName="Technologies" sectorColor="from-primary to-orange-400" navLinks={navLinks} contactHref="/technologies/contact" homePath="/technologies" />

      <section className="pt-32 pb-16 bg-gradient-to-br from-ryse-dark via-ryse-dark-light to-ryse-dark text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Technologies Blog</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Insights on web development, GEO, mobile apps, AI, and digital transformation.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {featured && (
            <Link to={`/technologies/blog/${featured.id}`} className="card-ryse overflow-hidden block mb-12 group">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-primary text-sm font-semibold mb-3">{featured.category} • Featured</span>
                  <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">{featured.title}</h2>
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
              <Link key={post.id} to={`/technologies/blog/${post.id}`} className="card-ryse overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-semibold">{post.category}</span>
                  <h3 className="text-lg font-bold font-heading mt-2 mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
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

      <SectorFooter sectorName="Technologies" description="CIONIX Technologies delivers cutting-edge web, mobile, AI, and digital marketing solutions." serviceLinks={[{ name: "Web Development", href: "/technologies/services" }, { name: "GEO Optimization", href: "/technologies/services" }]} quickLinks={[{ name: "Home", href: "/technologies" }, { name: "Blog", href: "/technologies/blog" }, { name: "Contact", href: "/technologies/contact" }, { name: "Main Site", href: "/" }]} email="tech@cionix.com" phone="+1 (234) 567-890" location="San Francisco, CA" />
    </div>
  );
};

export default TechnologiesBlog;
