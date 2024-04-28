<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import ShapeBody from './ShapeBody.vue'
import Face from './Face.vue'

interface Xy {
  x: number
  y: number
}

// Generate a random duration and timing function for the bobbing animation
const randomDuration = Math.random() * 2 + 1 // Random duration between 1s and 3s
const randomTimingFunction = Math.random() > 0.5 ? 'ease-in-out' : 'ease-out' // Random timing function

defineProps({
  shapeType: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: Object as PropType<Xy>,
    required: true,
    default: () => ({ x: 1, y: 1 })
  },
  facePosition: {
    type: Object as PropType<Xy>,
    required: true,
    default: () => ({ x: 0, y: 0 })
  },
  faceRotation: {
    type: Number,
    required: false,
    default: () => 0
  },
  overallPosition: {
    type: Object as PropType<Xy>,
    required: true,
    default: () => ({ x: 0, y: 0 })
  }
})
</script>

<template>
  <div
    class="silly-shape"
    :style="{
      left: overallPosition.x + 'px',
      top: overallPosition.y + 'px',
      animation: `bob ${randomDuration}s ${randomTimingFunction} infinite`
    }"
  >
    <div
      class="silly-shape-body"
      :style="{
        transform: 'scale(' + size.x + ', ' + size.y + ' )'
      }"
    >
      <ShapeBody :shapeType="shapeType" :color="color" />
    </div>
    <div
      class="silly-shape-face"
      :style="{
        left: facePosition.x + 'px',
        top: facePosition.y + 'px',
        transform: 'rotate(' + faceRotation + 'deg)'
      }"
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

@keyframes bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
