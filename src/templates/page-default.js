import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Seo from "../components/Seo"
import Rows from "../components/Rows"
import Header from "../components/Header"

const Page = ({ data }) => {
  if (!data && !data.allContentfulPage.edges[0])
    return <p>Page data not found :(</p>
  const {
    title,
    headerMedia,
    headerType,
    rows,
  } = data.allContentfulPage.edges[0].node

  return (
    <Layout>
      <Seo title={title} />
      <Header format={headerType} title={title} media={headerMedia} />
      <Rows data={rows} />
    </Layout>
  )
}

export default Page

export const query = graphql`
  query($slug: String!) {
    allContentfulPage(filter: { slug: { eq: $slug } }) {
      edges {
        ...PageDefaultNodeFragment
      }
    }
  }
  fragment PageDefaultNodeFragment on ContentfulPageEdge {
    node {
      title
      headerType
      headerMedia {
        title
        file {
          url
          contentType
        }
      }
      rows {
        ... on ContentfulRowAccordionText {
          title
          openByDefault
          contentLeft {
            json
          }
          contentRight {
            json
          }
        }
        ... on ContentfulRowBreakout {
          title
          breakout {
            json
          }
        }
        ... on ContentfulRowAccordionGallery {
          title
          openByDefault
          images {
            id
            title
            description
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid
            }
          }
        }
        ... on ContentfulRowText {
          title
          contentLeft {
            json
          }
          contentRight {
            json
          }
        }
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
        ... on ContentfulRowTextFeature {
          title
          layout
          content {
            json
          }
          image {
            id
            title
            description
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid
            }
          }
          linkText
          linkUrl
        }
      }
    }
  }
`
