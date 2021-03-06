import React, { useState } from "react"
import { Patient } from "../../classes/Patient"
import { TextField } from "@fluentui/react/lib/TextField"
import { PrimaryButton } from "@fluentui/react/lib/Button"
import { Stack } from "@fluentui/react/lib/Stack"

export default function Load({ pt, setPt }) {
  const isBrowser = typeof window !== "undefined"
  const [inputValue, setInputValue] = useState("")

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
      searchTerm = searchTerm.split(" - ")[0]

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

  const options = localPts.map(currPt => {
    let str = ""
    if (currPt.mrn) str += currPt.mrn
    if (currPt.mrn && currPt.name) str += " - "
    if (currPt.name) str += currPt.name
    return str
  })

  return (
    <div className="box load">
      <Stack tokens={{ childrenGap: 5 }}>
        <TextField
          id="load"
          label="Load patient:"
          list="patients"
          placeholder="Click to see dropdown list"
          autoComplete="off"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />

        <datalist id="patients">
          {options.map((optionValue, idx) => (
            <option key={idx}>{optionValue}</option>
          ))}
        </datalist>
        <PrimaryButton
          text="Load"
          onClick={e => handleLoad(e)}
          allowDisabledFocus
          disabled={!Boolean(inputValue)}
        />
      </Stack>
    </div>
  )
}
