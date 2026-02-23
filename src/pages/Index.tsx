import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import StrengthsSection from "@/components/StrengthsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessRoadmap from "@/components/ProcessRoadmap";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ClientLogos />
        <StrengthsSection />
        <ServicesSection />
        <ProcessRoadmap />
        <FeaturesSection />
        <StatsSection />
        <PricingSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
