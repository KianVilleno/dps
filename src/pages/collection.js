import React from "react"
import "../styles/index.css"
import { Box } from "theme-ui"
import Layout from "../layouts/Layout"

import Seo from "../components/Seo"
import HeroChoice from "../components/HeroChoice"

const DATA = {
  hero: {
    title: "Collection",
    subtitle: "Coming soon.",
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
      <Box>&nbsp;</Box>
    </Layout>
  )
}

export default Collection
