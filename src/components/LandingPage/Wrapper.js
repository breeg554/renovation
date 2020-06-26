import React from "react"
import styled from "styled-components"
import img from "../../images/main.jpg"
const Wrap = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-position: right;
  color: #fff;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
`
const HeadingWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 0.5em;
  z-index: 1;
`
const Name = styled.h1`
  font-size: 2.2rem;
  font-weight: 300;
`
const SubTitle = styled.h1`
  font-size: 1rem;
  font-weight: 100;
`
const Wrapper = () => {
  return (
    <Wrap>
      <HeadingWrapper>
        <Name>Zbigniew Kustra</Name>
        <SubTitle>Usługi remontowo-budowlane</SubTitle>
      </HeadingWrapper>
    </Wrap>
  )
}

export default Wrapper
