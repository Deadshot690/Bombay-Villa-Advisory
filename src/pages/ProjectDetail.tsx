import { useParams, Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import high3 from "@/assets/high3.jpg";
import high4 from "@/assets/high4.jpg";
import high5 from "@/assets/high5.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Check } from "lucide-react";

const projectData: Record<string, {
  name: string;
  tagline: string;
  intro: string[];
  heroImage: string;
  sections: { title: string; content: string; items?: string[]; cta?: string }[];
  gallery: { image: string; title: string; desc: string }[];
  features?: { title: string; desc: string }[];
  connectivity?: { label: string; time: string }[];
  infrastructure?: string[];
  ownershipBenefits?: { title: string; desc: string }[];
}> = {
  shahpur: {
    name: "Shahpur",
    tagline: "Private bungalow living with space, privacy, and calm.",
    intro: [
      "Shahpur is a tranquil development surrounded by nature.",
      "Designed for those who value privacy, open skies, and a peaceful lifestyle.",
      "Each villa is crafted for relaxation, comfort, and timeless elegance.",
    ],
    heroImage: high3,
    sections: [
      {
        title: "Customized Villa",
        content: "Our collection of tailor-made villas offers a diverse range of options, from cozy 2 BHK to expansive 5 BHK residences, designed to suit your needs. These villas come in both compact and spacious layouts, ensuring flexibility and comfort. With areas spanning from 550 to 1500 sq.ft., you can find the perfect space that aligns with your preferences.",
        items: [
          "2 BHK (Compact) and 2 BHK (Spacious)",
          "3 BHK (Compact) and 3 BHK (Spacious)",
          "4 BHK (Compact)",
        ],
        cta: "Get Details",
      },
      {
        title: "Resort Villa",
        content: "Our array of resort villas presents a variety of choices, ranging from 2 to 5 resort rooms, catering to your specific requirements. These villas offer areas spanning from 550 to 1100 sq.ft., providing ample space for your comfort and enjoyment.",
        items: [
          "Options: 4 / 5 Studio Villa",
          "Only 8 Resort Villa Available",
        ],
        cta: "Get Details",
      },
      {
        title: "50+ Clubhouse Amenities",
        content: "Clubhouse amenities enhance the overall experience for members, providing a place to relax, exercise, socialize, and engage in various activities within a convenient and well-equipped setting.",
        items: [
          "Pool Table", "Table Tennis", "Carrom Board", "Chess", "Bowling Alley", "ATV Bikes",
          "Badminton", "Box Cricket", "Utility Shop", "Wedding/Party Lawn", "Volley Ball",
          "Kids Play Area", "Basket Ball", "Gym", "Pickle Ball Court", "Table of Snake Ladder Game",
          "Private Pool Room", "Private Pool", "Food Court", "Lawn Area", "River facing views",
          "Machan", "Car Parking", "Electricity", "24/7 water supply", "Mini Theatre",
        ],
      },
    ],
    gallery: [
      { image: "/images/a15.jpg", title: "Poolside Serenity", desc: "A tranquil poolside retreat, perfect for unwinding in the privacy of your own villa. Lush landscaping and modern design create a seamless indoor-outdoor living experience." },
      { image: "/images/r3.jpeg", title: "Contemporary Facade", desc: "Striking architecture with clean lines and natural textures, Shahpur blends timeless elegance with a sense of openness and light." },
      { image: "/images/S-Bombay-villa3.JPG", title: "Sunlit Living Spaces", desc: "Expansive windows invite natural light, illuminating spacious interiors designed for comfort, calm, and effortless entertaining." },
      { image: "/images/v2.jpeg", title: "Private Green Escape", desc: "Each villa is surrounded by greenery, offering a peaceful sanctuary where you can reconnect with nature and enjoy true privacy." },
    ],
  },
  kasara: {
    name: "Kasara",
    tagline: "Modern villa living with panoramic views and refined comfort.",
    intro: [
      "Kasara is a contemporary development set amidst scenic surroundings.",
      "Designed for those who appreciate modern architecture, open spaces, and a connection to nature.",
      "Every villa is crafted for comfort, elegance, and timeless appeal.",
    ],
    heroImage: high4,
    features: [
      { title: "Samruddhi Expressway Connectivity", desc: "Rapid, modern expressway access that dramatically cuts travel time to Mumbai and Nashik — ideal for weekend travellers and commuters." },
      { title: "Gateway to Kasara Ghat", desc: "Positioned near the dramatic Kasara (Thal) Ghat — panoramic valley views, dramatic monsoon scenery and photographic backdrops." },
      { title: "Trekking & Adventure Hub", desc: "Easy access to popular treks and forts like Harishchandragad, Kalsubai and Tringalwadi — perfect for buyers who value active, outdoor lifestyles." },
      { title: "Bhavali Dam & Lakeside Escapes", desc: "Short drives to Bhavali Dam, Arthur Lake and other reservoirs for peaceful picnics, boating and nature walks." },
      { title: "Established Spiritual & Wellness Centers", desc: "Close to Vipassana and meditation centers (internationally known retreats) — attractive for wellness-focused buyers." },
      { title: "Waterfalls & Monsoon Beauty", desc: "Numerous nearby waterfalls and seasonal cascades create unforgettable monsoon scenery and cool microclimate — great for nature lovers." },
     // { title: "Strong Rail & Road Links", desc: "Kasara is on the Central Railway line and well connected by road — making quick site visits and weekend travel easy for Mumbai buyers." },
     // { title: "Cooler Climate & Fresh Air", desc: "Elevated terrain and vegetation provide noticeably cooler temperatures than the city — a genuine \"escape\" from heat and pollution." },
     // { title: "Low-density, Private Living", desc: "The region supports boutique, low-density villa projects — privacy and quiet are easy to promise without competing high-rise clutter." },
     // { title: "Eco & Agri Experiences", desc: "Proximity to rural landscapes, orchards and small farms — opportunity for village-style weekend experiences, farm visits and agritourism add-ons." },
     // { title: "Improving Infrastructure", desc: "Ongoing regional improvements (expressway, rail upgrades) point to better connectivity and growing demand for weekend homes." },
     // { title: "Vibrant Local Markets", desc: "Experience the charm of Kasara's bustling local markets, offering fresh produce, artisanal goods, and a taste of authentic regional culture right at your doorstep." },
    ],
    sections: [
      { title: "Surrounded by mountains", content: "Embrace tranquil living with our villas nestled amidst breathtaking mountains. Enjoy picturesque views, fresh air, and a serene environment, perfect for a peaceful and rejuvenating lifestyle." },
      { title: "Easy documentation and Loan", content: "Purchasing villas from us is clear and straightforward. Our simple legal procedures and minimal paperwork are handled by our in-house expert, who also helps secure the best home loan rates." },
      { title: "Maintenance Free", content: "Our property management company offers housekeeping services, allowing you to fully enjoy your leisure time without the burden of chores." },
      { title: "Assured monthly Rentals", content: "Invest with confidence with our assured monthly rental program. Our villas offer a reliable source of income, making them an excellent investment choice." },
     // { title: "Secured gated Community", content: "Live with peace of mind in our secured gated community. With 24/7 security and surveillance, our villas provide a safe environment for you and your family." },
      { title: "35+ Amenities", content: "Our property features over 35+ amenities including swimming pool, outdoor jacuzzi, children's play areas, and community halls." },
      { title: "Prime Location & Accessibility", content: "Strategically located for easy access to Mumbai and Nashik, our villas offer seamless connectivity for both weekend getaways and daily commutes." },
     // { title: "Personalized Villa Design", content: "Choose from a range of villa layouts and customize interiors to match your taste, ensuring your home is truly unique." },
     // { title: "Eco-friendly Initiatives", content: "Our community incorporates sustainable practices, including rainwater harvesting, solar lighting, and green landscaping." },
     // { title: "Active Community Life", content: "Enjoy a vibrant social atmosphere with regular events, wellness programs, and recreational activities." },
     // { title: "Award-winning Service", content: "Experience the difference with our award-winning customer service team, dedicated to making your villa purchase seamless." },
    ],
    gallery: [
      { image: "/images/a4.jpg", title: "Elegant Outdoor Living", desc: "Spacious terraces and open-air lounges invite you to enjoy the outdoors in style, surrounded by greenery and fresh air." },
      { image: "/images/img5.jpeg", title: "Modern Villa Design", desc: "Contemporary architecture with expansive glass and natural stone, blending sophistication with comfort in every detail." },
      { image: "/images/K-Bombay-Villa2.JPG", title: "Infinity Pool Views", desc: "A stunning infinity pool overlooks the lush landscape, offering a serene escape and a perfect spot for relaxation." },
      { image: "/images/r5.jpeg", title: "Grand Entrance", desc: "A dramatic entryway welcomes you home, setting the tone for luxury and exclusivity throughout the Kasara experience." },
    ],
  },
  igatpuri: {
    name: "Igatpuri",
    tagline: "Hillside villa living with panoramic views and natural tranquility.",
    intro: [
      "Igatpuri is a serene development nestled in the hills.",
      "Designed for those who value peace, open skies, and a close connection to nature.",
      "Each villa is crafted for relaxation, privacy, and timeless comfort.",
    ],
    heroImage: "/images/a3.jpg",
    features: [
      { title: "Scenic Nature", desc: "Discover Igatpuri – a peaceful and beautiful place to call home. Spread across 6 acres of scenic and quiet surroundings, located in the heart of nature, away from the noise and stress of city life." },
      { title: "Tranquil Lifestyle", desc: "Igatpuri is renowned for its calm atmosphere, fresh mountain air, and lush greenery. Residents enjoy a slower pace of life, perfect for unwinding and reconnecting with nature." },
      { title: "Community Living", desc: "The gated community fosters a sense of belonging, with friendly neighbors, shared spaces, and regular events that bring people together." },
      { title: "Nature & Wellness", desc: "Enjoy morning walks along nature-aligned pathways, yoga sessions in landscaped gardens, and easy access to hiking trails and meditation centers." },
      { title: "Modern Amenities", desc: "Igatpuri offers a blend of modern comforts and rustic charm, including clubhouses, playgrounds, and recreational facilities for all ages." },
      { title: "Safety & Security", desc: "Comprehensive security ensures peace of mind, with 24/7 surveillance, well-lit streets, and attentive staff." },
     // { title: "Generous Entrance & Layouts", desc: "Wide entrance gates and well-defined layouts create a welcoming environment, making every arrival feel special." },
     // { title: "Intelligent Infrastructure", desc: "Smart planning means reliable water, electricity, and connectivity, supporting a hassle-free lifestyle." },
     // { title: "Hassle-Free Connectivity", desc: "Quick access to highways, transport hubs, and essential services makes daily life convenient and stress-free." },
    ],
    connectivity: [
      { label: "Samruddhi Maha Marg", time: "5 Min" },
      { label: "Igatpuri Bus Depot", time: "8 min" },
      { label: "Igatpuri Railway Station", time: "10 Min" },
      { label: "Retail Mart", time: "10 min" },
      { label: "Hospital", time: "8 min" },
      { label: "Temple", time: "2 min" },
    ],
    sections: [
      { title: "Mountain Views & Birds", content: "Wake up to panoramic mountain views and the sound of birds." },
      { title: "Cool Breezes & Clean Air", content: "Enjoy cool breezes, clean air, and a climate that encourages outdoor activities year-round." },
      { title: "Monsoons & Waterfalls", content: "Experience vibrant monsoons, lush landscapes, and seasonal waterfalls." },
      { title: "Wellness & Festivals", content: "Participate in wellness retreats, adventure sports, and cultural festivals unique to Igatpuri." },
      { title: "Low-Density Environment", content: "Benefit from a low-density environment, ensuring privacy and space for every resident." },
    ],
    infrastructure: [
      "Welcome Entrance Gate", "All-Weather Roads", "Well-Lit Streets", "Fully-Compounded Community",
      "Water Reservoirs", "Individual Plot Compounding", "Water Softening Plant", "Dedicated Central Water Tank",
      "Dedicated Electrical Substation", "Electricity & Water Supply", "Rainwater Harvesting System",
      "Solar-Powered Street Lighting", "Underground Drainage Network", "Fire Safety Hydrants",
    ],
    ownershipBenefits: [
      { title: "Customized Options", desc: "We offer customized options to match your needs and budget, ensuring you find the perfect plot for your dream home." },
      { title: "100% Clear Documents", desc: "We take pride in providing documents that are 100% clear. Every contract, report, or document we deliver is easy to understand." },
      { title: "Construction Facility", desc: "We offer complete support for construction projects, including help with finding and buying plots." },
      { title: "Immediate Possession", desc: "We offer immediate possession with full transparency and smooth processes." },
      { title: "Loan & EMI Facilities", desc: "We provide loan and EMI options that fit your needs and budget. Our flexible plans make repayment easy and stress-free." },
      { title: "Expert Guidance", desc: "Our team of experts is available to guide you through every step of the process." },
      { title: "Flexible Payment Plans", desc: "Choose from a variety of payment options to suit your financial needs." },
      { title: "After-Sales Support", desc: "Enjoy ongoing assistance and support even after possession." },
    ],
    gallery: [
      { image: "/images/a12.jpg", title: "Mountain Views", desc: "Wake up to breathtaking mountain vistas and crisp air, with every villa designed to maximize the natural beauty of Igatpuri." },
      { image: "/images/img2.jpeg", title: "Lush Courtyards", desc: "Private courtyards filled with greenery offer a peaceful escape and a perfect setting for morning coffee or evening gatherings." },
      { image: "/images/new2.jpeg", title: "Open-Plan Living", desc: "Spacious interiors flow seamlessly to the outdoors, creating a sense of freedom and connection to nature." },
      { image: "/images/I-Bomaby-Villa3.JPG", title: "Tranquil Water Features", desc: "Elegant water features and landscaped gardens bring a sense of calm and timeless luxury to every villa." },
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary text-sm tracking-[0.15em] uppercase font-body">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={project.name}
        subtitle={project.tagline}
        breadcrumb={project.name}
        image={project.heroImage}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="space-y-4">
              {project.intro.map((line, i) => (
                <p key={i} className="text-lg text-muted-foreground font-body leading-relaxed">{line}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features (Kasara / Igatpuri) */}
      {project.features && (
        <section className="section-padding bg-jet">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Features</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">
                  Features of {project.name}
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.features.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 0.05}>
                  <div className="p-8 border border-border bg-card card-hover h-full">
                    <h3 className="text-lg font-heading font-semibold mb-3 text-primary">{f.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sections (villa types, why choose, etc.) */}
      {project.sections.map((section, i) => (
        <section key={section.title} className={`section-padding ${i % 2 === 0 ? "" : "bg-jet"}`}>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-heading font-bold">{section.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{section.content}</p>
                {section.items && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {section.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-base text-foreground/80 font-body p-4 rounded-lg bg-card border border-border">
                        <Check size={18} className="text-primary shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}
                {section.cta && (
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 text-primary text-sm tracking-[0.15em] uppercase font-body mt-4"
                  >
                    {section.cta} <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* Connectivity (Igatpuri) */}
      {project.connectivity && (
        <section className="section-padding bg-jet">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Connectivity</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
                  Perfectly Connected
                </h2>
                <p className="text-muted-foreground font-body mt-4">
                  Bombay Villa Advisory Igatpuri offers the perfect balance of serene living with excellent connectivity.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {project.connectivity.map((c) => (
                <ScrollReveal key={c.label}>
                  <div className="text-center p-6 border border-border bg-card">
                    <div className="text-2xl font-heading font-bold text-primary mb-2">{c.time}</div>
                    <div className="text-sm text-muted-foreground font-body">{c.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Infrastructure (Igatpuri) */}
      {project.infrastructure && (
        <section className="section-padding">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Infrastructure Features</h2>
              <p className="text-muted-foreground font-body mb-10">High-quality infrastructure for comfortable, secure, and hassle-free living.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.infrastructure.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-base font-body text-foreground/80 p-4 rounded-lg bg-card border border-border">
                    <Check size={18} className="text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Ownership Benefits (Igatpuri) */}
      {project.ownershipBenefits && (
        <section className="section-padding bg-jet">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ownership Benefits</h2>
              <p className="text-muted-foreground font-body mb-12">Smooth and hassle-free ownership journey with multiple benefits.</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.ownershipBenefits.map((b, i) => (
                <ScrollReveal key={b.title} delay={i * 0.05}>
                  <div className="p-8 border border-border bg-card card-hover h-full rounded-xl">
                    <h3 className="text-base font-heading font-semibold mb-3 text-primary">{b.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{b.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Visual Tour</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">{project.name} Gallery</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="group overflow-hidden border border-border bg-card card-hover">
                  <div className="overflow-hidden" style={{height: '480px'}}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      style={{height: '480px'}}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-jet">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Interested in {project.name}?</h2>
            <p className="text-muted-foreground font-body mb-10">
              Contact our team to learn more about availability, pricing, and exclusive offers.
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-body hover:bg-primary/90 transition-all duration-300"
            >
              Request a Callback
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
