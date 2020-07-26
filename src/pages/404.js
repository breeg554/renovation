import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NotFoundPage = () => (
  <Wrap>
    <h1>Nie ma takiej strony</h1>
    <Link to="/">Wroc do stroy głównej</Link>
  </Wrap>
)

export default NotFoundPage
