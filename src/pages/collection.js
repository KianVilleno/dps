import React from "react"
import "../styles/index.css"
import { Heading } from "theme-ui"
import Layout from "../layouts/Layout"

import Seo from "../components/Seo"
import HeroChoice from "../components/HeroChoice"

const DATA = {
  hero: {
    title: "Collection",
    subtitle: "Creating custom curiosities and fan favourites for collectors",
    categories: [],
  },
}

const Collection = ({ data }) => {
  return (
    <Layout>
      <Seo title="Collection" />
      <HeroChoice
        parent="education"
        title={DATA.hero.title}
        subtitle={DATA.hero.subtitle}
        categories={DATA.hero.categories}
      />
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
          marginBottom: 100,
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
        More coming soon.
      </Heading>
    </Layout>
  )
}

export default Collection
