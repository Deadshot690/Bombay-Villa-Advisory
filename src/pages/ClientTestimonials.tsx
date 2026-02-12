import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "The entire buying process was smooth and transparent. The villa exceeded our expectations in every way. Highly recommended!",
    name: "Amit Sharma",
    role: "Villa Owner, Shahpur",
  },
  {
    quote:
      "Great investment and a beautiful home! The team was professional and always available to answer our questions.",
    name: "Priya Desai",
    role: "Investor, Kasara Villas",
  },
  {
    quote:
      "We love the peaceful environment and the quality of construction. Our family enjoys every moment here.",
    name: "Rahul Mehta",
    role: "Resident, Igatpuri",
  },
  {
    quote:
      "From site visit to handover, the experience was fantastic. The amenities and location are perfect for our lifestyle.",
    name: "Sunita Patel",
    role: "Homeowner, Shahpur",
  },
  {
    quote:
      "Excellent service and attention to detail. I would recommend them to anyone looking for a luxury villa.",
    name: "Vikram Singh",
    role: "Kasara Villa Owner",
  },
];

const ClientTestimonials = () => (
  <>
    <PageHero
      title="What Our Clients Say"
      subtitle="Real stories from our valued homeowners and investors."
      breadcrumb="Testimonials"
      image="/images/testimonials.jpg"
    />
    <section className="section-padding">
      <div className="max-w-4xl mx-auto space-y-10">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i}>
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <p className="text-lg md:text-xl font-body italic mb-6 text-foreground">“{t.quote}”</p>
              <div className="font-heading font-semibold text-primary text-base">{t.name}</div>
              <div className="text-xs text-muted-foreground font-body">{t.role}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  </>
);

export default ClientTestimonials;
