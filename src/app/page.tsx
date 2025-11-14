import FAQ, { FAQItem } from '@/components/FAQ'
import Featured from '@/components/Featured/Featured'
import Hero from '@/components/Hero'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import MHDriver from '@/components/MHDriver'
import OurLocations from '@/components/OurLocations'
import Testimonials from '@/components/Testimonials'
import React from 'react'
import SEO from '@/components/SEO'
import DownloadSection from '@/components/Contact/DownloadSection'
import CTASection from '@/components/HowItWorks/CTASection'



const rideShareFaq: FAQItem[] = [
  {
    id: "1",
    question: "What areas do you serve?",
    answer:
      "We proudly serve Medicine Hat, Alberta, and nearby communities including Redcliff, Dunmore, Desert Blume, and other surrounding areas. We’re always expanding, so check the app for the latest coverage updates!",
  },
  {
    id: "2",
    question: "How do I book a ride?",
    answer:
      "Booking a ride is simple! Download our mobile app, create an account, and enter your pickup and drop-off locations. You’ll see the estimated fare before confirming. Once booked, you can track your driver in real time.",
  },
  {
    id: "3",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, Apple Pay, and Cash.",
  },
  {
    id: "4",
    question: "How quickly can I get a ride?",
    answer:
      "Most riders in Medicine Hat can expect a driver to arrive within 2–3 minutes during normal hours. Wait times may be slightly longer during peak travel times or special events.",
  },
];

const page = () => 
  {
  return (
    <>
           <SEO
        title="MHride | Affordable Rideshare in Medicine Hat & Area"
        description="MHride is Medicine Hat’s trusted rideshare service. Affordable rides starting at just $4.90, serving Medicine Hat, Redcliff, Dunmore, and nearby areas. Fast, safe, and reliable."
        url="https://mhride.ca/"
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
      <Hero/>
      <OurLocations/>
      <MHDriver/>
            <FAQ
        title="Ride with Confidence"
        subtitle="Your questions about Medicine Hat’s local rideshare service, answered."
        items={rideShareFaq}
        theme="light" // Try switching to "dark" for a cool dark mode
        iconType="chevron"
        allowMultiple={true}
        animationDuration={0.5}
        staggerDelay={0.1}
      />
      <Testimonials/>
      <CTASection/>
    </main>
    <Footer/>
    </>
  )
}

export default page