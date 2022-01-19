import React, { useRef } from "react"
import { Patient } from "../utils"

const Load = ({ pt, setPt }) => {
  const isBrowser = typeof window !== "undefined"

  const style = { width: "100%", textAlign: "left" }

  let localPts = []
  if (isBrowser) {
    localPts = localStorage.getItem("pts")
    if (localPts) {
      localPts = JSON.parse(localPts)
    } else {
      localPts = []
    }
    localPts = localPts.map(currPt => new Patient(currPt))
  }

  function handleLoad(e) {
    if (isBrowser) {
      let searchTerm = document.getElementById("load").value

      let idx = localPts.findIndex(
        currPt =>
          String(currPt.mrn) === searchTerm || currPt.name === searchTerm
      )
      if (idx === -1) {
        alert("Patient not found.")
      } else {
        setPt(localPts[idx])
      }
    }
  }

  return (
    <div className="box load">
      <h1>Load</h1>
      <label style={style} htmlFor="load">
        Load Patient:
      </label>
      <br />
      <input style={style} id="load" list="patients" />
      <datalist id="patients">
        {localPts.map((pt, idx) => (
          <option key={idx} value={pt.mrn}>
            {pt.name}
          </option>
        ))}
      </datalist>
      <button
        style={{ width: "100%", textAlign: "center" }}
        onClick={e => handleLoad(e)}
      >
        Load
      </button>
    </div>
  )
}

export default Load
