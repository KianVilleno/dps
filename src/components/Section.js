import styled from "@emotion/styled"
import { maxWidth } from "../styles/settings"

const Section = styled.section`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 80px 0;
  padding-top: ${(props => props.pt) ? props => props.pt : "80px"};
  padding-bottom: ${(props => props.pb) ? props => props.pb : "80px"};
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
