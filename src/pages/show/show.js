// Imports
import React from "react"
import Layout from "../../Layouts/Layout"
import Hero from "../../components/Hero"
import Body from "../../components/Show/Body"

// Component
export default ({ data }) => {
  const { title, bodyTitle, bodyText, accordions } = data.datoCmsShow
  const heroData = { title, playHighlightsButton: true }
  const bodyData = {
    title: bodyTitle,
    content: bodyText,
    accordions,
  }
  return (
    <Layout>
      <Hero sectionData={heroData} />
      <Body sectionData={bodyData} />
    </Layout>
  )
}

// Styled Components

// Query
export const query = graphql`
  query ShowQuery($slug: String!) {
    datoCmsShow(slug: { eq: $slug }) {
      title
      slug
      bodyTitle
      bodyText
      accordions {
        content
        title
      }
    }
  }
`

// Export
