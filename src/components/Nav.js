// Imports
import React, { useState } from "react"
import styled from "@emotion/styled"
import ScrollLock from "react-scrolllock"

// Components
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => setNavOpen(!navOpen)
  return (
    <NavWrapper>
      <MenuButton toggleNav={toggleNav} open={navOpen} />
      <NavLogo />
      <Navigation open={navOpen} />
      <ScrollLock isActive={navOpen} />
    </NavWrapper>
  )
}

const MenuButton = props => {
  const { open, toggleNav } = props
  return (
    <MenuButtonStyled open={open} onClick={toggleNav}>
      <svg
        width="38"
        height="30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#D2D2D2"
          d="M.929.798h36.369v3.869H.929zM.929 13.179h36.369v3.869H.929zM.929 25.559h36.369v3.869H.929z"
        />
      </svg>
    </MenuButtonStyled>
  )
}

const NavLogo = () => {
  return (
    <NavLogoStyled>
      <svg
        width="93"
        height="34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.994.66c5.063 0 8.983 1.405 11.76 4.214 2.776 2.777 4.165 6.762 4.165 11.956 0 5.161-1.389 9.147-4.165 11.956C21.977 31.596 18.057 33 12.994 33H.499V.66h12.495zm-.343 26.95c3.07 0 5.373-.915 6.909-2.744 1.568-1.862 2.352-4.54 2.352-8.036 0-3.495-.784-6.158-2.352-7.987-1.536-1.862-3.839-2.793-6.91-2.793H7.26v21.56h5.39zM49.29.66c2.482 0 4.605.425 6.37 1.274 1.763.817 3.12 2.009 4.066 3.577.98 1.535 1.47 3.397 1.47 5.586 0 2.189-.49 4.067-1.47 5.635-.947 1.535-2.303 2.728-4.067 3.577-1.764.817-3.887 1.225-6.37 1.225h-6.81V33h-6.763V.66H49.29zm-1.03 15.533c2.026 0 3.545-.425 4.557-1.274 1.013-.882 1.52-2.156 1.52-3.822 0-1.699-.507-2.973-1.52-3.822-1.012-.85-2.531-1.274-4.557-1.274H42.48v10.192h5.782zM79.204.17c2.94 0 5.52.506 7.742 1.519 2.222 1.013 4.116 2.515 5.684 4.508l-3.773 4.361c-1.34-1.699-2.81-2.94-4.41-3.724-1.568-.817-3.397-1.225-5.488-1.225-1.372 0-2.515.18-3.43.539-.882.36-1.535.833-1.96 1.421a3.457 3.457 0 00-.588 1.96c0 .882.343 1.633 1.03 2.254.685.588 1.861 1.078 3.527 1.47l6.027 1.372c3.201.719 5.488 1.797 6.86 3.234 1.405 1.405 2.107 3.234 2.107 5.488 0 2.123-.555 3.953-1.666 5.488-1.11 1.503-2.662 2.662-4.655 3.479-1.992.784-4.28 1.176-6.86 1.176-2.254 0-4.328-.261-6.223-.784-1.862-.555-3.528-1.307-4.998-2.254-1.47-.947-2.695-2.042-3.675-3.283l3.822-4.557a12.582 12.582 0 002.793 2.793c1.11.817 2.369 1.47 3.773 1.96 1.438.457 2.94.686 4.508.686 1.34 0 2.466-.147 3.381-.441.948-.327 1.65-.768 2.107-1.323.49-.588.735-1.29.735-2.107 0-.85-.294-1.568-.882-2.156-.555-.62-1.6-1.094-3.136-1.421l-6.566-1.47c-1.894-.457-3.528-1.045-4.9-1.764-1.34-.751-2.368-1.699-3.087-2.842-.686-1.176-1.029-2.564-1.029-4.165 0-1.927.523-3.659 1.568-5.194 1.046-1.535 2.548-2.744 4.508-3.626C74.043.627 76.427.17 79.204.17z"
          fill="#111"
        />
      </svg>
    </NavLogoStyled>
  )
}

const Navigation = props => {
  const { open } = props
  return (
    <NavStyled open={open}>
      <NavInner>
        <NavLink href="#">Shows</NavLink>
        <NavLink href="#">Education</NavLink>
        <NavLink href="#">Activations</NavLink>
        <NavSpacer>&nbsp;</NavSpacer>
        <NavLink href="#">Company</NavLink>
        <NavLink href="#">Contact</NavLink>
      </NavInner>
      <NavSocials />
    </NavStyled>
  )
}

// Styled Components
const NavWrapper = styled.div``

const MenuButtonStyled = styled.button`
  cursor: pointer;
  z-index: 10;
  position: fixed;
  top: 30px;
  left: 40px;
  padding: 18px 14px;
  border-radius: 100px;
  background-color: ${props => (props.open ? `red` : `#111`)};
`

const NavLogoStyled = styled.div`
  z-index: 10;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
`

const NavStyled = styled.nav`
  display: ${props => (props.open ? "block" : "none")};
  visibility: ${props => (props.open ? "visible" : "hidden")};
  z-index: 9;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #c7c7c7;
`

const NavInner = styled.div`
  padding-top: 160px;
`

const NavLink = styled.a`
  display: block;
  color: #111111;
  font-size: 71px;
  font-weight: 300;
  line-height: 1.3;
  text-align: center;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const NavSpacer = styled.div`
  display: block;
  color: #111111;
  font-size: 71px;
  font-weight: 300;
  line-height: 1.3;
  text-align: center;
  text-decoration: none;
`

const NavSocials = styled.div``

const Links = styled.div`
  display: block;
`

const LinkStyled = styled.a``

export default Nav
