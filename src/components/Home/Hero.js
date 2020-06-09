// Imports
import React from "react"
import ReactPlayer from "react-player"
import styled from "@emotion/styled"
import { Button as StyledButton } from "../Button"

// Components
const Hero = props => {
  const {
    heroBackgroundVideo,
    heroBackgroundImage,
    showHighlightsReel,
  } = props.sectionData
  return (
    <HeroStyled>
      <BackgroundVideo bgImage={heroBackgroundImage.url}>
        <ReactPlayer
          className="video-player"
          loop={true}
          controls={false}
          playing={true}
          width="100%"
          height="100%"
          url={heroBackgroundVideo.video.mp4Url}
        />
        <Content>
          <svg
            className="logo"
            width="149"
            height="149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.5 0l37.25 9.981 27.269 27.269L149 74.5l-9.981 37.25-27.269 27.269L74.5 149l-37.25-9.981L9.981 111.75 0 74.5l9.981-37.25L37.25 9.981 74.5 0z"
              fill="#fff"
            />
          </svg>
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
  svg {
    vertical-align: baseline;
  }
`

// Exports
export default Hero
