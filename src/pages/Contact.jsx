import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Contact = () => {
  return (
    <>
        <div className='mt-18'>
            <ContactForm/>
            <Footer />
        </div>
    </>
  )
}

export default Contact