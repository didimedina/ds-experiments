import * as pageLayout from "@zag-js/page-layout"
import { normalizeProps, useMachine, mergeProps } from "@zag-js/solid"
import { createMemo, createUniqueId } from "solid-js"
import { pageLayoutControls, pageLayoutData } from "@zag-js/shared"
import { StateVisualizer } from "../components/state-visualizer"
import { Toolbar } from "../components/toolbar"
import { useControls } from "../hooks/use-controls"

export default function Page() {
  const controls = useControls(pageLayoutControls)

  const [state, send] = useMachine(pageLayout.machine({ id: createUniqueId() }), {
    context: controls.context,
  })

  const api = createMemo(() => pageLayout.connect(state, send, normalizeProps))

  return (
    <>
      <main class="page-layout"> 
        <div {...api().getRootProps()}> 
            
        </div>
      </main>

      <Toolbar controls={controls.ui}>
        <StateVisualizer state={state} />
      </Toolbar>
    </>
  )
}
