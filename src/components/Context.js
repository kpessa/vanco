import React from "react"

import ContextRender from "./ContextRender"
import ContextRenderLabels from "./ContextRenderLabels"
import ContextRenderValues from "./ContextRenderValues"

const Context = ({ pt }) => {
  let style = {
    display: "flex",
    gap: "10px",
    backgroundColor: "#aaa",
    width: "100%",
    fontSize: "10px",
    padding: "10px",
  }

  return (
    <div style={style}>
      <ContextRender>
        <ContextRenderLabels>
          {pt.mrn && <p>MRN:</p>}
          {pt.name && <p>Name:</p>}
          {pt.age && <p>Age:</p>}
          {pt.height && <p>Ht:</p>}
          {pt.height && <p>Ht:</p>}
        </ContextRenderLabels>
        <ContextRenderValues>
          {pt.mrn && <p>{pt.mrn}</p>}
          {pt.name && <p>{pt.name}</p>}
          {pt.age && (
            <p>
              {pt.age}
              {pt.genderToChar && pt.genderToChar}
            </p>
          )}
          {pt.height && <p>{pt.height} cm</p>}
          {pt.height && <p>{pt.heightToFeetInches} </p>}
        </ContextRenderValues>
      </ContextRender>
      <ContextRender>
        <ContextRenderLabels>
          {pt.weight && <p>Wt:</p>}
          {pt.weight && <p>TBW:</p>}
          {pt.ibw && <p>IBW:</p>}
          {pt.adjBW && <p>AdjBW:</p>}
          {pt.tbw_ibw && <p>TBW/IBW:</p>}
          {pt.bmi && <p>BMI:</p>}
        </ContextRenderLabels>
        <ContextRenderValues>
          {pt.weight && <p>{pt.wtInLbs} lbs</p>}
          {pt.weight && <p>{pt.tbw} kg</p>}
          {pt.ibw && <p>{pt.ibw} kg</p>}
          {pt.adjBW && <p>{pt.adjBW} kg</p>}
          {pt.tbw_ibw && <p>{pt.tbw_ibw}</p>}
          {pt.bmi && <p>{pt.bmi}</p>}
        </ContextRenderValues>
      </ContextRender>
      <ContextRender>
        <ContextRenderLabels>
          {pt.scr && <p>SCr:</p>}
          {pt.crcl && <p>CrCl:</p>}
          {pt.wtUsed && <p>WtUsed:</p>}
        </ContextRenderLabels>
        <ContextRenderValues>
          {pt.scr && <p>{pt.scr} mg/dL</p>}
          {pt.crcl && <p>{pt.crcl} mL/min</p>}
          {pt.wtUsed && <p>{pt.wtUsed} kg</p>}
        </ContextRenderValues>
      </ContextRender>
      <ContextRender>
        <ContextRenderLabels>
          {pt.ke_eqn && <p>Eqn Used:</p>}
          {pt.vd && <p>Vd:</p>}
          {pt.ke && <p>Ke:</p>}
          {pt.t1_2 && <p>t1/2:</p>}
          {pt.clvanco && <p>CLVanco:</p>}
        </ContextRenderLabels>
        <ContextRenderValues>
          {pt.ke_eqn && <p>{pt.ke_eqn}</p>}
          {pt.vd && <p>{pt.vd} L</p>}
          {pt.ke && <p>{pt.ke}</p>}
          {pt.t1_2 && <p>{pt.t1_2} hrs</p>}
          {pt.clvanco && <p>{pt.clvanco} L/hr</p>}
        </ContextRenderValues>
      </ContextRender>
      <ContextRender>
        <ContextRenderLabels>
          {pt.provider && <p>Provider:</p>}
          {pt.indication && <p>Indication:</p>}
        </ContextRenderLabels>
        <ContextRenderValues>
          {pt.provider && <p>{pt.provider}</p>}
          {pt.indication && <p>{pt.indication}</p>}
        </ContextRenderValues>
      </ContextRender>
    </div>
  )
}

export default Context
