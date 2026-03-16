import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sectors", href: "#services", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const sectorLinks = [
  { name: "CIONIX Technologies", href: "/technologies", description: "IT Services & Digital Solutions" },
  { name: "CIONIX Media", href: "/media", description: "Video Production & Entertainment" },
  { name: "CIONIX Medline", href: "/medline", description: "Healthcare & Medical Billing" },
  { name: "CIONIX Realty", href: "/realty", description: "Real Estate Consultancy" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-heading font-bold text-2xl">
            <span className={isScrolled ? "text-ryse-dark" : "text-white"}>CIONIX</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                {link.href.startsWith("/") ? (
                  <Link
                    to={link.href}
                    className={`text-sm font-semibold transition-colors duration-300 hover:text-ryse-orange flex items-center gap-1 ${
                      isScrolled ? "text-foreground" : "text-white"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className={`text-sm font-semibold transition-colors duration-300 hover:text-ryse-orange flex items-center gap-1 ${
                      isScrolled ? "text-foreground" : "text-white"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </a>
                )}

                {link.hasDropdown && isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[360px]">
                    <div className="bg-white rounded-2xl shadow-2xl p-4 space-y-1">
                      {sectorLinks.map((sector) => (
                        <Link
                          key={sector.href}
                          to={sector.href}
                          className="flex flex-col p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                        >
                          <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                            {sector.name}
                          </p>
                          <p className="text-xs text-muted-foreground">{sector.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button size="default" asChild>
              <Link to="/contact">Get Started</Link>
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
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link key={link.name} to={link.href} className="text-base font-semibold text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                ) : (
                  <a key={link.name} href={link.href} className="text-base font-semibold text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                )
              )}
              <Button size="lg" className="mt-4" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
