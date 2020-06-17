// Imports
import React from "react"

// Component
const HeroImage = props => {
  return (
    <HeroContainer>
      <Heading as="h1" variant="text4Xl">
        Visual Theater Process
      </Heading>
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
  height: 500px;
`
