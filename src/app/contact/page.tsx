import Contact from '@/components/Contact/Contact';
// import { FAQItem } from '@/components/FAQ';
import Featured from '@/components/Featured/Featured';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import SEO from '@/components/SEO';
import React from 'react'

// const rideShareFaq: FAQItem[] = [
//   {
//     id: "1",
//     question: "What areas do you serve?",
//     answer:
//       "We proudly serve Medicine Hat, Alberta, and nearby communities including Redcliff, Dunmore, Desert Blume, and other surrounding areas. We’re always expanding, so check the app for the latest coverage updates!",
//   },
//   {
//     id: "2",
//     question: "How do I book a ride?",
//     answer:
//       "Booking a ride is simple! Download our mobile app, create an account, and enter your pickup and drop-off locations. You’ll see the estimated fare before confirming. Once booked, you can track your driver in real time.",
//   },
//   {
//     id: "3",
//     question: "What payment methods do you accept?",
//     answer:
//       "We accept all major credit and debit cards, Apple Pay, Google Pay, and select local payment options. For safety reasons, we do not accept cash payments at this time.",
//   },
//   {
//     id: "4",
//     question: "How quickly can I get a ride?",
//     answer:
//       "Most riders in Medicine Hat can expect a driver to arrive within 5–10 minutes during normal hours. Wait times may be slightly longer during peak travel times or special events.",
//   },
// ];

const ContactPage = () => 
  {
  return (
    <>
           <SEO
        title="Contact MHride | Medicine Hat Rideshare"
        description="Get in touch with MHride — Medicine Hat’s affordable rideshare service."
        url="https://mhride.ca/contact"
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
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}


export default ContactPage