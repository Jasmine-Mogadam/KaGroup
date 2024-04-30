<template>
  <div class="host-prompt-holder">
    <div class="people-per-team">
      <label id="room-code-label">People per Team</label>
      <input id="room-code-input" v-model="peoplePerTeam" type="radio" placeholder="4" />
    </div>
    <div class="checkboxes">
      <input id="reveal-grouping-reason-input" v-model="revealGroupingReason" type="checkbox" />
      <label id="reveal-grouping-reason-label">Reveal Grouping Reason</label>
      <input id="allow-custom-names-input" v-model="allowCustomNames" type="checkbox" />
      <label id="allow-custom-names-label">Allow Custom Names</label>
    </div>
    <div class="time-limit">
      <label id="time-limit-label">Time Limit</label>
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
    <ModalButton :name="'Customize Buttons'" :buttonClass="''" :faceClass="'left-align'">
      <JoinPrompt> </JoinPrompt
    ></ModalButton>
    <div :class="['host-prompt-button-container', { 'button-disabled': roomCodeExistsError }]">
      <button id="prompt-host-button" @click="showCustomizeQuestions = true">
        Customize Questions
      </button>
    </div>
    <div :class="['host-prompt-button-container', { 'button-disabled': roomCodeExistsError }]">
      <button id="prompt-host-button" @click="hostRoom">Create Room</button>
    </div>
  </div>
</template>

<script>
import { currentClient } from '@/client-websocket/client-websocket'
import { CodeModel } from '@/client-websocket/response-models/code.model'
import ModalButton from './ModalButton.vue'
export default {
  data() {
    return {
      roomCode: '',
      peoplePerRound: 4,
      roomCodeExistsError: false,
      debounceTimeout: null,
      revealGroupingReason: false,
      allowCustomNames: true,
      showCustomizeQuestions: false
    }
  },
  methods: {
    debounceRoomCodeCheck() {
      clearTimeout(this.debounceTimeout)
      this.debounceTimeout = setTimeout(() => {
        this.checkRoomCodeExists()
      }, 300) // Adjust the delay as needed
    },
    async checkRoomCodeExists() {
      this.roomCodeExistsError = !(await currentClient.clientCheckIfRoomExists(new CodeModel(this.roomCode.toUpperCase())))
    },
    hostRoom() {
      if (!this.roomCodeExistsError) {
        currentClient.clientHostGame()
      }
    }
  }
}
</script>

<style scoped>
.host-prompt-holder {
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
.host-prompt-input-container {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: flex-start;
}
.host-prompt-button-container {
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
  color: var(--dark-blue);
}
#prompt-host-button {
  font-size: 2em;
  font-family: 'Fredoka';
  color: var(--off-color);
  background-color: var(--red);
  width: 10em;
}
.button-disabled #prompt-host-button {
  opacity: 0.5;
}
</style>
