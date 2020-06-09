// Import
import React from "react"
import styled from "@emotion/styled"
import { respondTo } from "../../styles/mixins"
import Section, { Container } from "../../components/Section"
import { Row, Column } from "../../components/Grid"
import Accordion from "../../components/Accordion"
import Button from "../../components/Button"
// Components
export const Body = props => {
  const { title, content, accordions } = props.sectionData

  return (
    <SECTION>
      <Container>
        <Title>{title}</Title>
        <Row>
          <ColumnOne>
            <Content>{content}</Content>
          </ColumnOne>

          <ColumnTwo>
            <Content>
              Playing at QPAC, Sydney Opera House and Brisbane Festival. <br />
              <Button to="/">Button</Button>
            </Content>
            <Content>
              Available for activations and workshops from 01.06.2020 <br />
              <Button to="/">Button</Button>
            </Content>
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
  ${respondTo.md`
    width: 60%;
  `}
`
const ColumnTwo = styled(Column)`
  ${respondTo.md`
    width: 40%;
    max-width: 340px;
  `}

  p:nth-of-type(2) {
    margin: 50px auto;
  }

  a {
    margin-top: 10px;
  }
`

const Content = styled.p`
  font-size: 22px;
  line-height: 1.4;
`

export default Body
