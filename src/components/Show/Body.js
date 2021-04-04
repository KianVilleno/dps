// Import
import React from "react"
import styled from "@emotion/styled"
import { Heading, Text, Box } from "theme-ui"
import Section, { Container } from "../../components/Section"
import { Row, Column } from "../../components/Grid"
import Accordion from "../../components/Accordion"
import Button from "../../components/Button"
// Components
export const Body = props => {
  const { title, content, sideContent, accordions } = props.sectionData
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
          {title}
        </Heading>
        <Row>
          <ColumnOne>
            <Text as="p" variant="textBase">
              {content}
            </Text>
          </ColumnOne>

          <ColumnTwo>
            {sideContent.map((block, index) => (
              <Box
                key={index}
                sx={{
                  ":not(:nth-of-type(1))": {
                    marginTop: 50,
                  },
                }}
              >
                <Text as="p" variant="textBase">
                  {block.text}
                </Text>
                {block.showButton ? (
                  <Button variant="primary" href={block.buttonLink}>
                    {block.buttonText}
                  </Button>
                ) : null}
              </Box>
            ))}
          </ColumnTwo>
        </Row>

        {accordions.map((accordion, index) => (
          <Accordion titleText={accordion.title} key={index}>
            {accordion.content}
          </Accordion>
        ))}
      </Container>
    </SECTION>
  )
}

// Styled Components
const SECTION = styled(Section)``

const Title = styled.h2`
  font-weight: 300;
  font-size: 51px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
`

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

export default Body
