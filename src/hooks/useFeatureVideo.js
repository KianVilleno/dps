import React, { createContext, useState } from "react"
const VideoContext = createContext()

const VideoProvider = ({ children }) => {
  const [videoUrl, setVideoUrl] = useState(null)
  return (
    <VideoContext.Provider value={[videoUrl, setVideoUrl]}>
      {children}
    </VideoContext.Provider>
  )
}

export { VideoProvider, VideoContext }
