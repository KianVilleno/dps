import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Text, Box } from "theme-ui"
import { Container } from "../Section"
import { Row } from "../../components/Grid"
import TextVideo from "./TextVideo"
import styled from "@emotion/styled"

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const str = children[0]
      if (typeof str === "string") {
        if (str.indexOf("[htmlvideo") > -1) {
          return <TextVideo data={children} />
        }
      }
      return <p>{children}</p>
    },
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
        <Box
          pl={[2, 3]}
          pr={[2, 3]}
          pt={[2, 3]}
          pb={[2, 3]}
          sx={{
            width: ["100%", "100%", "100%", `${(6 / 12) * 100}%`],
            marginLeft: [0],
            marginRight: [0, 0, 0, `${(1 / 12) * 100}%`],
          }}
        >
          <TextWrap>
            <Text
              as="div"
              variant="textBase"
              sx={{
                "& p": {
                  margin: "0 0 1em 0",
                },
              }}
            >
              {content.left
                ? documentToReactComponents(content.left.json, renderOptions)
                : null}
            </Text>
          </TextWrap>
        </Box>
        <Box
          pl={[2, 3]}
          pr={[2, 3]}
          pt={[2, 3]}
          pb={[2, 3]}
          sx={{
            width: ["100%", "100%", "100%", `${(5 / 12) * 100}%`],
            marginLeft: [0],
          }}
        >
          <TextWrap>
            <Text
              as="div"
              variant="textBase"
              sx={{
                "& p": {
                  margin: "0 0 1em 0",
                },
              }}
            >
              {content.right
                ? documentToReactComponents(content.right.json, renderOptions)
                : null}
            </Text>
          </TextWrap>
        </Box>
      </Row>
    </Container>
  )
}

export default RowText

const TextWrap = styled.div`
  a {
    color: inherit;
    position: relative;
    transition: top 0.2s ease;
    top: 0px;
    &:hover {
      opacity: 0.9;
      top: -0.05em;
    }
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 1em;
    li {
      margin-top: 0em;
      margin-bottom: 0.5em;
      p:last-child {
        margin-bottom: 0em;
      }
    }
  }
`

const ImgWrap = styled.div`
  margin-top: 0em;
  margin-bottom: 1em;
  img {
    width: 100%;
    height: auto;
  }
`
