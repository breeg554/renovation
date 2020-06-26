import React from "react"
import styled from "styled-components"
import Logo from "../../images/logo2.png"
import { FiMenu } from "react-icons/fi"
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
`
const LogoImg = styled.img`
  width: 60px;
`
const NavBtn = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  text-align: center;
  svg {
    font-size: 1.5rem;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.gray};
  }
`
const Header = () => {
  return (
    <HeaderWrapper>
      <LogoImg src={Logo} alt="logo Zbigniew Kustra" />
      <NavBtn>
        <FiMenu />
      </NavBtn>
    </HeaderWrapper>
  )
}

export default Header
