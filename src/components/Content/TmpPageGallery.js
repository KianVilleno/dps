import React from "react"
import styled from "@emotion/styled"

const TmpPageGallery = ({ images }) => {
  const imageContent = images.map((image, key) => {
    return (
      <StyledImage key={key} width={image.width}>
        <img src={image.src} />
      </StyledImage>
    )
  })
  return <Wrap>{imageContent}</Wrap>
}

export default TmpPageGallery

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledImage = styled.div`
  width: ${props => `${props.width * 100}%`};
  padding: 10px;
  img {
    width: 100%;
    height: auto;
  }
`
