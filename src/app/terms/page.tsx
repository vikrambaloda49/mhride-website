'use client'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Terms from '@/components/Modals/Terms/Terms'
import SEO from '@/components/SEO'
import React from 'react'

const TermsPage = () => {
 return (
    <>
           <SEO
        title="Contact MHride | Medicine Hat Rideshare"
        description="Get in touch with MHride — Medicine Hat’s affordable rideshare service."
        url="https://mhride.ca/contact"
      />
    <Header/>
    <main>
      <Terms/>
    </main>
    <Footer/>
    </>
  )
}

export default TermsPage