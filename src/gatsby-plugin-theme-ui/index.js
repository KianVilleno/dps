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
  },
}
