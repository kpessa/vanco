import React from "react"

import { TextField } from "@fluentui/react/lib/TextField"

import { Patient } from "../../classes/Patient"

export default function LoadResult({ pt, setPt }) {
  return (
    <>
      {pt.lddose && (
        <>
          <br />
          <TextField
            label="Load:"
            value={pt.lddose}
            onChange={e =>
              setPt(new Patient({ ...pt, lddose: +e.target.value }))
            }
            suffix="mg"
          />
          <TextField
            label="Infuse over:"
            value={pt.ldinf}
            onChange={e => setPt(new Patient({ ...pt, ldinf: e.target.value }))}
            suffix="hr"
          />
        </>
      )}

      {!pt.lddose && (
        <>
          <br />
          <TextField label="Load:" value={"No Load Given"} />
        </>
      )}
    </>
  )
}
