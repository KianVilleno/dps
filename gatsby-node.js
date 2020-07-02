const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // const showsTemplate = path.resolve(`./src/pages/show/show.js`)
  // const educationTemplate = path.resolve(`./src/pages/education/show.js`)

  const pageDefaultTemplate = path.resolve(`./src/templates/page-default.js`)
  const pageIndexTemplate = path.resolve(`./src/templates/page-index.js`)

  const pages = graphql(`
    {
      pageDefault: allContentfulPage {
        edges {
          node {
            title
            slug
          }
        }
      }
      pageIndex: allContentfulIndexPage {
        edges {
          node {
            title
            slug
            sections {
              title
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }

    if (result.data.pageDefault) {
      result.data.pageDefault.edges.forEach((edge, index) => {
        const { title, slug } = edge.node

        const pagePath = slug === "home" ? "/" : `/${slug}/`

        console.log("ⓘ Make Page >>>>>>>>>>>", title, pagePath)
        createPage({
          path: pagePath,
          component: pageDefaultTemplate,
          context: {
            slug,
          },
        })
      })
    }

    if (result.data.pageIndex) {
      result.data.pageIndex.edges.forEach((edge, index) => {
        const { title, slug, sections } = edge.node
        console.log("ⓘ Make Index Page >>>>>>>>>>>", title, `/${slug}/`)
        createPage({
          path: `/${slug}/`,
          component: pageIndexTemplate,
          context: {
            parentSlug: slug,
            slug,
          },
        })

        sections.forEach((section, index) => {
          console.log(
            "ⓘ Make Index Sub Page >>>>>>>>>>>",
            section.title,
            `/${slug}/${section.slug}/`
          )
          createPage({
            path: `/${slug}/${section.slug}/`,
            component: pageIndexTemplate,
            context: {
              parentSlug: slug,
              slug: section.slug,
            },
          })
        })
      })
    }
  })

  return Promise.all([pages])
}
