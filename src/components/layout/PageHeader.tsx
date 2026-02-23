import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

const PageHeader = ({ title, subtitle, breadcrumbs }: PageHeaderProps) => {
  return (
    <section className="hero-section pt-32 pb-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {crumb.href ? (
                <Link 
                  to={crumb.href} 
                  className="hover:text-primary transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="h-4 w-4" />
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/70 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Curve divider */}
      <div className="curve-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z" className="shape-fill" />
        </svg>
      </div>
    </section>
  );
};

export default PageHeader;
