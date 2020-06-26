import React from "react"
import { graphql } from "gatsby"
import "../styles/index.css"
import Layout from "../layouts/Layout"

import HeroChoice from "../components/HeroChoice"
import CardsSection from "../components/CardsSection"

const InSchools = ({ data }) => {
  return (
    <Layout>
      <HeroChoice
        parent="education"
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        categories={data.hero.categories}
      />
      <CardsSection cardsData={data.cards.edges} parent="education" />
    </Layout>
  )
}

export const query = graphql`
  query EducationInSchoolsQuery {
    hero: datoCmsHeroCategory {
      title
      subtitle
      categories {
        ... on DatoCmsEducationCategory {
          id
          slug
          categoryTitle
        }
      }
    }
    cards: allDatoCmsEducationPage(
      filter: { category: { eq: "education-in-schools" } }
    ) {
      edges {
        node {
          title
          subtitle
          slug
          category
          previewImage {
            url
            alt
          }
        }
      }
    }
  }
`

export default InSchools
