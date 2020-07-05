// Imports
import React from "react"
import styled from "@emotion/styled"
import { Container } from "../Section"
// import { colors } from "../../styles/settings"
import ShapeLarge from "./ShapeLarge"
import ShapeMini from "./ShapeMini"
import { Box } from "theme-ui"

export const Shapes = ({ content }) => {
  const shapesContent = content.map((shape, index) => {
    const [shapeType, shapeSize] = shape.type.toLowerCase().split(" ")
    const shapeProps = {
      shape: shapeType,
      ...shape,
    }
    return shapeSize === "large" ? (
      <Item pb={[0, "0vw"]} key={`shape-${index}`}>
        <ShapeLarge {...shapeProps} />
      </Item>
    ) : (
      <Item pb={["10vw", "5vw"]} key={`shape-${index}`}>
        <ShapeMini {...shapeProps} />
      </Item>
    )
  })

  return (
    <Container outset={true}>
      <Items>{shapesContent}</Items>
    </Container>
  )
}

export default Shapes

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr 1fr;
  }
`

const Item = styled(Box)``
