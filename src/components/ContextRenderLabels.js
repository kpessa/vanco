import React from "react"

const ContextRenderLabels = ({ pt, setPt, children }) => {
  return (
    <div style={{ textAlign: "right", fontWeight: "bold" }}>{children}</div>
  )
}

export default ContextRenderLabels
