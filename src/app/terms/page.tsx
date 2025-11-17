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
        title="Terms and Conditions MHride | Medicine Hat Rideshare"
        description="Your access and use of the Services constitutes your agreement to be bound by these Terms, which establishes a contractual relationship between you and MHride."
        url="https://mhride.ca/terms"
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