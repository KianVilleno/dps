import React, { useState } from "react"
import { Text } from "theme-ui"
import AccordionText from "./AccordionText"
import AccordionGallery from "./AccordionGallery"
import styled from "@emotion/styled"
import { colors } from "../../styles/settings"

const Accordion = ({ title, content, format, defaultOpen, isStack }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  if (!content) return null

  const getBody = () => {
    switch (format) {
      case "text":
        return <AccordionText content={content} />

      case "gallery":
        return <AccordionGallery content={content} />

      default:
        return <div>UNKNOWN ACCORDION FORMAT :(</div>
    }
  }

  const bodyContent = getBody(format)

  return (
    <>
      <Head isOpen={isOpen} setIsOpen={setIsOpen} isStack={isStack}>
        {title}
      </Head>
      {isOpen ? <Body isStack={isStack}>{bodyContent}</Body> : null}
    </>
  )
}

const Head = ({ children, setIsOpen, isOpen, isStack }) => {
  console.log("???", isStack && !isOpen)

  return (
    <HeadEl onClick={() => setIsOpen(!isOpen)} isStack={isStack && !isOpen}>
      <Text as="span" variant="text2Xl" sx={{ fontWeight: "bold" }}>
        {children}
      </Text>
      <HeadIcon isOpen={isOpen} />
    </HeadEl>
  )
}

const HeadIcon = ({ isOpen }) => {
  return (
    <HeadIconEl open={isOpen}>
      {isOpen ? (
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5 0L38.25 3.41635L47.5836 12.75L51 25.5L47.5836 38.25L38.25 47.5836L25.5 51L12.75 47.5836L3.41635 38.25L0 25.5L3.41635 12.75L12.75 3.41635L25.5 0Z"
            fill={colors.white}
          />
          <path d="M15 24V26H36V24H15Z" fill={colors.midnight} />
        </svg>
      ) : (
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5 0L38.25 3.41635L47.5836 12.75L51 25.5L47.5836 38.25L38.25 47.5836L25.5 51L12.75 47.5836L3.41635 38.25L0 25.5L3.41635 12.75L12.75 3.41635L25.5 0Z"
            fill={colors.white}
          />
          <path
            d="M26.5 24V14.5H24.5V24H15V26H24.5V35.5H26.5V26H36V24H26.5Z"
            fill={colors.midnight}
          />
        </svg>
      )}
    </HeadIconEl>
  )
}

const Body = ({ children, isStack }) => {
  return <BodyEl isStack={isStack}>{children}</BodyEl>
}

export default Accordion

const HeadEl = styled.button`
  display: block;
  position: relative;
  padding: 25px 25px;
  border: none;
  border-bottom: ${props =>
    props.isStack ? `none` : `1px solid ${colors.cloud}`};
  border-top: 1px solid ${colors.cloud};
  width: 100%;
  background: transparent;
  text-align: left;
  cursor: pointer;
  &:active,
  &:focus,
  &:hover {
    outline: none;
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    padding: 40px 40px;
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    padding: 40px 40px;
  }
  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    padding: 40px 40px;
  }
`

const HeadIconEl = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  position: absolute;
  top: 0px;
  right: 40px;
  border: none;
  outline: none;
  width: 51px;
  height: 100%;
  background: transparent;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
  }
`

const BodyEl = styled.div`
  border-bottom: ${props =>
    props.isStack ? `none` : `1px solid ${colors.cloud}`};
`
