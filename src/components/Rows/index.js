import React from "react"
import Missing from "./Missing"
import Accordion from "./Accordion"
import Breakout from "./Breakout"
import TextFeature from "./TextFeature"
import Text from "./Text"
import Shapes from "./Shapes"
import Section from "../Section"

const Rows = ({ data }) => {
  if (!data) return null

  let prevRowType = null
  let nextRowType = null
  let isAccordionStack = false

  let mt = false
  let mb = false

  return data.map((row, i) => {
    prevRowType = data[i - 1] ? data[i - 1].__typename : null
    nextRowType = data[i + 1] ? data[i + 1].__typename : null

    // We want to remove margin Top or Bottom if Accordions stack
    mt = !(
      (i === 0 && row.__typename.indexOf("Accordion") > -1) ||
      (row.__typename.indexOf("Accordion") > -1 &&
        prevRowType.indexOf("Accordion") > -1)
    )
    if (nextRowType) {
      mb = !(
        row.__typename.indexOf("Accordion") > -1 &&
        nextRowType.indexOf("Accordion") > -1
      )
      isAccordionStack =
        row.__typename.indexOf("Accordion") > -1 &&
        nextRowType.indexOf("Accordion") > -1
    }

    let content

    switch (row.__typename) {
      case "ContentfulRowAccordionText":
        content = (
          <Accordion
            key={i}
            title={row.title}
            content={{ left: row.contentLeft, right: row.contentRight }}
            defaultOpen={row.openByDefault === "Yes"}
            format={"text"}
            isStack={isAccordionStack}
          />
        )
        break

      case "ContentfulRowAccordionGallery":
        content = (
          <Accordion
            key={i}
            title={row.title}
            content={row.images}
            defaultOpen={row.openByDefault === "Yes"}
            format="gallery"
            isStack={isAccordionStack}
          />
        )
        break

      case "ContentfulRowShapes":
        content = <Shapes key={i} content={row.shapes} />
        break

      case "ContentfulRowText":
        content = (
          <Text
            key={i}
            content={{ left: row.contentLeft, right: row.contentRight }}
          />
        )
        break

      case "ContentfulRowTextFeature":
        content = <TextFeature key={i} content={row} />
        break

      case "ContentfulRowBreakout":
        content = <Breakout key={i} content={row.breakout} />
        break

      default:
        content = <Missing rowType={row.__typename} />
        break
    }

    return (
      <Section
        key={i}
        isMt={mt}
        isMb={mb}
        name={row.__typename}
        isFirst={i === 0}
      >
        {content}
      </Section>
    )
  })
}

export default Rows
