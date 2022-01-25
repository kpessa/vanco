import React from "react"
import { navigate } from "gatsby"

import { Patient } from "../classes/Patient"

const NavigationButtons = ({ pt, setPt, page, setPage }) => {
  function handleSave(e) {
    e.preventDefault()
    if (typeof window !== "undefined") {
      let localPts = localStorage.getItem("pts")
      if (localPts) {
        localPts = JSON.parse(localPts)
      } else {
        localPts = []
      }

      let idx = localPts.findIndex(
        currPt => currPt.mrn === pt.mrn || currPt.name === pt.name
      )

      if (idx === -1) {
        localPts.push({ ...pt })
      } else {
        localPts[idx] = { ...pt }
      }
      localStorage.setItem("pts", JSON.stringify(localPts))

      alert(`${pt.mrn ? pt.mrn + " - " : ""}${pt.name} saved.`)
    } else {
      alert("Sorry, something went wrong. 😬")
    }
  }

  function handleNew(e) {
    setPt(new Patient())
    navigate("/newconsult/")
  }

  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        gap: "5px",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => setPage(page - 1)}
        {...(page === 0 ? { disabled: true } : {})}
      >
        {"<<"} Back
      </button>
      <button onClick={() => navigate("/")}>Close</button>
      <button onClick={handleSave}>Save</button>
      <button onClick={e => handleNew(e)}>New</button>
      <button
        onClick={() => setPage(page + 1)}
        {...(page === 2 ? { disabled: true } : {})}
      >
        Next {">>"}
      </button>
    </div>
  )
}

export default NavigationButtons
