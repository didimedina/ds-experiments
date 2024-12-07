import { createMachine, ref } from "@zag-js/core"
import { compact } from "@zag-js/utils"
import type { MachineContext, MachineState, UserDefinedContext } from "./page-layout.types"

export function machine(userContext: UserDefinedContext){ 
  const ctx = compact(userContext)
  return createMachine<MachineContext, MachineState>(
    {
      id: "page-layout",
      initial: "idle",
      context: {
        ...ctx
      },
      states: {
      },
    },
    {
      guards: {
      },
      actions: {
      },
    },
  )
}
