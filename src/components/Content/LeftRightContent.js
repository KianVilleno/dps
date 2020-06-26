// Import
import React from "react"
import styled from "@emotion/styled"
import { Text } from "theme-ui"
import Section, { Container } from "../../components/Section"
import { Row, Column } from "../../components/Grid"

// Components
const LeftRightContent = ({ content }) => {
  console.log(content)
  const leftContent = content.leftContentNode.childMarkdownRemark.html
  const rightContent = content.rightContentNode.childMarkdownRemark.html
  return (
    <SECTION>
      <Container>
        <Row>
          <ColumnOne>
            <Text
              as="div"
              variant="textBase"
              sx={{
                maxWidth: 554,
                "& p": {
                  margin: "10px 0",
                },
              }}
              dangerouslySetInnerHTML={{
                __html: leftContent,
              }}
            />
          </ColumnOne>

          <ColumnTwo>
            <Text
              as="div"
              variant="textBase"
              sx={{
                maxWidth: 554,
                "& p": {
                  margin: "10px 0",
                },
              }}
              dangerouslySetInnerHTML={{
                __html: rightContent,
              }}
            />
          </ColumnTwo>
        </Row>
      </Container>
    </SECTION>
  )
}

// Styled Components
const SECTION = styled(Section)`
  img {
    display: block;
    width: 100%;
    max-width: 480px;
  }
`

const ColumnOne = styled(Column)`
  @media only screen and (min-width: 992px) {
    width: 50%;
  }
`
const ColumnTwo = styled(Column)`
  margin-top: 50px;
  @media only screen and (min-width: 992px) {
    margin-left: auto;
    margin-top: 0;
    width: 50%;
    img {
      margin-left: auto;
    }
  }

  a {
    margin-top: 10px;
  }
`

export default LeftRightContent
