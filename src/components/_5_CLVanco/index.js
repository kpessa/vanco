import React from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { TextField as TextField2 } from "@fluentui/react/lib/TextField"

import { Patient } from "../../classes/Patient"
import "./index.css"

export default function CLVanco({ pt, setPt }) {
  const [value, setValue] = React.useState(pt.ke_eqn)

  return (
    <>
      <h1 style={{ textAlign: "center" }}>CLVanco</h1>
      <div className="box clvanco">
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          inputValue={pt.ke_eqn}
          onInputChange={(event, newInputValue) => {
            setPt(new Patient({ ...pt, ke_eqn: newInputValue }))
          }}
          options={["Matzke", "Crass"]}
          // sx={{ width: 300 }}
          renderInput={params => (
            <TextField {...params} label="CLVanco Equation" />
          )}
        />
      </div>
      <div className="box clvanco">
        <h1>Estimated PK Parameters</h1>
        <TextField2
          label="CLVanco:"
          value={pt.clvanco}
          suffix="L/hr"
          disabled
        />
        <TextField2 label="CrCl:" value={pt.crcl} suffix="mL/min" disabled />
        <TextField2 label="Ke:" value={pt.ke} suffix="" disabled />
        <TextField2 label="t1/2:" value={pt.t1_2} suffix="hrs" disabled />
        <TextField2 label="Vd:" value={pt.vd} suffix="L" disabled />
      </div>
    </>
  )
}
