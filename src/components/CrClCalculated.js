import React from "react"

import { Patient } from "../utils"

const CrClCalculated = ({ pt, setPt }) => {
  return (
    <div className="box crcl_calculated">
      <h1>CrCl Calculation</h1>
      <label htmlFor="age">Age</label>
      <input
        id="age"
        onChange={e => setPt(new Patient({ ...pt, age: +e.target.value }))}
        type="number"
        placeholder=""
        value={pt.age}
      />
      <span>years</span>
      <br />
      <label htmlFor="height">Height</label>
      <input
        id="height"
        onChange={e => setPt(new Patient({ ...pt, height: +e.target.value }))}
        type="number"
        placeholder=""
        value={pt.height}
      />
      <span>cm</span>
      <br />
      <label htmlFor="gender">Gender</label>
      <select
        id="gender"
        onChange={e => setPt(new Patient({ ...pt, gender: +e.target.value }))}
        value={pt.gender}
      >
        <option value="-1"> </option>
        <option value="1">Male</option>
        <option value="0">Female</option>
      </select>

      <br />
      <label htmlFor="crcl_calulated">CrCl</label>
      <input
        id="crcl_calculated"
        disabled
        value={pt.calculated_crcl ? pt.calculated_crcl : "waiting .."}
      />
      <span>mL/min</span>
    </div>
  )
}

export default CrClCalculated
