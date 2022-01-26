import React from "react"

import SCr from "./SCr"
import CrClCalculated from "./CrClCalculated"

export default function KidneyFunction({ pt, setPt }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Kidney Function</h1>
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
        <SCr pt={pt} setPt={setPt} />
        <CrClCalculated pt={pt} setPt={setPt} />
      </div>
    </>
  )
}
