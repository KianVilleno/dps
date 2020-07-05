import React from "react"
import { useLocation } from "@reach/router"
import styled from "@emotion/styled"
import ReactPlayer from "react-player"
import { Heading } from "theme-ui"
import LogoMark from "../Svg/LogoMark"
import { colors } from "../../styles/settings"

const Hero = ({ title, media }) => {
  const location = useLocation()

  const images = media.filter(item =>
    item.file.contentType.match(/image\/(jpeg|jpg)/)
  )
  const image = images.length > 0 ? images[0] : null

  const videos = media
    .filter(item => item.file.contentType.match(/video\/(mp4|ogg|webm)/))
    .map(item => {
      return {
        src: item.file.url,
        type: item.file.contentType,
      }
    })

  return (
    <Wrap>
      <Bg image={image.file.url}>
        {videos.length > 0 ? (
          <HeroVideo urls={videos} isPlaying={true} />
        ) : null}
        <Content>
          {location && location.pathname === "/" ? (
            <LogoMark color={colors.granola} />
          ) : (
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
          )}
        </Content>
      </Bg>
    </Wrap>
  )
}

export default Hero

const HeroVideo = ({ urls, isPlaying }) => {
  return (
    <ReactPlayer
      className="video-player"
      loop={true}
      controls={false}
      playing={isPlaying}
      width="100%"
      height="100%"
      muted
      autoPlay={isPlaying}
      playsinline
      url={urls}
    />
  )
}

const Wrap = styled.header`
  height: 90vh;
  position: relative;
  z-index: 1;
`

const Bg = styled.div`
  position: relative;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  .video-player {
    width: 100%;
    video {
      object-fit: cover;
    }
  }
`

const Content = styled.div`
  position: absolute;
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
