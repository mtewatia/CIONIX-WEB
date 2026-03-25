import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

interface SectorHeaderProps {
  sectorName: string;
  sectorColor: string;
  navLinks: NavItem[];
  contactHref: string;
  homePath: string;
  headerBg?: string;
}

const SectorHeader = ({ sectorName, sectorColor, navLinks, contactHref, homePath, headerBg }: SectorHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const bgStyle = headerBg
    ? `${headerBg} ${isScrolled ? "shadow-lg" : ""}`
    : isScrolled ? "bg-secondary shadow-lg" : "bg-secondary/90 backdrop-blur-sm";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgStyle} ${isScrolled ? "py-3" : "py-5"}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to={homePath} className="flex items-center gap-2">
            <img src={logoWhite} alt="CIONIX" className="h-7" />
            <span className="text-sm font-medium px-2 py-0.5 rounded-full bg-white/20 text-white">
              {sectorName}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    className={`text-sm font-semibold transition-colors duration-300 hover:text-primary text-white/80 flex items-center gap-1 ${
                      location.pathname.includes("/services") ? "text-primary" : ""
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`h-3 w-3 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-3 w-56 bg-background border border-border rounded-xl shadow-xl py-2 z-50">
                      <Link
                        to={link.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        All Services
                      </Link>
                      <div className="border-t border-border my-1" />
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-semibold transition-colors duration-300 hover:text-primary text-white/80 ${
                    location.pathname === link.href ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/" className="text-sm font-medium transition-colors text-white/70 hover:text-white">
              ← Main Site
            </Link>
            <Button size="default" asChild>
              <Link to={contactHref}>Book a Call</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 py-6 bg-white rounded-xl shadow-xl">
            <div className="flex flex-col gap-4 px-6">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name}>
                    <Link to={link.href} className="text-base font-semibold text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.name}
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {link.children.map((child) => (
                        <Link key={child.name} to={child.href} className="block text-sm text-muted-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={link.name} to={link.href} className="text-base font-semibold text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                )
              )}
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
