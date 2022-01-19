import React from "react"
import { navigate } from "gatsby"
import "./Buttons.css"

const Buttons = () => {
  return (
    <div className="flex-around">
      <button className="lp-btn" onClick={() => navigate("/newconsult/")}>
        New Consult
      </button>
      <button className="lp-btn">Post Levels</button>
      <button className="lp-btn">Patient View</button>
      <button className="lp-btn">Patient List</button>
    </div>
  )
}

export default Buttons
