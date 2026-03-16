import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

interface FooterLink {
  name: string;
  href: string;
}

interface SectorFooterProps {
  sectorName: string;
  description: string;
  serviceLinks: FooterLink[];
  quickLinks: FooterLink[];
  email: string;
  phone: string;
  location: string;
}

const SectorFooter = ({ sectorName, description, serviceLinks, quickLinks, email, phone, location: loc }: SectorFooterProps) => {
  return (
    <footer className="bg-ryse-dark text-white">
      <div className="container-custom">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="font-heading font-bold text-xl mb-4 block">
              <span className="text-white">CIONIX</span>
              <span className="text-primary ml-2 text-sm">{sectorName}</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{description}</p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-5">Contact</h4>
            <div className="space-y-4">
              <a href={`mailto:${email}`} className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">{email}</span>
              </a>
              <a href={`tel:${phone}`} className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">{phone}</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">{loc}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} CIONIX Innovations Services LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-sm text-white/50 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-white/50 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SectorFooter;
