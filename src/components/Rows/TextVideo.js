import React from "react"
import styled from "@emotion/styled"

const TextVideo = ({ data }) => {
  const regex = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?\]?/g
  const found = data[0].matchAll(regex)
  let videoSrcs = []
  for (const m of found) {
    // get the files attribute
    if (m[1] && m[1] === "files") {
      if (m[2]) {
        videoSrcs = m[2].split(",")
      }
    }
  }

  const sources = videoSrcs.map(function(file, i) {
    const ext = file.substr(file.lastIndexOf(".") + 1)
    return <source key={i} src={file} type={`video/${ext}`} />
  })

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <Video
        controls
        controlsList="nodownload"
        id=""
        preload=""
        onContextMenu={e => e.preventDefault()}
      >
        {sources}
      </Video>
    </div>
  )
}

export default TextVideo

const Video = styled.video`
  width: 100%;
  height: auto;
`
