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
import ThirdSection from "../components/ThirdSection"
import Navbar from "./Navbar";

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
              to top,
              rgba(11, 25, 86, 0.4) 0%,
              rgba(0, 0, 0, 0.4) 50%,
              rgba(11, 25, 86, 0.3) 100%
            ), url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
       <Navbar />
        {/* 🔹 Hero Content */}
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="flex flex-col justify-around h-screen px-6 text-center">
            {/* Main Heading */}
            <h1 className="md:text-[80px] text-[60px] pt-20 text-[#0B1956] font-medium  playfair mb-8 ">
              Escape. Indulge. Arrive
            </h1>

            {/* Subtitle */}
            <div className="flex px-[10px] md:px-[40px] gap-[24px] flex-col justify-start items-start ">
              <div className="max-w-2xl ">
                <h2 className="md:text-[32px] text-[27px] text-start font-medium text-[#FAF3EB] ">
                  Where every destination <br /> feels like a 
                  private masterpiece
                </h2>
              </div>

              {/* Button */}
              <div className="relative">
                <button
                  className="group relative overflow-hidden border-2 border-[#FAF3EB] py-[8px] px-[20px]  transition-all duration-500 cursor-pointer "
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div
                    className={`absolute inset-0 bg-[#FAF3EB] transition-all duration-700 ease-out ${
                      isHovered
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0"
                    }`}
                  />
                  <div className="flex items-center gap-4 relative z-10">
                    <span
                      className={`text-[16PX]  font-medium  transition-all duration-500 ${
                        isHovered ? "text-[#0B1956]" : "text-[#FAF3EB]"
                      }`}
                    >
                      DISCOVER NOW
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
          </div>
        </ParallaxLayer>

        {/* 🔹 Next Section */}
        <ParallaxLayer offset={1} speed={0.5} className="border-t-4 border-amber-50/5">
          <SecondSection  />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
};

export default HeroSection;
