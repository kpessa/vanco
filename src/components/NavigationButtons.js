import React from "react"

const NavigationButtons = ({ pt, setPt, page, setPage }) => {
  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => setPage(page - 1)}
        {...(page === 0 ? { disabled: true } : {})}
      >
        {"<<"} Back
      </button>
      <button
        onClick={() => setPage(page + 1)}
        {...(page === 1 ? { disabled: true } : {})}
      >
        Next {">>"}
      </button>
    </div>
  )
}

export default NavigationButtons
