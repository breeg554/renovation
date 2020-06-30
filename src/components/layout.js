import React from "react"
import Header from "../components/Header/Header"
import theme from "./theme"
import Footer from "./Footer/Footer"
import { ThemeProvider, createGlobalStyle } from "styled-components"

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

export default function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        {props.children}
        <Footer />
      </>
    </ThemeProvider>
  )
}
