<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Face from './components/silly-shapes/Face.vue'
</script>

<template>
  <main>
    <div class="logo">
      <h1>KaGroup!</h1>
    </div>
  </main>
  <RouterView />
</template>

<style scoped>
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
