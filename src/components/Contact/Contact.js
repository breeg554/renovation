import React from "react"
import styled from "styled-components"
import { Title } from "../SectionTitle"
import { AiOutlineMail } from "react-icons/ai"
import { BsPhone } from "react-icons/bs"
import { FiPhone } from "react-icons/fi"
const ContactWrapper = styled.section`
  width: 100%;
  padding: 2em 1rem;
  text-align: center;
`

const DetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.2em;
  font-style: normal;
  p:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.3em;
    margin-bottom: 0.4em;
  }
  p:nth-of-type(2) {
    color: #555;
  }
`
const Icon = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 0.1em;
`

const Contact = () => {
  return (
    <ContactWrapper>
      <Title>Kontakt</Title>
      <address>
        <DetailsWrapper>
          <Icon>
            <AiOutlineMail />
          </Icon>
          <p>Email</p>
          <p>zkustra.gmail.com</p>
        </DetailsWrapper>
        <DetailsWrapper>
          <Icon>
            <BsPhone />
          </Icon>
          <p>Tel</p>
          <p>333 222 111</p>
        </DetailsWrapper>
        <DetailsWrapper>
          <Icon>
            <FiPhone />
          </Icon>
          <p>Tel</p>
          <p>16 3322211</p>
        </DetailsWrapper>
      </address>
    </ContactWrapper>
  )
}

export default Contact
