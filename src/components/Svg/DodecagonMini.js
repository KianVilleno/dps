import React from "react"

const DodecagonMini = ({ color }) => {
  return (
    <svg width="104" height="77" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.203 1h57.594l15.835 15.79 5.833 21.71-5.834 21.71L80.797 76H23.203L7.369 60.21 1.535 38.5 7.37 16.79 23.203 1z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
}

export default DodecagonMini
