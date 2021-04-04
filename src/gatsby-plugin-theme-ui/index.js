/* eslint-disable */
import { colors, sizesArr, space } from "../styles/settings"
import { baseButtonStyles, buttonColors } from "./buttonStyles"
import { baseTextStyles } from "./textStyles"

const {
  midnight,
  denim,
  cloud,
  granola,
  tan,
  white,
  salmon,
  peacock,
  butter,
  candy,
} = colors

export default {
  breakpoints: sizesArr,
  space: space,
  colors: {
    text: denim,
    textOther: granola,
    background: tan,
    button: {
      ...buttonColors.default,
    },
    pallet: colors,
    modes: {
      default: {
        text: denim,
        textOther: granola,
        background: tan,
        button: {
          ...buttonColors.default,
        },
      },
      midnight: {
        text: white,
        textOther: granola,
        textTitle: white,
        background: midnight,
        button: {
          ...buttonColors.midnight,
        },
      },
      cloud: {
        wordMark: denim,
        logoMark: denim,
        logoMarkHero: denim,
        text: white,
        textOther: white,
        textTitle: denim,
        background: cloud,
        button: {
          ...buttonColors.cloud,
        },
      },
    },
  },
  buttons: {
    primary: {
      ...baseButtonStyles,
      color: "button.primary.text",
      backgroundColor: "transparent",
      borderColor: "button.primary.borderColor",
    },
    alternative: {
      ...baseButtonStyles,
      color: "button.alternative.text",
      backgroundColor: "transparent",
      borderColor: "button.alternative.borderColor",
    },
    highlight: {
      ...baseButtonStyles,
      color: "button.highlight.text",
      backgroundColor: "transparent",
      borderColor: "button.highlight.borderColor",
    },
    filled: {
      ...baseButtonStyles,
      color: "button.filled.text",
      backgroundColor: "button.filled.borderColor",
      borderColor: "button.filled.borderColor",
    },
  },
  text: {
    ...baseTextStyles,
  },
  links: {
    primary: {
      ...baseButtonStyles,
      color: "button.primary.text",
      backgroundColor: "transparent",
      borderColor: "button.primary.borderColor",
    },
    alternative: {
      ...baseButtonStyles,
      color: "button.alternative.text",
      backgroundColor: "transparent",
      borderColor: "button.alternative.borderColor",
    },
    highlight: {
      ...baseButtonStyles,
      color: "button.highlight.text",
      backgroundColor: "transparent",
      borderColor: "button.highlight.borderColor",
    },
    filled: {
      ...baseButtonStyles,
      color: "button.filled.text",
      backgroundColor: "button.filled.borderColor",
      borderColor: "button.filled.borderColor",
    },
    link: {
      color: "text",
      fontFamily: "gtAmericaMono",
      fontSize: [0, 1],
      lineHeight: "large",
      textTransform: "uppercase",
    },
  },
  fonts: {
    gtAmericaMono: "'GT America Mono', monospace",
    gtSuperText: "'GT Super Text', serif",
    gtSuperDisplay: "'GT Super Display', serif",
  },
  fontSizes: [18, 21, 30, 35, 50, 100, 150],
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  lineHeights: {
    small: 1.15,
    medium: 1.3,
    large: 1.4,
  },
  forms: {
    input: {
      fontFamily: "'GT America Mono', monospace",
      borderRadius: "0px",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      borderWidth: "2px",
      borderColor: "text",
      "&:focus": {
        outline: "none",
        borderColor: "textOther",
      },
    },
  },

  styles: {},
}
