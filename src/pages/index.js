import React, { useState, useEffect } from "react"
import "../styles/index.css"

import { Patient } from "../utils"

import Context from "../components/Context"
import Identifiers from "../components/Identifiers"
import Diagnosis from "../components/Diagnosis"
import Weight from "../components/Weight"
import SCr from "../components/SCr"
import CrCl from "../components/CrCl"
import CrClCalculated from "../components/CrClCalculated"
import Vd from "../components/Vd"
import Ke from "../components/Ke"

export default function Home() {
  const [pt, setPt] = useState(new Patient({}))

  useEffect(() => {
    console.log(pt)
  }, [pt])

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
      <div className="container" style={{ padding: "5px 10px" }}>
        <Context pt={pt} />
      </div>
      <div className="container" style={{ background: "white" }}>
        <h1>Vanco AUC Calculator</h1>
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          <div>
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
      </div>
    </>
  )
}
