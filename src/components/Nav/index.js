import React, { useState } from "react"
import { Link } from "gatsby"
import { Text } from "theme-ui"
import styled from "@emotion/styled"
import { useLocation } from "@reach/router"
import ScrollLock from "react-scrolllock"
import Wordmark from "./Wordmark"
import Logomark from "./Logomark"
import Toggle from "./Toggle"
import Social from "./Social"

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)

  const location = useLocation()
  const showLogoMark = location.pathname !== "/"

  // const toggleNav = () => setNavOpen(!navOpen)
  return (
    <NavWrapper open={navOpen}>
      <Toggle open={navOpen} setOpen={setNavOpen} />
      <Wordmark />
      <Logomark show={showLogoMark} />
      <Navigation open={navOpen} />
      <ScrollLock isActive={navOpen} />
    </NavWrapper>
  )
}

const Navigation = props => {
  const { open } = props
  return (
    <ItemsWrap open={open}>
      <NavInner>
        <NavLink to="/production">
          <Text
            as="span"
            variant="textNav"
            sx={{ fontWeight: "bold", fontSize: ["6.5vh", "7.5vh"] }}
          >
            Production
          </Text>
        </NavLink>
        <NavLink to="/education">
          <Text
            as="span"
            variant="textNav"
            sx={{ fontWeight: "bold", fontSize: ["6.5vh", "7.5vh"] }}
          >
            Education
          </Text>
        </NavLink>
        <NavLink to="/activation">
          <Text
            as="span"
            variant="textNav"
            sx={{ fontWeight: "bold", fontSize: ["6.5vh", "7.5vh"] }}
          >
            Activation
          </Text>
        </NavLink>
        <NavLink to="/collection">
          <Text
            as="span"
            variant="textNav"
            sx={{ fontWeight: "bold", fontSize: ["6.5vh", "7.5vh"] }}
          >
            Collection
          </Text>
        </NavLink>
        <NavLink to="/company">
          <Text
            as="span"
            variant="textNav"
            sx={{ fontWeight: "bold", fontSize: ["6.5vh", "7.5vh"] }}
          >
            Company
          </Text>
        </NavLink>
        <NavLink to="/contact">
          <Text
            as="span"
            variant="textNav"
            sx={{ fontWeight: "bold", fontSize: ["6.5vh", "7.5vh"] }}
          >
            Contact
          </Text>
        </NavLink>
      </NavInner>
      <Social />
    </ItemsWrap>
  )
}

// Styled Components
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
  /* height: 100vh; */
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
    /* font-size: 71px; */
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

export default Nav
