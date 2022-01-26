import React from "react"

import { Stack } from "@fluentui/react/lib/Stack"

export default function VdPopulationEstimates() {
  let items = [
    "Normal, 0.65",
    "Dehydrated, 0.5 - 0.6",
    "Obese, 0.4 - 0.6",
    "Overhydrated, 0.7 - 0.85",
    "Cystic Fibrosis, 0.7 - 0.85",
    "Septic Shock, 0.7 - 0.75",
    "ICU, 0.7 - 0.75",
    "Trauma, 0.7 - 0.75",
    "ESRD, 0.7 - 0.75",
    "Post-partum < 48 hrs, 0.7",
    "Pregnant in 3rd trimester, 0.7",
  ]

  function paddingBottom(i) {
    let padding = "25px"
    switch (i) {
      case 2:
        return padding
      case 4:
        return padding
      case 8:
        return padding
      case 10:
        return "10px"
      default:
        return "0"
    }
  }

  return (
    <div className="box vd-estimates" style={{ width: 300 }}>
      <Stack>
        <table>
          <thead>
            <tr>
              <th colSpan="2" style={{ textAlign: "left" }}>
                Table 2. Population-based Vd Estimates
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
                Vd_kg Estimate
              </th>
            </tr>
          </thead>
          <tbody style={{ lineHeight: "16px" }}>
            {items.map((item, i) => (
              <tr key={i + "A"}>
                <td
                  style={{
                    textAlign: "right",
                    fontWeight: 600,
                    paddingRight: "5px",
                    paddingBottom: paddingBottom(i),
                  }}
                  key={i}
                >
                  {item.split(", ")[0] + ": "}
                </td>
                <td
                  key={i + "B"}
                  style={{
                    textAlign: "center",
                    paddingBottom: paddingBottom(i),
                  }}
                >
                  {item.split(", ")[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Stack>
    </div>
  )
}
