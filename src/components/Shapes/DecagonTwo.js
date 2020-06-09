// Imports
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Shape } from "./Shape"

// Components
export const DecagonTwo = props => {
  const shape = "/images/decagon-two.svg"
  return (
    <StaticQuery
      query={graphql`
        query DecagonTwoQuery {
          datoCmsDecagonTwo {
            title
            description
            link
          }
        }
      `}
      render={data => {
        return <Shape data={data.datoCmsDecagonTwo} shape={shape} />
      }}
    />
  )
}
