import React from "react"

export default function LoadCalculations({ pt }) {
  return (
    <>
      {pt.lddose_calculated && (
        <div className="box load-calculations">
          <h1>Load Calculations</h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: "4px",
            }}
          >
            <div style={{ textAlign: "right", fontWeight: 600 }}>
              <p>Calculated Dose:</p>
              <p>Rounded Load:</p>
            </div>
            <div>
              <p>{`${pt.tbw} * ${pt.dosing} = ${pt.lddose_calculated} mg`}</p>
              <p>{`${pt.lddose_rounded} mg`}</p>
            </div>
          </div>
          {pt.lddose_rounded > pt.max_dose && (
            <p style={{ color: "red" }}>
              {"* Dose > Max Dose, using Max Dose"}
            </p>
          )}
        </div>
      )}
    </>
  )
}
