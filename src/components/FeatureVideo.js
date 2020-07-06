import React, { useContext } from "react"
import styled from "@emotion/styled"
import ReactPlayer from "react-player"
import { VideoContext } from "../hooks/useFeatureVideo"

const FeatureVideo = () => {
  const [videoUrl, setVideoUrl] = useContext(VideoContext)

  if (!videoUrl || videoUrl === "") return null

  return (
    <Wrap onClick={() => setVideoUrl(null)}>
      <VideoBoxOuter>
        <VideoBoxAspect>
          <VideoBox>
            <ReactPlayer
              className="video-player"
              loop={true}
              controls={false}
              width="100%"
              height="100%"
              playing={true}
              url={videoUrl}
            />
          </VideoBox>
        </VideoBoxAspect>
      </VideoBoxOuter>
    </Wrap>
  )
}

export default FeatureVideo

const Wrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const VideoBoxOuter = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 20px;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    padding: 40px;
  }
`

const VideoBoxAspect = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: ${(9 / 16) * 100}%;
  background: transparent;
  position: relative;
`

const VideoBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
