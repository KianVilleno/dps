import React from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const AccordionGalleryLightbox = ({
  images,
  index,
  open,
  setIndex,
  setOpen,
}) => {
  if (!open) return null
  return (
    <Lightbox
      enableZoom={false}
      mainSrc={images[index]}
      nextSrc={images[(index + 1) % images.length]}
      prevSrc={images[(index + images.length - 1) % images.length]}
      onCloseRequest={() => setOpen(false)}
      onMovePrevRequest={() =>
        setIndex((index + images.length - 1) % images.length)
      }
      onMoveNextRequest={() => setIndex((index + 1) % images.length)}
    />
  )
}

export default AccordionGalleryLightbox
