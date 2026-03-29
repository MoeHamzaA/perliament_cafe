import React, { useEffect } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import DemoBanner from './DemoBanner';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  // useOutlet gives us the actual React elements for the current page
  const currentOutlet = useOutlet();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <DemoBanner />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex-1 flex flex-col"
        >
          {/* We clone the outlet and attach the key so Framer Motion "freezes" the exiting page */}
          {currentOutlet ? React.cloneElement(currentOutlet, { key: location.pathname }) : null}
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}