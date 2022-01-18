import React from "react"

import { Patient } from "../utils"

const Identifiers = ({ pt, setPt }) => {
  let style = { width: "100%", textAlign: "left" }
  let style2 = { height: "28px" }

  return (
    <div className="box tbw_ibw">
      <h1>Identifiers</h1>
      <div style={{ display: "flex" }}>
        <div>
          <label style={style2} htmlFor="mrn">
            MRN
          </label>
          <label style={style2} htmlFor="last-name">
            Last Name
          </label>
          <label style={style2} htmlFor="first-name">
            First Name
          </label>
        </div>
        <div>
          <input
            style={style}
            id="mrn"
            onChange={e => setPt(new Patient({ ...pt, mrn: e.target.value }))}
            value={pt.mrn}
          />

          <input
            style={style}
            id="last-name"
            onChange={e =>
              setPt(new Patient({ ...pt, last_name: e.target.value }))
            }
            value={pt.last_name}
          />

          <input
            style={style}
            id="first-name"
            onChange={e =>
              setPt(new Patient({ ...pt, first_name: e.target.value }))
            }
            value={pt.first_name}
          />
        </div>
      </div>
    </div>
  )
}

export default Identifiers
