import React from "react"
import styled from "styled-components"
import { offers } from "../../utils/data"
import Offer from "./Offer"
const OurOffer = styled.section`
  width: 100%;
  padding: 2em 1rem;
  text-align: center;
`
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: ${({ theme }) => theme.margins.mobile};
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Offers = () => {
  const allOffers = offers.map((single, index) => (
    <Offer key={index} data={single} />
  ))
  return (
    <OurOffer>
      <Title>Oferta</Title>
      <Wrapper>{allOffers}</Wrapper>
    </OurOffer>
  )
}

export default Offers
