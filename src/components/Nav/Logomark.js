import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import LogoMarkSvg from "../Svg/LogoMark"
import { useThemeUI } from "theme-ui"

const Logomark = ({ show, hasHero }) => {
  const context = useThemeUI()
  const { colorMode, theme } = context
  const { logoMark, logoMarkHero } = theme.colors.modes[colorMode]

  let color = theme.colors.textOther
  if (hasHero && logoMarkHero) {
    color = logoMarkHero
  } else if (!hasHero && logoMark) {
    color = logoMark
  }

  if (!show) return null

  return (
    <Wrap>
      <Link to="/">
        <LogoMarkSvg size="sm" color={color} />
      </Link>
    </Wrap>
  )
}

export default Logomark

const Wrap = styled.div`
  z-index: 10;
  position: fixed;
  top: 22px;
  right: 20px;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    top: 31px;
    right: 47px;
  }
`
