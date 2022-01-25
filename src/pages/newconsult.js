import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { grey } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

import "../styles/newconsult.css"

import { Patient } from "../classes/Patient"
import { Profile } from "../classes/Profile"

import Context from "../components/Context"
import { NavigationButtons, MaintenanceDoseTable } from "../components/"

import PatientInfo from "../components/PatientInfo"
import KidneyFunction from "../components/KidneyFunction"
import LoadDose from "../components/LoadDose"

export default function NewConsult() {
  const initialProfile = {
    dosing: 25,
    max_dose: 2000,
  }

  const [pt, setPt] = useState(new Patient({}))
  const [pr, setPr] = useState(new Profile(initialProfile))
  const [page, setPage] = useState(0)

  useEffect(() => {
    console.log("Patient: ", pt)
    console.log("Profile: ", pr)
  })

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    }
  }

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
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={page}
            onChange={(e, newPage) => setPage(newPage)}
            aria-label="tabs navigation"
            indicatorColor="primary"
          >
            <Tab label="1. PtInfo" {...a11yProps(0)} />
            <Tab label="2. Kidney Function" {...a11yProps(1)} />
            <Tab label="3. LD" {...a11yProps(2)} />
            <Tab label="6. MD" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel page={page} index={0}>
          <PatientInfo pt={pt} setPt={setPt} />
        </TabPanel>
        <TabPanel page={page} index={1}>
          <KidneyFunction pt={pt} setPt={setPt} />
        </TabPanel>
        <TabPanel page={page} index={2}>
          <LoadDose pt={pt} setPt={setPt} pr={pr} setPr={setPr} />
        </TabPanel>
        <TabPanel page={page} index={3}>
          <MaintenanceDoseTable pt={pt} setPt={setPt} />
        </TabPanel>
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

function TabPanel(props) {
  const { children, page, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={page !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {page === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  )
}
