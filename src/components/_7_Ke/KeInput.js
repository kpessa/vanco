import React from "react"
import moment from "moment"

import { Stack } from "@fluentui/react/lib/Stack"
import { TextField, MaskedTextField } from "@fluentui/react/lib/TextField"
import { PrimaryButton } from "@fluentui/react"

import { Patient } from "../../classes/Patient"

function Button({ pt, setPt }) {
  let disabledBoolean = !Boolean(
    pt.level1 && pt.level1_dt && pt.level2 && pt.level2_dt
  )

  function handleClick(e) {
    let time1 = moment(pt.level1_dt, "MM/DD HH:mm")
    let time2 = moment(pt.level2_dt, "MM/DD HH:mm")
    let timeDiff = time2.diff(time1, "minutes") / 60
    let ptKe = Math.log(+pt.level1 / +pt.level2) / timeDiff
    let ptT1_2 = 0.693 / ptKe
    console.log("ptKe:", ptKe)
    console.log("t1/2:", ptT1_2)
    setPt(new Patient({ ...pt, ptKe: ptKe, ptT1_2: ptT1_2 }))
  }

  return (
    <PrimaryButton
      disabled={disabledBoolean}
      text="Calculate Ke"
      onClick={handleClick}
    />
  )
}

export default function KeInput({ pt, setPt }) {
  return (
    <>
      <Stack>
        <Stack
          horizontal
          tokens={{ childrenGap: 15 }}

          // styles={{ root: { width: 400 } }}
        >
          <TextField
            label="Level 1"
            style={{ textAlign: "center" }}
            suffix="mg/dL"
            value={pt.level1}
            onChange={e =>
              setPt(new Patient({ ...pt, level1: e.target.value }))
            }
          />
          <MaskedTextField
            label="Level 1 DateTime"
            style={{ textAlign: "center" }}
            mask="99/99 99:99"
            title="DateTime"
            iconProps={{ iconName: "Calendar" }}
            value={pt.level1_dt_input}
            onChange={e =>
              setPt(new Patient({ ...pt, level1_dt_input: e.target.value }))
            }
            {...(!pt.level1_dt && {
              errorMessage: "Enter a valid DateTime",
            })}
          />
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 15 }}>
          <TextField // prettier-ignore
            label="Level 2"
            style={{ textAlign: "center" }}
            suffix="mg/dL"
            value={pt.level2}
            onChange={e =>
              setPt(new Patient({ ...pt, level2: e.target.value }))
            }
          />
          <MaskedTextField
            label="Level 2 DateTime"
            style={{ textAlign: "center" }}
            mask="99/99 99:99"
            title="DateTime"
            iconProps={{ iconName: "Calendar" }}
            value={pt.level2_dt_input}
            onChange={e =>
              setPt(new Patient({ ...pt, level2_dt_input: e.target.value }))
            }
            {...(!pt.level2_dt && {
              errorMessage: "Enter a valid DateTime",
            })}
          />
        </Stack>
        <br />
        <Button pt={pt} setPt={setPt} />
      </Stack>
    </>
  )
}
