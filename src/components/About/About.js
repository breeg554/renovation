import React from "react"
import { Title } from "../SectionTitle"
import ZK from "../../images/ZK.jpg"
import styled from "styled-components"

const AboutMe = styled.section`
  padding: 3em 0.5em 2em 0.5em;
  width: 100%;

  ${({ theme }) => theme.mediaQ.big} {
    padding: 5.5em 0.5em;
    margin-bottom: 2em;
  }
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mediaQ.medium} {
    max-width: 730px;

    margin: 0 auto;
    padding-left: 10px;
    position: relative;
    align-items: flex-start;
  }
  ${({ theme }) => theme.mediaQ.big} {
    max-width: 1100px;
  }
`
const ImgWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 60vh;
  min-height: 450px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    max-width: 450px;
    min-height: 480px;
    box-shadow: -14px 14px 17px -1px rgba(51, 51, 51, 0.5);
  }
  ${({ theme }) => theme.mediaQ.big} {
    height: 65vh;
    min-height: 550px;
    max-width: 550px;
  }
`
const ContentWrapper = styled.div`
  max-width: 500px;
  padding: 1em 0.5em;
  background-color: ${({ theme }) => theme.colors.white};
  h3 {
    color: ${({ theme }) => theme.colors.orange};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  h3:nth-of-type(2) {
    margin-bottom: 0.5em;
  }
  & > p {
    margin-bottom: 0.5em;
    line-height: 20px;
    font-size: 13px;
    font-weight: 100;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    padding: 2em;
    position: absolute;
    top: 5%;
    left: 50%;
    box-shadow: -14px 14px 17px -1px rgba(51, 51, 51, 0.64);
  }
  ${({ theme }) => theme.mediaQ.big} {
    max-width: 600px;
    left: 40%;
    top: 10%;
    h3 {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.xs};
      line-height: 25px;
    }
  }
`
const StyledAddress = styled.address`
  margin-top: 1em;
  p {
    font-style: normal;
    margin-bottom: 0.3em;
    color: #666;
  }
  span {
    color: ${({ theme }) => theme.colors.orange};
  }
  ${({ theme }) => theme.mediaQ.big} {
    p {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`
const About = () => {
  return (
    <AboutMe id="about">
      <Title>Trochę o mnie</Title>
      <Wrapper>
        <ImgWrapper>
          <img src={ZK} alt="Zbigniew Kustra" />
        </ImgWrapper>

        <ContentWrapper>
          <h3>Cześć,</h3>
          <h3>jestem Zbigniew </h3>
          <p>
            Posiadam ponad 20 letnie doświadczenie w branży. Pracowałem między
            innymi w Wielkiej Brytanii i Holandii przy kompleksowych
            wykończeniach wnętrz, dzięki czemu zdobyłem cenne praktyczne
            doświadczenie.
          </p>
          <p>
            Zlecenia wykonuję fachowo i w terminie bez zbędnego odwlekania w
            czasie. Gwarantuję konkurencyjne ceny.
          </p>
          <StyledAddress>
            <p>
              <span>Email:</span> z.kustra2@gmail.com
            </p>
            <p>
              <span>Tel:</span> +48 793 716 916
            </p>
          </StyledAddress>
        </ContentWrapper>
      </Wrapper>
    </AboutMe>
  )
}

export default About
