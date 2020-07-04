import React from "react"
// import { Link } from "gatsby"
import styled from "@emotion/styled"
import Button from "../../Button"
import { Link } from "gatsby"
import TagLink from "../../TagLink"

const HeaderHav = ({ sections, parentSlug, currSlug }) => {
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
  margin: 1em 0;
`

const ItemEl = styled.div`
  padding: 0 0.4em;
`