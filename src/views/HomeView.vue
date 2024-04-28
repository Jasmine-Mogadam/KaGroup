<script setup lang="ts">
import MobileSillyShapePattern from '../components/silly-shapes/MobileSillyShapePattern.vue'
import Face from '../components/silly-shapes/Face.vue'
</script>

<template>
  <main>
    <div class="background">
      <MobileSillyShapePattern></MobileSillyShapePattern>
    </div>
    <div class="button-positioner">
      <div class="button-wrapper">
        <button class="host-button">
          <div class="left-align face-container"><Face></Face></div>
          <h1>Host</h1>
        </button>
        <button class="join-button">
          <div class="right-align face-container"><Face></Face></div>
          <h1>Join</h1>
        </button>
      </div>
    </div>
    <div class="logo">
      <h1>KaGroup!</h1>
    </div>
  </main>
</template>

<style>
.logo {
  display: block;
  text-align: center;
  font-weight: bold;
  margin: 0 auto 2em;
  position: relative;
  text-shadow: 0px 3px 9px var(--dark-grey);
}

.logo h1 {
  margin-top: 100px;
  font-size: 15vw;
}

h1 {
  font-family: 'Fredoka';
  color: var(--off-white);
}

.button-wrapper {
  display: flex;
  margin: 0 auto 2em;
  flex-direction: column;
}

.button-wrapper button {
  flex: auto;
  margin-bottom: 2em;
  height: 75px;
  width: 75vw;
}

.face-container {
  position: relative;
  top: 8px;
}

.right-align {
  right: 60px;
  display: flex;
  justify-content: flex-end;
}

.host-button {
  background-color: var(--red);
}

.join-button {
  background-color: var(--blue);
}

.button-positioner {
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}

button {
  border: none;
}

.background {
  position: absolute;
  z-index: 0;
}
</style>
