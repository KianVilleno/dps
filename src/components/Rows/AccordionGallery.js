import React, { useState } from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import AccordionGalleryLightbox from "./AccordionGalleryLightbox"

const AccordionGallery = ({ content }) => {
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const grid = content.map((image, index) => {
    return (
      <Item
        key={index}
        onClick={() => {
          setLightboxIndex(index)
          setLightboxOpen(true)
        }}
      >
        <Img fluid={image.fluid} />
      </Item>
    )
  })

  let imgsArr = []
  content.forEach(image => {
    imgsArr.push(image.fluid.src)
  })

  return (
    <>
      <Grid>{grid}</Grid>
      <AccordionGalleryLightbox
        images={imgsArr}
        index={lightboxIndex}
        open={lightboxOpen}
        setIndex={setLightboxIndex}
        setOpen={setLightboxOpen}
      />
    </>
  )
}

export default AccordionGallery

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  padding: 40px;
  width: 20%;
  position: relative;
  &:hover {
    top: -1px;
    cursor: pointer;
  }
`
