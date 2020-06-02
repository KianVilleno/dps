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

export default {
  styles: {
    someComponent: {
      fontSize: 40,
      fontWeight: "bold",
    },
  },
  colors: {
    text: denim,
    background: tan,
    button: {
      default: {
        text: denim,
        background: "transparent",
        borderColor: granola,
      },
      alternative: {
        text: granola,
        background: "transparent",
        borderColor: cloud,
      },
      highlight: {
        text: granola,
        background: "transparent",
        borderColor: candy,
      },
      filled: {
        text: denim,
        background: white,
        borderColor: white,
      },
    },
    modes: {
      midnight: {
        text: granola,
        background: midnight,
        button: {
          default: {
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
      },
      cloud: {
        text: white,
        background: cloud,
        button: {
          default: {
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
      },
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
}
