// import {useState} from 'react'
// import background from '../assets/background.jpg'
// import { ArrowRight } from "lucide-react";

// const HeroSection = () => {
//   const[isHovered , setIsHovered] =useState(false)

//   return (
//     <div className='relative h-screen'>
//     <div>
//         <div className="  h-screen w-screen overflow-hidden">
//     {/* Background with overlay */}
//     <div
//       className="absolute inset-0 bg-cover bg-center"
//       style={{ backgroundImage: `url(${background})` }}
//     ></div>
//     <div className="absolute inset-0 bg-black/10"></div>

//     {/* Content */}
//     <div className="relative flex flex-col items-start justify-between h-full  px-6 py-12">
//       {/* Heading */}
//       <h1 className="text-4xl  pt-[113px] mx-auto text-[80px] font-medium leading-[1.5] text-center playfair">
//         Escape. Indulge. Arrive.
//       </h1>

//       {/* Sub-text + Button */}
//       <div className="px-[40px] text-white space-y-6">
//         <h1 className="tthoves font-medium text-lg sm:text-2xl lg:text-3xl leading-[1.5]">
//           Where every destination <br />
//           feels like a private masterpiece.
//         </h1>
//         <div className=''>
//         <button
//           className="relative group transition-all duration-300 overflow-hidden  border border-white py-2 px-5 w-fit cursor-pointer"
//           onMouseEnter={ () =>
//             setIsHovered(true)}
//           onMouseLeave={() =>setIsHovered(false)}
//         >
//           {/* aimated background */}
//           <div className={`bg-white absolute inset-0 transition-transform duration-500 ease-out  ${isHovered ? 'translate-x-0' : '-translate-x-full' }`} style={{transformOrigin:'left'}}
//           />
//           {/* Content */}
//           <div className="flex  tracking-wide relative z-20 justify-end gap-3 items-center">
//             <span className={`text-sm sm:text-base  transition-colors font-medium duration-300 ${isHovered ? 'text-[#0B1956]' : 'text-white'}`}>DISCOVER NOW</span>
//             <ArrowRight 
//               className={`w-4 sm:w-5 transition-all duration-300 ${
//                 isHovered ? 'translate-x-1 text-[#0B1956]' : 'text-white'
//               }`}
//             />
//           </div>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
//     </div>
//   )
// }

// export default HeroSection

import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ArrowRight } from "lucide-react";
import background from "../assets/background.jpg";
import SecondSection from "./SecondSection";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Parallax pages={2} style={{ top: "0", left: "0" }}>

        {/* 🔹 Background + Permanent Overlay */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={2}
          style={{
            backgroundImage: `linear-gradient(
              135deg,
              rgba(11, 25, 86, 0.4) 0%,
              rgba(0, 0, 0, 0.6) 50%,
              rgba(11, 25, 86, 0.3) 100%
            ), url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* 🔹 Hero Content */}
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light leading-[0.9] playfair text-white mb-8 tracking-wide">
              <span className="block opacity-95">Escape.</span>
              <span className="block opacity-90 text-white/90">Indulge.</span>
              <span className="block opacity-85 text-white/80">Arrive.</span>
            </h1>

            {/* Subtitle */}
            <div className="max-w-2xl mx-auto mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed tracking-wide">
                Where every destination feels like a 
                <span className="block font-medium text-white mt-2">
                  private masterpiece
                </span>
              </h2>
            </div>

            {/* Button */}
            <div className="relative">
              <button
                className="group relative overflow-hidden border-2 border-white/80 py-4 px-8 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white transition-all duration-500 cursor-pointer rounded-sm"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className={`absolute inset-0 bg-white transition-all duration-700 ease-out ${
                    isHovered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                />
                <div className="flex items-center gap-4 relative z-10">
                  <span
                    className={`text-sm sm:text-base font-medium tracking-[0.2em] uppercase transition-all duration-500 ${
                      isHovered ? "text-[#0B1956]" : "text-white"
                    }`}
                  >
                    Discover Now
                  </span>
                  <ArrowRight
                    className={`w-5 h-5 transition-all duration-500 ${
                      isHovered
                        ? "translate-x-2 text-[#0B1956] scale-110"
                        : "text-white/90"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </ParallaxLayer>

        {/* 🔹 Next Section */}
        <ParallaxLayer offset={1} speed={0.5}>
          <SecondSection  />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
};

export default HeroSection;
