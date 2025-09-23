import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'

const App = () => {
  return (
    <div>
      <div className='h-[200vh]'>
        <div className='sticky overflow-hidden -z-10 top-0 h-screen'>
          <Navbar />
          <HeroSection />
       </div>
       <div className='h-screen  z-80'>
          <SecondSection/>
       </div>
      </div>
      <ThirdSection />
      {/* <Footer /> */}
    </div>
  )
}

export default App