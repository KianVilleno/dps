import React from "react"
import "../styles/index.css"
import Layout from "../layouts/Layout"

import Seo from "../components/Seo"
import HeroChoice from "../components/HeroChoice"
import CardsSection from "../components/CardsSection"

const DATA = {
  hero: {
    title: "Education",
    subtitle: "...",
    categories: [],
  },
  cards: {
    edges: [
      {
        node: {
          category: "",
          slug: "visual-theatre-processes",
          title: "Visual Theatre Processes",
          subtitle: "...",
          previewImage: {
            url: "/images/test-thumb.png",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "puppet-construction",
          title: "Puppet Construction",
          subtitle: "...",
          previewImage: {
            url: "/images/test-thumb.png",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "intro-to-puppetry",
          title: "Intro to Puppetry",
          subtitle: "...",
          previewImage: {
            url: "/images/test-thumb.png",
            alt: "",
          },
        },
      },
      {
        node: {
          category: "",
          slug: "academy",
          title: "Academy",
          subtitle: "...",
          previewImage: {
            url: "/images/test-thumb.png",
            alt: "",
          },
        },
      },
    ],
  },
}

const Production = ({ data }) => {
  return (
    <Layout>
      <Seo title="Education" />
      <HeroChoice
        parent="education"
        title={DATA.hero.title}
        subtitle={DATA.hero.subtitle}
        categories={DATA.hero.categories}
      />
      <CardsSection cardsData={DATA.cards.edges} parent="education" />
    </Layout>
  )
}

export default Production
