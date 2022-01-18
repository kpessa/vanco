import React, { useState, useEffect } from "react"
import "../styles/index.css"

import Weight from "../components/Weight"
import SCr from "../components/SCr"
import CrCl from "../components/CrCl"
import CrClCalculated from "../components/CrClCalculated"
import Vd from "../components/Vd"

export default function Home() {
  const initialPt = {
    age: "",
    height: "",
    weight: "",
    scr: "",
    ibw: "",
    bmi: "",
    tbw_ibw: "",
    manual_crcl: "",
    crcl_calculated: "",
  }

  const [pt, setPt] = useState(initialPt)

  useEffect(() => {
    console.log(pt)
  }, [pt])

  function reorder() {
    const displayLogic =
      (pt.weight && pt.ibw && pt.weight / pt.ibw > 1.2) ||
      (pt.scr && pt.scr < 1)

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
    <div className="container">
      <h1>Vanco AUC Calculator</h1>
      <Weight pt={pt} setPt={setPt} />
      {reorder()}
      {displayManualCrClLogic()}
      {pt.weight && (pt.calculated_crcl || pt.manual_crcl) && <Vd />}
    </div>
  )
}
