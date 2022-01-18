import React from "react"
import { Patient } from "../utils"

const Ke = ({ pt, setPt }) => {
  return (
    <div className="box ke">
      <h1>Ke</h1>
      <label htmlFor="ke_eqn">
        K<sub>e</sub>
        eqn
      </label>
      <select
        id="ke_eqn"
        onChange={e => setPt(new Patient({ ...pt, ke_eqn: e.target.value }))}
      >
        <option value="" disabled selected>
          {pt.ke_eqn_suggested}
        </option>
        <option value="Matzke">Matzke</option>
        <option value="Crass">Crass</option>
      </select>
      <label htmlFor="cl_vanco">CLVanco</label>
      <input id="cl_vanco" type="number" disabled value={pt.clvanco} />
      <span>L/hr</span>
      <label htmlFor="ke">
        K<sub>e</sub>
      </label>
      <input id="ke" type="number" placeholder="" disabled value={pt.ke} />
      <label htmlFor="t1_2">
        t<sub>1/2</sub>
      </label>
      <input id="t1_2" type="number" placeholder="" disabled value={pt.t1_2} />
      <span>hrs</span>
    </div>
  )
}

export default Ke
