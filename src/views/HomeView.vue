<script setup lang="ts">
import { ref } from 'vue'
import MobileSillyShapePattern from '../components/silly-shapes/MobileSillyShapePattern.vue'
import DesktopSillyShapePattern from '../components/silly-shapes/DesktopSillyShapePattern.vue'
import ModalButton from '../components/ModalButton.vue'
import JoinPrompt from '../components/JoinPrompt.vue'
import HostPrompt from '../components/HostPrompt.vue'

const clientWidth = document.documentElement.clientWidth
</script>

<template>
  <main>
    <div class="background">
      <div class="mobile-bg" v-if="clientWidth < 1000">
        <MobileSillyShapePattern></MobileSillyShapePattern>
      </div>
      <div class="desktop-bg" v-else>
        <DesktopSillyShapePattern></DesktopSillyShapePattern>
      </div>
    </div>
    <div class="content-container">
      <div class="logo">
        <h1>KaGroup!</h1>
      </div>
      <div class="button-positioner">
        <div class="button-wrapper">
          <ModalButton :name="'Host'" :buttonClass="'host-button'" :faceClass="'left-align'">
            <HostPrompt> </HostPrompt>
          </ModalButton>
          <ModalButton :name="'Join'" :buttonClass="'join-button'" :faceClass="'right-align'">
            <JoinPrompt> </JoinPrompt
          ></ModalButton>
        </div>
      </div>
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
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
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
  top: 0;
  left: 50%;
}

.desktop-bg {
  display: none;
}

/* desktop css */
@media (min-width: 1000px) {
  .content-container {
    left: 50%;
    position: fixed;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
  }

  .desktop-bg {
    display: block;
  }

  .mobile-bg {
    display: none;
  }

  .button-wrapper {
    transform: scale(0.5);
  }

  .button-wrapper button {
    width: 50vw;
  }

  .button-positioner {
    bottom: unset;
    left: unset;
    transform: unset;
    position: relative;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    bottom: unset;
    left: unset;
    transform: unset;
    margin: unset;
  }

  .logo h1 {
    margin-top: unset;
    font-size: 50px;
    text-shadow: none;
    margin: unset;
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
