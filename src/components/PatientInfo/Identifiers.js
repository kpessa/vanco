import React from "react"
import "./Identifiers.css"

import { TextField } from "@fluentui/react/lib/TextField"
import { Stack } from "@fluentui/react/lib/Stack"

import { Patient } from "../../classes/Patient"

const Identifiers = ({ pt, setPt }) => {
  return (
    <div className="box identifiers">
      <h1>Identifiers</h1>
      <Stack tokens={{ childrenGap: 1 }}>
        <TextField
          label="MRN"
          onChange={e => setPt(new Patient({ ...pt, mrn: e.target.value }))}
          value={pt.mrn}
        />
        <TextField
          label="Last Name"
          onChange={e =>
            setPt(new Patient({ ...pt, last_name: e.target.value }))
          }
          value={pt.last_name}
        />
        <TextField
          label="First Name"
          onChange={e =>
            setPt(new Patient({ ...pt, first_name: e.target.value }))
          }
          value={pt.first_name}
        />
      </Stack>
    </div>
  )
}

export default Identifiers
