import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Seo from "../components/Seo"
import Rows from "../components/Rows"
import Header from "../components/Header"

const Page = ({ data }) => {
  const [featureVideo, setFeatureVideo] = useState(null)
  const { pageQuery } = data

  if (!pageQuery && !pageQuery.edges[0]) return <p>Page data not found :(</p>
  const {
    title,
    headerMedia,
    headerType,
    headerOverlay,
    headerOverlayOpacity,
    featureVideoText,
    featureVideoUrl,
    rows,
    section,
    seo,
  } = pageQuery.edges[0].node

  return (
    <Layout featureVideo={featureVideo}>
      <Seo
        title={seo && seo.title ? seo.title : title}
        description={seo && seo.description ? seo.description : null}
        image={seo && seo.image && seo.image.fluid ? seo.image.fluid.src : null}
      />
      <Header
        format={headerType}
        title={title}
        media={headerMedia}
        featureVideoText={featureVideoText}
        featureVideoUrl={featureVideoUrl}
        setFeatureVideo={setFeatureVideo}
        isOverlay={headerOverlay}
        overlayOpacity={headerOverlayOpacity}
        section={section}
      />
      <Rows data={rows} />
    </Layout>
  )
}

export default Page

export const query = graphql`
  query($slug: String!) {
    pageQuery: allContentfulPage(filter: { slug: { eq: $slug } }) {
      edges {
        ...PageDefaultNodeFragment
      }
    }
  }
  fragment PageDefaultNodeFragment on ContentfulPageEdge {
    node {
      title
      section
      headerType
      headerMedia {
        title
        file {
          url
          contentType
        }
      }
      headerOverlay
      headerOverlayOpacity
      featureVideoText
      featureVideoUrl
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
      seo {
        title
        description
        image {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
