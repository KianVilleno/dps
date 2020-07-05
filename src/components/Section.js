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

  const marginTop = isMt ? ["1em", "5vw"] : [0]
  const marginBottom = isMb ? ["1em", "6vw"] : [0]

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
  padding: ${props =>
    props.outset ? `0px 40px` : `0px calc(-40px + ${(1 / 12) * 100}%)`};
  width: 100%;
  max-width: ${maxWidth};
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    padding: 0 20px;
  }
`

export default Section
