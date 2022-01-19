import React from "react"

const MaintenanceDoseTable = ({ pt, setPt }) => {
  let doses = [500, 750, 1000, 1250, 1500, 1750, 2000]
  let frequencies = [6, 8, 12, 18, 24, 36, 48]

  function render(dose, frequency) {
    if (
      pt.popAUCRounded(dose, frequency) >= 400 &&
      pt.popAUCRounded(dose, frequency) <= 600
    ) {
      return (
        <>
          {pt.ke && pt.vd && <p>{pt.popAUCRounded(dose, frequency)}</p>}
          {pt.ke && pt.vd && <p>{pt.popTroughRounded(dose, frequency)}</p>}
          {<p>{((dose * 24) / frequency / 1000).toFixed(1)}</p>}
          {pt.weight && <p>{(dose / pt.weight).toFixed(1)}</p>}
        </>
      )
    }
    return <></>
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Maintenance Dose Table</h1>

      <table>
        <thead>
          <tr>
            <th> </th>
            {doses.map((dose, i) => (
              <th key={i}>{dose}mg</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {frequencies.map((frequency, i) => (
            <tr key={i}>
              <th>Q{frequency}H</th>
              {doses.map((dose, j) => (
                <td
                  key={j}
                  style={{
                    textAlign: "center",
                    backgroundColor: "lightgrey",
                    padding: "3px",
                  }}
                >
                  {render(dose, frequency)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MaintenanceDoseTable
