import React, { useContext } from "react"
import { useLocation } from "@reach/router"
import styled from "@emotion/styled"
import ReactPlayer from "react-player"
import { Heading } from "theme-ui"
import LogoMark from "../Svg/LogoMark"
import BackLink from "./BackLink"
import { colors } from "../../styles/settings"
import { TagButton } from "../TagLink"
import { VideoContext } from "../../hooks/useFeatureVideo"

const Hero = ({
  title,
  media,
  featureVideoText,
  featureVideoUrl,
  isOverlay,
  overlayOpacity,
  section,
}) => {
  const location = useLocation()

  /* eslint-disable-next-line no-unused-vars */
  const [videoUrl, setVideoUrl] = useContext(VideoContext)

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

  // console.log(
  //   "featureVideoText",
  //   featureVideoText,
  //   "featureVideoUrl",
  //   featureVideoUrl
  // )

  const videoLink =
    featureVideoText &&
    featureVideoText !== "" &&
    featureVideoUrl &&
    featureVideoUrl !== "" ? (
      <VideoLink
        text={featureVideoText}
        url={featureVideoUrl}
        setVideoUrl={setVideoUrl}
      />
    ) : null

  return (
    <Wrap>
      <Bg image={image.file.url}>
        {videos.length > 0 ? (
          <HeroVideo urls={videos} isPlaying={true} />
        ) : null}
        <Content>
          {location && location.pathname === "/" ? (
            <LogoEl>
              <LogoMark color={colors.granola} />
            </LogoEl>
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
          {videoLink}
        </Content>
        {isOverlay && isOverlay === "Yes" ? (
          <BgOverlay
            opacity={
              overlayOpacity && overlayOpacity <= 100 ? overlayOpacity : 0
            }
          />
        ) : null}
      </Bg>
      <BackLink section={section} variant="alternative" />
    </Wrap>
  )
}

const VideoLink = ({ text, url, setVideoUrl }) => {
  return (
    <>
      <TagButton onClick={() => setVideoUrl(url)} variant="filled" icon="play">
        {text}
      </TagButton>
    </>
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

const BgOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${props => `rgba(17, 31, 48, ${props.opacity / 100})`};
  z-index: 2;
`

const Content = styled.div`
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  z-index: 3;
`

const LogoEl = styled.div`
  display: block;
  margin: 0 auto;
  margin-bottom: 2em;
`
