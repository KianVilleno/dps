import React from "react"
import { graphql } from "gatsby"
import "../../styles/index.css"
import Layout from "../../layouts/Layout"

import HeroChoice from "../../components/HeroChoice"
import CardsSection from "../../components/CardsSection"

const Past = ({ data }) => {
  return (
    <Layout>
      <HeroChoice
        parent="production"
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        categories={data.hero.categories}
      />
      <CardsSection cardsData={data.cards.edges} parent="production" />
    </Layout>
  )
}

export const query = graphql`
  query ProductionPastQuery {
    hero: datoCmsHeroCategory {
      title
      subtitle
      categories {
        ... on DatoCmsProductionCategory {
          id
          slug
          categoryTitle
        }
      }
    }
    cards: allDatoCmsShow(filter: { category: { eq: "production-past" } }) {
      edges {
        node {
          title
          bodyTitle
          slug
          previewImage {
            url
            alt
          }
        }
      }
    }
  }
`

export default Past
