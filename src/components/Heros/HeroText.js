// Imports
import React from "react"
import styled from "@emotion/styled"
import { Heading, Text } from "theme-ui"

// Component
const HeroText = props => {
  const { title, subtitle } = props
  return (
    <HeroContainer>
      <Heading
        as="h1"
        variant="text3Xl"
        sx={{
          width: "100%",
          maxWidth: 800,
          margin: "0 auto 0 auto",
          textAlign: "center",
          paddingTop: [80, 0],
        }}
      >
        {title}
      </Heading>
      <Text
        as="h2"
        variant="textLg"
        sx={{
          width: "100%",
          maxWidth: 520,
          margin: "40px auto 0 auto",
          textAlign: "center",
        }}
      >
        {subtitle}
      </Text>
    </HeroContainer>
  )
}

// Styled Components
const HeroContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default HeroText
