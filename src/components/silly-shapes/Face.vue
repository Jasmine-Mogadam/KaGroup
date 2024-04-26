<script setup lang="ts">
import Eyes from './Eyes.vue'
import Mouth from './Mouth.vue'
</script>
<template>
  <div class="face-container">
    <Eyes></Eyes>
    <Mouth></Mouth>
  </div>
</template>

<style scoped>
.face-container {
  display: flex;
}
</style>
