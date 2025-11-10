import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menue from "../assets/menu-01.svg";
import arrow from "../assets/arrow.png";
import close from "../assets/close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
    <div className="absolute w-full   z-50">
      {/* Navbar Top Section */}
      <div className="flex  justify-between items-center pt-[27px] px-[40px] relative z-[200]">
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
          className="cursor-pointer focus:outline-none relative z-[200]"
        >
          <motion.img
            key={isOpen ? "close" : "menu"}
            src={isOpen ? close : menue}
            alt="menu"
            className="w-[56px] h-[43px]"
            // animate transitions
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </button>
      </div>

      <hr
        className={`mt-[23px] mx-[40px] relative z-[200] transition-colors duration-300 ${
          isOpen ? "border-white " : "border-[#696969]"
        }`}
      />

      {/* Animated Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -900, scale:0.1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -900, scale: 0.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 h-[75vh] bg-[#0B1956] pt-80 pb-60 text-white flex flex-col items-center justify-center space-y-[5px] z-[100]"
          >
            <div className="space-y-2 flex flex-col items-center justify-center mx-auto">
              <MenuItem label="HOME" />
              <MenuItem label="ABOUT" />
              <MenuItem label="DESTINATION" />
              <MenuItem label="CONTACT US" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

export default Navbar;


const MenuItem = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-[32px] cursor-pointer transition-all duration-300 ease-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Arrow */}
      <img
        src={arrow}
        alt=""
        className={`w-[32px] transition-all duration-300 ease-in-out ${
          isHovered ? "translate-x-0 opacity-100 " : "-translate-x-[32px] opacity-0"
        }`}
      />

      {/* Text */}
      <h2 className="md:text-[64px] text-[40px]  playfair font-medium">{label}</h2>
    </div>

  );
};





