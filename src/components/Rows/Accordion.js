import React, { useState } from "react"
import Section from "../Section"
import AccordionText from "./AccordionText"
import AccordionGallery from "./AccordionGallery"
import styled from "@emotion/styled"

const Accordion = ({ title, content, format }) => {
  const [isOpen, setIsOpen] = useState(true)
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
    <Section>
      <Head isOpen={isOpen} setIsOpen={setIsOpen}>
        {title}
      </Head>
      {isOpen ? <Body>{bodyContent}BODY</Body> : null}
    </Section>
  )
}

const Head = ({ children, setIsOpen, isOpen }) => {
  return (
    <HeadEl onClick={() => setIsOpen(!isOpen)}>
      {children}
      <div>ICON</div>
    </HeadEl>
  )
}

const Body = ({ children }) => {
  return <BodyEl>{children}</BodyEl>
}

export default Accordion

const HeadEl = styled.div``

const BodyEl = styled.div``
