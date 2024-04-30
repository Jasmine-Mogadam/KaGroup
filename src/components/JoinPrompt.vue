<template>
  <div class="join-prompt-holder">
    <div class="join-prompt-input-container">
      <label id="room-code-label">Room Code</label>
      <input
        id="room-code-input"
        v-model="roomCode"
        type="text"
        placeholder="Room Code . . ."
        @input="debounceRoomCodeCheck"
      />
      <span v-if="roomCodeExistsError && debounceTimeout" id="roomCodeValidationError"
        >Room code does not exist.</span
      >
    </div>
    <div
      :class="[
        'join-prompt-button-container',
        disabledClass,
        { 'button-disabled': roomCodeExistsError }
      ]"
    >
      <button id="prompt-join-button" @click="joinRoom">Join</button>
    </div>
  </div>
</template>

<script>
import { currentClient } from '@/client-websocket/client-websocket'
import { CodeModel } from '@/client-websocket/response-models/code.model'
export default {
  data() {
    return {
      roomCode: '',
      roomCodeExistsError: false,
      debounceTimeout: null,
      disabledClass: 'button-disabled'
    }
  },
  methods: {
    debounceRoomCodeCheck() {
      clearTimeout(this.debounceTimeout)
      this.debounceTimeout = setTimeout(() => {
        this.checkRoomCodeExists()
        this.disabledClass = ''
      }, 300) // Adjust the delay as needed
    },
    async checkRoomCodeExists() {
      this.roomCodeExistsError = !(await currentClient.clientCheckIfRoomExists(new CodeModel({code:this.roomCode.toUpperCase()})))
    },
    joinRoom() {
      if (!this.roomCodeExistsError) {
        currentClient.clientJoinGame(new CodeModel({code:this.roomCode.toUpperCase()})) // deliberately un-awaited async
      }
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
#room-code-label {
  margin-bottom: 0.25em;
  font-size: 2em;
}
#room-code-input {
  font-family: 'Fredoka';
  margin-bottom: 5em;
  height: 2em;
  width: 15em;
  border: none;
  font-size: 1.5em;
  text-indent: 0.5em;
  text-transform: uppercase;
}
#roomCodeValidationError {
  position: relative;
  top: -7.5em;
  height: 0;
  color: var(--red);
}
#prompt-join-button {
  font-size: 2em;
  font-family: 'Fredoka';
  color: var(--off-color);
  background-color: var(--red);
  width: 10em;
}
.button-disabled #prompt-join-button {
  opacity: 0.5;
}
</style>
