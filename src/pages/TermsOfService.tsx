import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/layout/PageHeader";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: December 29, 2024"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" }
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg
            prose-headings:font-heading prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary
            prose-li:text-muted-foreground
            prose-strong:text-foreground
          ">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using CIONIX Innovations Services LLC's website and services, you agree to be bound 
              by these Terms of Service and all applicable laws and regulations. If you do not 
              agree with any of these terms, you are prohibited from using our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              GrowthForge provides digital marketing, growth optimization, and related consulting 
              services. The specific services provided will be detailed in individual service 
              agreements or statements of work.
            </p>

            <h2>3. User Accounts</h2>
            <p>When you create an account with us, you must:</p>
            <ul>
              <li>Provide accurate, complete, and current information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <h2>4. Payment Terms</h2>
            <p>
              Payment terms for our services are specified in individual service agreements. 
              Unless otherwise stated:
            </p>
            <ul>
              <li>All fees are quoted in USD and are non-refundable</li>
              <li>Payment is due within 30 days of invoice date</li>
              <li>Late payments may incur additional fees</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <h3>Our Property</h3>
            <p>
              All content, features, and functionality of our website and services, including 
              but not limited to text, graphics, logos, and software, are owned by Nexorah Global 
              and protected by intellectual property laws.
            </p>
            <h3>Client Materials</h3>
            <p>
              You retain ownership of all materials you provide to us. By providing materials, 
              you grant us a license to use them solely for the purpose of delivering our services.
            </p>
            <h3>Deliverables</h3>
            <p>
              Upon full payment, ownership of custom deliverables created specifically for you 
              transfers to you, unless otherwise specified in your service agreement.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or sensitive 
              information shared during the course of our engagement. This obligation survives 
              the termination of our agreement.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Nexorah Global shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including but 
              not limited to loss of profits, data, or other intangible losses.
            </p>
            <p>
              Our total liability for any claim arising from our services shall not exceed 
              the total fees paid by you in the twelve (12) months preceding the claim.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" without warranties of any kind, either express 
              or implied. We do not guarantee specific results from our marketing services, as 
              outcomes depend on many factors beyond our control.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Nexorah Global and its employees from any 
              claims, damages, or expenses arising from your use of our services or violation 
              of these terms.
            </p>

            <h2>10. Termination</h2>
            <p>
              Either party may terminate services with written notice as specified in the 
              applicable service agreement. Upon termination:
            </p>
            <ul>
              <li>All outstanding fees become immediately due</li>
              <li>Access to our platforms and tools will be revoked</li>
              <li>Confidentiality obligations remain in effect</li>
            </ul>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of 
              the State of California, without regard to its conflict of law provisions.
            </p>

            <h2>12. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or our services shall first be attempted 
              to be resolved through good-faith negotiation. If unsuccessful, disputes shall 
              be submitted to binding arbitration in San Francisco, California.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice 
              of significant changes via email or through our website. Continued use of our 
              services after changes constitutes acceptance of the new terms.
            </p>

            <h2>14. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at:</p>
            <ul>
              <li>Email: legal@nexorahglobal.com</li>
              <li>Address: San Francisco, CA</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
