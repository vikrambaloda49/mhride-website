import About from '@/components/About/About'
import Featured from '@/components/Featured/Featured'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
// import SEO from '@/components/SEO'
import React from 'react'

const AboutPage = () => {
return (
    <>
    {/* <SEO
        title="About MHride | Medicine Hat Rideshare"
        description="Learn about with MHride — Medicine Hat’s affordable rideshare service."
        url="https://mhride.ca/about"
      /> */}
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
        <About/>

    </main>
    <Footer/>
    </>
  )
}

export default AboutPage;