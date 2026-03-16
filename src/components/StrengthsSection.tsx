const strengths = [
  {
    number: "4",
    label: "Industry Sectors",
    description: "Real Estate, IT, Media & Entertainment, and Healthcare — all under one enterprise.",
  },
  {
    number: "50+",
    label: "Expert Professionals",
    description: "Dedicated specialists across every sector delivering world-class solutions.",
  },
  {
    number: "40%",
    label: "Cost Efficiency",
    description: "Integrated operations mean lower costs and better outcomes for every project.",
  },
  {
    number: "200+",
    label: "Projects Delivered",
    description: "Successfully completed projects across all four sectors globally.",
  },
  {
    number: "10+",
    label: "Countries Served",
    description: "Clients across North America, Middle East, Europe, and South Asia.",
  },
  {
    number: "24/7",
    label: "Support Coverage",
    description: "Round-the-clock availability across time zones for all our clients.",
  },
];

const StrengthsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ryse-dark mb-4">
            Why Choose
            <br />
            <span className="text-ryse-orange">CIONIX?</span>
          </h2>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.slice(0, 2).map((strength, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-ryse-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ryse-orange/10 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-ryse-dark mb-2 group-hover:text-ryse-orange transition-colors">
                  {strength.number}
                </div>
                <div className="text-lg font-semibold mb-4 text-ryse-orange">
                  {strength.label}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-ryse-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ryse-orange/10 group">
            <div className="text-4xl md:text-5xl font-bold text-ryse-dark mb-2 group-hover:text-ryse-orange transition-colors">
              {strengths[2].number}
            </div>
            <div className="text-lg font-semibold mb-4 text-ryse-orange">
              {strengths[2].label}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {strengths[2].description}
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-ryse-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ryse-orange/10 group">
            <div className="text-4xl md:text-5xl font-bold text-ryse-dark mb-2 group-hover:text-ryse-orange transition-colors">
              {strengths[3].number}
            </div>
            <div className="text-lg font-semibold mb-4 text-ryse-orange">
              {strengths[3].label}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {strengths[3].description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.slice(4, 6).map((strength, index) => (
              <div
                key={index + 4}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-ryse-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ryse-orange/10 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-ryse-dark mb-2 group-hover:text-ryse-orange transition-colors">
                  {strength.number}
                </div>
                <div className="text-lg font-semibold mb-4 text-ryse-orange">
                  {strength.label}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
