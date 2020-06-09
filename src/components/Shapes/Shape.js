// Shapes
import React from "react"
import styled from "@emotion/styled"
import { Heading, Text, Link } from "theme-ui"

// Components
export const Shape = props => {
  const { title, description, link } = props.data
  const { shape } = props
  return (
    <ShapeStyled shape={shape}>
      <Heading as="h4" variant="text2Xl">
        {title}
      </Heading>

      <Text variant="textLg" sx={{ marginTop: 33 }}>
        {description}
      </Text>

      <Link href={link} variant="link" sx={{ marginTop: 33 }}>
        Learn more
      </Link>
    </ShapeStyled>
  )
}

// Styled components
const ShapeStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  max-width: 530px;
  height: 530px;
  max-height: 100%;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.shape});
  text-align: center;
`
