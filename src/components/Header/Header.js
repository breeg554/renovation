import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import Logo from "../../images/logo.png"
import { FiMenu } from "react-icons/fi"
import { Link } from "gatsby"
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
  box-shadow: 0px 6px 35px -1px rgba(0, 0, 0, 0.13);
`
const LogoImg = styled.img`
  width: 60px;
  ${({ theme }) => theme.mediaQ.medium} {
    width: 80px;
  }
`
const NavBtn = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  text-align: center;
  z-index: 12;
  svg {
    font-size: 1.5rem;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.gray};
  }
`
const Navigation = styled.nav`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 11;
  background-color: #fff;
  padding: 0.5em 1em;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
`
const SideNav = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const NavElement = styled.li`
  margin-bottom: 2em;
  font-size: 1.5em;

  a {
    text-decoration: none;
    color: ${({ theme, isThat }) =>
      isThat ? theme.colors.orange : theme.colors.gray};
  }
`

const Header = props => {
  const wrapperRef = useRef(null)
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    const handleClickOutsite = e => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
        console.log("click")
      }
    }

    document.addEventListener("click", handleClickOutsite)

    return () => {
      document.removeEventListener("click", handleClickOutsite)
    }
  }, [wrapperRef])

  return (
    <HeaderWrapper ref={wrapperRef}>
      <LogoImg src={Logo} alt="logo Zbigniew Kustra" />
      <NavBtn onClick={() => setOpen(!isOpen)}>
        <FiMenu />
      </NavBtn>
      <Navigation isOpen={isOpen}>
        <SideNav>
          <NavElement isThat={props.location === "/" ? true : false}>
            <Link to="/">Strona głowna</Link>
          </NavElement>
          <NavElement isThat={props.location === "/about" ? true : false}>
            <Link to="/about">O mnie</Link>
          </NavElement>
          <NavElement isThat={props.location === "/gallery" ? true : false}>
            <Link to="/gallery">Galeria</Link>
          </NavElement>
        </SideNav>
      </Navigation>
    </HeaderWrapper>
  )
}

export default Header
