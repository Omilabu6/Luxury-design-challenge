

import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ArrowRight } from "lucide-react";
import SecondSection from "./SecondSection";
import Navbar from "./Navbar";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
 const background = "/background.webp";

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
