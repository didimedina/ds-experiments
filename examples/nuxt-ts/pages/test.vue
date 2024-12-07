<script setup lang="ts">
import * as test from "@zag-js/test"
import { testControls, testData } from "@zag-js/shared"
import { normalizeProps, useMachine } from "@zag-js/vue"

const [state, send] = useMachine(test.machine({ id: "1" }))

const api = computed(() => test.connect(state.value, send, normalizeProps))
</script>

<template>
  <main className="test">
    <div v-bind="api.getRootProps()">
    </div>
  </main>

  <Toolbar>
    <StateVisualizer :state="state" />
  </Toolbar>
</template>
