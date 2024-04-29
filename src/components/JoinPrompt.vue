<template>
  <div class="join-prompt-holder">
    <div class="join-prompt-input-container">
      <label id="room-code-label">Room Code</label>
      <input id="room-code-input" v-model="roomCode" type="text" placeholder="   Room Code . . ." />
    </div>
    <div class="join-prompt-button-container">
      <button id="prompt-join-button" @click="joinRoom">Join</button>
    </div>
  </div>
</template>

<script>
import { currentClient } from '@/client-websocket/client-websocket'
export default {
  data() {
    return {
      roomCode: ''
    }
  },
  methods: {
    joinRoom() {
      currentClient.joinRoom(this.roomCode)
    }
  }
}
</script>

<style scoped>
.join-prompt-holder {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  padding: 250px;
  padding-bottom: 50px;
}
.join-prompt-input-container {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: flex-start;
}
.join-prompt-button-container {
  display: flex;
  align-items: center;
}
#room-code-input {
  margin-bottom: 5em;
  height: 5em;
  width: 50em;
  border: none;
  font-size: 1em;
}
#room-code-label {
  margin-bottom: 0.25em;
  font-size: 2em;
}
#prompt-join-button {
  font-size: 2em;
  font-family: 'Fredoka';
  color: var(--off-color);
  background-color: var(--red);
  width: 10em;
}
</style>
