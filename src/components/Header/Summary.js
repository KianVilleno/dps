import React from "react"
import styled from "@emotion/styled"
import { Text, Box } from "theme-ui"

const Summary = ({ data }) => {
  let content
  if (data && data.childMarkdownRemark) {
    content = data.childMarkdownRemark.html
  }

  if (!content) return null

  return (
    <Box pl={[2, 3]} pr={[2, 3]}>
      <Wrap
        as="div"
        variant="textBase"
        sx={{ textAlign: "center" }}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </Box>
  )
}

export default Summary

const Wrap = styled(Text)`
  margin: 0 auto;
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 50%;
  }
`
