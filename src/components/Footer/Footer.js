import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 1em 0.5em;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkGray};
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p,
  h4 {
    color: ${({ theme }) => theme.colors.white};
  }
  h4 {
    font-weight: 300;
    font-size: 1em;
  }
  p {
    font-weight: 100;
    font-size: 0.7em;
  }
  p:nth-of-type(1) {
    margin-bottom: 0.4em;
  }
`
const Footer = () => {
  return (
    <StyledFooter>
      <Content>
        <h4>Zbigniew Kustra</h4>
        <p>Usługi remontowo-budowlane</p>
        <p>+666 332 333</p>
      </Content>
    </StyledFooter>
  )
}

export default Footer
