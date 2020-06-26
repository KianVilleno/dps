// Imports
import React from "react"
import styled from "@emotion/styled"
import { Heading } from "theme-ui"
import Button from "../components/Button"

// Components
const HeroChoice = props => {
  const { title, categories, parent, subtitle } = props

  const pagePath =
    typeof window !== "undefined" && window.location.pathname
      ? window.location.pathname
      : null
  return (
    <HeroContainer>
      <Heading as="h1" variant="text3Xl">
        {title}
      </Heading>
      <Categories>
        {categories.map((category, index) => (
          <Button
            variant={
              pagePath ===
              (`/${parent}/${category.slug}` || `/${parent}/${category.slug}/`)
                ? "filled"
                : "primary"
            }
            href={`/${parent}/${category.slug}`}
            key={index}
          >
            {category.categoryTitle}
          </Button>
        ))}
      </Categories>

      <Heading
        as="h3"
        variant="textLg"
        sx={{
          marginTop: 30,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: 513,
          textAlign: "center",
        }}
      >
        {subtitle}
      </Heading>
    </HeroContainer>
  )
}

// Styled Components
const HeroContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding-top: 100px;
  margin-bottom: 2em;
  h3 {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-bottom: 0em;
    padding-top: 0px;
    height: 500px;
    h3 {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
`

const Categories = styled.div`
  display: none;
  /* display: flex; */
  justify-content: center;
  margin-top: 35px;
`

export default HeroChoice
