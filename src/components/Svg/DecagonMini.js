import React from "react"

const DecagonMini = ({ color }) => {
  return (
    <svg width="78" height="77" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.542 12.042L39 1.082l26.458 10.96L76.418 38.5l-10.96 26.458L39 75.918l-26.458-10.96L1.582 38.5l10.96-26.458z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
}

export default DecagonMini
