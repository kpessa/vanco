import React from "react"
import { Helmet } from "react-helmet"

export default function Headers({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Helmet>
  )
}
