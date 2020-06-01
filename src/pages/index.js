import React from "react"
import Layout from "../layouts/Layout"
import Hero from "../components/Hero"
import CTASection from "../components/CTASection"
import SimpleSlider from "../components/SimpleSlider"

const Home = ({ data: { home } }) => {
  const hero = home.hero.hero[0]
  const ctasection = home.ctaSection.ctas
  const slideshow = home.slideshow.slides
  return (
    <Layout>
      <Hero sectionData={hero} />
      <CTASection sectionData={ctasection} />
      <SimpleSlider sectionData={slideshow} />
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    home: datoCmsHomePage {
      id
      hero {
        hero {
          title
          subtitle
          buttonLink
          buttonText
          playHighlightsButton
        }
      }
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
