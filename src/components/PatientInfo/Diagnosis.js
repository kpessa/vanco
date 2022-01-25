import React from "react"
import { Stack } from "@fluentui/react/lib/Stack"
import { TextField } from "@fluentui/react/lib/TextField"

import { Patient } from "../../classes/Patient"

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
      <Stack tokens={{ childrenGap: 1 }}>
        <TextField
          label="Consulting Provider:"
          list="providers-list"
          onChange={e =>
            setPt(new Patient({ ...pt, provider: e.target.value }))
          }
          value={pt.provider}
        />
        <TextField
          label="Suspected Indication:"
          list="indications-list"
          onChange={e =>
            setPt(new Patient({ ...pt, indication: e.target.value }))
          }
          value={pt.indication}
        />
      </Stack>

      <datalist id="providers-list">
        {providers.map((provider, idx) => (
          <option key={idx}>{provider}</option>
        ))}
      </datalist>
      <datalist id="indications-list">
        {indications.map((indication, idx) => (
          <option key={idx}>{indication}</option>
        ))}
      </datalist>
    </div>
  )
}

export default Diagnosis
