import React from "react"

import { Patient } from "../utils"

const style = { width: "100%", textAlign: "left" }

const Diagnosis = ({ pt, setPt }) => {
  return (
    <div className="box diagnosis">
      <h1>Diagnosis</h1>
      <label style={style} htmlFor="provider">
        Consulting Provider:
      </label>
      <br />
      <input
        style={style}
        id="provider"
        onChange={e => setPt(new Patient({ ...pt, provider: e.target.value }))}
        value={pt.provider}
      />
      <label style={style} htmlFor="indication">
        Suspected Indication:
      </label>
      <br />
      <input
        style={style}
        id="indication"
        onChange={e =>
          setPt(new Patient({ ...pt, indication: e.target.value }))
        }
        value={pt.indication}
      />
    </div>
  )
}

export default Diagnosis
