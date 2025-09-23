import React from 'react'
import menue from '../assets/menue-01.png'


const Navbar = () => {
  return (
     <div className=''>
        <div className='flex justify-between items-center pt-[27px] px-[40px]'>
            <h1 className='font-medium text-[32px] italic playfair text-[#0B1956]'>Eterna</h1>
            <img src={menue} alt="" />
       </div>
       <hr  className='top-[66px] text-[#696969] mx-[40px] mt-[20px]'/>
    </div>
  )
}

export default Navbar