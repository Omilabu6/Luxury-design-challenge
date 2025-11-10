import React from 'react'
import { useState } from 'react'
import arrow from '../assets/arrowblueright.svg'
import { ArrowRight } from "lucide-react";
const ThirdSection = () => {
    const [isHovered , setIsHovered] =useState(false)
    
    const pool = "/pool.webp"
  return (
    <div className='bg-[#FAF3EB]   overflow-hidden'>
        <div>
            <h1 className='font-medium pt-20 md:text-[70px] text-[50px] text-[#0B1956] text-center playfair '>Where Will You Escape To?</h1>
        </div>
       <div className="pl-10 py-16 mb-50">
        <div className="flex gap-20 mb-20 justify-buttom items-baseline overflow-x-auto scroll-smooth no-scrollbar">
            {/* Card 1 */}
            <div className="shrink-0">
            <img src="/Frame29.webp" alt="" className="w-[500px] h-[350px] object-cover" />
            <h2 className="text-[16px] tthoves pt-4">Maldives</h2>
            </div>

            {/* Card 2 */}
            <div className="shrink-0">
            <img src="/Frame29 (1).webp" alt="" className="w-[292px] h-[178px] object-cover" />
            <h2 className="text-[16px] tthoves pt-4">Amalfi Coast</h2>
            </div>

            {/* Card 3 */}
            <div className="shrink-0">
            <img src="/Frame29 (2).webp" alt="" className="w-[363px] h-[275px] object-cover" />
            <h2 className="text-[16px] tthoves pt-4">Dubai</h2>
            </div>

            {/* Card 4 */}
            <div className="shrink-0">
            <img src="/Frame29 (3).webp" alt="" className="w-[389px] h-[166px] object-cover" />
            <h2 className="text-[16px] tthoves pt-4">Santorini</h2>
            </div>
             {/* Button */}
              <div className="relative -translate-y-12 shrink-0 pr-10">
                <button
                  className="group relative overflow-hidden border border-[#0B1956] py-[8px] px-[20px]  transition-all duration-500 cursor-pointer "
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div
                    className={`absolute inset-0 bg-[#0B1956] transition-all duration-700 ease-out ${
                      isHovered
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0"
                    }`}
                  />
                  <div className="flex items-center gap-4 relative z-10">
                    <span
                      className={`text-[16PX]  font-medium  transition-all duration-500 ${
                        isHovered ? "text-[#ffffff]" : "text-[#0B1956]"
                      }`}
                    >
                      VIEW ALL
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-500 ${
                        isHovered
                          ? "translate-x-2 text-[#f4f4f4] scale-110"
                          : "text-[#0B1956]"
                      }`}
                    />
                  </div>
                </button>
              </div>
        </div>
        </div>

        <div className='relative mb-10 top-0 h-screen w-screen overflow-hidden'>
            <div
               className="absolute inset-0 bg-cover bg-center"
                 style={{ backgroundImage: `url(${pool})` }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-b from-[#FAF3EB] via-[#15151552] to-[#faf3eb00]"></div>
            <div className='relative flex flex-col items-center justify-center  '>
                <h1 className='font-semibold text-[25px] md:text-[32px] playfair text-[#0B1956]'>What are you waiting for ?</h1>
                <div className='ml-10 pt-18'>
                  <div className='relative md:translate-x-12 translate-x-22 w-[566px] mx-auto group overflow-hidden' onMouseEnter={ () => {setIsHovered(true)}} onMouseLeave={()=>setIsHovered(false)}>
                     <div className='flex  z-20  gap-7'>
                         <h2 className='md:text-[70px] text-[45px]  tthoves text-[#0B1956] font-medium'>BOOK NOW</h2>
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