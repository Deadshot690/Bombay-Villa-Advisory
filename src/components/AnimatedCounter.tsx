import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
  sublabel: string;
}

const AnimatedCounter = ({ value, label, sublabel }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");
  const isNumeric = !isNaN(numericValue);

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(numericValue / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericValue, isNumeric]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">
        {isNumeric ? `${count}${suffix}` : value}
      </div>
      <div className="text-sm font-body tracking-[0.2em] uppercase text-foreground mb-1">
        {label}
      </div>
      <div className="text-xs text-muted-foreground">{sublabel}</div>
    </motion.div>
  );
};

export default AnimatedCounter;
