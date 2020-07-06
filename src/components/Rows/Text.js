import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Text } from "theme-ui"
import { Container } from "../Section"
import { Row, Column } from "../../components/Grid"
import styled from "@emotion/styled"

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      let output
      if (node.data) {
        if (node.nodeType === "embedded-asset-block") {
          if (node.data.target.fields) {
            const { file, title } = node.data.target.fields
            const { url } = file["en-US"]
            output = (
              <ImgWrap>
                <img src={url} alt={title} />
              </ImgWrap>
            )
          }
        }
      }
      return output
    },
  },
}

const RowText = ({ content }) => {
  return (
    <Container>
      <Row>
        <ColumnOne>
          <TextWrap>
            <Text
              as="div"
              variant="textBase"
              sx={{
                "& p": {
                  margin: "10px 0",
                },
              }}
            >
              {content.left
                ? documentToReactComponents(content.left.json, renderOptions)
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
                "& p": {
                  margin: "10px 0",
                },
              }}
            >
              {content.right
                ? documentToReactComponents(content.right.json, renderOptions)
                : null}
            </Text>
          </TextWrap>
        </ColumnTwo>
      </Row>
    </Container>
  )
}

export default RowText

const ColumnOne = styled(Column)`
  width: 50%;
  padding-left: 20px;
  padding-right: 20px;
  /* @media only screen and (min-width: 992px) {
    width: 50%;
  } */
`
const ColumnTwo = styled(Column)`
  width: 50%;
  padding-left: 20px;
  padding-right: 20px;
  /* @media only screen and (min-width: 992px) {
    margin-left: auto;
    margin-top: 0;
    width: 50%;
    img {
      margin-left: auto;
    }
  }
  a {
    margin-top: 10px;
  } */
`

const TextWrap = styled.div`
  a {
    color: inherit;
  }
`

const ImgWrap = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  img {
    width: 100%;
    height: auto;
  }
`
