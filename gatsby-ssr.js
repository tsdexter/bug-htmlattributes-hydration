import React from "react"

// const HtmlAttributes = {
//   lang: `en`,
// }

// export const onRenderBody = ({
//   setHtmlAttributes,
// }) => {
//   setHtmlAttributes(HtmlAttributes)
// }

export const wrapPageElement = ({ element }) => (
  <div style={{border: "10px red solid"}}>{element}</div>
)