// Imports
import React from "react"
import styled from "@emotion/styled"
import { Heading, Image } from "theme-ui"

// Component
const HeroCenterImage = props => {
  const { title, image } = props
  return (
    <HeroContainer>
      <Heading
        as="h1"
        variant="text3Xl"
        sx={{
          width: "100%",
          maxWidth: 800,
          margin: "100px auto 0 auto",
          textAlign: "center",
        }}
      >
        {title}
      </Heading>

      <Image
        src={image.url}
        alt={image.alt}
        sx={{ margin: "46px auto 0 auto", maxWidth: 482, width: " 100%" }}
      />
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
  margin-top: 80px;
  width: 100%;
`

export default HeroCenterImage
