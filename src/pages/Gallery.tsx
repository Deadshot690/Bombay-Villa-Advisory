import { useState } from "react";
import PageHero from "@/components/PageHero";
import high2 from "@/assets/high2.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/images/Apartment.jpg", alt: "Gallery 1" },
  { src: "/images/a5.jpg", alt: "Gallery 2" },
  { src: "/images/a8.jpg", alt: "Gallery 3" },
  { src: "/images/IMG_1607.JPG", alt: "Gallery 4" },
  { src: "/images/a11.jpg", alt: "Gallery 5" },
  { src: "/images/a15.jpg", alt: "Gallery 6" },
  { src: "/images/IMG_20260202_134023.jpg", alt: "Gallery 7" },
  { src: "/images/IMG_4607.JPG", alt: "Gallery 8" },
  { src: "/images/IMG_4974.JPG", alt: "Gallery 9" },
  { src: "/images/a12.jpg", alt: "Gallery 10" },
  { src: "/images/a13.jpg", alt: "Gallery 11" },
  { src: "/images/I-Bomaby-Villa3.JPG", alt: "Gallery 12" },
  { src: "/images/a4.jpg", alt: "Gallery 13" },
  { src: "/images/K-Bombay-Villa2.JPG", alt: "Gallery 14" },
  { src: "/images/K-Bombay-Villa3.JPG", alt: "Gallery 15" },
  { src: "/images/hotel-apartment.jpg", alt: "Gallery 16" },
  { src: "/images/img.jpeg", alt: "Gallery 17" },
  { src: "/images/img2.jpeg", alt: "Gallery 18" },
  { src: "/images/img3.jpeg", alt: "Gallery 19" },
  { src: "/images/img4.jpeg", alt: "Gallery 20" },
  { src: "/images/new4.jpeg", alt: "Gallery 21" },
  { src: "/images/r1.jpg", alt: "Gallery 22" },
  { src: "/images/r2.jpeg", alt: "Gallery 23" },
  { src: "/images/r4.jpeg", alt: "Gallery 24" },
  { src: "/images/v1.jpeg", alt: "Gallery 25" },
  { src: "/images/v3.jpeg", alt: "Gallery 26" },
  { src: "/images/v4.jpeg", alt: "Gallery 27" },
  { src: "/images/villa5.jpg", alt: "Gallery 28" },
  { src: "/images/villa.jpg", alt: "Gallery 29" },
  { src: "/images/villa4.jpeg", alt: "Gallery 30" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Browse our gallery to experience the beauty, lifestyle, and ambiance of our projects."
        breadcrumb="Gallery"
        image="/images/a6.jpg"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={(i % 6) * 0.05}>
                <div
                  className="break-inside-avoid overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Gallery fullscreen"
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
