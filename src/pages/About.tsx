import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import AnimatedCounter from "@/components/AnimatedCounter";
import high6 from "@/assets/high6.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import high7 from "@/assets/high7.jpg";
import { motion } from "framer-motion";

const timelineData = [
  { year: "2020", title: "Founding Vision", desc: "Bombay Villa Advisory was established with a clear purpose: to redefine the landscape of private villa living in Maharashtra. The founding team brought together expertise in real estate, architecture, and hospitality, united by a shared belief in the value of curated, small-scale developments." },
  { year: "2021", title: "First Boutique Development", desc: "Our inaugural project in Shahpur set the tone for our brand. With a focus on privacy, architectural integrity, and seamless integration with the natural surroundings, the development quickly garnered recognition among discerning buyers seeking a retreat from the city." },
  { year: "2022", title: "Expansion into Kasara and Igatpuri", desc: "Building on early success, we expanded our footprint to Kasara and Igatpuri—locations chosen for their natural beauty, accessibility, and potential for long-term value. Each new project reinforced our commitment to boutique scale and personalized service." },
  { year: "2023", title: "Strengthening Brand Philosophy", desc: "As our portfolio grew, so did our dedication to the principles that define us. We invested in advanced construction techniques, sustainable practices, and a design language that balances modernity with timeless elegance." },
  { year: "2024", title: "Commitment to Sustainable Luxury", desc: "Recognizing the importance of environmental stewardship, we deepened our focus on sustainability. From site selection to material sourcing and landscape design, every aspect of our process is guided by a respect for nature." },
  { year: "2025", title: "Embracing Smart Living", desc: "Entering a new era, Bombay Villa Advisory integrates smart home technologies and advanced client services. Our developments now offer intelligent automation, enhanced security, and seamless connectivity." },
];

const About = () => {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Redefining Private Villa Living in Maharashtra"
        breadcrumb="About"
        image="/images/a1.jpg"
      />

      {/* Who We Are */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Who We Are</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold">
                  A Curator of <span className="gold-gradient-text">Refined Living</span>
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Bombay Villa Advisory is more than a developer—it is a curator of refined living. Our ethos is shaped by a passion for privacy, architectural distinction, and the creation of communities that harmonize with nature. Every villa is conceived as a sanctuary, blending timeless design with the tranquility of Maharashtra's landscapes.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Bombay Villa Advisory is a boutique real estate developer specializing in the creation of private villas in some of Maharashtra's most sought-after destinations—Shahpur, Kasara, and Igatpuri. With over five years of experience, we have established ourselves as a trusted partner for high-net-worth individuals and investors seeking a refined, private, and nature-connected lifestyle.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  What sets us apart is our unwavering focus on curation over volume. Each of our developments is conceived as a limited-edition offering, meticulously planned and executed to ensure exclusivity, privacy, and a seamless integration with the natural environment.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src="/images/a2.jpg"
                  alt="Who We Are"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-primary/30 -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-jet">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Our Purpose</span>
                <h3 className="text-3xl font-heading font-bold">Mission</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Our mission is to elevate the standard of private villa living in Maharashtra by delivering developments that embody sophistication, privacy, and enduring value. We are committed to creating environments where residents can experience the rare combination of architectural distinction, natural beauty, and a sense of belonging.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Our Aspiration</span>
                <h3 className="text-3xl font-heading font-bold">Vision</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Our vision is to be recognized as Maharashtra's foremost boutique villa developer, known for our ability to harmonize luxury with nature and to create communities that endure. We aspire to shape the future of second-home and luxury living by setting new standards in design, sustainability, and client service.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">Milestones</h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timelineData.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className={`relative flex items-start mb-16 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-background" />
                  
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                    <span className="text-primary font-heading text-2xl font-bold">{item.year}</span>
                    <h3 className="text-xl font-heading font-semibold mt-2 mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="section-padding bg-jet">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="max-w-3xl">
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Our Development Philosophy</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-8">
                  Architecture in Harmony with Nature
                </h2>
                <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
                  <p>
                    At Bombay Villa Advisory, every project begins with a rigorous site selection process. We seek out locations that offer natural beauty, tranquility, and strategic accessibility, ensuring that each development is both a retreat and a sound investment.
                  </p>
                  <p>
                    Integration with nature is not an afterthought—it is central to our design ethos. Villas are positioned to maximize views, natural light, and privacy, while landscaping is curated to enhance the local ecosystem.
                  </p>
                  <p>
                    Long-term asset value is a guiding principle. We design and build with the future in mind, ensuring that our developments remain desirable and relevant for decades.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src="/images/a9.jpg"
                  alt="Architecture in Harmony with Nature"
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 border border-primary/30 -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Presence */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Our Presence</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">A Growing Footprint</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <AnimatedCounter value="3" label="Prime Locations" sublabel="Shahpur, Kasara, Igatpuri" />
            <AnimatedCounter value="Boutique" label="Developments" sublabel="Curated, not mass" />
            <AnimatedCounter value="Selective" label="Clientele" sublabel="HNI & luxury buyers" />
            <AnimatedCounter value="Growing" label="Footprint" sublabel="Maharashtra" />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-jet">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-10">Visionary Guidance</h2>
            <blockquote className="text-lg md:text-xl font-display italic text-foreground/80 leading-relaxed mb-10 border-l-2 border-primary pl-8 text-left">
              Bombay Villa Advisory is guided by a leadership team with deep expertise in real estate, architecture, and hospitality. Our founders bring a strategic vision shaped by years of experience in premium development, a commitment to ethical business practices, and a passion for creating environments that stand the test of time.
            </blockquote>
            <p className="text-muted-foreground font-body leading-relaxed text-left">
              As we look to the future, Bombay Villa Advisory remains committed to its founding values: privacy, quality, and long-term stewardship. We are dedicated to building not just homes, but legacies—places where families can thrive, investors can trust, and the spirit of refined living endures.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default About;
