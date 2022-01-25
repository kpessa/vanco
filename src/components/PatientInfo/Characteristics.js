import React, { useState } from "react"

import { TextField } from "@fluentui/react/lib/TextField"
import { Dropdown } from "@fluentui/react/lib/Dropdown"
import { Stack } from "@fluentui/react/lib/Stack"

import { Patient } from "../../classes/Patient"

import "./Characteristics.css"

export default function Characteristics({ pt, setPt }) {
  return (
    <div className="box characteristics">
      <h1>Characteristics</h1>
      <Stack tokens={{ childrenGap: 1 }}>
        <TextField
          label="Age"
          onChange={e => setPt(new Patient({ ...pt, age: e.target.value }))}
          value={pt.age}
          suffix="yrs"
        />
        <TextField
          label="Height"
          onChange={e => setPt(new Patient({ ...pt, height: e.target.value }))}
          value={pt.height}
          suffix="cm"
        />
        <TextField
          label="Weight"
          onChange={e => setPt(new Patient({ ...pt, weight: e.target.value }))}
          value={pt.weight}
          suffix="kg"
        />
        <TextField
          id="gender"
          label="Gender"
          list="genders"
          onChange={e =>
            setPt(
              new Patient({
                ...pt,
                gender:
                  e.target.value.toLowerCase() === "male"
                    ? 1
                    : e.target.value.toLowerCase() === "female"
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
      </Stack>
    </div>
  )
}
