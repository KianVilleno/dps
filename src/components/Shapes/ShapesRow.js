// Imports
import React from "react"
import styled from "@emotion/styled"
import Section, { Container } from "../Section"
import { Row as ROW, Column } from "../Grid"
import { Decagon } from "./Decagon"
import { DecagonTwo } from "./DecagonTwo"
import { Dodecagon } from "./Dodecagon"
import { DodecagonTwo } from "./DodecagonTwo"

// Component
export const ShapesRow = ({ allShapes }) => {
  return (
    <Section>
      <Container>
        <Row>
          <Column>
            <Dodecagon />
          </Column>
          <Column>
            <Decagon />
          </Column>
        </Row>
        {allShapes ? (
          <Row>
            <Column>
              <DecagonTwo />
            </Column>
            <Column>
              <DodecagonTwo />
            </Column>
          </Row>
        ) : null}
      </Container>
    </Section>
  )
}

// Styled components
const Row = styled(ROW)`
  margin: 40px auto;
`
