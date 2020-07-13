import React from "react"
import styled from "@emotion/styled"
import { Text } from "theme-ui"

const Summary = ({ data }) => {
  let content
  if (data && data.childMarkdownRemark) {
    content = data.childMarkdownRemark.html
  }

  if (!content) return null

  return (
    <Wrap
      as="div"
      variant="textBase"
      sx={{ textAlign: "center" }}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  )
}

export default Summary

const Wrap = styled(Text)`
  margin: 0 auto;
  width: 50%;
`
