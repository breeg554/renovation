import React from "react"
import Layout from "../components/Layout"
import Offer from "../components/Offer/Offers"
import Contact from "../components/Contact/Contact"
import About from "../components/About/About"
import Gallery from "../components/Gallery/Gallery"
import LandingPage from "../components/LandingPage/Wrapper"

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <LandingPage />
        <About />
        <Offer />

        <Contact />
        {/* <Slider /> */}
        <Gallery />
      </main>
    </Layout>
  )
}

export default IndexPage
