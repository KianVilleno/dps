// Imports
import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import styled from "@emotion/styled"
import { Heading } from "theme-ui"
import { Button as StyledButton } from "../Button"

// Components
const Hero = props => {
  const {
    title,
    backgroundVideo,
    backgroundImage,
    showHighlightsReel,
  } = props.sectionData

  const [videoPlaying, setVideoPlaying] = useState(true)

  useEffect(() => {
    setTimeout(setVideoPlaying(true), 200)
    console.log("Setting video playing: ", videoPlaying)
  })

  return (
    <HeroStyled>
      <BackgroundVideo bgImage={backgroundImage.url}>
        {videoPlaying ? (
          <ReactPlayer
            className="video-player"
            loop={true}
            controls={false}
            playing={videoPlaying}
            width="100%"
            height="100%"
            autoPlay={videoPlaying}
            url={backgroundVideo.video.mp4Url}
          />
        ) : null}
        <Content>
          <Heading as="h1" variant="text4Xl">
            {title}
          </Heading>
          {showHighlightsReel ? (
            <Button variant="filled">
              <svg
                width="14"
                height="17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.727 8.5L.227.706v15.588l13.5-7.794z"
                  fill="#B39B78"
                />
              </svg>{" "}
              Play showreel
            </Button>
          ) : (
            <Button variant="filled">Something else</Button>
          )}
        </Content>
      </BackgroundVideo>
    </HeroStyled>
  )
}

// Styled Components
const HeroStyled = styled.header`
  background: red;
  height: 90vh;
`

const BackgroundVideo = styled.div`
  position: relative;
  background-image: url(${props => props.bgImage});
  height: 90vh;

  .video-player {
    height: 90vh;
    width: 100%;
    video {
      object-fit: cover;
    }
  }
`

const Content = styled.div`
  position absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`

const Button = styled(StyledButton)`
  margin-top: 20px;
  svg {
    vertical-align: baseline;
  }
`

// Exports
export default Hero
