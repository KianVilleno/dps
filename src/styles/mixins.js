import { css } from "emotion"
import { sizes } from "./settings"

export const respondTo = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
