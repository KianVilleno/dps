// Imports
import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/Layout"
import Hero from "../../components/Show/Hero"
import Body from "../../components/Show/Body"

// Component
export default ({ data }) => {
  const {
    title,
    backgroundImage,
    backgroundVideo,
    bodyTitle,
    bodyText,
    sideContent,
    accordions,
  } = data.datoCmsShow
  const heroData = {
    title,
    playHighlightsButton: true,
    backgroundImage,
    backgroundVideo,
  }
  const bodyData = {
    title: bodyTitle,
    content: bodyText,
    accordions,
    sideContent,
  }
  return (
    <Layout>
      <Hero sectionData={heroData} />
      <Body sectionData={bodyData} />
    </Layout>
  )
}

// Styled Components

// Query
// export const query = graphql`
//   query ShowQuery($slug: String) {
//     datoCmsShow(slug: { eq: $slug }) {
//       title
//       slug
//       bodyTitle
//       bodyText
//       backgroundImage {
//         url
//         alt
//       }
//       backgroundVideo {
//         video {
//           mp4Url
//         }
//       }
//       sideContent {
//         buttonLink
//         buttonText
//         showButton
//         text
//       }
//       accordions {
//         content
//         title
//       }
//     }
//   }
// `

// Export
