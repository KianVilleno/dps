import React from "react"
import { graphql } from "gatsby"
import "../styles/index.css"
import Layout from "../layouts/Layout"
import Nav from "../components/Nav"
import HeroChoice from "../components/HeroChoice"
import ShowsSection from "../components/ShowsSection"

const Shows = ({ data: { hero } }) => {
  console.log(hero)
  return (
    <Layout>
      <Nav />
      <HeroChoice title={hero.title} categories={hero.categories} />
      <ShowsSection />
    </Layout>
  )
}

export const query = graphql`
  query ShowsQuery {
    hero: datoCmsHeroCategory {
      title
      subtitle
      categories {
        ... on DatoCmsShowsCategory {
          id
          slug
          categoryTitle
        }
      }
    }
  }
`

export default Shows
