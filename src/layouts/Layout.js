import "../styles/index.css"
import "../styles/lightbox-overrides.css"
import React from "react"
import { ThemeProvider, useThemeUI } from "theme-ui"
import styled from "@emotion/styled"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import FeatureVideo from "../components/FeatureVideo"
import { VideoProvider } from "../hooks/useFeatureVideo"

const Layout = ({ children, hasHero }) => {
  const context = useThemeUI()
  const { theme } = context

  return (
    <ThemeProvider theme={theme}>
      <VideoProvider>
        <>
          <Page>
            <Nav hasHero={hasHero} />
            <Main>{children}</Main>
            <Footer />
          </Page>
          <FeatureVideo />
        </>
      </VideoProvider>
    </ThemeProvider>
  )
}

const Page = styled.div``
const Main = styled.main``

export default Layout
