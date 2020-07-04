import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import LogoMarkSvg from "../Svg/LogoMark"
import { colors } from "../../styles/settings"

const Logomark = ({ show }) => {
  if (!show) return null
  return (
    <Wrap>
      <Link to="/">
        <LogoMarkSvg size="sm" color={colors.granola} />
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
    top: 32px;
    right: 40px;
  }
`
