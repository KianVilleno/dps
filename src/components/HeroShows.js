// Imports
import React from "react"
import styled from "@emotion/styled"
import Button from "../components/Button"
// Components
const Hero = props => {
  const { sectionData } = props
  const {
    title,
    subtitle,
    buttonLink,
    buttonText,
    playHighlightsButton,
  } = sectionData
  return (
    <SectionHeader>
      <ContentContainer>
        <SubText>{subtitle}</SubText>
        <Title>{title}</Title>
        <ButtonContainer>
          <Button to={buttonLink}>{buttonText}</Button>
          {playHighlightsButton ? (
            <Button to="#">
              <svg
                width="14"
                height="17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 8.5L.5 16.294V.706L14 8.5z" fill="#303030" />
              </svg>
              Play Highlights
            </Button>
          ) : null}
        </ButtonContainer>
      </ContentContainer>
    </SectionHeader>
  )
}

const Video = ({ video }) => {
  return (
    <video autoplay muted loop>
      <source src={video} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  )
}

// Styled Components
const SectionHeader = styled.header`
  position: relative;
  width: 100%;
  height: 600px;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const SubText = styled.h5`
  font-size: 22px;
  line-height: 1.4;
  text-align: center;
`

const Title = styled.h1`
  color: #111111;
  font-weight: 300;
  font-size: 100px;
  line-height: 1.2;
  text-align: center;
`

const ButtonContainer = styled.div`
  margin-top: 16px;
  text-align: center;
  a {
    margin: 0 5px;
  }
`

export default Hero
