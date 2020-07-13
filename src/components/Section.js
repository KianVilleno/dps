import React, { useRef } from "react"
import styled from "@emotion/styled"
import { useIntersection } from "react-use"
import { maxWidth } from "../styles/settings"
import { Box } from "theme-ui"
import { motion, useAnimation } from "framer-motion"

export const Section = ({ children, isMt, isMb, isFirst }) => {
  const sectionRef = useRef(null)
  const animation = useAnimation()

  const threshold = isFirst ? 0 : 0.15

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  })

  const marginTop = isMt
    ? isFirst
      ? ["6vw", "4vw", "6vw", "50px"]
      : ["4vw", "2vw", "3.5vw", "40px"]
    : [0]
  const marginBottom = isMb ? ["4vw", "2vw", "4vw", "40px"] : [0]

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 100 },
  }

  if (intersection && intersection.intersectionRatio > threshold) {
    animation.start("visible")
  }

  return (
    <StyledBox sx={{ marginBottom, marginTop }} ref={sectionRef}>
      <motion.div
        initial={"hidden"}
        animate={animation}
        variants={variants}
        transition={{ ease: "easeOut", duration: 0.4 }}
      >
        {children}
      </motion.div>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
`

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: ${props => (props.outset ? `0px 40px` : `0px 0px`)};
  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    padding: ${props =>
      props.outset ? `0px 40px` : `0px calc(-40px + ${(1 / 12) * 100}%)`};
  }
`

export default Section
