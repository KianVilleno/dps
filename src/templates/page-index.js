import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Seo from "../components/Seo"
import Header from "../components/Header"
import Nav from "../components/Header/Nav"
import Summary from "../components/Header/Summary"
import Cards from "../components/Rows/Cards"
import Rows from "../components/Rows"
import { getCurrSlugSection } from "../util/helpers"

const PageIndex = ({ data, location }) => {
  if (
    !data &&
    !data.allContentfulIndexPage &&
    !data.allContentfulIndexPage.edges[0]
  )
    return <p>Page data not found :(</p>

  const {
    title,
    sections,
    slug,
    summary,
    seo,
    rows,
  } = data.allContentfulIndexPage.edges[0].node

  console.log("rows", rows)

  if (!sections) return <p>Index Page has Sections :(</p>

  const { currSlug, currSection } = getCurrSlugSection(location, sections)

  return (
    <Layout>
      <Seo
        title={seo && seo.title ? seo.title : title}
        description={seo && seo.description ? seo.description : null}
        image={seo && seo.image && seo.image.fluid ? seo.image.fluid.src : null}
      />
      <Header format="Text" title={title} section={null} />
      <Nav sections={sections} parentSlug={slug} currSlug={currSlug} />
      <Summary data={summary} />
      <Cards content={currSection.cards} />
      <Rows data={rows} />
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
          summary {
            childMarkdownRemark {
              html
            }
          }
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
          rows {
            __typename
            ... on ContentfulRowShapes {
              shapes {
                ... on ContentfulShapeLink {
                  heading
                  description
                  theme
                  type
                  linkText
                  linkUrl
                }
              }
            }
          }
          seo {
            title
            description
            image {
              fluid(maxWidth: 1000) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`
