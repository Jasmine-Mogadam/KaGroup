<script setup lang="ts">
import { ShapeTypes, ShapeColors } from './ShapeTypes.ts'
import SillyShape from './SillyShape.vue'
</script>
<script lang="ts">
export default {
  created() {
    window.addEventListener('resize', this.scaleDivToFullWidth)
  },
  destroyed() {
    window.removeEventListener('resize', this.scaleDivToFullWidth)
  },
  mounted() {
    this.scaleDivToFullWidth()
  },
  methods: {
    scaleDivToFullWidth() {
      const scaledDiv = document.getElementById('silly-shape-pattern')
      const scaleX = document.documentElement.clientWidth / scaledDiv.clientWidth
      scaledDiv.style.transform = `scale(${scaleX})`
      scaledDiv.style.transformOrigin = 'top left'
    }
  }
}
</script>

<template>
  <div class="silly-shape-pattern" id="silly-shape-pattern">
    <div style="transform: rotate(20deg)">
      <SillyShape
        :shapeType="ShapeTypes.OCTAGON"
        :color="ShapeColors.BLUE"
        :size="{ x: 2.5, y: 2.5 }"
        :facePosition="{ x: 50, y: -50 }"
        :overallPosition="{ x: 200, y: 150 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(60deg) scaleX(-1)">
      <SillyShape
        :shapeType="ShapeTypes.TRAPEZOID"
        :color="ShapeColors.YELLOW"
        :size="{ x: 3, y: 3 }"
        :facePosition="{ x: -90, y: -100 }"
        :overallPosition="{ x: 270, y: 50 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(25deg)">
      <SillyShape
        :shapeType="ShapeTypes.TRIANGLE"
        :color="ShapeColors.ORANGE"
        :size="{ x: 1.2, y: 1 }"
        :facePosition="{ x: 18, y: -70 }"
        :overallPosition="{ x: 215, y: -50 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(25deg)">
      <SillyShape
        :shapeType="ShapeTypes.HEXAGON"
        :color="ShapeColors.RED"
        :size="{ x: 20, y: 18 }"
        :facePosition="{ x: -20, y: -100 }"
        :overallPosition="{ x: 380, y: 50 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(-10deg)">
      <SillyShape
        :shapeType="ShapeTypes.SQUARE"
        :color="ShapeColors.DARK_BLUE"
        :size="{ x: 1, y: 1 }"
        :facePosition="{ x: 5, y: -60 }"
        :overallPosition="{ x: 300, y: -25 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(20deg)">
      <SillyShape
        :shapeType="ShapeTypes.TRAPEZOID"
        :color="ShapeColors.DARK_BLUE"
        :size="{ x: 1.5, y: 2 }"
        :facePosition="{ x: -20, y: -60 }"
        :overallPosition="{ x: 420, y: 200 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(40deg)">
      <SillyShape
        :shapeType="ShapeTypes.PARALLELOGRAM"
        :color="ShapeColors.YELLOW"
        :size="{ x: 1.5, y: 2 }"
        :facePosition="{ x: 0, y: -90 }"
        :overallPosition="{ x: 405, y: 260 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(70deg)">
      <SillyShape
        :shapeType="ShapeTypes.SQUARE"
        :color="ShapeColors.RED"
        :size="{ x: 1.25, y: 0.6 }"
        :facePosition="{ x: 20, y: -80 }"
        :overallPosition="{ x: 360, y: 200 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(78deg) scaleX(-1)">
      <SillyShape
        :shapeType="ShapeTypes.TRAPEZOID"
        :color="ShapeColors.DARK_BLUE"
        :size="{ x: 1.5, y: 2.8 }"
        :facePosition="{ x: 0, y: 0 }"
        :overallPosition="{ x: 40, y: 260 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(35deg) scaleX(-1)">
      <SillyShape
        :shapeType="ShapeTypes.TRIANGLE"
        :color="ShapeColors.BLUE"
        :size="{ x: 2, y: 1.5 }"
        :facePosition="{ x: 10, y: -50 }"
        :overallPosition="{ x: 0, y: 370 }"
      ></SillyShape>
    </div>
  </div>
</template>

<style scoped>
.silly-shape-pattern {
  height: 667px;
  width: 375px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;

  background: var(--dark-grey);
  -webkit-mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 33%, var(--dark-grey) 65%);
  mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 33%, var(--dark-grey) 65%);
}
</style>
