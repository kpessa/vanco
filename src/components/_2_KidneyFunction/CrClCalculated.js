import React from "react"

import { TextField } from "@fluentui/react/lib/TextField"
import { Dropdown } from "@fluentui/react/lib/Dropdown"
import { Stack } from "@fluentui/react/lib/Stack"

import "./CrClCalculated.css"

import { Patient } from "../../classes/Patient"

const CrClCalculated = ({ pt, setPt }) => {
  return (
    <div className="box crcl_calculated">
      <h1>CrCl Calculation</h1>
      <Stack tokens={{ childrenGap: 1 }}>
        <TextField
          label="Age:"
          onChange={e => setPt(new Patient({ ...pt, age: +e.target.value }))}
          value={pt.age}
          suffix="yrs"
        />
        <TextField
          label="Weight:"
          onChange={e => setPt(new Patient({ ...pt, weight: e.target.value }))}
          value={pt.weight}
          suffix="kg"
        />
        <TextField label="WtUsed:" disabled value={pt.wtUsed} suffix="kg" />
        <TextField
          id="gender"
          label="Gender"
          list="genders"
          onChange={e =>
            setPt(
              new Patient({
                ...pt,
                gender:
                  e.target.value === "Male"
                    ? 1
                    : e.target.value === "Female"
                    ? 0
                    : "",
              })
            )
          }
          value={pt.gender === 1 ? "Male" : pt.gender === 0 ? "Female" : ""}
        />
        <datalist id="genders">
          <option>Male</option>
          <option>Female</option>
        </datalist>
        <TextField
          id="calculated_crcl"
          label="CrCl"
          disabled
          value={pt.calculated_crcl}
          suffix="mL/min"
        />
      </Stack>
    </div>
  )
}

export default CrClCalculated
