import React from "react"

import { TextField, MaskedTextField } from "@fluentui/react/lib/TextField"
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button"
import { Stack } from "@fluentui/react/lib/Stack"

import { Patient } from "../../classes/Patient"
import { Profile } from "../../classes/Profile"

import LoadCalculations from "./LoadCalculations"
import LoadResult from "./LoadResult"
import LoadEstimates from "./LoadEstimates"

import "./index.css"

export default function LoadDose({ pt, setPt, pr }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Load Dose</h1>
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
        <div className="box load-dose">
          <LoadInput pt={pt} setPt={setPt} pr={pr} />
          <LoadResult pt={pt} setPt={setPt} />
        </div>
        <div>
          <LoadEstimates />
          <LoadCalculations pt={pt} />
        </div>
      </div>
    </>
  )
}

function LoadInput({ pt, setPt, pr }) {
  React.useEffect(() => {
    console.log("From UseEffect / LoadDosing: ", pr)
    if (!pt.dosing & pr.dosing) {
      setPt(new Patient({ ...pt, dosing: pr.dosing }))
    }
    if (!pt.max_dose & pr.max_dose) {
      setPt(new Patient({ ...pt, max_dose: pr.max_dose }))
    }
  }, [])

  return (
    <>
      <h1>Load Input</h1>
      <Stack tokens={{ childrenGap: 1 }}>
        <TextField
          label="Patient's Weight:"
          onChange={e => setPt(new Patient({ ...pt, weight: +e.target.value }))}
          value={pt.weight}
          suffix="kg"
        />
        <TextField
          label="Dosing:"
          onChange={e => setPt(new Patient({ ...pt, dosing: +e.target.value }))}
          value={pt.dosing}
          suffix="mg/kg"
        />
        <TextField
          label="Max Dose:"
          onChange={e =>
            setPt(new Patient({ ...pt, max_dose: +e.target.value }))
          }
          value={pt.max_dose}
          suffix="mg"
        />
        <br />
        <Stack horizontal>
          <Stack.Item grow={1}>
            <DefaultButton
              style={{ width: "100%" }}
              text="No Load"
              onClick={e => setPt(new Patient({ ...pt, lddose: "" }))}
              allowDisabledFocus
            />
          </Stack.Item>
          <Stack.Item grow={1}>
            <DefaultButton
              style={{ width: "100%" }}
              text="Calculate Load"
              onClick={e => {
                if (pt.weight && pt.dosing && pt.max_dose) {
                  if (pt.lddose_rounded > pt.max_dose) {
                    setPt(new Patient({ ...pt, lddose: pt.max_dose }))
                  } else {
                    setPt(new Patient({ ...pt, lddose: pt.lddose_rounded }))
                  }
                }
              }}
              allowDisabledFocus
            />
          </Stack.Item>
        </Stack>
      </Stack>
    </>
  )
}
