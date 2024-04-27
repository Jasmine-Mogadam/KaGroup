<template>
  <div class="shape-container">
    <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`">
      <polygon :points="getShapePoints(shapeType)" :fill="color" />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ShapeTypes, getShapePoints } from './ShapeTypes.ts' // Adjust the path as necessary

export default defineComponent({
  props: {
    shapeType: {
      type: String,
      required: true,
      validator: (value: string) => Object.values(ShapeTypes).includes(value)
    },
    color: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      size: 100 // Default size of the shape
    }
  },
  methods: {
    getShapePoints // Use the imported function directly
  }
})
</script>

<style scoped>
.shape-container {
  display: inline-block;
}
</style>
