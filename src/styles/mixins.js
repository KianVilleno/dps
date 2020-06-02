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

export const textControls = `
  padding: ${(props => props.p) ? props => props.p : "0"};
  margin: ${(props => props.m) ? props => props.m : "0 auto"};
  margin-top: ${(props => props.mt) ? props => props.mt : "0"};
  margin-bottom: ${(props => props.mb) ? props => props.mb : "0"};
  margin-left: ${(props => props.ml) ? props => props.ml : "auto"};
  margin-right: ${(props => props.mr) ? props => props.mr : "auto"};
  max-width: ${(props => props.maxWidth) ? props => props.maxWidth : "auto"};
`
