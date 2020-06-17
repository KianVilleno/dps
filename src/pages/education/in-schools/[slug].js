// Imports
import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Layouts/Layout"
import Hero from "../../components/Info/Hero"

// Component
export default ({ data }) => {
  return (
    <Layout>
      <Hero sectionData={heroData} />
    </Layout>
  )
}

// Styled Components

// Query
export const query = graphql``

// Export
