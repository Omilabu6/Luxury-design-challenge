import React from 'react'
import frame29 from '../assets/Frame 29.png'
import frame29one from '../assets/Frame 29 (1).png'
import frame29two from '../assets/Frame 29 (2).png'
import frame29three from '../assets/Frame 29 (3).png'

const ThirdSection = () => {
  return (
    <div className='bg-[#FAF3EB]'>
    <div>
        <h1 className='font-medium pt-20 text-[75px] text-[#0B1956] text-center playfair '>Where Will You Escape To?</h1>
    </div>
    <div className='px-[40px] py-[70px] gap-[120px] flex overflow-auto'>
        <div>
            <img src={frame29} alt=""  className='w-[554px] h-[400px]'/>
            <h2 className='text-[16px] tthoves pt-4'>Maldives</h2>
        </div>
        <div>
            <img src={frame29one} alt=""  className='w-[554px] h-[400px]'/>
            <h2 className='text-[16px] tthoves pt-4'>Maldives</h2>
        </div>
        <div>
            <img src={frame29two} alt=""  className='w-[554px] h-[400px]'/>
            <h2 className='text-[16px] tthoves pt-4'>Maldives</h2>
        </div>
        <div>
            <img src={frame29third} alt=""  className='w-[554px] h-[400px]'/>
            <h2 className='text-[16px] tthoves pt-4'>Maldives</h2>
        </div>
        
    </div>
    </div>
  )
}

export default ThirdSection