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
  padding: 20px 5px 30px 5px;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    padding: 40px 20px 50px 20px;
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    padding: 60px 35px 75px 35px;
  }
  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    padding: 75px 35px 90px 35px;
  }
`
