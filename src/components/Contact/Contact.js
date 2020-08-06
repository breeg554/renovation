import React from "react"
import styled from "styled-components"
import { Title } from "../SectionTitle"
import { AiOutlineMail } from "react-icons/ai"
// Ant Design Icons - https://github.com/ant-design/ant-design-icons
// License: MIT https://opensource.org/licenses/MIT
// Bootstrap Icons - https://github.com/twbs/icons
// License: MIT https://opensource.org/licenses/MIT
import bgcImage from "../../images/main2.jpg"
import { BsPhone } from "react-icons/bs"
const ContactWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 2em 1em;
  margin-bottom: 2em;
  text-align: center;
  background-image: url(${bgcImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;

  h2 {
    z-index: 1;
    color: #fff;
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
  ${({ theme }) => theme.mediaQ.medium} {
    margin-top: 6em;
  }
  ${({ theme }) => theme.mediaQ.big} {
    padding: 5em 1em;
  }
`
const Adress = styled.address`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  ${({ theme }) => theme.mediaQ.small} {
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
  }
`
const DetailsWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  padding: 1em 0.5em;
  margin-bottom: 1.2em;
  margin-left: auto;
  margin-right: auto;
  font-style: normal;
  p:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.3em;
    margin-bottom: 0.4em;
  }
  p:nth-of-type(2) {
    color: #444;
  }
  ${({ theme }) => theme.mediaQ.small} {
    width: 33%;
    margin-left: 0.5em;
    margin-right: 0.5em;
    max-width: 350px;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    p:nth-of-type(1) {
      font-size: 1.6em;
    }
    span {
      font-size: 2.5em;
    }
  }
`
const Icon = styled.span`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 0.1em;
`

const Contact = () => {
  return (
    <ContactWrapper id="contact" className="scroll">
      <Title>Kontakt</Title>
      <Adress>
        <DetailsWrapper>
          <Icon data-license="Copyright (c) 2019 The Bootstrap Authors">
            <BsPhone />
          </Icon>
          <p>Tel:</p>
          <p>+48 793 716 916</p>
        </DetailsWrapper>
        <DetailsWrapper>
          <Icon data-license="Copyright (c) 2018-present Ant UED, https://xtech.antfin.com/">
            <AiOutlineMail />
          </Icon>
          <p>Email:</p>
          <p>z.kustra2@gmail.com</p>
        </DetailsWrapper>
      </Adress>
    </ContactWrapper>
  )
}

export default Contact
