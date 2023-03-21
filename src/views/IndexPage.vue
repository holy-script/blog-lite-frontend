<script lang="ts">
import axios from 'axios'
import { onMounted } from 'vue'

export default {
  name: 'IndexPage',
  setup() {
    onMounted(async () => {
      try {
        console.log((await axios.get(import.meta.env.VITE_API_URL)).data)
      } catch (error) {
        console.error(error)
      }
    })
  }
}
</script>

<template>
  <main>
    <h1>Hello, world!</h1>
  </main>
</template>
