import React from "react"
import styled from "styled-components"
import { offers } from "../../data-content/offers"
import { Title } from "../SectionTitle"
import Offer from "./Offer"

const OurOffer = styled.section`
  width: 100%;
  padding: 3em 1rem;
  text-align: center;
  ${({ theme }) => theme.mediaQ.medium} {
    padding: 6em 1rem;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQ.medium} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.5em;
  }
  ${({ theme }) => theme.mediaQ.large} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1em;
    max-width: 1350px;
  }
`
const Offers = () => {
  const allOffers = offers.map((single, index) => (
    <Offer key={index} data={single} />
  ))
  return (
    <OurOffer id="offers" className="scroll">
      <Title>Moje Usługi</Title>
      <Wrapper>{allOffers}</Wrapper>
    </OurOffer>
  )
}

export default Offers
