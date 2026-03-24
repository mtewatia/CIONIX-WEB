import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  href: string;
}

interface SectorHeaderProps {
  sectorName: string;
  sectorColor: string; // tailwind gradient classes
  navLinks: NavItem[];
  contactHref: string;
  homePath: string;
}

const SectorHeader = ({ sectorName, sectorColor, navLinks, contactHref, homePath }: SectorHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-secondary shadow-lg py-3" : "bg-secondary/90 backdrop-blur-sm py-5"
    }`}>
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to={homePath} className="font-heading font-bold text-xl flex items-center gap-2">
            <span className={isScrolled ? "text-ryse-dark" : "text-white"}>CIONIX</span>
            <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${
              isScrolled ? "bg-primary/10 text-primary" : "bg-white/20 text-white"
            }`}>
              {sectorName}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold transition-colors duration-300 hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                } ${location.pathname === link.href ? "text-primary" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/" className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"
            }`}>
              ← Main Site
            </Link>
            <Button size="default" asChild>
              <Link to={contactHref}>Get a Quote</Link>
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 py-6 bg-white rounded-xl shadow-xl">
            <div className="flex flex-col gap-4 px-6">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-base font-semibold text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <Link to="/" className="text-sm text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                ← Back to Main Site
              </Link>
              <Button size="lg" className="mt-4" asChild>
                <Link to={contactHref} onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default SectorHeader;
