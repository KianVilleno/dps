import React from "react"
import Text from "./Text"
import styled from "@emotion/styled"

const AccordionText = ({ content }) => (
  <Wrap>
    <Text content={content} />
  </Wrap>
)

export default AccordionText

const Wrap = styled.div`
  padding: 20px 0px 30px 0px;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    padding: 40px 0px 50px 0px;
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    padding: 60px 0px 75px 0px;
  }
  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    padding: 55px 0px 70px 0px;
  }
`
