import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import WordmarkSvg from "../Svg/Wordmark"

const Wordmark = () => {
  return (
    <Wrap>
      <Link to="/">
        <WordmarkSvg />
      </Link>
    </Wrap>
  )
}

export default Wordmark

const Wrap = styled.div`
  z-index: 10;
  position: absolute;
  display: none;
  top: 42px;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    display: block;
  }
`
