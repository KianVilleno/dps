// Imports
import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Seo from "../components/Seo"
import { HeroFullVideo, HeroCenterImage, HeroText } from "../components/Heros"
import { ShowInfo, LeftRightContent } from "../components/Content"

import Section, { Container } from "../components/Section"
import { Row, Column } from "../components/Grid"
import TmpPageGallery from "../components/Content/TmpPageGallery"

const HIVE_MIND_IMAGES = [
  {
    src: "/images/hive-mind/deadpuppetsociety-post-activation-5139.jpg",
    width: 0.5,
  },
  {
    src: "/images/hive-mind/deadpuppetsociety-post-activation-5140.jpg",
    width: 0.5,
  },
  {
    src: "/images/hive-mind/deadpuppetsociety-post-activation-5142.jpg",
    width: 0.5,
  },
  {
    src: "/images/hive-mind/deadpuppetsociety-post-activation-5158.jpg",
    width: 0.5,
  },
  {
    src: "/images/hive-mind/deadpuppetsociety-post-activation-7755.jpg",
    width: 0.5,
  },
  {
    src: "/images/hive-mind/deadpuppetsociety-post-activation-7757.jpg",
    width: 0.5,
  },
]

// Page
const Page = ({ data, location }) => {
  // console.log(data.datoCmsPage)

  const isHiveMind = location.pathname === "/hive-mind"

  return (
    <Layout>
      <Seo title={data.datoCmsPage.pageTitle} />
      {/* {JSON.stringify(data.datoCmsPage.content)} */}

      {/* Hero */}
      {data.datoCmsPage.hero.map((hero, index) => {
        if (hero.model.apiKey === "hero_full_video") {
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

      {isHiveMind ? (
        <Section>
          <p>
            &nbsp;
            <br />
            <br />
          </p>
          <Container>
            <Row>
              <TmpPageGallery images={HIVE_MIND_IMAGES} />
            </Row>
          </Container>
        </Section>
      ) : null}
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
