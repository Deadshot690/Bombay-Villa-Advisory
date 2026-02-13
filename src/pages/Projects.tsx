import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import high1 from "@/assets/high1.jpg";
import high3 from "@/assets/high3.jpg";
import high4 from "@/assets/high4.jpg";
import high5 from "@/assets/high5.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const projects = [
  {
    name: "Shahpur",
    description: "Shahpur invites you to a world where privacy and nature exist in perfect harmony. Each bungalow is thoughtfully nestled among open meadows and mature trees, offering a rare sense of seclusion and freedom. Wake to the gentle sounds of nature, enjoy sunlit interiors, and unwind in your own private sanctuary. Here, architectural grace meets the tranquility of the outdoors, creating a lifestyle that is both restorative and refined—ideal for those who cherish space, serenity, and a deep connection to the land.",
    image: high3,
    path: "/projects/shahpur",
  },
  {
    name: "Kasara",
    description: "Kasara is a celebration of modern architectural elegance, where clean lines and expansive glass frame the beauty of the surrounding landscape. These villas are designed for those who appreciate balance—between sophistication and comfort, openness and intimacy. Step inside to discover airy living spaces, curated finishes, and a seamless flow between indoors and out. In Kasara, every detail is considered, offering a tranquil yet vibrant environment for discerning residents who value both style and substance.",
    image: high4,
    path: "/projects/kasara",
  },
  {
    name: "Igatpuri",
    description: "In Igatpuri, luxury finds its purest expression. Perched amidst rolling hills and misty vistas, these exclusive villas offer a retreat into calm sophistication. Floor-to-ceiling windows invite panoramic views and natural light, while private terraces and lush gardens create intimate spaces for relaxation. Every element is crafted for comfort and exclusivity, from the refined materials to the thoughtful amenities. Igatpuri is more than a destination—it is an invitation to experience life at its most serene and elevated.",
    image: high5,
    path: "/projects/igatpuri",
  },
];

const Projects = () => {
  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Select, private developments in sought-after locations. Designed for comfort, privacy, and lasting value."
        breadcrumb="Projects"
        image={high1}
      />

      {/* Project Highlights */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Project Highlights</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">Boutique Villa Projects</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-32">
            {projects.map((project, i) => (
              <ScrollReveal key={project.name} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
                  <div className="lg:w-3/5">
                    <Link to={project.path} className="block relative overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.description}
                        className="w-full h-[400px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500" />
                    </Link>
                  </div>
                  <div className="lg:w-2/5 space-y-6">
                    <h3 className="text-5xl md:text-6xl font-heading font-bold">{project.name}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">{project.description}</p>
                    <Link
                      to={project.path}
                      className="inline-flex items-center gap-3 text-primary text-sm tracking-[0.15em] uppercase font-body group/link"
                    >
                      Explore Project
                      <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-jet">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          <AnimatedCounter value="5+" label="Years of Experience" sublabel="Hands-on expertise in private bungalow development." />
          <AnimatedCounter value="Boutique" label="Villa Developments" sublabel="Select projects designed for refined living." />
          <AnimatedCounter value="3" label="Prime Locations" sublabel="Shahpur, Kasara, and Igatpuri." />
          <AnimatedCounter value="Focused" label="Development Approach" sublabel="Quality over quantity, always." />
        </div>
      </section>
    </>
  );
};

export default Projects;
