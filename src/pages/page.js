// Imports
import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import { HeroFullVideo, HeroCenterImage, HeroText } from "../components/Heros"
import { ShowInfo, LeftRightContent } from "../components/Content"

// Page
const Page = ({ data }) => {
  console.log(data.datoCmsPage)
  return (
    <Layout>
      {/* {JSON.stringify(data.datoCmsPage.content)} */}

      {/* Hero */}
      {data.datoCmsPage.hero.map((hero, index) => {
        if (hero.model.apiKey === "hero_full_video") {
          console.log(">>", hero)

          return (
            <HeroFullVideo
              key={index}
              title={hero.title}
              backgroundImage={hero.imageBackground}
              backgroundVideo={hero.videoBackground}
              fullVideo={hero.videoFull}
              showHighlightsReel={hero.showHighlightsReel}
            />
          )
        }
        if (hero.model.apiKey === "hero_center_image") {
          return (
            <HeroCenterImage
              key={index}
              image={hero.image}
              title={hero.title}
            />
          )
        }
        if (hero.model.apiKey === "hero_text") {
          return (
            <HeroText key={index} title={hero.title} subtitle={hero.subtitle} />
          )
        } else {
          return null
        }
      })}

      {/* Show Content */}
      {data.datoCmsPage.isShowPage ? (
        <ShowInfo content={data.datoCmsPage.showInfo} />
      ) : null}

      {/* Content */}
      {data.datoCmsPage.content.map((content, index) => {
        switch (content.model.apiKey) {
          case "content_left_right":
            return (
              <LeftRightContent content={content} key={"content-" + index} />
            )
          default:
            return null
        }
      })}
    </Layout>
  )
}

// GraphQL
export const query = graphql`
  query PageQuery($slug: String) {
    datoCmsPage(slug: { eq: $slug }) {
      pageTitle
      pageType
      theme
      hero {
        ... on DatoCmsHeroFullVideo {
          model {
            apiKey
          }
          title
          showHighlightsReel
          imageBackground {
            alt
            url
          }
          videoBackground {
            video {
              mp4Url
            }
          }
          videoFull {
            video {
              mp4Url
            }
          }
        }
        ... on DatoCmsHeroCenterImage {
          model {
            apiKey
          }
          image {
            alt
            url
          }
          title
        }
        ... on DatoCmsHeroText {
          model {
            apiKey
          }
          title
          subtitle
        }
      }
      content {
        ... on DatoCmsBreakoutText {
          model {
            apiKey
          }
          text
        }
        ... on DatoCmsContentLeftRight {
          model {
            apiKey
          }
          leftContentNode {
            childMarkdownRemark {
              html
            }
          }
          rightContentNode {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on DatoCmsAccordionGallery {
          model {
            apiKey
          }
          title
          open
          images {
            alt
            url
          }
        }
        ... on DatoCmsAccordionContent {
          model {
            apiKey
          }
          title
          open
          leftContentNode {
            childMarkdownRemark {
              html
            }
          }
          rightContentNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      isShowPage
      showInfo {
        ... on DatoCmsInfoBlock {
          model {
            apiKey
          }
          text
          showButton
          buttonLink
          buttonText
        }
        ... on DatoCmsEventBody {
          model {
            apiKey
          }
          textNode {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on DatoCmsBreakoutText {
          model {
            apiKey
          }
          text
        }
      }
      shapesSection {
        ... on DatoCmsShapeMinified {
          model {
            apiKey
          }
          id
          color
          link
          shape
          subtitle
          title
        }
        ... on DatoCmsShapeFull {
          model {
            apiKey
          }
          decagon
          decagonTwo
          dodecagon
          dodecagonTwo
        }
      }
    }
  }
`

// Export
export default Page
