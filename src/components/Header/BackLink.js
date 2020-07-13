import React from "react"
import TagLink from "../TagLink"
import styled from "@emotion/styled"
import Wordmark from "./Wordmark"

const BackLink = ({ section }) => {
  if (!section) {
    return <Wordmark />
  } else {
    return (
      <Wrap>
        <TagLink to={section.url}>Back to {section.title}</TagLink>
      </Wrap>
    )
  }
}

export default BackLink

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  z-index: 10;
  position: absolute;
  top: 27px;
  left: 50%;
  transform: translateX(-50%);
`
