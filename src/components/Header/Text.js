// Imports
import React from "react"
import styled from "@emotion/styled"
import { Heading } from "theme-ui"
import BackLink from "./BackLink"

const HeaderText = ({ title, section }) => {
  return (
    <Wrap>
      <BackLink section={section} />
      <Heading
        as="h1"
        variant="text3Xl"
        sx={{
          width: "100%",
          maxWidth: 800,
          margin: "0 auto 0 auto",
          textAlign: "center",
          paddingTop: [100, 110],
          paddingLeft: [20, 0],
          paddingRight: [20, 0],
        }}
      >
        {title}
      </Heading>
      {/* <Text
        as="h2"
        variant="textLg"
        sx={{
          width: "100%",
          maxWidth: 520,
          margin: "40px auto 0 auto",
          textAlign: "center",
        }}
      >
        {subtitle}
      </Text> */}
    </Wrap>
  )
}

const Wrap = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default HeaderText
