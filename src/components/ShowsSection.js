// Imports
import React from "react"
import styled from "@emotion/styled"
import Section, { Container } from "./Section"

// Components
const ShowsSection = props => {
  return (
    <Section>
      <Container>
        <Shows>
          {showsData.map(show => (
            <Show
              titleText={show.title}
              imgSrc={show.imgSrc}
              imgAlt={show.imgAlt}
              content={show.content}
            />
          ))}
        </Shows>
      </Container>
    </Section>
  )
}

const Show = props => {
  const { titleText, imgSrc, imgAlt, content } = props
  return (
    <StyledShow>
      <Title>{titleText}</Title>
      <ShowImage src={imgSrc} alt={imgAlt} />
      <Content>{content}</Content>
    </StyledShow>
  )
}

// Styled Components
const Shows = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledShow = styled.div`
  width: calc(50% - 20px);
`
const Title = styled.h3`
  color: #000000;
  font-size: 51px;
  font-weight: 300;
  line-height: 1.3;
  text-align: center;
  letter-spacing: 0.01em;
`
const ShowImage = styled.img`
  display: block;
  margin: 0 auto;
`
const Content = styled.p`
  color: #000000;
  line-height: 1.4;
  font-size: 22px;
  text-align: center;
`

// Mock Data
const showsData = [
  {
    title: "Ishmael",
    imgSrc: "https://placekitten.com/g/200/300",
    imgAlt:
      "Herman Melville’s classic, Moby Dick, reimagined for a new millennium.",
    content:
      "Herman Melville’s classic, Moby Dick, reimagined for a new millennium.",
  },
  {
    title: "The Riddle of Washpool Gully",
    imgSrc: "https://placekitten.com/g/200/300",
    imgAlt:
      "Far beyond the outskirts of the big city, near a tiny town that nearly everyone...",
    content:
      "Far beyond the outskirts of the big city, near a tiny town that nearly everyone...",
  },
  {
    title: "The Riddle of Washpool Gully",
    imgSrc: "https://placekitten.com/g/200/300",
    imgAlt:
      "Far beyond the outskirts of the big city, near a tiny town that nearly everyone...",
    content:
      "Far beyond the outskirts of the big city, near a tiny town that nearly everyone...",
  },
  {
    title: "The Riddle of Washpool Gully",
    imgSrc: "https://placekitten.com/g/200/300",
    imgAlt:
      "Far beyond the outskirts of the big city, near a tiny town that nearly everyone...",
    content:
      "Far beyond the outskirts of the big city, near a tiny town that nearly everyone...",
  },
]

export default ShowsSection
