import React from "react"

import Load from "./Load"
import Identifiers from "./Identifiers"
import Diagnosis from "./Diagnosis"
import Characteristics from "./Characteristics"

const PatientInfo = ({ pt, setPt }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Patient Information</h1>
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
        <div>
          <Load pt={pt} setPt={setPt} />
          <Identifiers pt={pt} setPt={setPt} />
        </div>
        <div>
          <Diagnosis pt={pt} setPt={setPt} />
          <Characteristics pt={pt} setPt={setPt} />
          {/* <Weight pt={pt} setPt={setPt} /> */}
          {/* {reorder()} */}
          {/* {displayManualCrClLogic()} */}
        </div>
        {/* <div>
          {pt.weight && pt.crcl && <Vd pt={pt} setPt={setPt} />}
          {pt.crcl && <Ke pt={pt} setPt={setPt} />}
        </div> */}
      </div>
    </>
  )
}

export default PatientInfo
