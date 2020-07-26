import React from "react"
import Layout from "../components/layout"
import Offer from "../components/Offer/Offers"
import Contact from "../components/Contact/Contact"
import About from "../components/About/About"
import Gallery from "../components/Gallery/Gallery"
import LandingPage from "../components/LandingPage/Wrapper"
import Seo from "../components/Seo"
const IndexPage = () => {
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
