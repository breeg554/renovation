import React, { useState, useEffect } from "react"
import Header from "../components/Header/Header"
import theme from "./theme"
import Footer from "./Footer/Footer"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { AiOutlineLoading } from "react-icons/ai"
const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto', sans-serif;
  }
  button{
    border: none;
    cursor: pointer;
    &:focus{
      outline: none !important;
    }
  }
`
// const Preloader = styled.div`
//   display: ${({ isLoaded }) => (isLoaded ? "none" : "block")};
//   position: fixed;
//   z-index: 100;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-color: ${({ theme }) => theme.colors.darkGray};
//   color: #fff;
// `
export default function Layout(props) {
  // const [isLoaded, setLoaded] = useState(false)

  // useEffect(() => {
  //   setLoaded(true)
  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        {props.children}
        <Footer />

        {/* <Preloader isLoaded={isLoaded}>Loader</Preloader> */}
      </>
    </ThemeProvider>
  )
}
