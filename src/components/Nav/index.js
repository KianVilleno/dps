import React, { useState } from "react"
import { Link } from "gatsby"
import { Text } from "theme-ui"
import styled from "@emotion/styled"
import { useLocation } from "@reach/router"
import ScrollLock from "react-scrolllock"
import Logomark from "./Logomark"
import Toggle from "./Toggle"
import Social from "./Social"
import { StaticQuery, graphql } from "gatsby"

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)

  const location = useLocation()
  const showLogoMark = location.pathname !== "/" || navOpen

  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        const { globalQuery, sectionQuery } = data

        const { sections } = sectionQuery.siteMetadata

        const {
          socialFacebook,
          socialYouTube,
          socialInstagram,
          navLabelProduction,
          navLabelEducation,
          navLabelActivation,
          navLabelCollection,
        } = globalQuery.edges[0].node

        const labels = {
          navLabelProduction,
          navLabelEducation,
          navLabelActivation,
          navLabelCollection,
        }

        return (
          <NavWrapper open={navOpen}>
            <Toggle open={navOpen} setOpen={setNavOpen} />
            <Logomark show={showLogoMark} />
            <Navigation
              open={navOpen}
              navItems={sections}
              navLabels={labels}
              socialItems={{ socialInstagram, socialFacebook, socialYouTube }}
            />
            <ScrollLock isActive={navOpen} />
          </NavWrapper>
        )
      }}
    />
  )
}

const Navigation = ({ open, navItems, navLabels, socialItems }) => {
  const getLabel = (section, labels) => {
    let label
    for (const key in labels) {
      if (labels.hasOwnProperty(key)) {
        const element = labels[key]
        if (key.indexOf(section) > -1 && element) {
          label = (
            <Tag as="span" variant="textSm">
              {element}
            </Tag>
          )
        }
      }
    }
    return label
  }

  return (
    <ItemsWrap open={open}>
      <NavInner>
        {navItems.map((item, i) => (
          <NavLink to={item.url} key={i}>
            <Text
              as="span"
              variant="textNav"
              sx={{ fontWeight: "bold", fontSize: ["6.5vh", "7.5vh"] }}
            >
              {item.title}
            </Text>
            {getLabel(item.title, navLabels)}
          </NavLink>
        ))}
      </NavInner>
      <Social items={socialItems} />
    </ItemsWrap>
  )
}

const NavWrapper = styled.div`
  position: ${props => (props.open ? "fixed" : "relative")};
  left: 0;
  top: 0;
  width: 100%;
  height: ${props => (props.open ? "100%" : "auto")};
  z-index: 40;
`

const ItemsWrap = styled.nav`
  display: ${props => (props.open ? "block" : "none")};
  visibility: ${props => (props.open ? "visible" : "hidden")};
  z-index: 9;
  position: fixed;
  width: 100%;
  padding-top: 90px;
  background: #111f30;
  top: 0;
  left: 0;
`

const NavInner = styled.div`
  height: calc(100vh - 190px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    height: calc(100vh - 170px);
  }
`

const NavLink = styled(Link)`
  display: block;
  color: #b39b78;
  font-weight: 300;
  line-height: 1.3;
  text-align: center;
  text-decoration: none;
  position: relative;

  &:nth-of-type(4) {
    margin-bottom: 2em;
  }

  span {
    color: #b39b78;
  }
  &:hover {
    text-decoration: none;
    opacity: 0.9;
    top: -1px;
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    &:nth-of-type(4) {
      margin-bottom: 3em;
    }
  }
`

const Tag = styled(Text)`
  position: absolute;
  left: calc(100% + 5px);
  white-space: nowrap;
`

export default Nav

const pageQuery = graphql`
  query {
    sectionQuery: site {
      siteMetadata {
        sections {
          title
          url
        }
      }
    }
    globalQuery: allContentfulGlobal(
      limit: 1
      filter: { title: { eq: "Global Settings" } }
    ) {
      edges {
        node {
          socialFacebook
          socialYouTube
          socialInstagram
          navLabelProduction
          navLabelEducation
          navLabelActivation
          navLabelCollection
        }
      }
    }
  }
`
