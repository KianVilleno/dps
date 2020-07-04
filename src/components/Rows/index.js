import React from "react"
import Missing from "./Missing"
import Accordion from "./Accordion"
import Breakout from "./Breakout"
import Text from "./Text"
import Shapes from "./Shapes"

const Rows = ({ data }) =>
  data.map((row, i) => {
    switch (row.__typename) {
      case "ContentfulRowAccordionText":
        return (
          <Accordion
            key={i}
            title={row.title}
            content={{ left: row.contentLeft, right: row.contentRight }}
            defaultOpen={row.openByDefault}
            format={"text"}
          />
        )

      case "ContentfulRowAccordionGallery":
        return (
          <Accordion
            key={i}
            title={row.title}
            content={row.images}
            defaultOpen={row.openByDefault}
            format="gallery"
          />
        )

      case "ContentfulRowShapes":
        return <Shapes key={i} content={row.shapes} />

      case "ContentfulRowText":
        return (
          <Text
            key={i}
            content={{ left: row.contentLeft, right: row.contentRight }}
          />
        )

      case "ContentfulRowBreakout":
        return <Breakout key={i} content={row.breakout} />

      default:
        return <Missing key={i} rowType={row.__typename} />
    }
  })

export default Rows
