import React from "react"
import styled from "@emotion/styled"
import { Heading, Text } from "theme-ui"
import { Link } from "gatsby"
import { colors } from "../../styles/settings"
import DecagonLarge from "../Svg/DecagonLarge"
import DodecagonLarge from "../Svg/DodecagonLarge"

const ShapeLarge = ({
  shape,
  heading,
  description,
  linkText,
  linkUrl,
  theme,
}) => {
  const themeColor = colors[theme.toLowerCase()] || colors["midnight"]

  let ratio = 1
  let shapeComponent = null
  if (shape === "decagon") {
    ratio = 426 / 586
    shapeComponent = <DecagonLarge color={themeColor} />
  } else if (shape === "dodecagon") {
    ratio = 1
    shapeComponent = <DodecagonLarge color={themeColor} />
  }

  return (
    <ShapeWrap shape={shape}>
      <Aspect ratio={ratio}>
        <Shape>{shapeComponent}</Shape>
        <Content>
          <Link to={linkUrl} sx={{ color: themeColor }}>
            <Heading as="span" variant="text2Xl" sx={{ color: themeColor }}>
              {heading}
            </Heading>
            <Text
              as="span"
              variant="textLg"
              sx={{ marginTop: [15, 33], color: themeColor }}
            >
              {description}
            </Text>
            <Text
              as="span"
              variant="textSm"
              sx={{
                marginTop: [15, 33],
                color: themeColor,
                textTransform: "uppercase",
                textDecoration: "underline",
              }}
            >
              {linkText}
            </Text>
          </Link>
        </Content>
      </Aspect>
    </ShapeWrap>
  )
}

const ShapeWrap = styled.div`
  width: 100%;
  /* max-width: 530px; */
  margin: 0 auto;
  padding: 20px ${props => (props.shape === "decagon" ? `2vw` : `3vw`)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`

const Aspect = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: ${props => `${props.ratio * 100}%`};
  position: relative;
  width: 100%;
  position: relative;
  &:hover {
    top: -2px;
    svg {
      opacity: 0.5;
    }
  }
`

const Shape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  svg {
    width: 100%;
    height: auto;
  }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  padding: 0 20px;
  z-index: 2;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-decoration: none;
  }
`

export default ShapeLarge
