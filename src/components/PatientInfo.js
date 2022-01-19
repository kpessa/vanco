import React from "react"

import {
  Load,
  Identifiers,
  Diagnosis,
  Weight,
  SCr,
  CrCl,
  CrClCalculated,
  Vd,
  Ke,
} from "./"

const PatientInfo = ({ pt, setPt }) => {
  function reorder() {
    const displayLogic =
      (pt.tbw_ibw && pt.tbw_ibw > 1.2) || (pt.scr && pt.scr < 1)

    if (pt.scr && pt.scr < 1) {
      return (
        <>
          {displayLogic && <CrClCalculated pt={pt} setPt={setPt} />}
          <SCr pt={pt} setPt={setPt} />
        </>
      )
    } else {
      return (
        <>
          <SCr pt={pt} setPt={setPt} />
          {displayLogic && <CrClCalculated pt={pt} setPt={setPt} />}
        </>
      )
    }
  }

  function displayManualCrClLogic() {
    if (pt.scr && pt.scr >= 1 && pt.tbw_ibw && pt.tbw_ibw < 1.2) {
      return <CrCl pt={pt} setPt={setPt} />
    }
  }

  return (
    <>
      <h1>Vanco AUC Calculator</h1>
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
        <div>
          <Load pt={pt} setPt={setPt} />
          <Identifiers pt={pt} setPt={setPt} />
          <Diagnosis pt={pt} setPt={setPt} />
        </div>
        <div>
          <Weight pt={pt} setPt={setPt} />
          {reorder()}
          {displayManualCrClLogic()}
        </div>
        <div>
          {pt.weight && pt.crcl && <Vd pt={pt} setPt={setPt} />}
          {pt.crcl && <Ke pt={pt} setPt={setPt} />}
        </div>
      </div>
    </>
  )
}

export default PatientInfo
