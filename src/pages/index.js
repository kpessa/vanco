import React from "react"
import { Helmet } from "react-helmet"
import "../styles/index.css"

import { Buttons } from "../components/"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vanco AUC</title>
      </Helmet>
      <div className="landingPageContainer">
        <h1 className="landingPageTitle">Vancomycin AUC Calculator</h1>
        <Buttons />
      </div>
    </>
  )
}
