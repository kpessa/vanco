import React from "react"
import moment from "moment"

import { TextField } from "@fluentui/react/lib/TextField"

import KeInput from "./KeInput"
import KeEquation from "./KeEquation"

import "./index.css"

import { Patient } from "../../classes/Patient"

import { integerOrRoundNumber } from "../../utils"

export default function Ke({ pt, setPt }) {
  let timeDiff =
    integerOrRoundNumber(
      moment(pt.level2_dt, "MM/DD HH:mm").diff(
        moment(pt.level1_dt, "MM/DD HH:mm"),
        "minutes"
      ) / 60,
      1
    ) + " hr"

  React.useEffect(() => {
    let okToCalculate = Boolean(
      pt.level1 && pt.level1_dt && pt.level2 && pt.level2_dt
    )
    if (okToCalculate) {
      let time1 = moment(pt.level1_dt, "MM/DD HH:mm")
      let time2 = moment(pt.level2_dt, "MM/DD HH:mm")
      let timeDiff = time2.diff(time1, "minutes") / 60
      let ptKe = Math.log(+pt.level1 / +pt.level2) / timeDiff
      let ptT1_2 = 0.693 / ptKe
      setPt(new Patient({ ...pt, ptKe: ptKe, ptT1_2: ptT1_2 }))
    }
  }, [pt.level1, pt.level1_dt, pt.level2, pt.level2_dt])

  return (
    <>
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
        <div className="box" style={{ width: 300, textAlign: "left" }}>
          <h1>Post Levels</h1>
          <p>This is the post levels page.</p>
          <KeInput pt={pt} setPt={setPt} />
          <br />
          <KeEquation pt={pt} />
        </div>
        <div className="box pt-ke">
          <TextField label="Ke:" value={pt.ptKeRounded} disabled suffix="" />
          <TextField
            label="t1/2:"
            value={pt.ptT1_2Rounded}
            disabled
            suffix="hrs"
          />
          <br />
          <h1>Half-life Check</h1>
          <table style={{ width: "200px" }}>
            <thead>
              <tr>
                <th>t2-t1</th>
                <th>half-life</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{timeDiff}</td>
                <td>{pt.ptT1_2Rounded + " hrs"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
