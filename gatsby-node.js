const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsShow {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsShow.edges.map(({ node: show }) => {
        createPage({
          path: `shows/${show.slug}`,
          component: path.resolve(`./src/pages/show/show.js`),
          context: {
            slug: show.slug,
          },
        })
      })
      resolve()
    })
  })
}
