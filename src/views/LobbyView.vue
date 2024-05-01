<script setup lang="ts">
import { currentClient } from '../client-websocket/client-websocket'
import MobileSillyShapePattern from '../components/silly-shapes/MobileSillyShapePattern.vue'
import DesktopSillyShapePattern from '../components/silly-shapes/DesktopSillyShapePattern.vue'

const clientWidth = document.documentElement.clientWidth
</script>
<template>
  <div class="lobby">
    <div class="background">
      <div class="mobile-bg" v-if="clientWidth < 1000">
        <MobileSillyShapePattern></MobileSillyShapePattern>
      </div>
      <div class="desktop-bg" v-else>
        <DesktopSillyShapePattern></DesktopSillyShapePattern>
      </div>
    </div>
    <div class="title">
      <h1>Lobby</h1>
    </div>
    <div class="room-code">
      <h3>
        Room Code :
        <div class="code">{{ currentClient.roomCode }}</div>
      </h3>
    </div>
    <div class="students-container" v-if="currentClient.host">
      <ul id="students-list"></ul>
    </div>
    <div class="button-wrapper" v-if="currentClient.host">
      <div class="button-container start-button">
        <button>Start</button>
      </div>
    </div>
    <div class="waiting-message" v-else>Waiting for host to start</div>
  </div>
</template>

<style scoped>
.waiting-message {
  text-align: center;
}
.button-container {
  filter: brightness(100%);
  display: inline-block;
  z-index: 1;
  top: 0;
  transition: all 0.5s;
}

.button-container:hover {
  filter: brightness(85%);
  transition: all 0.5s;
}
.start-button {
  position: fixed;
  top: 50vh;
}
.lobby {
  padding: 1em;
}
.mobile-bg {
  display: none;
}
.title {
  text-align: center;
  font-size: 2.5em;
}
.room-code {
  font-size: 1.5em;
}
.room-code h3 {
  display: flex;
}
.code {
  margin-left: 0.25em;
  color: var(--red);
}
.background {
  filter: brightness(90%);
  position: absolute;
  z-index: 0;
}

.desktop-bg {
  display: none;
}

.start-button button {
  font-family: 'Fredoka';
  font-size: 2em;
  color: var(--off-white);
  background-color: var(--red);
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

/* desktop css */
@media (min-width: 1000px) {
  .desktop-bg {
    display: block;
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

  .start-button button {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
