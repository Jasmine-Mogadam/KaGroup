<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Face from './components/silly-shapes/Face.vue'

</script>

<template>
  <div class="logo">
    <h1>KaGroup!</h1>
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

  <div id="customizedquestions" style="height: 50vh;width: 100vw;background-color: aliceblue;">
    <div>
      <h4>tross</h4>
      <br>
      <br>
      <div></div>
      <h4>bu</h4>
      <br>
      <br>
      <div></div>
      <br>
      <br>

      <h4>l</h4>
      <div></div>
      <button></button>
    </div>
    <div>
      <h1></h1>
      <div>
        <div style="max-height: 30vh;width: 100vw;overflow-y: scroll;">
          <div style="height: 50vh;width: 100vw;background-color: green;"></div>
        </div>
      </div>
    </div>
    <div></div>
  </div>

  <RouterView />
</template>

<style scoped>

#customizedquestions>div {
  background-color: blue;
  height: 30px;
  width: 300px;
  margin-top: 20px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  text-align: center;
  font-weight: bold;
  margin: 0 auto 2em;
}

.logo h1 {
  margin-top: 100px;
  font-size: 15vw;
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

h1 {
  font-family: 'Fredoka';
  color: var(--off-white);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
