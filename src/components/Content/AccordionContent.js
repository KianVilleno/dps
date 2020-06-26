// Import
import React from "react"
import styled from "@emotion/styled"
import { Heading, Text } from "theme-ui"
import Section, { Container } from "../../components/Section"
import { Row, Column } from "../../components/Grid"
// import Button from "../../components/Button"

// Components
const AccordionContent = ({ content }) => {
  let breakoutText
  let eventBody
  let infoBlocks = []

  /* eslint-disable-next-line */
  content.map(contentBlock => {
    if (contentBlock.model.apiKey === "breakout_text") {
      breakoutText = contentBlock.text
    }
    if (contentBlock.model.apiKey === "event_body") {
      eventBody = contentBlock.textNode.childMarkdownRemark.html
    }
    if (contentBlock.model.apiKey === "info_block") {
      infoBlocks.push(contentBlock)
    }
  })
  return (
    <SECTION>
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
            marginTop: 50,
            marginBottom: 100,
          }}
        >
          {breakoutText}
        </Heading>
        <Row>
          <ColumnOne>
            <Text
              as="div"
              variant="textBase"
              dangerouslySetInnerHTML={{
                __html: eventBody,
              }}
            />
          </ColumnOne>

          <ColumnTwo></ColumnTwo>
        </Row>
      </Container>
    </SECTION>
  )
}

// Styled Components
const SECTION = styled(Section)``

const ColumnOne = styled(Column)`
  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`
const ColumnTwo = styled(Column)`
  @media only screen and (min-width: 992px) {
    margin-left: auto;
    width: 40%;
    max-width: 340px;
  }

  a {
    margin-top: 10px;
  }
`

export default AccordionContent
