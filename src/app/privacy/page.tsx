'use client'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Privacy from '@/components/Modals/Privacy/Privacy'
import SEO from '@/components/SEO'
import React from 'react'

const PrivacyPage = () => {
 return (
    <>
           <SEO
        title="Contact MHride | Medicine Hat Rideshare"
        description="Get in touch with MHride — Medicine Hat’s affordable rideshare service."
        url="https://mhride.ca/contact"
      />
    <Header/>
    <main>
      <Privacy/>
    </main>
    <Footer/>
    </>
  )
}

export default PrivacyPage