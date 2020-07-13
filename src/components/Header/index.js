import React from "react"
import Text from "./Text"
import Hero from "./Hero"
import { StaticQuery, graphql } from "gatsby"
import { getValidSection } from "../../util/helpers"

const Header = ({
  title,
  media,
  format,
  featureVideoText,
  featureVideoUrl,
  isOverlay,
  overlayOpacity,
  section,
}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const { sections } = data.site.siteMetadata
        const validSection = getValidSection(sections, section)

        switch (format) {
          case "Text":
            return <Text title={title} section={validSection} />

          case "Hero":
            if (!media) {
              return <Text title={title} section={validSection} />
            } else {
              return (
                <Hero
                  title={title}
                  media={media}
                  featureVideoText={featureVideoText}
                  featureVideoUrl={featureVideoUrl}
                  isOverlay={isOverlay}
                  overlayOpacity={overlayOpacity}
                  section={validSection}
                />
              )
            }

          default:
            return <Text title={title} section={validSection} />
        }
      }}
    />
  )
}

export default Header

const detailsQuery = graphql`
  query {
    site {
      siteMetadata {
        sections {
          title
          url
        }
      }
    }
  }
`
