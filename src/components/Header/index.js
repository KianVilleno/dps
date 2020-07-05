import React from "react"
import Text from "./Text"
import Hero from "./Hero"

const Header = ({ title, media, format }) => {
  switch (format) {
    case "Text":
      return <Text title={title} />

    case "Hero":
      if (!media) {
        return <Text title={title} />
      } else {
        return <Hero title={title} media={media} />
      }

    default:
      return <Text title={title} />
  }
}

export default Header
