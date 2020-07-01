import React from "react"
import "../styles/index.css"
import { Heading } from "theme-ui"
import Layout from "../layouts/Layout"
import { HeroCenterImage, HeroFullVideo } from "../components/Heros"
import Section, { Container } from "../components/Section"
import { Row, Column } from "../components/Grid"
import TmpPageGallery from "../components/Content/TmpPageGallery"

import Seo from "../components/Seo"
import HeroChoice from "../components/HeroChoice"

const DATA = {
  hero: {
    title: "Collection",
    subtitle: "Creating custom curiosities and fan favourites for collectors",
    categories: [],
  },
}

const heroImage = {
  url: "/images/collection/deadpuppetsociety-hero-activation-7707.jpg",
  alt: "",
}
const heroTitle = "Collection"

const IMAGES = [
  {
    src: "/images/collection/deadpuppetsociety-post-activation-7726.jpg",
    width: 0.5,
  },
  {
    src: "/images/collection/deadpuppetsociety-post-activation-7730.jpg",
    width: 0.5,
  },
  {
    src: "/images/collection/deadpuppetsociety-post-activation-7733.jpg",
    width: 1,
  },
]

const Collection = ({ data }) => {
  return (
    <Layout>
      <Seo title="Collection" />
      <HeroFullVideo
        title={heroTitle}
        backgroundImage={heroImage}
        backgroundVideo={null}
        fullVideo={null}
        showHighlightsReel={null}
      />
      {/* <HeroChoice
        parent="education"
        title={DATA.hero.title}
        subtitle={DATA.hero.subtitle}
        categories={DATA.hero.categories}
      /> */}
      <Heading
        as="h2"
        variant="textXl"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          width: "100%",
          maxWidth: 1045,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 0,
          marginBottom: [40, 100],
          paddingLeft: [20, 0],
          paddingRight: [20, 0],
        }}
      >
        Source an original sculpture from our exclusive range of handcrafted
        curiosities inspired by the natural world. Fashioned from semi-precious
        metals, our otherworldly oddities and sculptural elements are equally at
        home on display, or as part of a retail or hospitality fit-out. Our
        initial Collection range draws from the natural sciences: a brass bee
        and blue grouper, and a flutter of copper butterflies on driftwood; or
        talk to us for a custom commission piece.
        <br />
        <br />
      </Heading>
      <Section>
        <Container>
          <Row>
            <TmpPageGallery images={IMAGES} />
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export default Collection
