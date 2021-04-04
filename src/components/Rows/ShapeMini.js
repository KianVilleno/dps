import React from "react"
import styled from "@emotion/styled"
import { Heading, Text, Link } from "theme-ui"
import { colors } from "../../styles/settings"
import DecagonMini from "../Svg/DecagonMini"
import DodecagonMini from "../Svg/DodecagonMini"
import { useThemeUI } from "theme-ui"

const ShapeMini = ({
  shape,
  heading,
  description,
  linkText,
  linkUrl,
  theme,
}) => {
  const { colorMode } = useThemeUI()

  let themeColor = colors[theme.toLowerCase()] || colors["midnight"]
  if (colorMode === "cloud") {
    themeColor = colors["tan"]
  } else if (colorMode === "midnight" && theme.toLowerCase() === "midnight") {
    themeColor = colors["tan"]
  }

  let shapeComponent = null
  if (shape === "decagon") {
    shapeComponent = <DecagonMini color={themeColor} />
  } else if (shape === "dodecagon") {
    shapeComponent = <DodecagonMini color={themeColor} />
  }

  return (
    <ShapeWrap>
      <Shape shape={shape}>{shapeComponent}</Shape>
      <Heading
        as="h4"
        variant="text2Xl"
        sx={{ marginTop: ["4vw", 30], fontWeight: "bold", color: themeColor }}
      >
        {heading}
      </Heading>
      <Text
        as="p"
        variant="textBase"
        sx={{ marginTop: ["4vw", 30], color: themeColor }}
      >
        {description}
      </Text>
      <Link
        href={linkUrl}
        variant="link"
        sx={{ marginTop: ["5vw", 33], color: themeColor }}
      >
        {linkText}
      </Link>
    </ShapeWrap>
  )
}

export default ShapeMini

const Shape = styled.div`
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    svg {
      width: ${props => (props.shape === "decagon" ? `50px` : `70px`)};
      height: auto;
    }
  }
`

const ShapeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 492px;
  text-align: center;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 50%;
  }
`
