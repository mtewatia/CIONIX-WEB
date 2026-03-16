import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "CIONIX handled our property consulting and built our investment portal — all under one roof. The seamless coordination between teams saved us months of work.",
    name: "Ahmed Al-Rashid",
    role: "CEO",
    company: "Gulf Properties Group",
    rating: 5,
  },
  {
    quote: "Their medical billing team transformed our revenue cycle. We went from 60% claim acceptance to over 95%. The healthcare division at CIONIX truly understands the US medical system.",
    name: "Dr. Sarah Mitchell",
    role: "Practice Owner",
    company: "Midwest Family Health",
    rating: 5,
  },
  {
    quote: "From web development to video production, CIONIX delivered everything we needed to launch our brand. Their IT and media teams work like a well-oiled machine.",
    name: "James O'Brien",
    role: "Founder",
    company: "TechWave Studios",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title text-foreground">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-ryse-orange hover:text-white transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-ryse-orange hover:text-white transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="card-ryse p-8 md:p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-ryse-orange to-ryse-orange-light flex items-center justify-center">
                <Quote className="h-8 w-8 text-white" />
              </div>

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-ryse-orange fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ryse-dark to-ryse-dark-light flex items-center justify-center text-lg font-bold font-heading text-white">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <div className="font-bold font-heading text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-ryse-orange w-8"
                    : "bg-ryse-orange/30 hover:bg-ryse-orange/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;