<script setup lang="ts">
import { ShapeTypes, ShapeColors } from './ShapeTypes.ts'
import SillyShape from './SillyShape.vue'
</script>

<template>
  <div class="silly-shape-pattern">
    <SillyShape
      :shapeType="ShapeTypes.HEXAGON"
      :color="ShapeColors.BLUE"
      :facePostion="{ x: 10, y: 10 }"
    ></SillyShape>
  </div>
</template>
