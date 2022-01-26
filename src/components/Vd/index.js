import React from "react"

import { Stack } from "@fluentui/react/lib/Stack"
import { TextField } from "@fluentui/react/lib/TextField"
import { DetailsList } from "@fluentui/react/lib/DetailsList"

import { Patient } from "../../classes/Patient"

import VdPopulationEstimates from "./VdPopulationEstimates"
import "./index.css"

export default function Vd({ pt, setPt }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Vd</h1>
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
        <div>
          <div className="box vd">
            <h1>Estimate Vd</h1>
            <Stack tokens={{ childrenGap: 1 }}>
              <TextField
                label="Vd"
                suffix="L/kg"
                placeholder={pt.vd_kg_suggested}
                required
                {...(pt.vd_kg
                  ? {}
                  : {
                      errorMessage: "Please enter a valid Vd value.",
                    })}
                onChange={e =>
                  setPt(new Patient({ ...pt, vd_kg: e.target.value }))
                }
              />
              <TextField
                label="Weight"
                value={pt.weight}
                onChange={e =>
                  setPt(new Patient({ ...pt, weight: e.target.value }))
                }
                suffix="kg"
              />
              <TextField label="Vd" disabled value={pt.vd} suffix="L" />
            </Stack>
          </div>

          <div className="box vd">
            <h1>Calculation</h1>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "4px",
              }}
            >
              <div style={{ textAlign: "right", fontWeight: 600 }}>
                <p>Calculated Vd:</p>
              </div>
              <div>
                <p>{`${pt.tbw} * ${pt.vd_kg} = ${pt.vd} L`}</p>
              </div>
            </div>
          </div>
        </div>

        <VdPopulationEstimates />
      </div>
    </>
  )
}
