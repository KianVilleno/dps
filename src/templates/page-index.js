import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Seo from "../components/Seo"
import Header from "../components/Header"
import Nav from "../components/Header/Nav"
import Cards from "../components/Rows/Cards"
import { getCurrSlugSection } from "../util/helpers"

const PageIndex = ({ data, location }) => {
  if (
    !data &&
    !data.allContentfulIndexPage &&
    !data.allContentfulIndexPage.edges[0]
  )
    return <p>Page data not found :(</p>

  const { title, sections, slug } = data.allContentfulIndexPage.edges[0].node

  if (!sections) return <p>Index Page has Sections :(</p>

  const { currSlug, currSection } = getCurrSlugSection(location, sections)

  return (
    <Layout>
      <Seo title={title} />
      <Header format="Text" title={title} />
      <Nav sections={sections} parentSlug={slug} currSlug={currSlug} />
      <Cards content={currSection.cards} />
    </Layout>
  )
}

export default PageIndex

export const query = graphql`
  query($parentSlug: String!) {
    allContentfulIndexPage(filter: { slug: { eq: $parentSlug } }) {
      edges {
        node {
          title
          slug
          sections {
            title
            slug
            cards {
              title
              description {
                childMarkdownRemark {
                  html
                }
              }
              thumbnail {
                title
                fluid {
                  ...GatsbyContentfulFluid
                }
                description
              }
              link {
                slug
              }
            }
          }
        }
      }
    }
  }
`
