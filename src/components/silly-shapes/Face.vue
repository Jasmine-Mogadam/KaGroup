<script setup lang="ts">
import Eyes from './Eyes.vue'
import Mouth from './Mouth.vue'
</script>
<template>
  <div class="face-poser">
    <div class="face-container">
      <Eyes></Eyes>
      <Mouth></Mouth>
    </div>
  </div>
</template>

<style scoped>
.face-container {
  display: flex;
  width: 300px;
  height: 300px;
  position: absolute;
}
.face-poser {
  transform: scale(0.2);
  transform-origin: top left;
}
</style>
