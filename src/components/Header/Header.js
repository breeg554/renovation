import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import Logo from "../../images/logo.png"
import { FiMenu } from "react-icons/fi"
import { Link } from "react-scroll"
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
  ${({ theme }) => theme.mediaQ.medium} {
    padding: 0.5em 1em;
  }
`
const LogoImg = styled.img`
  cursor: pointer;
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
  ${({ theme }) => theme.mediaQ.medium} {
    display: none;
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
  ${({ theme }) => theme.mediaQ.medium} {
    transition: none;
    transform: none;
    position: static;
    height: auto;
    padding: 0;
  }
`
const SideNav = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.mediaQ.medium} {
    flex-direction: row;
    justify-content: flex-end;
  }
`
const NavElement = styled.li`
  margin-bottom: 2em;
  font-size: 1.5em;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray};
    transition: color 0.1s ease-in-out;
  }
  a.active {
    color: ${({ theme }) => theme.colors.orange};
  }
  &:hover a {
    color: ${({ theme }) => theme.colors.orange};
  }
  ${({ theme }) => theme.mediaQ.medium} {
    margin: 0 0 0 0.4em;
    font-size: 1.2em;
  }
  ${({ theme }) => theme.mediaQ.big} {
    margin-left: 0.7em;
  }
`

const menuItems = [
  { id: "home", name: "Strona głowna" },
  { id: "about", name: "O mnie" },
  { id: "offers", name: "Usługi" },
  { id: "contact", name: "Kontakt" },
  { id: "gallery", name: "Galeria" },
]

const Header = props => {
  const wrapperRef = useRef(null)
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    const handleClickOutsite = e => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutsite)

    return () => {
      document.removeEventListener("click", handleClickOutsite)
    }
  }, [wrapperRef])

  return (
    <HeaderWrapper ref={wrapperRef}>
      <Link
        onClick={() => setTimeout(() => setOpen(false), 300)}
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-20}
        duration={500}
      >
        <LogoImg src={Logo} alt="Zbigniew Kustra" />
      </Link>

      <NavBtn onClick={() => setOpen(!isOpen)}>
        <FiMenu />
      </NavBtn>
      <Navigation isOpen={isOpen}>
        <SideNav>
          {menuItems.map((item, index) => (
            <NavElement key={index}>
              <Link
                onClick={() => setTimeout(() => setOpen(false), 300)}
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-30}
                duration={500}
              >
                {item.name}
              </Link>
            </NavElement>
          ))}
        </SideNav>
      </Navigation>
    </HeaderWrapper>
  )
}

export default Header
