import React from "react"

import { Patient } from "../utils"

const SCr = ({ pt, setPt }) => {
  return (
    <div className="box scr">
      <h1>SCr</h1>
      <label htmlFor="scr">SCr</label>
      <input
        id="scr"
        onChange={e => setPt(new Patient({ ...pt, scr: +e.target.value }))}
        type="number"
        step="0.1"
        value={pt.scr}
      />
      <span>mg/dL</span>
      {pt.scr < 1 && (
        <>
          <label htmlFor="scr_bmi">BMI</label>
          <input id="scr_bmi" disabled value={pt.bmi ? pt.bmi : "waiting.."} />
          <span>
            kg/m
            <sup>2</sup>
          </span>
          {pt.bmi && pt.bmi < 18.5 && <pre>underweight</pre>}

          <label htmlFor="scr_age">Age</label>
          <input id="scr_age" type="number" disabled value={pt.age} />
          <span>years</span>
          {pt.age && pt.age >= 65 && <pre id="age_warning">elderly</pre>}
          <label htmlFor="adjusted_scr">Adjust SCr?</label>
          <input id="adjusted_scr" type="number" step="0.1" />
          <span>mg/dL</span>
        </>
      )}
    </div>
  )
}

export default SCr
