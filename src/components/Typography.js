import styled from "@emotion/styled"

const Subtitle = styled.h3`
  color: #000000;
  font-size: 51px;
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: 1.2;
`

const Paragraph = styled.p`
  margin: 0 auto;
  color: #111111;
  font-size: 22px;
  line-height: 1.4;
  padding: ${(props => props.p) ? props => props.p : "0"};
  margin: ${(props => props.m) ? props => props.m : "0 auto"};
  margin-top: ${(props => props.mt) ? props => props.mt : "0"};
  margin-bottom: ${(props => props.mb) ? props => props.mb : "0"};
  margin-left: ${(props => props.ml) ? props => props.ml : "auto"};
  margin-right: ${(props => props.mr) ? props => props.mr : "auto"};
  max-width: ${(props => props.maxWidth) ? props => props.maxWidth : "auto"};
`

const TextSm = styled.p`
  color: #303b4c;
  font-family: GT America Mono Trial;
  font-size: 19px;
  line-height: 1.4;
`

const TextBase = styled.p`
  color: #303b4c;
  font-family: GT Super Txt Trial;
  font-size: 22px;
  line-height: 1.4;
`

const TextLg = styled.h4`
  color: #303b4c;
  font-family: GT Super Txt Trial;
  font-size: 30px;
  line-height: 1.3;
`

const Text2Xl = styled.h3`
  color: #303b4c;
  font-family: GT Super Ds Trial;
  font-size: 50px;
  line-height: 1.15;

  ${props => (props.bold ? `font-weight: bold;` : null)}
`

const Text3Xl = styled.h2`
  font-family: GT Super Ds Trial;
  font-size: 100px;
  line-height: 1.15;
  color: #303b4c;
`

const Text4Xl = styled.h1`
  color: #303b4c;
  font-family: GT Super Ds Trial;
  font-size: 150px;
  line-height: 115%;
`

export { Subtitle, Paragraph, TextSm, TextBase, Text2Xl, Text3Xl, Text4Xl }
