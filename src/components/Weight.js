import React from "react"
import { Patient } from "../classes/Patient"

const Weight = ({ pt, setPt }) => {
  return (
    <div className="box tbw_ibw">
      <h1>Weight</h1>
      <label htmlFor="weight">Weight</label>
      <input
        id="weight"
        onChange={e => setPt(new Patient({ ...pt, weight: +e.target.value }))}
        type="number"
        value={pt.weight}
      />
      <span>kg</span>
      <br />
      <label htmlFor="ibw">IBW</label>
      <input
        id="ibw"
        onChange={e => setPt(new Patient({ ...pt, ibw: +e.target.value }))}
        type="number"
        value={pt.ibw}
      />
      <span>kg</span>
      <br />
      <label htmlFor="tbw_ibw">TBW/IBW</label>
      <input
        type="text"
        id="tbw_ibw"
        disabled
        value={pt.tbw_ibw ? pt.tbw_ibw : ""}
      />
    </div>
  )
}

export default Weight
