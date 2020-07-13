/* eslint-disable */
import { colors } from "../styles/settings"
const {
  midnight,
  denim,
  cloud,
  butter,
  granola,
  tan,
  peacock,
  white,
  salmon,
  candy,
} = colors

export const baseButtonStyles = {
  marginRight: "calc(9px + 0.5em)",
  marginLeft: "calc(9px + 0.5em)",
  borderTopStyle: "solid",
  borderTopWidth: "2px",
  borderBottomStyle: "solid",
  borderBottomWidth: "2px",
  borderRadius: 0,
  fontFamily: "GT America Mono",
  textTransform: "uppercase",
  textDecoration: "none",
  height: "55px",
  lineHeight: "55px",
  display: "inline-block",
  padding: "0 10px 0 10px",
  position: "relative",
  "&:before, &:after": {
    position: "absolute",
    top: "-2px",
    width: "17px",
    height: "55px",
    content: "' '",
  },
}

export const buttonColors = {
  default: {
    primary: {
      text: denim,
      background: "transparent",
      backgroundHover: white,
      borderColor: granola,
    },
    alternative: {
      text: white,
      textHover: denim,
      background: "transparent",
      backgroundHover: white,
      borderColor: granola,
    },
    highlight: {
      text: granola,
      background: "transparent",
      borderColor: candy,
    },
    filled: {
      text: denim,
      background: white,
      backgroundHover: white,
      borderColor: white,
    },
  },
  midnight: {
    primary: {
      text: granola,
      background: "transparent",
      borderColor: granola,
    },
    alternative: {
      text: granola,
      background: "transparent",
      borderColor: tan,
    },
    highlight: {
      text: granola,
      background: "transparent",
      borderColor: candy,
    },
    filled: {
      text: denim,
      background: granola,
      borderColor: granola,
    },
  },
  cloud: {
    primary: {
      text: tan,
      background: "transparent",
      borderColor: tan,
    },
    alternative: {
      text: white,
      background: "transparent",
      borderColor: butter,
    },
    highlight: {
      text: white,
      background: "transparent",
      borderColor: denim,
    },
    filled: {
      text: denim,
      background: white,
      borderColor: white,
    },
  },
}
