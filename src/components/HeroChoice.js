// Imports
import React from "react"
import styled from "@emotion/styled"

// Components
const HeroChoice = props => {
  const { title, categories } = props
  return (
    <HeroContainer>
      <Title>{title}</Title>

      <Categories>
        {categories.map(category => (
          <Category href={`shows/${category.slug}`}>
            {category.categoryTitle}
          </Category>
        ))}
      </Categories>
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
  height: 600px;
`
const Title = styled.h1`
  color: #111111;
  font-size: 100px;
  font-weight: 300;
  line-height: 1.2;
  text-align: center;
`

const Categories = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`
const Category = styled.a`
  margin: 0 5px;
  padding: 8px 28px;
  background: none;
  border: 1px solid #111;
  border-radius: 120px;
  font-size: 22px;
  color: #111111;
  line-height: 1.4;
  text-align: center;
  text-transform: uppercase;
`

export default HeroChoice
