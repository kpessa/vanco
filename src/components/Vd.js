import React from "react"

import { Patient } from "../utils"

const Vd = ({ pt, setPt }) => {
  return (
    <div className="box vd">
      <h1>Vd</h1>
      <label htmlFor="vd_kg">Vd/kg</label>
      <input
        id="vd_kg"
        onChange={e => setPt(new Patient({ ...pt, vd_kg: +e.target.value }))}
        type="number"
        step="0.05"
        placeholder={pt.vd_kg_suggested}
        value={pt.vd_kg}
      />
      <span>L/kg</span>
      <label htmlFor="vd">
        V<sub>d</sub>
      </label>
      <input id="vd" value={pt.vd} type="number" disabled />
      <span>L</span>
    </div>
  )
}

export default Vd
