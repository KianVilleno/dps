import React from "react"
import styled from "@emotion/styled"
import { maxWidth } from "../styles/settings"
import { Box } from "theme-ui"

export const Section = ({ children, isMt, isMb }) => {
  const marginBottom = isMb ? ["1em", "6vw"] : [0]
  const marginTop = isMt ? ["1em", "6vw"] : [0]

  return <StyledBox sx={{ marginBottom, marginTop }}>{children}</StyledBox>
}

const StyledBox = styled(Box)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: ${(props => props.pt) ? props => props.pt : "20px"};
  padding-bottom: ${(props => props.pb) ? props => props.pb : "20px"};
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    padding-top: ${(props => props.pt) ? props => props.pt : "40px"};
    padding-bottom: ${(props => props.pb) ? props => props.pb : "40px"};
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    padding-top: ${(props => props.pt) ? props => props.pt : "80px"};
    padding-bottom: ${(props => props.pb) ? props => props.pb : "80px"};
  }
`

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  padding: ${props =>
    props.outset ? `0px 40px` : `0px calc(-40px + ${(1 / 12) * 100}%)`};
  width: 100%;
  max-width: ${maxWidth};
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    padding: 0 25px;
  }
`

export default Section
