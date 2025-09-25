import React from 'react'
import { useState } from 'react'
import frame28 from '../assets/frame 28.jpg'
import arrowblue from '../assets/arrowblue.png'

const SecondSection = () => {
  const [isHovered , setIsHovered] =useState(false)

  return (
    <div className='bg-[#FAF3EB] w-full rounded-t-[24px] h-screen '>
      <h1 className="text-4xl text-[#0B1956]  pt-[50px] px-[50px]  sm:text-5xl lg:text-7xl font-medium leading-[1.5]  playfair">
       <div className='flex  flex-col'><span>Crafted for</span> <span className='mx-[3.3em] -mt-10 '>the few</span></div>
      </h1>
      <div className='flex gap-[48px]'>
            <div className=''>
            <img src={frame28} alt="" className='mx-[40px] my-10 w-[322px] h-[408px]'/>
            </div>
            <div>
            <h1 className='w-[652px] text-[20px]  tthoves pt-10'>For discerning travelers, the world is not a checklist — it’s a canvas. We handpick destinations, curate experiences, and design seamless escapes reserved only for those who demand the extraordinary. From the first call to the final destination, every detail is handled with discretion and care.</h1>
                <span className='flex items-center pt-[24px] gap-[7px] '>
                  <div className='relative group overflow-hidden' onMouseEnter={ () =>
                    setIsHovered(true)}
                    onMouseLeave={() =>setIsHovered(false)}>
                    <div className={`bg-[#0B1956] transition-transform ease-in duration-300 inset-0 absolute ${isHovered ? 'traslate-y-0 ': '-translate-y-full '}` } style={{transformOrigin:'top'}}/>
                    <div className='border relative z-20 border-[#0B1956] p-[8px]'>
                      <img src={arrowblue} alt="" className={`w-[24px] rotate-90 
                       ${isHovered ? 'filter brightness-0 invert': 'brightness-100 invert-0'}`}/>
                    </div>
                  </div>
                  <span className='text-[16px] font-medium text-[#0B1956]'>VIEW DESTINATIONS</span>
                </span>
            </div>
            
      </div>
      
    </div>
  )
}

export default SecondSection