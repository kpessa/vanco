import { Stack } from "@fluentui/react"
import React from "react"

export default function LoadEstimates() {
  let loadPopulations = [
    "Serious MRSA Infections, 20-35 mg/kg ABW*",
    "Critically ill, 25-35 mg/kg#",
    "Obese (BMI > 30), 20-25 mg/kg+",
    "HD, 20-25 mg/kg+",
    "CRRT, 20-25 mg/kg+",
    "Pediatrics (Obese), 20 mg/kg",
    "Pediatrics, no loading dose",
  ]

  return (
    <div className="box load-estimates ">
      <table>
        <thead>
          <tr>
            <th colSpan="2" style={{ textAlign: "left" }}>
              Table 1. ASHP / IDSA Recommendations
            </th>
          </tr>
          <tr>
            <th
              style={{
                borderBottom: "1px solid #555",
                borderTop: "1px solid #555",
                backgroundColor: "#ccc",
              }}
            >
              Population
            </th>
            <th
              style={{
                borderBottom: "1px solid #555",
                borderTop: "1px solid #555",
                backgroundColor: "#ccc",
              }}
            >
              Load Recommendation
            </th>
          </tr>
        </thead>
        <tbody style={{ lineHeight: "16px" }}>
          {loadPopulations.map((item, i) => (
            <tr key={i}>
              <td
                style={{
                  textAlign: "right",
                  fontWeight: 600,
                  paddingRight: "5px",
                }}
                key={i}
              >
                {item.split(", ")[0] + ": "}
              </td>
              <td
                key={i}
                style={{
                  textAlign: "center",
                }}
              >
                {item.split(", ")[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
