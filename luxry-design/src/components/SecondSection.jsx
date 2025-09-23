import React from 'react'
import frame28 from '../assets/frame 28.jpg'
import component from '../assets/Component 2.png'

const SecondSection = () => {
  return (
    <div className='bg-[#FAF3EB] z-80 rounded-t-[24px] h-screen '>
      <h1 className="text-4xl text-[#0B1956]  pt-[50px] px-[50px]  sm:text-5xl lg:text-7xl font-medium leading-[1.5]  playfair">
       <span>Crafted for</span> <br /> <span className='px-[3.3em] '>the few</span>
      </h1>
      <div className='flex gap-[48px]'>
            <div className=''>
            <img src={frame28} alt="" className='mx-[40px] my-10 w-[322px] h-[408px]'/>
            </div>
            <div>
            <h1 className='w-[652px] text-[20px]  tthoves pt-10'>For discerning travelers, the world is not a checklist — it’s a canvas. We handpick destinations, curate experiences, and design seamless escapes reserved only for those who demand the extraordinary. From the first call to the final destination, every detail is handled with discretion and care.</h1>
                <img src={component} alt="" className='pt-[32px] ' />
            </div>
            
      </div>
      
    </div>
  )
}

export default SecondSection