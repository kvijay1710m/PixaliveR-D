import React from 'react'
import HeroCarousel from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'

const Landing = () => {
  return (
    <div>
      <div className='pt-15'>
        <HeroCarousel />
      </div>
      <Footer />
    </div>
  )
}

export default Landing