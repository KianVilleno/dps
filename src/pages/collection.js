import React from "react"
import { graphql } from "gatsby"
import _ from "lodash"
import "../styles/index.css"
import Layout from "../layouts/Layout"

import HeroChoice from "../components/HeroChoice"

const DATA = {
  hero: {
    title: "Collection",
    subtitle: "...",
    categories: [],
  },
}

const Collection = ({ data }) => {
  return (
    <Layout>
      <HeroChoice
        parent="education"
        title={DATA.hero.title}
        subtitle={DATA.hero.subtitle}
        categories={DATA.hero.categories}
      />
      Soon.
    </Layout>
  )
}

export default Collection
