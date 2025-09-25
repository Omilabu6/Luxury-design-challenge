import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import first from "./assets/entryLoaderImage/Preloader-1.png";
import second from "./assets/entryLoaderImage/Preloader-2.png";
import third from "./assets/entryLoaderImage/Preloader-3.png";
import fourth from "./assets/entryLoaderImage/Preloader-4.png";
import fifth from "./assets/entryLoaderImage/Preloader-5.png";

const Preloader = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-[#0B1956] flex items-center justify-center z-50"
      initial={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="relative overflow-hidden w-[300px] h-[300px]">
        <img src={first} alt="" className="absolute w-full h-full" />
        <motion.img
          src={second}
          alt=""
          className="absolute w-full h-full"
          initial={{ opacity: 0, y: -900, scale: 0.1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.img
          src={third}
          alt=""
          className="absolute w-full h-full"
          initial={{ opacity: 0, y: -900, scale: 0.1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        <motion.img
          src={fourth}
          alt=""
          className="absolute w-full h-full"
          initial={{ opacity: 0, y: -900, scale: 0.1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
        <motion.img
          src={fifth}
          alt=""
          className="absolute w-full h-full"
          initial={{ opacity: 0, y: -900, scale: 0.1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        />
      </div>
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>

      {/* Website Content */}
      <motion.div
        className="relative"
        initial={{ y: "-100vh" }}
        animate={{ y: loading ? "-100vh" : "0vh" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={() => {
          if (!loading) {
            window.scrollTo(0, 0);
          }
        }}
      >
        <div className="">
          <div className="overflow-hidden">
            <Navbar />
            <HeroSection />
          </div>
        
          <ThirdSection />
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};

export default App;