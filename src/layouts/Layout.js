// Imports
import "../styles/index.css"
import "../styles/lightbox-overrides.css"
/** @jsx jsx */
import { jsx, ThemeProvider, useThemeUI } from "theme-ui"
import styled from "@emotion/styled"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

// Components
const Layout = ({ children, path }) => {
  const context = useThemeUI()
  // const { colorMode, setColorMode } = context
  const { theme } = context

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </Page>
    </ThemeProvider>
  )
}

// Styled Components
const Page = styled.div``
const Main = styled.main``

export default Layout
