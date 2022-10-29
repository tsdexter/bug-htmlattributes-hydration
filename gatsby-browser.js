import React from "react"

export const wrapPageElement = ({ element }) => (
  <div style={{border: "10px red solid"}}>{element}</div>
)