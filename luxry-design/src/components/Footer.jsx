import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import copy from '../assets/copy.png'
import arrow from '../assets/arrow.png'


const Footer = () => {
  return (
    <div className='bg-[rgb(11,25,86)]  text-[#FAF3EB]'>
    <div className='relative flex justify-between flex-col mdd:p-[60px] p-[20px] -translate-y-70 h-screen rounded-t-[24px] bg-[#0B1956]'>
        <div className='flex flex-col gap-10 md:flex-row justify-between text-[20px] tthoves'>
            <h1 className='text-[40px] italic playfair'>
                   Eterna
            </h1>
            <div className='flex justify-between gap-30'>
              <div className='gap-3 flex flex-col'>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Destination</h1>
              </div>
              <div className='gap-3 flex flex-col'>
                <h1>Instagram </h1>
                <h1>Twitter</h1>
                <h1>LinkedIn</h1>
              </div>
            </div>
        </div>
        <FooterAnimation/>
       
       </div>
     </div>
  )
}

export default Footer

const FooterAnimation = () => {

  const [isHovered , setIsHovered] =useState(false)
  
    const text = "Eterna".split("");
   // Parent animation (controls the children timing)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between each letter
      },
    },
  };

  // Each letter animation
  const letter = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0 },
  };
  return(
    <div className=''>
      <div className=''>
        <motion.div
          className="flex space-x-2 overflow-hidden transition-all ease-in-out  big-text text-[#FAF3EB] italic playfair"
          variants={container}
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // triggers when in view
        >
          {text.map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className='flex  md:flex-row gap-5 flex-col text-2xl justify-between '>
        <span className='flex  text-[#FAF3EB]'>Copyright
          <img src={copy} alt="" className='w-10 h-10'/>
          Eterna</span>
       <span className='flex md:items-center text-[#FAF3EB] md:justify-center gap-2'>
          <div className='relative group overflow-hidden' onMouseEnter={ () =>
              setIsHovered(true)}
              onMouseLeave={() =>setIsHovered(false)}>
              <div className={`bg-[#FAF3EB] transition-transform ease-in duration-300 inset-0 absolute ${isHovered ? 'traslate-y-0 ': 'translate-y-full '}` } style={{transformOrigin:'top'}}/>
              <div className='border relative z-20 border-[#FAF3EB] p-[8px]'>
                <img src={arrow} alt="" className={`w-[24px] -rotate-90 
                  ${isHovered ? 'filter brightness- invert': 'brightness-100 invert-0'}`}/>
            </div>
            </div>
          BACK TO TOP
        </span>
      </div>
    
    </div>
  );
 }

