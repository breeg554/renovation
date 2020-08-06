import React, { useEffect } from "react"
import Layout from "../components/layout"
import Offer from "../components/Offer/Offers"
import Contact from "../components/Contact/Contact"
import About from "../components/About/About"
import Gallery from "../components/Gallery/Gallery"
import LandingPage from "../components/LandingPage/Wrapper"
import Seo from "../components/Seo"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const IndexPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll")
    sections.forEach(section => {
      gsap.fromTo(
        section.children,
        {
          y: "+=100",
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 20%",
          },
        }
      )
    })
  })
  return (
    <Layout>
      <main id="root">
        <Seo />
        <LandingPage />
        <About />
        <Offer />
        <Contact />
        <Gallery />
      </main>
    </Layout>
  )
}

export default IndexPage
