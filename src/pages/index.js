import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../styles/index.css"

import { Patient } from "../utils"

import Context from "../components/Context"
import {
  PatientInfo,
  NavigationButtons,
  MaintenanceDoseTable,
} from "../components/"

export default function Home() {
  const [pt, setPt] = useState(new Patient({}))
  const [page, setPage] = useState(0)

  useEffect(() => {
    console.log(pt)
  }, [pt])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vanco AUC</title>
      </Helmet>
      <div className="container" style={{ padding: "5px 10px" }}>
        <Context pt={pt} />
      </div>
      <div className="container" style={{ background: "white" }}>
        {page === 0 && <PatientInfo pt={pt} setPt={setPt} />}
        {page === 1 && <MaintenanceDoseTable pt={pt} setPt={setPt} />}
        <NavigationButtons
          page={page}
          setPage={setPage}
          pt={pt}
          setPt={setPt}
        />
      </div>
    </>
  )
}
