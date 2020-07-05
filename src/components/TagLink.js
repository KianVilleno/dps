import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { useThemeUI } from "theme-ui"

const TagLink = ({ to, children }) => {
  const { theme, colorMode } = useThemeUI()
  const buttonStyles = theme.colors.modes[colorMode].button.primary
  return (
    <Wrap button-props={buttonStyles} to={to}>
      {children}
    </Wrap>
  )
}

export default TagLink

const Wrap = styled(Link)`
  margin-right: calc(9px + 0.5em);
  margin-left: calc(9px + 0.5em);
  border-top-style: solid;
  border-top-width: 2px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-top-color: ${props => props["button-props"].borderColor};
  border-bottom-color: ${props => props["button-props"].borderColor};
  border-radius: 0;
  font-family: "GT America Mono";
  text-transform: uppercase;
  text-decoration: none;
  height: 55px;
  line-height: 53px;
  display: inline-block;
  padding: 0 10px 0 10px;
  position: relative;
  color: ${props => props["button-props"].text};
  &:before,
  &:after {
    position: absolute;
    top: -2px;
    width: 17px;
    height: 55px;
    content: " ";
  }
  &:before {
    left: -16px;
    background: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.09435 12.7776L17 2V0H16.1563L4.27172 11.745L-1.79451e-07 27.5L4.27172 43.255L16.1563 55H17V53L6.09435 42.2224L2.10259 27.5L6.09435 12.7776Z' fill='%23${props =>
      props["button-props"].borderColor.substr(1)}'/%3E%3C/svg%3E%0A");
  }
  &:after {
    right: -16px;
    background: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.9057 12.7776L0 2V0H0.84373L12.7283 11.745L17 27.5L12.7283 43.255L0.84373 55H0V53L10.9057 42.2224L14.8974 27.5L10.9057 12.7776Z' fill='%23${props =>
      props["button-props"].borderColor.substr(1)}'/%3E%3C/svg%3E%0A");
  }
  &:hover {
    color: ${props => props["button-props"].text};
    background: ${props => props["button-props"].backgroundHover};
    border-top-color: ${props => props["button-props"].backgroundHover};
  border-bottom-color: ${props => props["button-props"].backgroundHover};
    &:before {
      background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.1563 0L4.27172 11.745L0 27.5L4.27172 43.255L16.1563 55H17V0H16.1563Z' fill='%23${props =>
        props["button-props"].backgroundHover.substr(1)}'/%3E%3C/svg%3E%0A");
    }
    &:after {
      background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.843731 0L12.7283 11.745L17 27.5L12.7283 43.255L0.843731 55H0V0H0.843731Z' fill='%23${props =>
        props["button-props"].backgroundHover.substr(1)}'/%3E%3C/svg%3E%0A");
    }
  }
`
