// Imports
import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import Modal from "react-modal"
import styled from "@emotion/styled"
import { Heading } from "theme-ui"
import { Button as StyledButton } from "../Button"

Modal.setAppElement("#___gatsby")

// Components
const HeroFullVideo = props => {
  const {
    title,
    backgroundImage,
    backgroundVideo,
    fullVideo,
    showHighlightsReel,
  } = props

  const [backgroundVideoPlaying, setBackgroundVideoPlaying] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setTimeout(setBackgroundVideoPlaying(true), 200)
  }, [setBackgroundVideoPlaying])

  if (!backgroundVideo) {
    return (
      <HeroStyled>
        <BackgroundVideo bgImage={backgroundImage.url}>
          <Content>
            <Heading
              as="h1"
              variant="text3Xl"
              sx={{
                width: "100%",
                maxWidth: 936,
                color: "white",
                margin: "0 auto",
              }}
            >
              {title}
            </Heading>
          </Content>
        </BackgroundVideo>
      </HeroStyled>
    )
  } else {
    return (
      <HeroStyled>
        <BackgroundVideo bgImage={backgroundImage.url}>
          {backgroundVideoPlaying && backgroundVideo ? (
            <ReactPlayer
              className="video-player"
              loop={true}
              controls={false}
              playing={backgroundVideoPlaying}
              width="100%"
              height="100%"
              autoPlay={backgroundVideoPlaying}
              url={backgroundVideo.video.mp4Url}
            />
          ) : null}
          <Content>
            <Heading
              as="h1"
              variant="text3Xl"
              sx={{
                width: "100%",
                maxWidth: 936,
                color: "white",
                margin: "0 auto",
              }}
            >
              {title}
            </Heading>
            {showHighlightsReel ? (
              <Button variant="filled" onClick={() => setShowModal(true)}>
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
            ) : null}

            {fullVideo && showModal ? (
              <Modal isOpen={showModal}>
                <ReactPlayer
                  controls={true}
                  width="100%"
                  height="100%"
                  autoPlay={backgroundVideoPlaying}
                  url={fullVideo.video.mp4Url}
                />
              </Modal>
            ) : null}
          </Content>
        </BackgroundVideo>
      </HeroStyled>
    )
  }
}

// Styled Components
const HeroStyled = styled.header`
  height: 90vh;
`

const BackgroundVideo = styled.div`
  position: relative;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

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
export default HeroFullVideo
