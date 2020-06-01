// Imports
import "../styles/index.css"
import React from "react"
import styled from "@emotion/styled"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

// Components
const Layout = ({ children }) => {
  return (
    <Page>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </Page>
  )
}

// Styled Components
const Page = styled.div``
const Main = styled.div``

export default Layout
