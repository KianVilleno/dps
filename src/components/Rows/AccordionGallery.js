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
  padding: 20px 20px 30px 20px;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    padding: 20px 30px 30px 30px;
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    padding: 30px 35px 40px 35px;
  }
  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    padding: 30px 35px 40px 35px;
  }
`

const Item = styled.div`
  padding: 20px;
  width: 50%;
  position: relative;
  &:hover {
    top: -1px;
    cursor: pointer;
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 33.3333%;
    padding: 30px;
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    width: 20%;
    padding: 30px;
  }
  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    width: 20%;
    padding: 2.5vw;
  }
`
