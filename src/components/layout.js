import React from "react"
import Header from "../components/Header/Header"
import theme from "./theme"
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
export default function Layout({ children }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {children}
      </ThemeProvider>
    </div>
  )
}
