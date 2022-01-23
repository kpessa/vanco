import React from "react"
import { Label } from "@fluentui/react/lib/Label"
import { TextField, MaskedTextField } from "@fluentui/react/lib/TextField"
import { mergeStyleSets } from "@fluentui/react"
import { Stack, IStackProps, IStackStyles } from "@fluentui/react/lib/Stack"
import { useId } from "@fluentui/react-hooks"

export default function PostLevels(props) {
  const stackTokens = { childrenGap: 50 }
  const iconProps = { iconName: "Calendar" }
  const stackStyles = { root: { width: 650 } }
  const columnProps = {
    tokens: { childrenGap: 0 },
    styles: { root: { width: 300 } },
  }
  const level1ID = useId("level1")
  const level1DateTimeID = useId("level1DateTime")
  const level2ID = useId("level2")
  const level2DateTimeID = useId("level2DateTime")

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Post Levels</h1>
      <p>This is the post levels page.</p>
      <Stack horizontal tokens={stackTokens} styles={stackStyles}>
        <Stack styles={{ root: { width: 120 } }}>
          <Label style={{ textAlign: "left" }} required hmtlFor={level1ID}>
            Level 1
          </Label>
          <TextField // prettier-ignore
            id={level1ID}
            style={{ textAlign: "center" }}
            suffix="mg/dL"
            ariaLabel="Example text field with .com suffix"
          />
          <Label style={{ textAlign: "left" }} required hmtlFor={level2ID}>
            Level 2
          </Label>
          <TextField // prettier-ignore
            id={level2ID}
            style={{ textAlign: "center" }}
            suffix="mg/dL"
            ariaLabel="Example text field with .com suffix"
          />
        </Stack>

        <Stack styles={{ root: { width: 120 } }}>
          <Label
            style={{ textAlign: "left", width: 140 }}
            required
            hmtlFor={level1DateTimeID}
          >
            Level 1 DateTime
          </Label>
          <MaskedTextField
            id={level1DateTimeID}
            style={{ textAlign: "center" }}
            mask="99/99 99:99"
            title="DateTime"
          />
          <Label
            style={{ textAlign: "left", width: 140 }}
            required
            hmtlFor={level2DateTimeID}
          >
            Level 2 DateTime
          </Label>
          <MaskedTextField
            id={level2DateTimeID}
            style={{ textAlign: "center" }}
            mask="99/99 99:99"
            title="DateTime"
          />
        </Stack>
      </Stack>
    </div>
  )
}
