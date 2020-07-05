import React from "react"
import styled from "@emotion/styled"
import { Heading, Text, Link } from "theme-ui"
import { colors } from "../../styles/settings"
import DecagonMini from "../Svg/DecagonMini"
import DodecagonMini from "../Svg/DodecagonMini"

const ShapeMini = ({
  shape,
  heading,
  description,
  linkText,
  linkUrl,
  theme,
}) => {
  const themeColor = colors[theme.toLowerCase()] || colors["midnight"]

  let shapeComponent = null
  if (shape === "decagon") {
    shapeComponent = <DecagonMini color={themeColor} />
  } else if (shape === "dodecagon") {
    shapeComponent = <DodecagonMini color={themeColor} />
  }

  return (
    <ShapeWrap>
      <Shape>{shapeComponent}</Shape>
      <Heading
        as="h4"
        variant="text2Xl"
        sx={{ marginTop: 30, fontWeight: "bold", color: themeColor }}
      >
        {heading}
      </Heading>
      <Text as="p" variant="textBase" sx={{ marginTop: 30, color: themeColor }}>
        {description}
      </Text>
      <Link
        href={linkUrl}
        variant="link"
        sx={{ marginTop: 33, color: themeColor }}
      >
        {linkText}
      </Link>
    </ShapeWrap>
  )
}

export default ShapeMini

const Shape = styled.div``

const ShapeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 50%;
  max-width: 492px;
  text-align: center;
`
