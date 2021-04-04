import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import WordmarkSvg from "../Svg/Wordmark"
import { useThemeUI } from "theme-ui"

const Wordmark = ({ hasHero }) => {
  const context = useThemeUI()
  const { colorMode, theme } = context
  const { wordMark, wordMarkHero } = theme.colors.modes[colorMode]

  let color = theme.colors.textOther
  if (hasHero && wordMarkHero) {
    color = wordMarkHero
  } else if (!hasHero && wordMark) {
    color = wordMark
  }

  return (
    <Wrap>
      <Link to="/">
        <WordmarkSvg color={color} />
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
