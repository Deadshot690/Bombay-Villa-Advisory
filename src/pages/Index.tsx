import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroImage from "@/assets/hero-villa.jpg";
import PageHero from "@/components/PageHero";

const projects = [
  {
    name: "Shahpur",
    description: "Shahpur invites you to a world where privacy and nature exist in perfect harmony. Each bungalow is thoughtfully nestled among open meadows and mature trees, offering a rare sense of seclusion and freedom. Wake to the gentle sounds of nature, enjoy sunlit interiors, and unwind in your own private sanctuary. Here, architectural grace meets the tranquility of the outdoors, creating a lifestyle that is both restorative and refined—ideal for those who cherish space, serenity, and a deep connection to the land.",
    image: "/images/high3.jpg",
    path: "/projects/shahpur",
  },
  {
    name: "Kasara",
    description: "Kasara is a celebration of modern architectural elegance, where clean lines and expansive glass frame the beauty of the surrounding landscape. These villas are designed for those who appreciate balance—between sophistication and comfort, openness and intimacy. Step inside to discover airy living spaces, curated finishes, and a seamless flow between indoors and out. In Kasara, every detail is considered, offering a tranquil yet vibrant environment for discerning residents who value both style and substance.",
    image: "/images/high4.jpg",
    path: "/projects/kasara",
  },
  {
    name: "Igatpuri",
    description: "In Igatpuri, luxury finds its purest expression. Perched amidst rolling hills and misty vistas, these exclusive villas offer a retreat into calm sophistication. Floor-to-ceiling windows invite panoramic views and natural light, while private terraces and lush gardens create intimate spaces for relaxation. Every element is crafted for comfort and exclusivity, from the refined materials to the thoughtful amenities. Igatpuri is more than a destination—it is an invitation to experience life at its most serene and elevated.",
    image: "/images/a3.jpg",
    path: "/projects/igatpuri",
  },
  {
    name: "Investment Opportunities",
    description: "Unlock a portfolio of rare investment opportunities in the region’s most sought-after villa developments. Each project is carefully selected for its potential, location, and enduring value, offering investors a blend of security and growth. Whether you seek long-term appreciation or a refined addition to your real estate holdings, our advisory team provides expert guidance and personalized solutions to help you achieve your financial aspirations with confidence and clarity.",
    image: "/images/investment.jpg",
    path: "/investment",
  },
  {
    name: "Client Testimonials",
    description: "Our clients’ stories speak to the quality and care that define every aspect of our service. Discover firsthand accounts of seamless transactions, attentive support, and the joy of finding a home that truly resonates. These testimonials reflect not just satisfaction, but a sense of trust and partnership—an experience that sets our community apart and inspires confidence in every new relationship we build.",
    image: "/images/a14.jpg",
    path: "/testimonials",
  },
];

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Crafting Private Villa Living"
        subtitle="Bungalow developments in Shahpur, Kasara, and Igatpuri — designed for privacy, comfort, and timeless living."
        breadcrumb="Home"
        image="/images/a10.jpg"
      />

      {/* Stats */}
      <section className="section-padding bg-jet">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          <AnimatedCounter value="5+" label="Years of Experience" sublabel="Hands-on expertise in private bungalow development." />
          <AnimatedCounter value="Boutique" label="Villa Developments" sublabel="Select projects designed for refined living." />
          <AnimatedCounter value="3" label="Prime Locations" sublabel="Shahpur, Kasara, and Igatpuri." />
          <AnimatedCounter value="Focused" label="Development Approach" sublabel="Quality over quantity, always." />
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
                Boutique Villa Projects
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto font-body">
                Select, private developments in sought-after locations. Designed for comfort, privacy, and lasting value.
              </p>
            </div>
          </ScrollReveal>
          <div className="space-y-32">
            {projects.map((project, i) => (
              <ScrollReveal key={project.name} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
                  <div className="lg:w-3/5">
                    <div className="relative overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.description}
                        className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>
                  <div className="lg:w-2/5 space-y-6">
                    {/* Remove project number for Investment Opportunities and Client Testimonials cards */}
                    <h3 className="text-4xl md:text-5xl font-heading font-bold">{project.name}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">{project.description}</p>
                    <Link
                      to={project.path}
                      className="inline-flex items-center gap-3 text-primary text-sm tracking-[0.15em] uppercase font-body group/link"
                    >
                      Discover More
                      <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Contact Our Team
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed">
              Reach out to our team directly for any inquiries or assistance. We are ready to help you with your real estate needs and provide all the information you require.
            </p>
            <a
              href="tel:+919730877806"
              className="inline-block px-12 py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-body hover:bg-primary/90 transition-all duration-300"
            >
              Speak With Our Team
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;