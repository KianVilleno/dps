// Imports
import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { Heading, Text } from "theme-ui"
import Section, { Container } from "./Section"
import Button from "./Button"

// Components
const ShowsSection = props => {
  const { cardsData } = props

  return (
    <Section pt="0">
      <Container>
        <Cards>
          {cardsData.map((card, index) => {
            // const newPath = `${parent}/${card.node.category.replace(
            //   "education-",
            //   ""
            // )}/${card.node.slug}`
            const newPath = card.node.slug

            return (
              <Card
                slug={newPath}
                titleText={card.node.title}
                content={card.node.bodyTitle || card.node.subtitle}
                imgSrc={card.node.previewImage.url}
                imgAlt={card.node.previewImage.alt}
                category={card.node.category}
                key={index}
              />
            )
          })}
        </Cards>
      </Container>
    </Section>
  )
}

const Card = props => {
  const { slug, titleText, imgSrc, imgAlt, content } = props
  return (
    <StyledCard>
      <Heading
        as="h3"
        variant="text2Xl"
        sx={{ marginBottom: [20, 40], fontWeight: "bold" }}
      >
        <Link to={`/${slug}`}>{titleText}</Link>
      </Heading>
      {/* {category} */}
      <Link to={`/${slug}`}>
        <ShowImage src={imgSrc} alt={imgAlt} />
      </Link>
      {/* <Text as="p" variant="textBase" sx={{ marginTop: 30, marginBottom: 30 }}>
        {content}
      </Text> */}
      <Button href={`/${slug}`} variant="primary">
        View
      </Button>
    </StyledCard>
  )
}

// Styled Components
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledCard = styled.div`
  display: block;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;

  h3 {
    min-height: 2.2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-top: 35px;
    width: calc(50% - 20px);
    max-width: 482px;
  }
`
// const Title = styled.h3`
//   color: #000000;
//   font-size: 51px;
//   font-weight: 300;
//   line-height: 1.3;
//   letter-spacing: 0.01em;
// `
const ShowImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-bottom: 40px;
  }
`
// const Content = styled.p`
//   color: #000000;
//   line-height: 1.4;
//   font-size: 22px;
// `

// Mock Data
// const showsData = [
//   {
//     title: "Ishmael",
//     imgSrc: "https://placekitten.com/g/200/300",
//     imgAlt:
//       "Herman Melville’s classic, Moby Dick, reimagined for a new millennium.",
//     content:
//       "Herman Melville’s classic, Moby Dick, reimagined for a new millennium.",
//   },
//   {
//     title: "The Riddle of Washpool Gully",
//     imgSrc: "https://placekitten.com/g/200/300",
//     imgAlt:
//       "Far beyond the outskirts of the big city, near a tiny town that nearly everyone...",
//     content:
//       "Far beyond the outskirts of the big city, near a tiny town that nearly everyone...",
//   },
//   {
//     title: "The Riddle of Washpool Gully",
//     imgSrc: "https://placekitten.com/g/200/300",
//     imgAlt:
//       "Far beyond the outskirts of the big city, near a tiny town that nearly everyone...",
//     content:
//       "Far beyond the outskirts of the big city, near a tiny town that nearly everyone...",
//   },
//   {
//     title: "The Riddle of Washpool Gully",
//     imgSrc: "https://placekitten.com/g/200/300",
//     imgAlt:
//       "Far beyond the outskirts of the big city, near a tiny town that nearly everyone...",
//     content:
//       "Far beyond the outskirts of the big city, near a tiny town that nearly everyone...",
//   },
// ]

export default ShowsSection
