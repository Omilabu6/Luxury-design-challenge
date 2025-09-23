import React from 'react'
import copy from '../assets/copy.png'
import arrow from '../assets/arrow.png'

const Footer = () => {
  return (
    <div className='bg-[#0B1956]'>
    <div className='relative p-[60px] -translate-y-70 h-screen rounded-t-[24px] text-white bg-[#0B1956]'>
        <div className='flex justify-between text-[20px] tthoves'>
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
  return(
    <div className=''>
       <div className=''><h1 className='text-[31em]  italic playfair'>Eterna</h1></div>
        <div className='flex text-2xl justify-between '><span className='flex flex-row'>Copyright <img src={copy} alt="" className='w-10 h-10'/>Eterna</span> <span className='flex items-center justify-center gap-2'><span className='border p-3'><img src={arrow} alt="" className='-rotate-90'/></span>BACK TO TOP</span></div>
    
    </div>
  );
 }