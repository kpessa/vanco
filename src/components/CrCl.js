import React from "react"
import { Patient } from "../classes/Patient"

const CrCl = ({ pt, setPt }) => {
  return (
    <div className="box crcl">
      <h1>CrCl</h1>
      <label htmlFor="crcl">CrCl</label>
      <input
        id="crcl"
        onChange={e =>
          setPt(new Patient({ ...pt, manual_crcl: +e.target.value }))
        }
        type="number"
        placeholder="100"
        value={pt.manual_crcl}
      />
      <span>mL/min</span>
    </div>
  )
}

export default CrCl
