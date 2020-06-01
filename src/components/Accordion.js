// Imports
import React, { useEffect, useState } from "react"
import AnimateHeight from "react-animate-height"
import styled from "@emotion/styled"
import { respondTo } from "../styles/mixins"

// store setInterval - no effect to state
let interval = null

// Components
const Accordion = props => {
  const { titleText, children } = props
  const [isOpen, setIsOpen] = useState(false)
  const activeArrowClass = isOpen ? "active" : ""

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledAccordion>
      <ToggleButton
        toggle={toggle}
        titleText={titleText}
        activeArrowClass={activeArrowClass}
      />

      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </StyledAccordion>
  )
}

const ToggleButton = props => {
  const { toggle, titleText, activeArrowClass } = props
  return (
    <StyledButton onClick={toggle}>
      <AccordionTitle>{titleText}</AccordionTitle>
      <div>
        <svg
          css={`
            flex-shrink: 0;
            transform: scale(0.75);
            ${respondTo.md`transform: scale(1);`}
          `}
          className={activeArrowClass}
          width="41"
          height="41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#D2D2D2" d="M2.527 18.591h35.8v3.869h-35.8z" />
          <path fill="#D2D2D2" d="M22.53 2.14v35.8h-3.87V2.14z" />
        </svg>
      </div>
    </StyledButton>
  )
}

const AccordionContent = props => {
  const { children, isOpen, className } = props
  const [height, updateHeight] = useState(0)

  useEffect(() => {
    if (isOpen) {
      updateHeight("auto")
    } else {
      updateHeight(0)
    }
  }, [isOpen, children])

  return (
    <AnimateHeight
      duration={300}
      height={height}
      className={`accordion ${className || ""}`}
      contentClassName="accordion"
    >
      {children}
    </AnimateHeight>
  )
}

// Styled Components
const StyledAccordion = styled.div`
  padding: 40px 70px;
  border-top: 2px solid #dedede;

  .accordion {
  }
`
const AccordionTitle = styled.h3`
  color: #000000;
  font-size: 40px;
  font-weight: 300;
  line-height: 1.3;
`

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  background: transparent !important;
  border: 0px;
  outline: none;
  cursor: pointer;
  text-align: left;

  svg {
    transform: rotate(0deg) scale(0.75);
    transition: transform 300ms;
  }

  svg.active {
    transform: rotate(135deg) scale(0.75);
  }

  ${respondTo.sm`
    svg {
      transform: rotate(0deg) scale(1);
    }

    svg.active {
      transform: rotate(135deg) scale(1);
    }
  `}
`

export default Accordion
