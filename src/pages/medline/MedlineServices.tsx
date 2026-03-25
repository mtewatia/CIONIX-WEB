import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, DollarSign, Shield, ClipboardList, Stethoscope, Database, ArrowRight, CheckCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/medline" },
  { name: "Services", href: "/medline/services" },
];

const services = [
  {
    icon: FileText,
    title: "Medical Billing & Coding",
    description: "Our certified coders ensure accurate claim submissions with CPT, ICD-10, and HCPCS coding. We minimize denials and maximize reimbursements across all payer types.",
    features: ["CPT, ICD-10 & HCPCS Coding", "Charge Entry & Claim Submission", "Denial Management & Appeals", "Payment Posting & Reconciliation", "Patient Statement Generation", "Payer Follow-up & Collections"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: DollarSign,
    title: "Revenue Cycle Management",
    description: "Complete RCM solutions from patient registration to final payment. We optimize every touchpoint to accelerate cash flow and reduce days in A/R.",
    features: ["Patient Demographics & Eligibility", "Prior Authorization Management", "Claims Scrubbing & Submission", "A/R Management & Follow-up", "Revenue Analytics & Reporting", "Cash Flow Optimization"],
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "Compliance & Credentialing",
    description: "Stay compliant with HIPAA, OIG, and CMS regulations. We handle provider credentialing, enrollment, and ongoing compliance monitoring.",
    features: ["HIPAA Compliance Audits", "Provider Credentialing", "Insurance Panel Enrollment", "Compliance Training Programs", "Regulatory Updates & Alerts", "Risk Assessment & Mitigation"],
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: ClipboardList,
    title: "Practice Management Consulting",
    description: "Optimize your practice operations with expert consulting. From workflow automation to staff training, we help you run a more efficient practice.",
    features: ["Workflow Analysis & Optimization", "Staff Training & Development", "EHR/EMR Implementation Support", "Patient Flow Optimization", "Financial Benchmarking", "Strategic Growth Planning"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Stethoscope,
    title: "Specialty Billing",
    description: "Specialized billing expertise across 30+ medical specialties including cardiology, orthopedics, dermatology, mental health, and more.",
    features: ["Cardiology & Orthopedics", "Dermatology & Ophthalmology", "Mental & Behavioral Health", "Internal Medicine & Family Practice", "Radiology & Pathology", "Emergency Medicine & Urgent Care"],
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Database,
    title: "Healthcare IT Solutions",
    description: "Technology solutions tailored for healthcare—EHR integration, data analytics, telehealth setup, and secure healthcare data management.",
    features: ["EHR/EMR Integration", "Practice Analytics Dashboards", "Telehealth Platform Setup", "Data Migration & Security", "Interoperability Solutions", "Custom Healthcare Software"],
    color: "from-indigo-500 to-violet-600",
  },
];

const MedlineServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <SectorHeader sectorName="Medline" sectorColor="from-emerald-500 to-teal-500" navLinks={navLinks} contactHref="/medline/services" homePath="/medline" />

      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="container-custom text-center">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4">Our Solutions</p>
          <h1 className="text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
            Healthcare <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Revenue Solutions</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Comprehensive medical billing and healthcare management services designed to optimize your practice's financial performance.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom space-y-20">
          {services.map((service, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">{service.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{service.description}</p>
                <Button asChild>
                  <a href="mailto:medline@cionix.com">Get Started <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
              <div className={`bg-muted/50 rounded-2xl p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h4 className="font-heading font-bold text-lg mb-5 text-foreground">What's Included</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-heading mb-6">Ready to Optimize Your Revenue Cycle?</h2>
          <p className="text-white/70 text-lg mb-8">Schedule a free assessment and discover how we can increase your practice's revenue.</p>
          <Button size="lg" className="bg-white text-emerald-900 hover:bg-white/90" asChild>
            <a href="mailto:medline@cionix.com">Schedule Free Assessment <ArrowRight className="ml-2 h-5 w-5" /></a>
          </Button>
        </div>
      </section>

      <SectorFooter sectorName="Medline" description="CIONIX Medline provides specialized medical billing and healthcare revenue solutions." serviceLinks={[{ name: "Medical Billing", href: "/medline/services" }, { name: "Revenue Cycle Mgmt", href: "/medline/services" }, { name: "Compliance", href: "/medline/services" }]} quickLinks={[{ name: "Home", href: "/medline" }, { name: "Services", href: "/medline/services" }, { name: "Main Site", href: "/" }]} email="medline@cionix.com" phone="+1 (555) 345-6789" location="Dubai, UAE" />
    </div>
  );
};

export default MedlineServices;
