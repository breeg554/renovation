import styled from "styled-components"
export const Title = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 1.5em;
  text-align: center;
  ::after {
    content: "";
    position: absolute;
    display: inline-block;
    z-index: 10;
    top: 100%;
    left: 50%;
    color: ${({ theme }) => theme.colors.orange};
    width: 50px;
    height: 10px;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom: 2em;
  }
  ${({ theme }) => theme.mediaQ.big} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 2em;
  }
`
