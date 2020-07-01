import React from "react"
import styled from "styled-components"
import img from "../../images/main.jpg"
const Wrap = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
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
    background-color: rgba(0, 0, 0, 0.5);
  }
  ${({ theme }) => theme.mediaQ.big} {
    background-position: center;
  }
`
const HeadingWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 0.5em;
  z-index: 1;
  ${({ theme }) => theme.mediaQ.small} {
    left: 1em;
  }
`
const Name = styled.h1`
  font-size: 2.2rem;
  font-weight: 300;
  ${({ theme }) => theme.mediaQ.small} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  ${({ theme }) => theme.mediaQ.medium} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  ${({ theme }) => theme.mediaQ.big} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`
const SubTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 100;
  ${({ theme }) => theme.mediaQ.small} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  ${({ theme }) => theme.mediaQ.big} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`
const Wrapper = () => {
  return (
    <Wrap id="home">
      <HeadingWrapper>
        <Name>Zbigniew Kustra</Name>
        <SubTitle>Usługi remontowo-budowlane</SubTitle>
      </HeadingWrapper>
    </Wrap>
  )
}

export default Wrapper
