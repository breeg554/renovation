import React from "react"
import styled from "styled-components"
import { offers } from "../../data-content/offers"

const StyledFooter = styled.footer`
  padding: 1.5em 0.5em;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkGray};
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  ${({ theme }) => theme.mediaQ.medium} {
    flex-direction: row;
    padding: 2.5em 0.5em;
  }
  ${({ theme }) => theme.mediaQ.big} {
    padding: 3em 0.5em;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2em;
  margin-left: 5%;
  h4 {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.5em;
  }
  p {
    font-weight: 100;
    font-size: 0.9em;
    color: #aaa;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    margin: 0 0.5em;
  }
  ${({ theme }) => theme.mediaQ.big} {
    margin: 0 2.5em;
    h4 {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`
const List = styled.ul`
  list-style: none;
  li {
    color: #aaa;
    font-size: 0.9em;
    margin-bottom: 0.3em;
  }
`
const Footer = () => {
  return (
    <StyledFooter>
      <Content>
        <h4>Zbigniew Kustra</h4>
        <p>Usługi remontowo-budowlane</p>
      </Content>

      <Content>
        <h4>Usługi</h4>
        <List>
          {offers.map(offer => (
            <li key={offer.id}>{offer.name}</li>
          ))}
        </List>
      </Content>
      <Content>
        <h4>Kontakt</h4>
        <List>
          <li>Tel: +48 312 313 111</li>
          <li>Email: zbigniew@gamil.com</li>
        </List>
      </Content>
    </StyledFooter>
  )
}

export default Footer
