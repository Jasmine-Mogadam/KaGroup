<script setup lang="ts">
import { ShapeTypes, ShapeColors } from './ShapeTypes.js'
import SillyShape from './SillyShape.vue'
</script>
<script lang="ts">
export default {
  created() {
    window.addEventListener('resize', this.scaleDivToFullSize)
  },
  destroyed() {
    window.removeEventListener('resize', this.scaleDivToFullSize)
  },
  mounted() {
    this.scaleDivToFullSize()
  },
  methods: {
    scaleDivToFullSize() {
      let scaledDiv = document.getElementById('silly-shape-pattern')
      let smallestScale = 1
      const xScale = document.documentElement.clientWidth / scaledDiv.clientWidth
      if (smallestScale > xScale) {
        smallestScale = xScale
      }
      scaledDiv.style.transform = `scale(${smallestScale}) translate(-50%)`
      scaledDiv.style.left = '50%'
      scaledDiv.style.transformOrigin = 'top left'
    }
  }
}
</script>

<template>
  <div class="silly-shape-pattern" id="silly-shape-pattern">
    <div style="transform: rotate(-10deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.OCTAGON"
        :color="ShapeColors.BLUE"
        :size="{ x: 2.5, y: 2.5 }"
        :facePosition="{ x: 0, y: -80 }"
        :faceRotation="15"
        :overallPosition="{ x: 1200, y: 900 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(45deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.TRAPEZOID"
        :color="ShapeColors.YELLOW"
        :size="{ x: 2.5, y: 2.5 }"
        :facePosition="{ x: -100, y: -90 }"
        :faceRotation="-95"
        :overallPosition="{ x: 1750, y: 280 }"
      ></SillyShape>
    </div>
    <div style="transform: scale(0.65) scaleX(-1) rotate(-55deg)">
      <SillyShape
        :shapeType="ShapeTypes.ARROW_BLOCK"
        :color="ShapeColors.ORANGE"
        :size="{ x: 2.5, y: 2 }"
        :facePosition="{ x: 50, y: -50 }"
        :faceRotation="80"
        :overallPosition="{ x: -780, y: -200 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(-8deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.TRAPEZOID"
        :color="ShapeColors.YELLOW"
        :size="{ x: 2, y: 2 }"
        :facePosition="{ x: -50, y: -90 }"
        :overallPosition="{ x: 1500, y: 855 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(-50deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.SQUARE"
        :color="ShapeColors.ORANGE"
        :size="{ x: 0.75, y: 4 }"
        :facePosition="{ x: 20, y: -125 }"
        :faceRotation="90"
        :overallPosition="{ x: 650, y: 870 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(-10deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.PARALLELOGRAM"
        :color="ShapeColors.YELLOW"
        :size="{ x: 2.5, y: 3 }"
        :facePosition="{ x: 30, y: -90 }"
        :faceRotation="50"
        :overallPosition="{ x: 1400, y: 550 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(20deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.TRIANGLE"
        :color="ShapeColors.DARK_BLUE"
        :size="{ x: 1.75, y: 1.5 }"
        :facePosition="{ x: -10, y: -70 }"
        :faceRotation="-50"
        :overallPosition="{ x: 1300, y: 10 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(-75deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.ARROW_BLOCK"
        :color="ShapeColors.RED"
        :size="{ x: 4, y: 1.1 }"
        :facePosition="{ x: 20, y: -35 }"
        :faceRotation="90"
        :overallPosition="{ x: 600, y: 780 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(-140deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.SQUARE"
        :color="ShapeColors.ORANGE"
        :size="{ x: 0.5, y: 2 }"
        :facePosition="{ x: 25, y: -100 }"
        :faceRotation="90"
        :overallPosition="{ x: 0, y: 200 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(-140deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.SQUARE"
        :color="ShapeColors.BLUE"
        :size="{ x: 1.5, y: 1.5 }"
        :facePosition="{ x: 60, y: -70 }"
        :faceRotation="90"
        :overallPosition="{ x: 150, y: 200 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(-135deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.TRAPEZOID"
        :color="ShapeColors.RED"
        :size="{ x: 2, y: 2 }"
        :facePosition="{ x: -40, y: -70 }"
        :faceRotation="120"
        :overallPosition="{ x: 190, y: 450 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(20deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.PENTAGON"
        :color="ShapeColors.BLUE"
        :size="{ x: 20, y: 20 }"
        :facePosition="{ x: 10, y: -150 }"
        :overallPosition="{ x: 1600, y: -120 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(-35deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.SQUARE"
        :color="ShapeColors.DARK_BLUE"
        :size="{ x: 2, y: 2 }"
        :facePosition="{ x: 60, y: -70 }"
        :faceRotation="40"
        :overallPosition="{ x: 500, y: 1300 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(90deg) scale(0.65) scaleX(-1)">
      <SillyShape
        :shapeType="ShapeTypes.HEXAGON"
        :color="ShapeColors.ORANGE"
        :size="{ x: 33, y: 44 }"
        :facePosition="{ x: 60, y: -70 }"
        :faceRotation="110"
        :overallPosition="{ x: -600, y: 300 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(0deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.HEXAGON"
        :color="ShapeColors.RED"
        :size="{ x: 15, y: 40 }"
        :facePosition="{ x: 20, y: -150 }"
        :faceRotation="0"
        :overallPosition="{ x: 100, y: 1100 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(10deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.SQUARE"
        :color="ShapeColors.BLUE"
        :size="{ x: 1.5, y: 2.75 }"
        :facePosition="{ x: 45, y: -180 }"
        :faceRotation="-20"
        :overallPosition="{ x: 120, y: 1200 }"
      ></SillyShape>
    </div>
    <div style="transform: rotate(0deg) scale(0.65)">
      <SillyShape
        :shapeType="ShapeTypes.ARROW_BLOCK"
        :color="ShapeColors.YELLOW"
        :size="{ x: 1.5, y: 2.75 }"
        :facePosition="{ x: 45, y: -180 }"
        :faceRotation="-20"
        :overallPosition="{ x: -300, y: 1200 }"
      ></SillyShape>
    </div>
  </div>
</template>

<style scoped>
.silly-shape-pattern {
  height: 800px;
  width: 1280px;
  /*overflow: hidden;*/
  position: fixed;
  top: 0;
  left: 0;
}

/*body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }*/
</style>
