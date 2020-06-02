// Imports
import "../styles/index.css"
/** @jsx jsx */
import { jsx, ThemeProvider, useThemeUI } from "theme-ui"
import styled from "@emotion/styled"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

// Components
const Layout = ({ children }) => {
  const context = useThemeUI()
  const { theme, colorMode, setColorMode } = context

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
const Main = styled.div``

export default Layout
