import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Working with this team transformed how we approach digital growth. Their GEO strategies put us ahead of competitors we'd been chasing for years. The results speak for themselves.",
    name: "Sarah Chen",
    role: "CEO & Founder",
    company: "TechVenture Labs",
    rating: 5,
  },
  {
    quote: "The video content they produced didn't just look amazing — it converted. We saw a 300% increase in engagement within the first month. They truly understand what moves audiences.",
    name: "Marcus Johnson",
    role: "Head of Marketing",
    company: "NovaBrand Co.",
    rating: 5,
  },
  {
    quote: "From strategy to execution, they delivered beyond expectations. Our podcast grew from 500 to 50,000 listeners in six months. This team doesn't just talk results — they deliver them.",
    name: "Elena Rodriguez",
    role: "Founder",
    company: "The Growth Studio",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it — hear from the brands we've helped grow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-white group relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center shadow-lg">
                <Quote className="h-6 w-6 text-card" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/90 leading-relaxed mb-8 text-base">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-lg font-bold font-heading text-card">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold font-heading text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
