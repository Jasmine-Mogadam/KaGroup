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
      showCustomizeQuestions: false,
      added: false,
      isMobile: true
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

<template>
  <div class="host-prompt-holder">
    <div class="mobile-bg" v-if="true">
      <img src="../assets/img/hostMobileMock.png" />
    </div>
    <div class="desktop-bg" v-else>
      <img src="../assets/img/hostDesktopMock.png" />
    </div>
    <!--div class="people-per-team">
      currentClient.isMobile
      <label id="people-per-team-label">People per Team</label>
      <div class="quantity">
        <input type="number" min="2" max="10" v-model="peoplePerTeam" />
        <div class="quantity-nav">
          <a href="#" class="quantity-button quantity-up" @click="peoplePerTeam++">+</a>
          <a href="#" class="quantity-button quantity-down" @click="peoplePerTeam--">-</a>
        </div>
      </div>
    </div>
    <div class="checkboxes">
      <div>
        <input id="reveal-grouping-reason-input" v-model="revealGroupingReason" type="checkbox" />
        <label id="reveal-grouping-reason-label">Reveal Grouping Reason</label>
      </div>
      <div>
        <input id="allow-custom-names-input" v-model="allowCustomNames" type="checkbox" />
        <label id="allow-custom-names-label">Allow Custom Names</label>
      </div>
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
    </div-->
    <ModalButton
      :name="'Customize Buttons'"
      :buttonClass="''"
      :faceClass="'left-align'"
      @click="added = !added"
    >
      <div v-if="added">
        <img src="../assets/img/hostCustomDesktopMock.png" />
      </div>
    </ModalButton>
    <div :class="['host-prompt-button-container', { 'button-disabled': roomCodeExistsError }]">
      <button
        class="action-button"
        id="customize-questions-button"
        @click="showCustomizeQuestions = true"
      >
        Customize Questions
      </button>
    </div>
    <div :class="['host-prompt-button-container', { 'button-disabled': roomCodeExistsError }]">
      <button class="action-button" id="prompt-host-button" @click="hostRoom">Create Room</button>
    </div>
  </div>
</template>

<style scoped>
.quantity {
  position: relative;
  width: 100px; /* Adjust width as needed */
}

.quantity input[type='number'] {
  width: 10em;
  -webkit-appearance: textfield; /* Hide default controls in Chrome */
  -moz-appearance: textfield; /* Hide default controls in Firefox */
  appearance: textfield;
  margin: 0;
  text-align: center; /* Center the number */
}

.quantity-nav {
  display: flex;
  justify-content: space-between;
  margin-left: 10em;
}

.quantity-button {
  width: 50%;
  text-align: center;
  background-color: #f0f0f0; /* Example background color */
  color: #333; /* Example text color */
  padding: 5px 0;
  cursor: pointer;
}

.quantity-button:hover {
  background-color: #ddd; /* Example hover color */
}

.checkboxes {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: flex-start;
}

.host-prompt-holder {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: flex-start;
  padding: 1em;
  padding-top: 5em;
  flex-wrap: wrap;
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
.action-button {
  font-size: 2em;
  font-family: 'Fredoka';
  width: 10em;
}
#prompt-host-button {
  color: var(--off-white);
  background-color: var(--dark-blue);
}
#customize-questions-button {
  color: var(--dark-blue);
  background-color: var(--off-white);
}
.button-disabled #prompt-host-button {
  opacity: 0.5;
}
</style>
