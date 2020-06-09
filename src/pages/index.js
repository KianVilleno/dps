import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Hero from "../components/Home/Hero"
import CTASection from "../components/CTASection"
import SimpleSlider from "../components/SimpleSlider"
import { Dodecagon } from "../components/Shapes/Dodecagon"
import { DodecagonTwo } from "../components/Shapes/DodecagonTwo"
import { Decagon } from "../components/Shapes/Decagon"
import { DecagonTwo } from "../components/Shapes/DecagonTwo"
const Home = ({ data: { home } }) => {
  console.log(home)
  const hero = {
    heroBackgroundVideo: home.heroBackgroundVideo,
    heroBackgroundImage: home.heroBackgroundImage,
    showHighlightsReel: home.showHighlightsReel,
  }

  const ctasection = home.ctaSection.ctas
  const slideshow = home.slideshow.slides

  return (
    <Layout>
      <Hero sectionData={hero} />
      <Dodecagon />
      <DodecagonTwo />
      <Decagon />
      <DecagonTwo />
      <CTASection sectionData={ctasection} />
      <SimpleSlider sectionData={slideshow} />
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
      ctaSection {
        ctas {
          buttonLink
          buttonText
          content
          title
        }
      }
      slideshow {
        slides {
          subtitle
          titleOne
          titleTwo
          slideImages {
            url
            alt
          }
        }
      }
    }
  }
`

export default Home
