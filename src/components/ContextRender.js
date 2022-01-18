import React from "react"

const ContextRender = ({ pt, setPt, children }) => {
  return <div style={{ display: "flex", gap: "3px" }}>{children}</div>
}

export default ContextRender
