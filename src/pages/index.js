import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Hero from "../components/Hero"
import CTASection from "../components/CTASection"
import SimpleSlider from "../components/SimpleSlider"
import { useThemeUI } from "theme-ui"
const ThemeTging = () => {
  const context = useThemeUI()
  const { theme, colorMode, setColorMode } = context
  return (
    <div>
      <button
        onClick={e => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </button>
      <pre>{JSON.stringify(colorMode, null, 2)}</pre>

      <pre>{JSON.stringify(theme, null, 2)}</pre>
    </div>
  )
}
const Home = ({ data: { home } }) => {
  const hero = home.hero.hero[0]
  const ctasection = home.ctaSection.ctas
  const slideshow = home.slideshow.slides
  return (
    <Layout>
      <Hero sectionData={hero} />
      <CTASection sectionData={ctasection} />
      <ThemeTging />
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
