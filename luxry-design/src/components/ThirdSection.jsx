import React from 'react'
import pool from '../assets/pool.png'
import { useState } from 'react'
import arrow from '../assets/arrowblueright.svg'
import frame29 from '../assets/Frame 29.png'
import frame29one from '../assets/Frame 29 (1).png'
import frame29two from '../assets/Frame 29 (2).png'
import frame29three from '../assets/Frame 29 (3).png'

const ThirdSection = () => {
    const [isHovered , setIsHovered] =useState(false)
  return (
    <div className='bg-[#FAF3EB]   overflow-hidden'>
        <div>
            <h1 className='font-medium pt-20 text-[75px] text-[#0B1956] text-center playfair '>Where Will You Escape To?</h1>
        </div>
       <div className="px-10 py-16 mb-50">
        <div className="flex gap-28 mb-20 justify-buttom items-baseline overflow-x-auto scroll-smooth no-scrollbar">
            {/* Card 1 */}
            <div className="shrink-0">
            <img src={frame29} alt="" className="w-[554px] h-[400px] object-cover" />
            <h2 className="text-[16px] tthoves pt-4">Maldives</h2>
            </div>

            {/* Card 2 */}
            <div className="shrink-0">
            <img src={frame29one} alt="" className="w-[342px] h-[228px] object-cover" />
            <h2 className="text-[16px] tthoves pt-4">Maldives</h2>
            </div>

            {/* Card 3 */}
            <div className="shrink-0">
            <img src={frame29two} alt="" className="w-[431px] h-[325px] object-cover" />
            <h2 className="text-[16px] tthoves pt-4">Maldives</h2>
            </div>

            {/* Card 4 */}
            <div className="shrink-0">
            <img src={frame29three} alt="" className="w-[439px] h-[216px] object-cover" />
            <h2 className="text-[16px] tthoves pt-4">Maldives</h2>
            </div>
        </div>
        </div>

        <div className='relative mb-10 top-0 h-screen w-screen overflow-hidden'>
            <div
               className="absolute inset-0 bg-cover bg-center"
                 style={{ backgroundImage: `url(${pool})` }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-b from-[#FAF3EB] via-[#faf3eb52] to-[#faf3eb00]"></div>
            <div className='relative flex flex-col items-center justify-center  '>
                <h1 className='font-semibold text-[32px] playfair text-[#0B1956]'>What are you waiting for ?</h1>
                <div className=' pt-18'>
                  <div className='relative translate-x-12 w-[566px] mx-auto group overflow-hidden' onMouseEnter={ () => {setIsHovered(true)}} onMouseLeave={()=>setIsHovered(false)}>
                     <div className='flex  z-20  gap-7'>
                         <h2 className='text-[70px] tthoves text-[#0B1956] font-medium'>BOOK NOW</h2>
                         <img src={arrow} alt="" className={`  transition-all duration-300 ease-in-out ${isHovered ? 'translate-x-4':'translate-x-0' }`} />
                     </div>
                      <div className={`w-[456px] h-[5px] -mt-5 transition-all duration-300 ease-in-out rounded-[27px] bg-[#0B1956] ${isHovered ? 'translate-x-0':'-translate-x-full'}`}/>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection