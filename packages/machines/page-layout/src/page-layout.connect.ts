import type { NormalizeProps, PropTypes } from "@zag-js/types"
import type { State, Send } from "./page-layout.types"
import { parts } from "./page-layout.anatomy"
import { dom } from "./page-layout.dom"

export function connect<T extends PropTypes>(state: State, send: Send, normalize: NormalizeProps<T>) {
  return {
    getRootProps() {
      return normalize.element({})
    },
  }
}
