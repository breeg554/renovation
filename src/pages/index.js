import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Offer from "../components/Offer/Offers"
import { Link } from "gatsby"
import LandingPage from "../components/LandingPage/Wrapper"

const IndexPage = () => {
  return (
    <Layout>
      <LandingPage />
      <Offer />
    </Layout>
  )
}

export default IndexPage
