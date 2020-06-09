// Imports
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Shape } from "./Shape"

// Components
export const Dodecagon = props => {
  const shape = "/images/dodecagon.svg"
  return (
    <StaticQuery
      query={graphql`
        query DodecagonQuery {
          datoCmsDodecagon {
            title
            description
            link
          }
        }
      `}
      render={data => {
        return <Shape data={data.datoCmsDodecagon} shape={shape} />
      }}
    />
  )
}
