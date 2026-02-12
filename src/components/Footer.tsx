import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-jet border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold gold-gradient-text mb-4">
              BOMBAY VILLA
            </h3>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
              Advisory
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Exclusive bungalow developments in Shahpur, Kasara, and Igatpuri — designed for privacy, comfort, and timeless living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-6 font-body">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "Projects", path: "/projects" },
                { label: "About", path: "/about" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-6 font-body">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919730877806"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary" />
                +91 9730877806
              </a>
              <a
                href="mailto:bombayvilla8@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                bombayvilla8@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Kailash commercial complex, Lal Bahadur Shastri Road, Surya Nagar, Nr:- Everest Company, Vikhroli West Maharashtra 400083</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-6 font-body">
              Follow Us
            </h4>
            <a
              href="https://www.instagram.com/bombay_villa_advisory?igsh=ZHAxajYzM2cweDJr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
              Instagram
            </a>
            <div className="mt-8">
              <a
                href="https://wa.me/919730877806"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-primary text-primary text-xs tracking-[0.2em] uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © 2026 Bombay Villa Advisory. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground/50 tracking-wider">
            Crafting Private Villa Living
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
