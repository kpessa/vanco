import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

import "../styles/newconsult.css"

import Headers from "../components/Headers"
import Context from "../components/Context"
import ContextBottom from "../components/ContextBottom"
import NavigationButtons from "../components/NavigationButtons"

import PatientInfo from "../components/_1_PtInfo"
import KidneyFunction from "../components/_2_KidneyFunction"
import LoadDose from "../components/_3_LoadDose"
import Vd from "../components/_4_Vd"
import CLVanco from "../components/_5_CLVanco"
import MaintenanceDoseTable from "../components/MaintenanceDoseTable"

import { Patient } from "../classes/Patient"
import { Profile } from "../classes/Profile"

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
      <Headers title={"✅ New Consult"} />
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
            <Tab label="4. Vd" {...a11yProps(3)} />
            <Tab label="5. CLVanco" {...a11yProps(4)} />
            <Tab label="6. MD" {...a11yProps(5)} />
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
          <Vd pt={pt} setPt={setPt} />
        </TabPanel>
        <TabPanel page={page} index={4}>
          <CLVanco pt={pt} setPt={setPt} />
        </TabPanel>
        <TabPanel page={page} index={5}>
          <MaintenanceDoseTable pt={pt} setPt={setPt} />
        </TabPanel>
        <NavigationButtons
          page={page}
          setPage={setPage}
          pt={pt}
          setPt={setPt}
        />
      </div>
      <div className="container" style={{ padding: "5px 10px" }}>
        <ContextBottom pt={pt} />
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
