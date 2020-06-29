import React from "react"
import styled from "styled-components"

const StyledOffer = styled.article`
  position: relative;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  height: 190px;
  margin-bottom: 1em;
  h3 {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`

const Offer = ({ data }) => {
  return (
    <StyledOffer img={data.img}>
      <h3>{data.name}</h3>
    </StyledOffer>
  )
}
export default Offer
