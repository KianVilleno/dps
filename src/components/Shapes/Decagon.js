// Imports
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Shape } from "./Shape"
import { colors } from "../../styles/settings"

// Components
export const Decagon = props => {
  const shape = "/images/decagon.svg"
  return (
    <StaticQuery
      query={graphql`
        query DecagonQuery {
          datoCmsDecagon {
            title
            description
            link
          }
        }
      `}
      render={data => {
        return (
          <Shape
            data={data.datoCmsDecagon}
            shape={shape}
            color={colors.granola}
          />
        )
      }}
    />
  )
}
