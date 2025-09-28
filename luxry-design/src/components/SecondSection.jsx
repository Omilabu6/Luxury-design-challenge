import React from 'react'
import { useState } from 'react'
import frame28 from '../assets/Frame28.jpg'
import arrowblue from '../assets/arrowblue.png'

const SecondSection = () => {
  const [isHovered , setIsHovered] =useState(false)

  return (
    <div className='bg-[#FAF3EB] w-full rounded-t-[16px] sm:rounded-t-[20px] md:rounded-t-[24px] min-h-screen'>
      {/* Responsive Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#0B1956] pt-6 sm:pt-8 md:pt-[50px] px-4 sm:px-6 md:px-8 lg:px-[50px] font-medium leading-[1.2] sm:leading-[1.3] md:leading-[1.5] playfair">
        <div className='flex flex-col'>
          <span>Crafted for</span> 
          <span className='sm:mx-[1em] md:mx-[2em] lg:mx-[3.3em] -mt-1 sm:-mt-2 md:-mt-4 lg:-mt-10'>the few</span>
        </div>
      </h1>
      
      {/* Content Container */}
      <div className='flex flex-col px-4 sm:px-5 md:px-6 lg:px-0 md:flex-row md:gap-6 lg:gap-[48px] mt-6 md:mt-0'>
        
        {/* Image Container */}
        <div className='flex justify-center md:justify-start md:flex-shrink-0'>
          <img 
            src={frame28} 
            alt="" 
            className='mx-4 sm:mx-6 md:mx-8 lg:mx-[40px] my-6 sm:my-8 md:my-10 w-full max-w-[280px] sm:max-w-[300px] md:max-w-[322px] h-auto md:w-[322px] md:h-[408px] object-cover rounded-lg'
          />
        </div>
        
        {/* Text Content */}
        <div className='flex flex-col  px-2 sm:px-4 md:px-0'>
          <h1 className='w-full md:max-w-[600px] lg:w-[652px] text-base sm:text-lg md:text-[18px] lg:text-[20px] tthoves pt-4 md:pt-6 lg:pt-10 leading-relaxed text-[#0B1956]'>
            For discerning travelers, the world is not a checklist — it's a canvas. We handpick destinations, curate experiences, and design seamless escapes reserved only for those who demand the extraordinary. From the first call to the final destination, every detail is handled with discretion and care.
          </h1>
          
          {/* Button Container */}
          <div className='flex items-center pt-4 sm:pt-5 md:pt-[24px] gap-[7px] pb-6 md:pb-0'>
            <div 
              className='relative group overflow-hidden cursor-pointer' 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                className={`bg-[#0B1956] transition-transform ease-in duration-300 inset-0 absolute ${
                  isHovered ? 'translate-y-0' : '-translate-y-full'
                }`} 
                style={{transformOrigin:'top'}}
              />
              <div className='border relative z-20 border-[#0B1956] p-[6px] sm:p-[8px]'>
                <img 
                  src={arrowblue} 
                  alt="" 
                  className={`w-5 sm:w-[24px] rotate-90 transition-all duration-300 ${
                    isHovered ? 'filter brightness-0 invert' : 'brightness-100 invert-0'
                  }`}
                />
              </div>
            </div>
            <span className='text-sm sm:text-[16px] font-medium text-[#0B1956] tracking-wide'>
              VIEW DESTINATIONS
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection