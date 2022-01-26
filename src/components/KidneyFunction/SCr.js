import React, { useState, useEffect } from "react"

import { Stack } from "@fluentui/react/lib/Stack"
import { TextField } from "@fluentui/react/lib/TextField"
import { Toggle } from "@fluentui/react/lib/Toggle"

import { Patient } from "../../classes/Patient"
import "./SCr.css"

const SCr = ({ pt, setPt }) => {
  let [toggleValue, setToggleValue] = useState(Boolean(pt.scr_adjusted))

  return (
    <div className="box scr">
      <h1>SCr</h1>
      <Stack tokens={{ childrenGap: 1 }}>
        <TextField
          label="SCr:"
          value={pt.scr_level}
          onChange={e =>
            setPt(new Patient({ ...pt, scr_level: e.target.value }))
          }
          suffix="mg/dL"
        />
        {Boolean(pt.scr_level && pt.scr_level < 1) && (
          <>
            <TextField label="BMI:" value={pt.bmi} suffix="kg/m2" disabled />
            {pt.bmi && pt.bmi < 18.5 && <pre>underweight</pre>}
            <TextField label="Age:" value={pt.age} suffix="years" disabled />
            {pt.age && pt.age >= 65 && <pre id="age_warning">elderly</pre>}
            <br />
            <Toggle
              label="Adjust SCr?:"
              inlineLabel
              onText="Yes"
              offText="No"
              checked={toggleValue}
              onChange={e => {
                setToggleValue(prevToggle => {
                  let newToggleValue = !prevToggle
                  if (newToggleValue === false) {
                    setPt(new Patient({ ...pt, scr_adjusted: "" }))
                  }
                  return newToggleValue
                })
              }}
            />
            {toggleValue && (
              <TextField
                label="AdjSCr:"
                value={pt.scr_adjusted}
                onChange={e =>
                  setPt(new Patient({ ...pt, scr_adjusted: e.target.value }))
                }
                suffix="mg/dL"
              />
            )}
          </>
        )}
      </Stack>
    </div>
  )
}

export default SCr
