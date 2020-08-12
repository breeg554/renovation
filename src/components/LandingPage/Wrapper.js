import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import img from "../../images/main.jpg"
import gsap from "gsap"
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
  opacity: 0;
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
  opacity: 0;
  ${({ theme }) => theme.mediaQ.small} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  ${({ theme }) => theme.mediaQ.big} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`
const Wrapper = () => {
  const titleWrap = useRef(null)
  const subtitleWrap = useRef(null)
  useEffect(() => {
    const title = titleWrap.current
    const subtitle = subtitleWrap.current

    gsap.set([title, subtitle], { autoAlpha: 0 })
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })
    tl.fromTo(
      title,
      { x: "-=300" },
      { duration: 1, delay: 0.5, x: "+=300", autoAlpha: 1, opacity: 1 }
    ).fromTo(
      subtitle,
      { x: "-=300" },
      { duration: 1, x: "+=300", autoAlpha: 1, opacity: 1 },
      "-=0.75"
    )
  }, [])
  return (
    <Wrap id="home">
      <HeadingWrapper>
        <Name ref={titleWrap}>Zbigniew Kustra</Name>
        <SubTitle ref={subtitleWrap}>Usługi remontowo-budowlane</SubTitle>
      </HeadingWrapper>
    </Wrap>
  )
}

export default Wrapper
