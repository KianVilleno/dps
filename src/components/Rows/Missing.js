import React from "react"
import { Heading } from "theme-ui"
import Section, { Container } from "../Section"

const Missing = ({ rowType }) => {
  return (
    <Section>
      <Container>
        <Heading
          as="h2"
          variant="text2Xl"
          sx={{
            textAlign: "center",
            width: "100%",
            maxWidth: 1045,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 0,
            marginBottom: [40, 100],
          }}
        >
          Insert → <em>{rowType}</em>
        </Heading>
      </Container>
    </Section>
  )
}

export default Missing
