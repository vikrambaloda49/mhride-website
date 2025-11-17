import Featured from '@/components/Featured/Featured'
import InteractiveHowItWorks from '@/components/HowItWorks/HowItWorksMain'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import SEO from '@/components/SEO'
import React from 'react'

const HowitWorksPage = () => 
{
  return (
    <>
           <SEO
        title="Contact MHride | Medicine Hat Rideshare"
        description="Get in touch with MHride — Medicine Hat’s affordable rideshare service."
        url="https://mhride.ca/how-it-works"
      />
    <Header/>
    <Featured
    message="🔥 Downlaod the App Now for Exclusive Offers"

        theme="light" // try "dark" or "custom"
        customColors={{
          background: "bg-red-600",
          text: "text-white",
          accent: "hover:underline",
        }}/>
    <main>
      <InteractiveHowItWorks/>
    </main>
    <Footer/>
    </>
  )

}

export default HowitWorksPage