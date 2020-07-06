import React from "react"
// import { Link } from "gatsby"
import styled from "@emotion/styled"
import TagLink from "../../TagLink"

const HeaderHav = ({ sections, parentSlug, currSlug }) => {
  if (sections.length < 2) return <Nav>&nbsp;</Nav>

  const items = sections.map((section, index) => {
    return (
      <Item
        key={`item-${index}`}
        isFirst={index === 0}
        isActive={section.slug === currSlug}
        section={section}
        parentSlug={parentSlug}
      />
    )
  })
  return <Nav>{items}</Nav>
}

const Item = ({ section, parentSlug, isFirst, isActive }) => {
  const { title, slug } = section
  const href = isFirst ? `/${parentSlug}` : `/${parentSlug}/${slug}`
  return (
    <ItemEl isActive={isActive}>
      <TagLink to={href}>{title}</TagLink>
    </ItemEl>
  )
}

export default HeaderHav

const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0 3em 0;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    margin: 2.8em 0 3.5em 0;
  }
`

const ItemEl = styled.div`
  padding: 0 0.4em;
`
