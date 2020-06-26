// Imports
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Shape } from "./Shape"
import { colors } from "../../styles/settings"

// Components
export const DodecagonTwo = props => {
  const shape = "/images/dodecagon-two.svg"
  return (
    <StaticQuery
      query={graphql`
        query DodecagonTwoQuery {
          datoCmsDodecagonTwo {
            title
            description
            link
          }
        }
      `}
      render={data => {
        return (
          <Shape
            data={data.datoCmsDodecagonTwo}
            shape={shape}
            color={colors.salmon}
          />
        )
      }}
    />
  )
}
