import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Text } from "theme-ui"
import Img from "gatsby-image"
import { Container } from "../Section"
// import { Column } from "../../components/Grid"
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
          variant="textXl"
          sx={{
            fontWeight: "normal",
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
    <Container outset={true}>
      <Row flexDirection={flexDirection}>
        <Cols>
          <TextCol>
            {copyComponent}
            {linkComponent}
          </TextCol>
          <ImageCol>
            <Img fluid={image.fluid} />
          </ImageCol>
        </Cols>
      </Row>
    </Container>
  )
}

export default TextFeature

const Row = styled.div`
  width: 100%;
  margin: 0 auto;
`

const Cols = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    display: flex;
    flex-direction: ${props =>
      props.flexDirection ? props.flexDirection : "row"};
    justify-content: space-between;
  }
`

const TextCol = styled.div`
  width: 100%;
  margin-bottom: 10vw;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 50%;
    margin-bottom: 0em;
  }
`

const ImageCol = styled.div`
  width: 100%;
  padding-left: 0%;
  padding-right: 0%;
  margin-bottom: 10vw;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 50%;
    margin-bottom: 0em;
    padding-left: 7%;
    padding-right: 7%;
  }
`

const TextWrap = styled.div`
  a {
    color: inherit;
  }
`

const Cta = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5em;
`
