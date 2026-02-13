import { useState } from "react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose WhatsApp message
    const whatsappNumber = "919730877806";
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Submit your contact information and any questions you have in mind and we will happily assist you."
        breadcrumb="Contact"
        image="https://bombay-villa-advisory.pages.dev/images/office-1.jpg"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal direction="left">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Get In Touch</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-8">Request A Callback</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground font-body mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground font-body mb-2">Email</label>
                    <input
                      type="E-mail"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground font-body mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground font-body mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-body hover:bg-primary/90 transition-all duration-300"
                  >
                    Submit <Send size={14} />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div className="space-y-12 lg:pl-12">
                <div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Contact Details</span>
                  <h3 className="text-2xl font-heading font-bold mt-4 mb-8">Reach Out Directly</h3>
                </div>

                <a
                  href="tel:+919730877806"
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground font-body">+91 9730877806</p>
                  </div>
                </a>

                <a
                  href="mailto:bombayvilla8@gmail.com"
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground font-body">bombayvilla8@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 border border-border flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground font-body">
                      Kailash commercial complex, Lal Bahadur Shastri Road, Surya Nagar, Nr:- Everest Company, Vikhroli West Maharashtra 400083
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <a
                    href="https://wa.me/919730877806"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 border border-primary text-primary text-xs tracking-[0.2em] uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
