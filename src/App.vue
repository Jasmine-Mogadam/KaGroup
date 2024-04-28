<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Face from './components/silly-shapes/Face.vue'
</script>

<template>
  <!--div id="customizedquestions" style="height: 50vh; width: 100vw; background-color: aliceblue">
    <div>
      <h4>tross</h4>
      <br />
      <br />
      <div></div>
      <h4>bu</h4>
      <br />
      <br />
      <div></div>
      <br />
      <br />

      <h4>l</h4>
      <div></div>
      <button></button>
    </div>
    <div>
      <h1></h1>
      <div>
        <div style="max-height: 30vh; width: 100vw; overflow-y: scroll">
          <div style="height: 50vh; width: 100vw; background-color: green"></div>
        </div>
      </div>
    </div>
    <div></div>
  </div-->

  <RouterView />
</template>

<style scoped>
#customizedquestions > div {
  background-color: blue;
  height: 30px;
  width: 300px;
  margin-top: 20px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
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
