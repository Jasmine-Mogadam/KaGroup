<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import ShapeBody from './ShapeBody.vue'
import Face from './Face.vue'

interface FacePosition {
  x: number
  y: number
}

defineProps({
  shapeType: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  facePosition: {
    type: Object as PropType<FacePosition>,
    required: true,
    default: () => ({ x: 0, y: 0 })
  }
})
</script>

<template>
  <div class="silly-shape">
    <ShapeBody :shapeType="shapeType" :color="color" />
    <div
      class="silly-shape-face"
      :style="{ left: facePosition.x + 'px', top: facePosition.y + 'px' }"
    >
      <Face></Face>
    </div>
  </div>
</template>

<style>
.silly-shape {
  position: absolute;
}
.silly-shape-face {
  position: relative;
}
</style>
