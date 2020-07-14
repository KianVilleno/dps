import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { Heading, Text, Box } from "theme-ui"
import { Container } from "../Section"
import Img from "gatsby-image"
import TagLink from "../TagLink"

const Cards = ({ content }) => {
  return (
    <Container outset={true}>
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
      <CardHeading
        as="span"
        variant="text2Xl"
        sx={{
          marginBottom: [20, 40, ".5em"],
          fontWeight: "bold",
          display: "block",
        }}
      >
        {title}
      </CardHeading>
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
        <Link to={`/${slug}`}>{inner}</Link>
        <TagLink to={`/${slug}`} variant="primary">
          View
        </TagLink>
      </StyledCard>
    )
  }
}

const CardsEl = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1300px;
  margin: 0 auto;
`

const StyledCard = styled.div`
  display: block;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 100%;
  padding: 0 0;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-top: 30px;
    margin-bottom: 50px;
    width: 50%;
    padding: 0 4%;
    /* width: calc(50% - 20px); */
    /* padding: 0 20px; */
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-top: 35px;
    /* width: calc(45% - 20px);
    padding: 0 25px; */
    width: 50%;
    padding: 0 4%;
  }
`

const CardHeading = styled(Heading)`
  min-height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    min-height: 2.2em;
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
