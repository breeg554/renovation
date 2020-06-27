import React from "react"
import styled from "styled-components"

const StyledOffer = styled.article`
  background-color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 1.5em;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 100%;
  max-width: 450px;
  height: 150px;
  border-radius: 5px;
  &:hover img {
    transform: scale(1.1);
  }
`
const ImgWrapper = styled.div`
  max-width: 50%;
  height: 100%;
  overflow: hidden;
  img {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.1s ease-in-out;
  }
`
const ContentWrapper = styled.div`
  padding: 0.5em;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 300;
  }
`

const Offer = ({ data }) => {
  return (
    <StyledOffer>
      <ImgWrapper>
        <img src={data.img} alt={data.alt} />
      </ImgWrapper>
      <ContentWrapper>
        <h3>{data.name}</h3>
      </ContentWrapper>
    </StyledOffer>
  )
}

export default Offer
