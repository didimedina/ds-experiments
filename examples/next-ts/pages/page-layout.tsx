import * as pageLayout from "@zag-js/page-layout"
import { useMachine, normalizeProps } from "@zag-js/react"
import { pageLayoutControls, pageLayoutData } from "@zag-js/shared"
import { useId } from "react"
import { StateVisualizer } from "../components/state-visualizer"
import { Toolbar } from "../components/toolbar"
import { useControls } from "../hooks/use-controls"

export default function Page() {
  const controls = useControls(pageLayoutControls)

  const [state, send] = useMachine(pageLayout.machine({ id: useId() }), {
    context: controls.context,
  })

  const api = pageLayout.connect(state, send, normalizeProps)

  return (
    <>
      <main className="page-layout">
        <div {...api.getRootProps()}>
        </div>
      </main>

      <Toolbar controls={controls.ui}>
        <StateVisualizer state={state} />
      </Toolbar>
    </>
  )
}
