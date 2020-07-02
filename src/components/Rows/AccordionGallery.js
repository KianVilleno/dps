import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const AccordionGallery = ({ content }) => {
  const grid = content.map(image => {
    return (
      <Item>
        <Img fluid={image.fluid} />
      </Item>
    )
  })
  return <Grid>{grid}</Grid>
}

export default AccordionGallery

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  padding: 40px;
  width: 20%;
`
