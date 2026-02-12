import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What documents are required to invest?",
    a: "Basic KYC, proof of funds, and property registration documents.",
  },
  {
    q: "Can NRIs invest?",
    a: "Yes, we offer full support for NRI investors (see below).",
  },
  {
    q: "What is the minimum investment amount?",
    a: "Please contact us for project-specific details.",
  },
  {
    q: "What are the risk factors and mitigation steps?",
    a: "We conduct thorough due diligence on all projects, ensure legal compliance, and provide transparent documentation to minimize risks for our investors.",
  },
  {
    q: "How do you support NRI investors?",
    a: "Our team assists NRIs with every step, from documentation to repatriation of funds, ensuring a smooth and compliant investment process.",
  },
  {
    q: "What investment tips do you recommend?",
    a: "- Research the location and project developer\n- Understand all legal and financial obligations\n- Consult with our experts for personalized advice\n- Keep documentation organized and up to date",
  },
];

const InvestmentOpportunities = () => (
  <>
    <PageHero
      title="Investment Opportunities"
      subtitle="Discover high-potential projects and expert guidance for your next investment."
      breadcrumb="Investment"
      image="/images/investment.jpg"
    />
    <section className="section-padding">
      <div className="max-w-5xl mx-auto space-y-12">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Current Projects</h2>
          <p className="text-muted-foreground font-body mb-8">
            Explore our curated selection of investment projects, including villas, apartments, and commercial spaces in high-growth locations. Each project is chosen for its potential, connectivity, and future prospects.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Market Trends & Insights</h2>
          <p className="text-muted-foreground font-body mb-8">
            Stay ahead with the latest real estate trends, infrastructure developments, and government initiatives that are shaping the region’s investment landscape.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={faq.q} title={faq.q} content={faq.a} />
            ))}
          </Accordion>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Invest Here?</h2>
          <ul className="list-disc pl-6 text-muted-foreground font-body mb-8 space-y-2">
            <li>Strategic location with excellent connectivity</li>
            <li>Rapidly developing infrastructure</li>
            <li>Strong demand for quality housing and commercial spaces</li>
            <li>Supportive government policies</li>
          </ul>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How to Invest</h2>
          <ol className="list-decimal pl-6 text-muted-foreground font-body mb-8 space-y-2">
            <li>Contact our advisory team for a personalized consultation</li>
            <li>Choose your preferred project and unit</li>
            <li>Complete documentation and eligibility checks</li>
            <li>Finalize your investment and receive regular updates</li>
          </ol>
        </ScrollReveal>
       
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Risk Factors & Mitigation</h2>
          <p className="text-muted-foreground font-body mb-8">
            We conduct thorough due diligence on all projects, ensure legal compliance, and provide transparent documentation to minimize risks for our investors.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">NRI Investment Support</h2>
          <p className="text-muted-foreground font-body mb-8">
            Our team assists NRIs with every step, from documentation to repatriation of funds, ensuring a smooth and compliant investment process.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Investment Tips</h2>
          <ul className="list-disc pl-6 text-muted-foreground font-body mb-8 space-y-2">
            <li>Research the location and project developer</li>
            <li>Understand all legal and financial obligations</li>
            <li>Consult with our experts for personalized advice</li>
            <li>Keep documentation organized and up to date</li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default InvestmentOpportunities;
