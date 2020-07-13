import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Text, useThemeUI } from "theme-ui"

const TagLink = ({ to, children, variant }) => {
  const { theme, colorMode } = useThemeUI()

  const buttonStyles =
    theme.colors.modes[colorMode].button[variant ? variant : "primary"]

  console.log("buttonStyles", variant, buttonStyles)

  return (
    <LinkEl button-props={buttonStyles} to={to}>
      <Text
        as="span"
        variant="textSm"
        sx={{ color: "inherit", whiteSpace: "nowrap" }}
      >
        {children}
      </Text>
    </LinkEl>
  )
}

export default TagLink

export const TagButton = ({ onClick, children, variant, icon }) => {
  const { theme, colorMode } = useThemeUI()

  const buttonStyles =
    theme.colors.modes[colorMode].button[variant ? variant : "primary"]

  let iconContent
  if (icon && icon === "play") {
    iconContent = (
      <IconEl>
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7266 8.50028L0.226562 0.706055L0.226563 16.2945L13.7266 8.50028Z"
            fill={theme.colors.modes[colorMode].textOther}
          />
        </svg>
      </IconEl>
    )
  }

  return (
    <ButtonEl button-props={buttonStyles} onClick={onClick}>
      {iconContent}
      <Text as="span" variant="textSm">
        {children}
      </Text>
    </ButtonEl>
  )
}

const styles = settings => {
  let beforeBackground
  let afterBackground
  if (settings.background === "transparent") {
    beforeBackground = `url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.09435 12.7776L17 2V0H16.1563L4.27172 11.745L-1.79451e-07 27.5L4.27172 43.255L16.1563 55H17V53L6.09435 42.2224L2.10259 27.5L6.09435 12.7776Z' fill='%23${settings.borderColor.substr(
      1
    )}'/%3E%3C/svg%3E%0A")`
    afterBackground = `url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.9057 12.7776L0 2V0H0.84373L12.7283 11.745L17 27.5L12.7283 43.255L0.84373 55H0V53L10.9057 42.2224L14.8974 27.5L10.9057 12.7776Z' fill='%23${settings.borderColor.substr(
      1
    )}'/%3E%3C/svg%3E%0A")`
  } else {
    beforeBackground = `url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.1563 0L4.27172 11.745L0 27.5L4.27172 43.255L16.1563 55H17V0H16.1563Z' fill='%23${settings.background.substr(
      1
    )}'/%3E%3C/svg%3E%0A")`
    afterBackground = `url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.843731 0L12.7283 11.745L17 27.5L12.7283 43.255L0.843731 55H0V0H0.843731Z' fill='%23${settings.background.substr(
      1
    )}'/%3E%3C/svg%3E%0A")`
  }

  return `
  margin-right: calc(9px + 0.5em);
  margin-left: calc(9px + 0.5em);
  border: none;
  outline: none;
  background: ${settings.background};
  cursor: pointer;
  border-top-style: solid;
  border-top-width: 2px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-top-color: ${settings.borderColor};
  border-bottom-color: ${settings.borderColor};
  border-radius: 0;
  font-family: "GT America Mono";
  text-transform: uppercase;
  text-decoration: none;
  height: 55px;
  line-height: 55px;
  display: inline-block;
  padding: 0 10px 0 10px;
  position: relative;
  color: ${settings.text};
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
    background-image: ${beforeBackground}
  }
  &:after {
    right: -16px;
    background-image: ${afterBackground};
  }
  &:hover {
    color: ${settings.textHover ? settings.textHover : settings.text};
    background: ${settings.backgroundHover};
    border-top-color: ${settings.backgroundHover};
  border-bottom-color: ${settings.backgroundHover};
    &:before {
      background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.1563 0L4.27172 11.745L0 27.5L4.27172 43.255L16.1563 55H17V0H16.1563Z' fill='%23${settings.backgroundHover.substr(
        1
      )}'/%3E%3C/svg%3E%0A");
    }
    &:after {
      background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.843731 0L12.7283 11.745L17 27.5L12.7283 43.255L0.843731 55H0V0H0.843731Z' fill='%23${settings.backgroundHover.substr(
        1
      )}'/%3E%3C/svg%3E%0A");
    }
  }
`
}

const LinkEl = styled(Link)`
  ${props => styles(props["button-props"])}
`

const ButtonEl = styled.button`
  ${props => styles(props["button-props"])}
`

const IconEl = styled.span`
  position: relative;
  margin-right: 15px;
  top: 2px;
`
