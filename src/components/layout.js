import React from "react"
import Header from "../components/Header/Header"
import theme from "./theme"
import Footer from "./Footer/Footer"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
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
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header location={props.location} />
        {props.children}
        <Footer />
      </ThemeProvider>
    </div>
  )
}
