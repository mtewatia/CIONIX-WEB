import { Users, Target, Award, Rocket, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/layout/PageHeader";

const stats = [
  { number: "200+", label: "Clients Worldwide" },
  { number: "4", label: "Industry Sectors" },
  { number: "10+", label: "Countries Served" },
  { number: "50+", label: "Team Members" }
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by the impact we create for our clients, not vanity metrics."
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We stay ahead of trends, leveraging AI and emerging technologies to drive growth."
  },
  {
    icon: Heart,
    title: "Partnership Mindset",
    description: "We work as an extension of your team, fully invested in your success."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Our diverse team brings worldwide insights to every strategy we craft."
  }
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Marcus Johnson",
    role: "Chief Growth Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    name: "David Kim",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        title="About Us"
        subtitle="A multi-sector enterprise delivering excellence across Real Estate, IT, Media, and Healthcare."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" }
        ]}
      />

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">Our Mission</p>
              <h2 className="section-title text-foreground">
                Driving Excellence Across <span className="gradient-text">Multiple Industries</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nexorah Global was founded with a bold vision: to build a multi-sector enterprise 
                that delivers world-class solutions across Real Estate, IT Services, Video Production 
                & Entertainment, and Healthcare — each with its own dedicated team and expertise.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our approach is simple — one company, multiple sectors, unified excellence. 
                Each division operates with specialized knowledge while benefiting from the 
                synergy of a global enterprise.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card-ryse p-6 text-center">
                  <div className="text-4xl font-bold font-heading gradient-text mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-subtitle">Our Values</p>
            <h2 className="section-title text-foreground">
              What Drives <span className="gradient-text">Everything We Do</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-ryse p-6 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-subtitle">Our Team</p>
            <h2 className="section-title text-foreground">
              Meet the <span className="gradient-text">Leadership Team</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="card-ryse p-6 text-center group">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-transparent group-hover:ring-primary/20 transition-all">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold font-heading">{member.name}</h3>
                <p className="text-primary text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our <span className="gradient-text">Success Stories</span>?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your growth goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
