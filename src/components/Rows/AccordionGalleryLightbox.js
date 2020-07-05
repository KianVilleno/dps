import React from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import styled from "@emotion/styled"
import { Text, useThemeUI } from "theme-ui"

const AccordionGalleryLightbox = ({
  images,
  index,
  open,
  setIndex,
  setOpen,
}) => {
  const { theme } = useThemeUI()

  if (!open) return null

  return (
    <Lightbox
      enableZoom={false}
      mainSrc={images[index].src}
      nextSrc={images[(index + 1) % images.length].src}
      prevSrc={images[(index + images.length - 1) % images.length].src}
      onCloseRequest={() => setOpen(false)}
      imageTitle={
        <Title as="span" variant="textSm" color={theme.colors.textOther}>
          {images[index].title}
        </Title>
      }
      imageCaption={
        <Caption as="span" variant="textSm" color={theme.colors.textOther}>
          {images[index].description}
        </Caption>
      }
      onMovePrevRequest={() =>
        setIndex((index + images.length - 1) % images.length)
      }
      onMoveNextRequest={() => setIndex((index + 1) % images.length)}
    />
  )
}

export default AccordionGalleryLightbox

const Title = styled(Text)``

const Caption = styled(Text)``
