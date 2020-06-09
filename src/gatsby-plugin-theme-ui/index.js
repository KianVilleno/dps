import { colors } from "../styles/settings"
import { baseButtonStyles, buttonColors } from "./buttonStyles"
import { baseTextStyles } from "./textStyles"

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

export default {
  colors: {
    text: denim,
    background: tan,
    button: {
      ...buttonColors.default,
    },
    modes: {
      midnight: {
        text: granola,
        background: midnight,
        button: {
          ...buttonColors.midnight,
        },
      },
      cloud: {
        text: white,
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
    link: {
      color: "text",
      fontFamily: "gtAmericaMono",
      fontSize: 0,
      lineHeight: "large",
      textTransform: "uppercase",
    },
  },
  fonts: {
    gtAmericaMono: "'GT America Mono', monospace",
    gtSuperText: "'GT Super Text', serif",
    gtSuperDisplay: "'GT Super Display', serif",
  },
  fontSizes: [19, 22, 30, 35, 50, 100, 150],
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  lineHeights: {
    small: 1.15,
    medium: 1.3,
    large: 1.4,
  },
  styles: {},
}
