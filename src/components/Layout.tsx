import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Google tag (gtag.js) - only inject once
  useEffect(() => {
    if (!document.getElementById('gtag-js')) {
      const script = document.createElement('script');
      script.id = 'gtag-js';
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LSMZPZW470';
      document.head.appendChild(script);

      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LSMZPZW470');`;
      document.head.appendChild(inlineScript);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
