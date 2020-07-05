import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Text } from "theme-ui"
import { Container } from "../Section"
import { Row, Column } from "../../components/Grid"
import styled from "@emotion/styled"

const LeftRightContent = ({ content }) => {
  return (
    <Container>
      <Row>
        <ColumnOne>
          <TextWrap>
            <Text
              as="div"
              variant="textBase"
              sx={{
                maxWidth: 554,
                "& p": {
                  margin: "10px 0",
                },
              }}
            >
              {content.left
                ? documentToReactComponents(content.left.json, {})
                : null}
            </Text>
          </TextWrap>
        </ColumnOne>
        <ColumnTwo>
          <TextWrap>
            <Text
              as="div"
              variant="textBase"
              sx={{
                maxWidth: 554,
                "& p": {
                  margin: "10px 0",
                },
              }}
            >
              {content.right
                ? documentToReactComponents(content.right.json, {})
                : null}
            </Text>
          </TextWrap>
        </ColumnTwo>
      </Row>
    </Container>
  )
}

export default LeftRightContent

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

const TextWrap = styled.div`
  a {
    color: inherit;
  }
`
