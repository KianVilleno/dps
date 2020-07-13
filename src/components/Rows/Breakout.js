import React from "react"
import { Heading, useThemeUI, Box } from "theme-ui"
import styled from "@emotion/styled"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Container } from "../Section"

const Breakout = ({ content }) => {
  const { theme } = useThemeUI()
  return (
    <Container>
      <Box pl={3} pr={3} pt={[2, 3]} pb={[2, 3]}>
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
            }}
          >
            {documentToReactComponents(content.json, {})}
          </Heading>
        </BreakoutEl>
      </Box>
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
