const techStack = [
  "React", "Next.js", "Node.js", "Python", "AWS", "Flutter",
  "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "TensorFlow", "GraphQL",
];

const TechStack = () => (
  <section className="relative py-20 bg-background">
    <div className="container-custom">
      <div className="text-center mb-12">
        <p className="section-subtitle">Our Arsenal</p>
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground">
          Built with <span className="gradient-text">Modern Tech</span>
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee">
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-3 px-6 py-3 bg-muted border border-border rounded-full text-muted-foreground text-sm font-medium hover:border-primary/30 hover:text-foreground transition-all duration-300 cursor-default"
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
