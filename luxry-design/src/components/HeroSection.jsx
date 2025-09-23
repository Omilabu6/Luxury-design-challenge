import React from 'react'
import background from '../assets/background.jpg'
import arrow from '../assets/arrow.png'

const HeroSection = () => {
  return (
    <div>
       <div className="-z-10 absolute top-0 h-screen w-screen overflow-hidden">
  {/* Background with overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${background})` }}
  ></div>
  <div className="absolute inset-0 bg-black/10"></div>

  {/* Content */}
  <div className="relative flex flex-col items-start justify-between h-full  px-6 py-12">
    {/* Heading */}
    <h1 className="text-4xl  pt-[113px] mx-auto text-[80px] font-medium leading-[1.5] text-center playfair">
      Escape. Indulge. Arrive.
    </h1>

    {/* Sub-text + Button */}
    <div className="px-[40px] text-white space-y-6">
      <h1 className="tthoves font-medium text-lg sm:text-2xl lg:text-3xl leading-[1.5]">
        Where every destination <br />
        feels like a private masterpiece.
      </h1>
      <div className="flex  justify-end border border-white py-2 gap-3 w-fit  px-5 cursor-pointer hover:bg-white/10 transition">
        <h1 className="text-sm sm:text-base">DISCOVER NOW</h1>
        <span>
          <img src={arrow} alt="" className="w-4 sm:w-5" />
        </span>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default HeroSection