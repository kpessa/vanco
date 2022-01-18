import React from "react"

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
      <div>
        {pt.age && (
          <p>
            Age: {pt.age}
            {pt.genderToChar && pt.genderToChar}
          </p>
        )}
        {pt.height && <p>Ht: {pt.height} cm</p>}
        {pt.height && <p>Ht: {pt.heightToFeetInches} </p>}
      </div>
      <div>
        {pt.weight && <p>Wt: {pt.wtInLbs} lbs</p>}
        {pt.weight && <p>TBW: {pt.tbw} kg</p>}
        {pt.ibw && <p>IBW: {pt.ibw} kg</p>}
        {pt.adjBW && <p>AdjBW: {pt.adjBW} kg</p>}
        {pt.tbw_ibw && <p>TBW/IBW: {pt.tbw_ibw}</p>}
        {pt.bmi && <p>BMI: {pt.bmi}</p>}
      </div>
      <div>
        {pt.scr && <p>SCr: {pt.scr} mg/dL</p>}
        {pt.crcl && <p>CrCl: {pt.crcl} mL/min</p>}
        {pt.wtUsed && <p>WtUsed: {pt.wtUsed} kg</p>}
      </div>
      <div>
        {pt.ke_eqn && <p>Eqn Used: {pt.ke_eqn}</p>}
        {pt.vd && <p>Vd: {pt.vd} L</p>}
        {pt.ke && <p>Ke: {pt.ke}</p>}
        {pt.t1_2 && <p>t1/2: {pt.t1_2} hrs</p>}
        {pt.clvanco && <p>CLVanco: {pt.clvanco} L/hr</p>}
      </div>
    </div>
  )
}

export default Context
