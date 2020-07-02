// // Imports
// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../../layouts/Layout"
// import { HeroImage } from "../../components/HeroImage"
// import { ContentBlock } from "../../components/ContentBlock"
// import { ShapeMinfiedGrid } from "../../components/Shapes/Shape"
// import Section, { Container } from "../../components/Section"
// import { colors } from "../../styles/settings"

// // Component
// export default ({ data }) => {
//   const { education } = data
//   return (
//     <Layout>
//       <HeroImage title={education.title} image={education.heroImage} />
//       <ContentBlock contentBlocks={education.content} />

//       <Section>
//         <Container>
//           <ShapeMinfiedGrid shapesContent={education.shapes} />
//         </Container>
//       </Section>
//     </Layout>
//   )
// }

// // Styled Components

// // Query
// export const query = graphql`
//   query EducationPageQuery($slug: String) {
//     education: datoCmsEducationPage(slug: { eq: $slug }) {
//       slug
//       theme
//       title
//       shapes {
//         color
//         link
//         shape
//         subtitle
//         title
//       }
//       heroImage {
//         alt
//         url
//       }
//       content {
//         title
//         content
//         image {
//           url
//           alt
//         }
//       }
//       category
//     }
//   }
// `

// // Export
