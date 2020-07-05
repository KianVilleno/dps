import React from "react"
import { Heading, useThemeUI } from "theme-ui"
import styled from "@emotion/styled"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Container } from "../Section"

const Breakout = ({ content }) => {
  const { theme } = useThemeUI()
  return (
    <Container>
      <BreakoutEl color={theme.colors.text}>
        <Heading
          as="h2"
          variant="text2Xl"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            width: "100%",
            maxWidth: 1045,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 0,
            marginBottom: [20, 30],
          }}
        >
          {documentToReactComponents(content.json, {})}
        </Heading>
      </BreakoutEl>
    </Container>
  )
}

export default Breakout

const BreakoutEl = styled.div`
  h2 {
    a {
      color: ${props => props.color};
    }
  }
`
