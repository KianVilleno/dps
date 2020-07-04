// Imports
import React from "react"
import styled from "@emotion/styled"
import Section, { Container } from "../Section"
import { Row, Column } from "../Grid"
import { colors } from "../../styles/settings"
import ShapeLarge from "./ShapeLarge"
import ShapeMini from "./ShapeMini"

export const Shapes = ({ content }) => {
  const shapesContent = content.map((shape, index) => {
    const [shapeType, shapeSize] = shape.type.toLowerCase().split(" ")
    const shapeProps = {
      shape: shapeType,
      ...shape,
    }
    const shapeComponent =
      shapeSize === "large" ? (
        <ShapeLarge {...shapeProps} />
      ) : (
        <ShapeMini {...shapeProps} />
      )
    return <Column key={`shape-${index}`}>{shapeComponent}</Column>
  })

  return (
    <Section>
      <Container outset={true}>
        <Items>{shapesContent}</Items>
      </Container>
    </Section>
  )
}

export default Shapes

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
