import styled from "@emotion/styled"
import { textControls } from "../styles/mixins"

const Subtitle = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: 51px;
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: 1.2;
  ${textControls}
`

const Paragraph = styled.p`
  margin: 0 auto;
  color: #111111;
  font-size: 22px;
  line-height: 1.4;
  ${textControls}
`

const TextSm = styled.span`
  color: ${props => props.theme.colors.text};
  font-family: "GT America Mono";
  font-size: 14px;
  line-height: 1.4;
  ${textControls}
`

const TextBase = styled.p`
  color: ${props => props.theme.colors.text};
  font-family: "GT Super Text";
  font-size: 22px;
  line-height: 1.4;
  ${textControls}
`

// const TextLg = styled.h4`
//   color: ${props => props.theme.colors.text};
//   font-family: "GT Super Text";
//   font-size: 30px;
//   line-height: 1.3;
//   ${textControls}
// `

const Text2Xl = styled.h3`
  color: ${props => props.theme.colors.text};
  font-family: "GT Super Display";
  font-size: 50px;
  line-height: 1.15;
  ${textControls}
  ${props => (props.bold ? `font-weight: bold;` : null)}
`

const Text3Xl = styled.h2`
  color: ${props => props.theme.colors.text};
  font-family: "GT Super Display";
  font-size: 100px;
  line-height: 1.15;
  ${textControls}
`

const Text4Xl = styled.h1`
  color: ${props => props.theme.colors.text};
  font-family: "GT Super Display";
  font-size: 150px;
  line-height: 115%;
  ${textControls}
`

const TextNav = styled.span`
  color: ${props => props.theme.colors.text};
  font-family: "GT Super Display";
  font-size: 100px;
  line-height: 1.15;
  ${textControls}
`

export {
  Subtitle,
  Paragraph,
  TextSm,
  TextBase,
  // TextLg,
  Text2Xl,
  Text3Xl,
  Text4Xl,
  TextNav,
}
