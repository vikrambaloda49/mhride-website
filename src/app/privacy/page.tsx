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
        title="Privacy Policy MHride | Medicine Hat Rideshare"
        description="This page describes MHrides's data practices when you use Mhride app to ride and drive."
        url="https://mhride.ca/privacy"
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