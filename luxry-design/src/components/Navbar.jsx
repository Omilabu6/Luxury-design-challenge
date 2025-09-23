import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menue from "../assets/menu-01.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Navbar Top Section */}
      <div className="flex justify-between items-center pt-[27px] px-[40px] relative z-[200]">
        <h1
          className={`font-medium text-[32px] italic playfair transition-colors duration-300 ${
            isOpen ? "text-white" : "text-[#0B1956]"
          }`}
        >
          Eterna
        </h1>
        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer focus:outline-none"
        >
          <img
            src={menue}
            alt="menu"
            className="w-[56px] h-[43px] z-[200] transition-colors duration-300"
            style={{ filter: isOpen ? "invert(1)" : "invert(0)" }}
          />
        </button>
      </div>

      <hr
        className={`mt-[23px] mx-[40px] relative z-[200] transition-colors duration-300 ${
          isOpen ? "border-white" : "border-[#696969]"
        }`}
      />

      {/* Animated Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -900, scale: 0.1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -900, scale: 0.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 h-[75vh] bg-[#0B1956]  text-white flex flex-col items-center justify-center space-y-[5px] z-[100]"
          >
            <h2 className="text-[64px] playfair  pt-50 font-medium">HOME</h2>
            <h2 className="text-[64px] playfair font-medium">ABOUT</h2>
            <h2 className="text-[64px] playfair font-medium">SERVICES</h2>
            <h2 className="text-[64px] playfair pb-30 font-medium">CONTACT</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
