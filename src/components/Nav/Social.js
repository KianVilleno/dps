import React from "react"
import styled from "@emotion/styled"
import IconFacebook from "../Svg/Facebook"
import IconInstagram from "../Svg/Instagram"
import IconYoutube from "../Svg/Youtube"
import IconPinterest from "../Svg/Pinterest"
import { colors } from "../../styles/settings"

const Social = () => {
  return (
    <Wrap>
      <a href="https://www.pinterest.com.au/" target="_blank">
        <IconPinterest color={colors.salmon} />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <IconYoutube color={colors.salmon} />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <IconFacebook color={colors.salmon} />
      </a>
      <a href="https://instagram.com/" target="_blank">
        <IconInstagram color={colors.salmon} />
      </a>
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
