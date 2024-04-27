<template>
  <div class="mouth" v-html="svgContent"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const svgMouthUrls = ['', 'open-smile', 'smile', 'smirk']
const svgName = ref('')
const svgContent = ref('')

onMounted(async () => {
  // Randomly select an SVG from the array
  const randomIndex = Math.floor(Math.random() * svgMouthUrls.length)
  svgName.value = svgMouthUrls[randomIndex]

  if (svgName.value !== '') {
    const response = await fetch(`/src/assets/svg/${svgName.value}.svg`)
    svgContent.value = await response.text()
  }

  // Randomly rotate elements with the class .mouth
  const elements = document.querySelectorAll('.mouth')
  elements.forEach((element) => {
    const rotation = Math.random() * 20 - 10
    element.style.transform = `rotate(${rotation}deg)`
  })
})
</script>

<style scoped>
.mouth {
  position: absolute;
  width: 100px;
  margin-top: 150px;
  margin-left: 100px;
}
</style>
