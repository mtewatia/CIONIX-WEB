const techStack = [
  "React", "Next.js", "Node.js", "Python", "AWS", "Flutter",
  "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "TensorFlow", "GraphQL",
];

const TechStack = () => (
  <section className="relative py-20 bg-secondary">
    <div className="container-custom">
      <div className="text-center mb-12">
        <p className="section-subtitle">Our Arsenal</p>
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-white">
          Built with <span className="gradient-text">Modern Tech</span>
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary to-transparent z-10" />
        <div className="flex animate-marquee">
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-3 px-6 py-3 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/60 text-sm font-medium hover:border-primary/30 hover:text-white/90 transition-all duration-300 cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechStack;
