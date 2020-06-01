// Imports
import React from "react"
import styled from "@emotion/styled"
import Section from "./Section"
import { Row, Column } from "./Grid"
import Button from "./Button"
import { Subtitle, Paragraph } from "./Typography"

// Components
const CTASection = props => {
  const { sectionData } = props
  return (
    <Section>
      <Row>
        {sectionData.map(CTAData => {
          const { title, content, buttonText, buttonLink } = CTAData
          return (
            <Column>
              <CTA
                title={title}
                content={content}
                buttonText={buttonText}
                buttonLink={buttonLink}
              />
            </Column>
          )
        })}
      </Row>
    </Section>
  )
}

const CTA = props => {
  const { bgColor, title, content, buttonText, buttonLink } = props
  return (
    <AlignCenter bgColor={bgColor}>
      <Subtitle>{title}</Subtitle>
      <Paragraph mt="30px" maxWidth="450px">
        {content}
      </Paragraph>
      <Button to={buttonLink} mt="30px">
        {buttonText}
      </Button>
    </AlignCenter>
  )
}

// Styled Components
const AlignCenter = styled.div`
  padding: 80px 30px;
  background-color: ${props => props.bgColor};
  text-align: center;
`

// Mock Data
const CTASectionData = [
  {
    bgColor: "#fafcfa",
    title: "Schools & Workshops",
    content:
      "We offer tailored education programs to schools ascross Australia.",
    buttonText: "More info",
    buttonLink: "#",
  },
  {
    bgColor: "#fafafc",
    title: "Public Space Activations",
    content:
      "We offer tailored education programs to schools ascross Australia.",
    buttonText: "More info",
    buttonLink: "#",
  },
]

export default CTASection
