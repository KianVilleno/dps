import React from "react"
import styled from "@emotion/styled"
import IconFacebook from "../Svg/Facebook"
import IconInstagram from "../Svg/Instagram"
import IconYoutube from "../Svg/Youtube"
import { colors } from "../../styles/settings"

const Social = ({ items }) => {
  const { socialYouTube, socialInstagram, socialFacebook } = items

  return (
    <Wrap>
      {socialYouTube ? (
        <a href={items.socialYouTube} target="_blank" rel="noreferrer">
          <IconYoutube color={colors.salmon} />
        </a>
      ) : null}
      {socialFacebook ? (
        <a href={items.socialFacebook} target="_blank" rel="noreferrer">
          <IconFacebook color={colors.salmon} />
        </a>
      ) : null}
      {socialInstagram ? (
        <a href={items.socialInstagram} target="_blank" rel="noreferrer">
          <IconInstagram color={colors.salmon} />
        </a>
      ) : null}
    </Wrap>
  )
}

export default Social

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding-bottom: 20px;
  a {
    display: inline-block;
    margin: 0 8px;
    position: relative;
    &:hover {
      top: -1px;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    padding-bottom: 10px;
    height: 80px;
    a {
      svg {
        width: 42px;
      }
    }
  }
`
