import React from "react"

export default function ContextBottom({ pt }) {
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
          {pt.lddose && <p>Load Dose:</p>}
        </ContextRenderLabels>
        <ContextRenderValues>
          {pt.lddose && <p>{pt.lddose}</p>}
        </ContextRenderValues>
      </ContextRender>
      <ContextRender>
        <ContextRenderLabels>
          {pt.level1 && <p>Level 1:</p>}
          {pt.level1_dt && <p>Date Level 1:</p>}
          {pt.level2 && <p>Level 2:</p>}
          {pt.level2_dt && <p>Date Level 2:</p>}
        </ContextRenderLabels>
        <ContextRenderValues>
          {pt.level1 && <p>{pt.level1}</p>}
          {pt.level1_dt && <p>{pt.level1_dt}</p>}
          {pt.level2 && <p>{pt.level2}</p>}
          {pt.level2_dt && <p>{pt.level2_dt}</p>}
        </ContextRenderValues>
      </ContextRender>
      <ContextRender>
        <ContextRenderLabels>
          {pt.ptKe && <p>Patient</p>}
          {pt.ptKe && <p>Ke:</p>}
          {pt.ptKe && <p>t1/2:</p>}
        </ContextRenderLabels>
        <ContextRenderValues>
          {pt.ptKe && <p>Specific</p>}
          {pt.ptKe && <p>{pt.ptKeRounded}</p>}
          {pt.ptT1_2 && <p>{pt.ptT1_2Rounded + " hr"}</p>}
        </ContextRenderValues>
      </ContextRender>
    </div>
  )
}

function ContextRender({ pt, setPt, children }) {
  return <div style={{ display: "flex", gap: "3px" }}>{children}</div>
}

function ContextRenderLabels({ pt, setPt, children }) {
  return (
    <div style={{ textAlign: "right", fontWeight: "bold" }}>{children}</div>
  )
}

function ContextRenderValues({ pt, setPt, children }) {
  return <div>{children}</div>
}
