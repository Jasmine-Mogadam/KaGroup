<template>
  <div v-html="svgContent"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const svgMouthUrls = ['', 'open-smile', 'smile', 'smirk']
const svgName = ref('')
const svgContent = ref('')

onMounted(async () => {
  // Assuming you want to randomly select an SVG from the array
  const randomIndex = Math.floor(Math.random() * svgMouthUrls.length)

  svgName.value = svgMouthUrls[randomIndex]
  if (svgName.value !== '') {
    const response = await fetch(`/src/assets/svg/${svgName.value}.svg`)
    svgContent.value = await response.text()
  }
})
</script>
