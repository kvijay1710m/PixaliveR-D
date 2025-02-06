import React from 'react'
import HeroCarousel from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import Mission from '../components/Mission/Mission'
import Services from '../components/Services/Services'
import ShowReel from '../components/ShowReel/ShowReel'
import Ourwork from '../components/Ourwork/Ourwork'
import Whyus from '../components/Whyus/Whyus'

const Landing = () => {
  return (
    <div>
      <div className='pt-15'>
        <HeroCarousel />
      </div>
      <Mission />
      <Services />
      <ShowReel />
      <Ourwork />
      <Whyus />
      <Footer />
    </div>
  )
}

export default Landing