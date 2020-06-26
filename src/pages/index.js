import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Hero from "../components/Home/Hero"
import Seo from "../components/Seo"
import AboutSection from "../components/Home/About"
import { ShapesRow } from "../components/Shapes/ShapesRow"

const Home = ({ data: { home } }) => {
  const hero = {
    heroBackgroundVideo: home.heroBackgroundVideo.url,
    heroBackgroundVideoOgg: home.heroBackgroundVideoOgg.url,
    heroBackgroundVideoWebm: home.heroBackgroundVideoWebm.url,
    heroBackgroundImage: home.heroBackgroundImage,
    showHighlightsReel: home.showHighlightsReel,
  }

  console.log("home", home)

  return (
    <Layout>
      <Seo />
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
        url
        video {
          mp4Url
        }
      }
      heroBackgroundVideoOgg {
        url
      }
      heroBackgroundVideoWebm {
        url
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
