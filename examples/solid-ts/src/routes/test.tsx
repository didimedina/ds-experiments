import * as test from "@zag-js/test"
import { normalizeProps, useMachine, mergeProps } from "@zag-js/solid"
import { createMemo, createUniqueId } from "solid-js"
import { testControls, testData } from "@zag-js/shared"
import { StateVisualizer } from "../components/state-visualizer"
import { Toolbar } from "../components/toolbar"
import { useControls } from "../hooks/use-controls"

export default function Page() {
  const controls = useControls(testControls)

  const [state, send] = useMachine(test.machine({ id: createUniqueId() }), {
    context: controls.context,
  })

  const api = createMemo(() => test.connect(state, send, normalizeProps))

  return (
    <>
      <main class="test"> 
        <div {...api().getRootProps()}> 
            
        </div>
      </main>

      <Toolbar controls={controls.ui}>
        <StateVisualizer state={state} />
      </Toolbar>
    </>
  )
}
