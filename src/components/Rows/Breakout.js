import React from "react"
import { Heading } from "theme-ui"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Section, { Container } from "../Section"

const Breakout = ({ content }) => {
  return (
    <Section>
      <Container>
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
            marginBottom: [40, 100],
          }}
        >
          {documentToReactComponents(content.json, {})}
        </Heading>
      </Container>
    </Section>
  )
}

export default Breakout
