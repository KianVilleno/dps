const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // const showsTemplate = path.resolve(`./src/pages/show/show.js`)
  // const educationTemplate = path.resolve(`./src/pages/education/show.js`)
  const pageTemplate = path.resolve(`./src/pages/page.js`)

  const pages = graphql(`
    {
      pages: allDatoCmsPage {
        edges {
          node {
            pageType
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }

    result.data.pages.edges.map(({ node }) => {
      const { pageType, slug } = node
      const newPath = `${slug}`

      console.log("ⓘ Create page", newPath)

      createPage({
        path: `/${newPath}`,
        component: pageTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
  })
  // const shows = graphql(`
  //   {
  //     shows: allDatoCmsShow {
  //       edges {
  //         node {
  //           slug
  //           category
  //         }
  //       }
  //     }
  //   }
  // `).then(result => {
  //   if (result.errors) {
  //     Promise.reject(result.errors)
  //   }

  //   result.data.shows.edges.map(({ node }) => {
  //     const { category, slug } = node
  //     const newPath = `${category.replace("production-", "")}/${slug}`
  //     createPage({
  //       path: `shows/${newPath}`,
  //       component: path.resolve(`./src/pages/show/show.js`),
  //       context: {
  //         slug: node.slug,
  //       },
  //     })
  //   })
  // })

  // const educationPages = graphql(`
  //   {
  //     education: allDatoCmsEducationPage {
  //       edges {
  //         node {
  //           slug
  //           category
  //         }
  //       }
  //     }
  //   }
  // `).then(result => {
  //   if (result.errors) {
  //     Promise.reject(result.errors)
  //   }

  //   result.data.education.edges.map(({ node }) => {
  //     const { category, slug } = node
  //     const newPath = `${category.replace("education-", "")}/${slug}`
  //     createPage({
  //       path: `education/${newPath}`,
  //       component: path.resolve(`./src/pages/education/[slug].js`),
  //       context: {
  //         slug: slug,
  //       },
  //     })
  //   })
  // })
  // return Promise.all([shows, educationPages])

  return Promise.all([pages])
}
