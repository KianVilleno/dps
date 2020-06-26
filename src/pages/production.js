import React from "react"
import { graphql } from "gatsby"
import _ from "lodash"
import "../styles/index.css"
import Layout from "../layouts/Layout"

import HeroChoice from "../components/HeroChoice"
import CardsSection from "../components/CardsSection"

const DATA = {
  hero: {
    title: "Production",
    subtitle: "Current productions showing across Australia and United States.",
    categories: [],
  },
  cards: {
    edges: [
      {
        node: {
          category: "rad",
          slug: "hello-from-dato",
          title: "Title",
          subtitle: "Sub Title",
          previewImage: {
            url: "/images/test-thumb.png",
            alt: "Hello...",
          },
        },
      },
    ],
  },
}

const Production = ({ data }) => {
  return (
    <Layout>
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
