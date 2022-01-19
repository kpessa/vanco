import React from "react"

import { Patient } from "../utils"

const style = { width: "100%", textAlign: "left" }

const Diagnosis = ({ pt, setPt }) => {
  const isBrowser = typeof window !== "undefined"

  let providers = []
  let indications =
    "Cellulitis, Skin and Soft Tissue Infection, SSTI, Pneumonia, PNA, Osteomyelitis, Meningitis, Bacteremia, Endocarditis, Sepsis".split(
      ", "
    )

  if (isBrowser) {
    let localPts = localStorage.getItem("pts")
    localPts = localPts ? JSON.parse(localPts) : []

    providers = localPts
      .map(currPt => currPt.provider)
      .filter(name => name !== "")

    indications = [
      ...new Set([
        ...indications,
        ...localPts
          .map(currPt => currPt.indication)
          .filter(name => name !== ""),
      ]),
    ]
  }

  return (
    <div className="box diagnosis">
      <h1>Diagnosis</h1>
      <label style={style} htmlFor="provider">
        Consulting Provider:
      </label>
      <br />
      <input
        style={style}
        id="provider"
        list="providers-list"
        onChange={e => setPt(new Patient({ ...pt, provider: e.target.value }))}
        value={pt.provider}
      />
      <datalist id="providers-list">
        {providers.map((provider, idx) => (
          <option key={idx}>{provider}</option>
        ))}
      </datalist>
      <label style={style} htmlFor="indication">
        Suspected Indication:
      </label>
      <br />
      <input
        style={style}
        id="indication"
        list="indications-list"
        onChange={e =>
          setPt(new Patient({ ...pt, indication: e.target.value }))
        }
        value={pt.indication}
      />
      <datalist id="indications-list">
        {indications.map((indication, idx) => (
          <option key={idx}>{indication}</option>
        ))}
      </datalist>
    </div>
  )
}

export default Diagnosis
