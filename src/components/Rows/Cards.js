import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { Heading, Text } from "theme-ui"
import { Container } from "../Section"
import Button from "../Button"
import Img from "gatsby-image"

const Cards = ({ content }) => {
  return (
    <Container>
      <CardsEl>
        {content.map((card, index) => {
          const { title, description, thumbnail, link } = card
          return (
            <Card
              key={index}
              slug={link ? link.slug : null}
              title={title}
              description={description.childMarkdownRemark.html}
              image={thumbnail}
              imageAlt={thumbnail.description || title}
              category={null}
            />
          )
        })}
      </CardsEl>
    </Container>
  )
}

export default Cards

const Card = ({ slug, title, description, image, imageAlt }) => {
  let inner = (
    <>
      <Heading
        as="span"
        variant="text2Xl"
        sx={{ marginBottom: [20, 40], fontWeight: "bold", display: "block" }}
      >
        {title}
      </Heading>
      <Img fluid={image.fluid} />
      <Text
        as="span"
        variant="textBase"
        sx={{ marginTop: [15, 30], marginBottom: [15, 30], display: "block" }}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></Text>
    </>
  )

  if (!slug) {
    return <StyledCard>{inner}</StyledCard>
  } else {
    return (
      <StyledCard>
        <Link to={`/${slug}`}>
          <Heading
            as="span"
            variant="text2Xl"
            sx={{
              marginBottom: [20, 40],
              fontWeight: "bold",
              display: "block",
            }}
          >
            {title}
          </Heading>
          <Img fluid={image.fluid} />
          <Text
            as="span"
            variant="textBase"
            sx={{
              marginTop: [15, 30],
              marginBottom: [15, 30],
              display: "block",
            }}
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></Text>
        </Link>
        <Button href={`/${slug}`} variant="primary">
          View
        </Button>
      </StyledCard>
    )
  }
}

const CardsEl = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledCard = styled.div`
  display: block;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;

  h3 {
    min-height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-top: 30px;
    margin-bottom: 50px;
    width: calc(50% - 20px);
    h3 {
      min-height: 2.2em;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-top: 35px;
    width: calc(50% - 20px);
    max-width: 482px;
  }
`

// const ShowImage = styled.img`
//   display: block;
//   margin: 0 auto;
//   width: 100%;
//   margin-bottom: 20px;
//   @media (min-width: ${props => props.theme.breakpoints[2]}) {
//     margin-bottom: 40px;
//   }
// `
