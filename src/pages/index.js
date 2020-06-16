import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Hero from "../components/Home/Hero"
import AboutSection from "../components/Home/About"
import { ShapesRow } from "../components/Shapes/ShapesRow"

const Home = ({ data: { home } }) => {
  const hero = {
    heroBackgroundVideo: home.heroBackgroundVideo,
    heroBackgroundImage: home.heroBackgroundImage,
    showHighlightsReel: home.showHighlightsReel,
  }

  return (
    <Layout>
      <Hero sectionData={hero} />
      <ShapesRow allShapes={true} />
      <AboutSection />
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    home: datoCmsHomePage {
      heroBackgroundVideo {
        video {
          mp4Url
        }
      }
      heroBackgroundImage {
        url
        alt
      }
      showHighlightsReel
    }
  }
`

export default Home
