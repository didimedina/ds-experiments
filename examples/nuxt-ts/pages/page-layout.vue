<script setup lang="ts">
import * as pageLayout from "@zag-js/page-layout"
import { pageLayoutControls, pageLayoutData } from "@zag-js/shared"
import { normalizeProps, useMachine } from "@zag-js/vue"

const [state, send] = useMachine(pageLayout.machine({ id: "1" }))

const api = computed(() => pageLayout.connect(state.value, send, normalizeProps))
</script>

<template>
  <main className="page-layout">
    <div v-bind="api.getRootProps()">
    </div>
  </main>

  <Toolbar>
    <StateVisualizer :state="state" />
  </Toolbar>
</template>
