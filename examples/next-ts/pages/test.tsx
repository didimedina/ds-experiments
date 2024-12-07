import * as test from "@zag-js/test"
import { useMachine, normalizeProps } from "@zag-js/react"
import { testControls, testData } from "@zag-js/shared"
import { useId } from "react"
import { StateVisualizer } from "../components/state-visualizer"
import { Toolbar } from "../components/toolbar"
import { useControls } from "../hooks/use-controls"

export default function Page() {
  const controls = useControls(testControls)

  const [state, send] = useMachine(test.machine({ id: useId() }), {
    context: controls.context,
  })

  const api = test.connect(state, send, normalizeProps)

  return (
    <>
      <main className="test">
        <div {...api.getRootProps()}>
        </div>
      </main>

      <Toolbar controls={controls.ui}>
        <StateVisualizer state={state} />
      </Toolbar>
    </>
  )
}
