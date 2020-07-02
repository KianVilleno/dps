import React from "react"
import Accordion from "./Accordion"
import Breakout from "./Breakout"

const Rows = ({ data }) =>
  data.map((row, i) => {
    switch (row.__typename) {
      case "ContentfulRowAccordionText":
        return (
          <Accordion
            key={i}
            title={row.title}
            content={{ left: row.contentLeft, right: row.contentRight }}
            format={"text"}
          />
        )

      case "ContentfulRowAccordionGallery":
        return (
          <Accordion
            key={i}
            title={row.title}
            content={row.images}
            format="gallery"
          />
        )

      case "ContentfulRowBreakout":
        return <Breakout key={i} content={row.breakout} />

      default:
        return <div key={i}>UNKNOWN ROW TYPE :(</div>
    }
  })

export default Rows
