import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { services } from "@/data/services";
import logoWhite from "@/assets/logo-white.png";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-ryse-dark text-white">
      <div className="container-custom">
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="mb-6 block">
              <img src={logoWhite} alt="CIONIX" className="h-8" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              CIONIX Innovations Services LLC — a multi-sector enterprise delivering excellence across Real Estate, IT, Media & Entertainment, and Healthcare industries.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-ryse-orange hover:text-white transition-all">
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-heading font-bold text-lg mb-6">Our Sectors</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-sm text-white/60 hover:text-ryse-orange transition-colors">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Pricing", href: "/pricing" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-white/60 hover:text-ryse-orange transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:hello@cionix.com" className="flex items-center gap-3 text-white/60 hover:text-ryse-orange transition-colors">
                <div className="w-10 h-10 rounded-full bg-ryse-orange/20 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-ryse-orange" />
                </div>
                <span className="text-sm">hello@cionix.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/60 hover:text-ryse-orange transition-colors">
                <div className="w-10 h-10 rounded-full bg-ryse-orange/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-ryse-orange" />
                </div>
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <div className="w-10 h-10 rounded-full bg-ryse-orange/20 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-ryse-orange" />
                </div>
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} CIONIX Innovations Services LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-sm text-white/50 hover:text-ryse-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-white/50 hover:text-ryse-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
