<script lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import axios from 'axios'
import { onMounted } from 'vue'

export default {
  components: {
    TheWelcome
  },
  setup() {
    onMounted(async () => {
      console.log((await axios.get(import.meta.env.VITE_API_URL)).data)
    })
  }
}
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
