import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      console.log("node 1", node)
      return <p>NODE</p>
    },
  },
}

const ContentfulTest = ({ data }) => {
  const contentJson =
    data.allContentfulPage.edges[0].node.rows[0].contentLeft.json

  return <div>{documentToReactComponents(contentJson, options)}</div>
}

export default ContentfulTest

export const query = graphql`
  {
    allContentfulPage {
      edges {
        node {
          title
          rows {
            ... on ContentfulRowAccordionText {
              title
              contentLeft {
                json
              }
              contentRight {
                json
              }
            }
            ... on ContentfulRowBreakout {
              title
              breakout {
                json
              }
            }
            ... on ContentfulRowAccordionGallery {
              title
              images {
                id
              }
            }
          }
        }
      }
    }
  }
`
