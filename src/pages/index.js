import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Offer from "../components/Offer/Offers"
import Contact from "../components/Contact/Contact"
import Slider from "../components/Slider/Slider"
import { Link } from "gatsby"
import LandingPage from "../components/LandingPage/Wrapper"

const IndexPage = () => {
  return (
    <Layout location="/">
      <LandingPage />
      <Offer />
      <Slider />
      <Contact />
    </Layout>
  )
}

export default IndexPage
