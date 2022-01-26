import React from "react"
import moment from "moment"
import MathJax from "react-mathjax2"

import { integerOrRoundNumber } from "../../utils"

export default function KeEquation({ pt }) {
  let timeDiff = ""
  if (pt.level1_dt && pt.level2_dt) {
    timeDiff = integerOrRoundNumber(
      moment(pt.level2_dt, "MM/DD HH:mm").diff(
        moment(pt.level1_dt, "MM/DD HH:mm"),
        "minutes"
      ) / 60,
      1
    )
  }

  const ascii = `K_e = ln(C_1//C_2)/ (\Delta t) = ln(${
    pt.level1 ? pt.level1 : "C_1"
  }//${pt.level2 ? pt.level2 : "C_2"})/ ${timeDiff ? timeDiff : "(Delta t)"}${
    pt.ptKeRounded ? " = " + pt.ptKeRounded : ""
  }`

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MathJax.Context input="ascii">
        <div>
          <MathJax.Node inline>{ascii}</MathJax.Node>
        </div>
      </MathJax.Context>
    </div>
  )
}
