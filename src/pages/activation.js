import React from "react"
import "../styles/index.css"
import Layout from "../layouts/Layout"

import Seo from "../components/Seo"
import HeroChoice from "../components/HeroChoice"
import CardsSection from "../components/CardsSection"

const DATA = {
  hero: {
    title: "Activation",
    subtitle: "...",
    categories: [],
  },
  cards: {
    edges: [
      {
        node: {
          category: "",
          slug: "megafauna",
          title: "Megafauna",
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
          slug: "pelicans",
          title: "Pelicans",
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
          slug: "hive-mind",
          title: "Hive Mind",
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
          slug: "1000-doors",
          title: "1000 Doors",
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
      <Seo title="Activation" />
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
