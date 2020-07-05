import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Text } from "theme-ui"
import Img from "gatsby-image"
import { Container } from "../Section"
import { Row, Column } from "../../components/Grid"
import styled from "@emotion/styled"
import TagLink from "../TagLink"

const TextFeature = ({ content }) => {
  const copy = content.content
  const { image, linkText, linkUrl, layout } = content

  const flexDirection =
    layout === "Image Left, Text Right" ? "row-reverse" : "row"

  let copyComponent
  if (copy) {
    copyComponent = (
      <TextWrap>
        <Text
          as="div"
          variant="text2Xl"
          sx={{
            textAlign: "center",
            "& p": {
              margin: "0 0 .4em 0",
            },
          }}
        >
          {documentToReactComponents(copy.json, {})}
        </Text>
      </TextWrap>
    )
  }

  console.log("WUT 2...")

  let linkComponent
  if (linkText && linkUrl) {
    linkComponent = (
      <Cta>
        <TagLink to={linkUrl} variant="primary">
          {linkText}
        </TagLink>
      </Cta>
    )
  }

  return (
    <Container>
      <Row flexDirection={flexDirection}>
        <ColumnOne>
          {copyComponent}
          {linkComponent}
        </ColumnOne>
        <ColumnTwo>
          <Img fluid={image.fluid} />
        </ColumnTwo>
      </Row>
    </Container>
  )
}

export default TextFeature

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

const ImgWrap = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  img {
    width: 100%;
    height: auto;
  }
`

const Cta = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5em;
`
