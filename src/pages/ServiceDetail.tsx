import { useParams, Navigate, Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = services.filter(s => s.id !== serviceId).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: service.shortTitle }
        ]}
      />

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Service Image */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 mb-8">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full max-w-md mx-auto"
                />
              </div>

              {/* Full Description */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold font-heading mb-6">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold font-heading mb-6">Key Benefits</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="card-ryse p-6"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white font-bold mb-4">
                        {index + 1}
                      </div>
                      <p className="text-foreground font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="card-ryse p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold font-heading mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how {service.shortTitle} can accelerate your growth.
                </p>
                <Button className="w-full mb-3" size="lg" asChild>
                  <a href="mailto:info@cionix.com">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>

              {/* Other Services */}
              <div className="card-ryse p-6">
                <h3 className="text-lg font-bold font-heading mb-4">Other Services</h3>
                <div className="space-y-4">
                  {otherServices.map((s) => (
                    <Link 
                      key={s.id}
                      to={`/services/${s.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                    >
                      <img 
                        src={s.image} 
                        alt={s.title}
                        className="w-12 h-12 object-contain"
                      />
                      <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                        {s.shortTitle}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link 
                  to="/#services"
                  className="block mt-4 text-center text-primary hover:underline text-sm font-medium"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your <span className="gradient-text">Growth Strategy</span>?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Join hundreds of companies that have accelerated their growth with our proven methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:info@cionix.com">Start Your Journey</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
              <Link to="/pricing">Explore Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
