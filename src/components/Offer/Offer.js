import React from "react"
import styled from "styled-components"

const StyledOffer = styled.article`
  background-color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 1.5em;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 100%;
  height: 150px;
  border-radius: 5px;
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
  console.log(data.img)
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
