/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import {
  TextSm,
  TextBase,
  TextLg,
  Text2Xl,
  Text3Xl,
  Text4Xl,
  TextNav,
} from "../components/Typography.js"

import { useThemeUI } from "theme-ui"

import {
  ButtonDefault,
  ButtonAlt,
  ButtonHighlight,
  ButtonFilled,
} from "../components/Button"

const ThemesPage = () => {
  const context = useThemeUI()
  const { theme, colorMode, setColorMode } = context

  return (
    <div>
      <TextSm>Text SM</TextSm>
      <TextBase>Text SM</TextBase>
      <TextLg>Text SM</TextLg>
      <Text2Xl>Text SM</Text2Xl>
      <Text3Xl>Text SM</Text3Xl>
      <Text4Xl>Text SM</Text4Xl>
      <TextNav>Text SM</TextNav>
      <button
        onClick={e => {
          setColorMode("default")
        }}
      >
        Toggle Default
      </button>
      <button
        onClick={e => {
          setColorMode("midnight")
        }}
      >
        Toggle Default
      </button>
      <button
        onClick={e => {
          setColorMode("cloud")
        }}
      >
        Toggle Default
      </button>

      <ThemeProvider theme={theme}>
        <ButtonDefault href="yeah">lorem ipsum dolor sit amet</ButtonDefault>
        <ButtonAlt href="yeah">lorem ipsum dolor sit amet</ButtonAlt>
        <ButtonHighlight href="yeah">
          lorem ipsum dolor sit amet
        </ButtonHighlight>
      </ThemeProvider>

      <ButtonFilled href="yeah">lorem ipsum dolor sit amet</ButtonFilled>
    </div>
  )
}

export default ThemesPage
