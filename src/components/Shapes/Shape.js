// Shapes
import React from "react"
import styled from "@emotion/styled"
import { Heading, Text, Link } from "theme-ui"
import { colors } from "../../styles/settings"
import Section, { Container } from "../Section"

// Components
export const Shape = props => {
  const { title, description, link } = props.data
  const { shape, color } = props

  const isTall = shape.indexOf("dodecagon") > -1

  return (
    <ShapeStyled shape={shape} isTall={isTall}>
      <Heading as="h4" variant="text2Xl" sx={{ color: color }}>
        {title}
      </Heading>

      <Text variant="textLg" sx={{ marginTop: [15, 33], color: color }}>
        {description}
      </Text>

      <Link
        href={link}
        variant="link"
        sx={{ marginTop: [15, 33], color: color }}
      >
        Learn more
      </Link>
    </ShapeStyled>
  )
}

export const ShapeMinified = props => {
  const { shape, color, title, subtitle, link } = props
  return (
    <ShapeMinfiedStyled>
      {shape === "dodecagon" ? (
        <svg
          width="104"
          height="77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.203 1h57.594l15.835 15.79 5.833 21.71-5.834 21.71L80.797 76H23.203L7.369 60.21 1.535 38.5 7.37 16.79 23.203 1z"
            stroke={color}
            stroke-width="2"
          />
        </svg>
      ) : (
        <svg
          width="78"
          height="77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.542 12.042L39 1.082l26.458 10.96L76.418 38.5l-10.96 26.458L39 75.918l-26.458-10.96L1.582 38.5l10.96-26.458z"
            stroke={color}
            stroke-width="2"
          />
        </svg>
      )}
      <Heading
        as="h4"
        variant="text2Xl"
        sx={{ marginTop: 30, fontWeight: "bold" }}
      >
        {title}
      </Heading>
      <Text as="p" variant="textBase" sx={{ marginTop: 30 }}>
        {subtitle}
      </Text>
      <Link href={link} variant="link" sx={{ marginTop: 33 }}>
        Learn more
      </Link>
    </ShapeMinfiedStyled>
  )
}

export const ShapeMinfiedGrid = props => {
  const { shapesContent } = props
  return (
    <Section pt="30px">
      <ShapesMinifiedContainer>
        {shapesContent.map((shape, index) => (
          <ShapeMinified
            shape={shape.shape}
            color={colors[shape.color]}
            title={shape.title}
            subtitle={shape.subtitle}
            link={shape.link}
          />
        ))}
      </ShapesMinifiedContainer>
    </Section>
  )
}

// Styled components
const ShapeStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  max-width: 530px;
  height: ${props => (props.isTall ? `400px` : `300px`)};
  max-height: 100%;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.shape});
  text-align: center;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    height: ${props => (props.isTall ? `450px` : `350px`)};
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    height: 530px;
  }
`

const ShapeMinfiedStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 50%;
  max-width: 492px;
  text-align: center;
`
const ShapesMinifiedContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`
