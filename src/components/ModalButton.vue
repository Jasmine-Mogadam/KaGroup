<script lang="ts">
import { defineComponent } from 'vue'
import Face from './silly-shapes/Face.vue'

export default defineComponent({
  components: {
    Face
  },
  props: {
    name: {
      type: String,
      required: true
    },
    buttonClass: {
      type: String,
      required: false,
      default: () => ''
    },
    faceClass: {
      type: String,
      required: false,
      default: () => ''
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
})
</script>

<template>
  <div v-bind="$attrs">
    <button
      :class="[buttonClass, 'button-container', { 'button-open': showModal }]"
      @click="toggleModal"
    >
      <div :class="[faceClass, 'face-container']">
        <Face></Face>
      </div>
      <h1>{{ name }}</h1>
    </button>
    <div :class="[buttonClass, 'modal', { 'modal-open': showModal }]">
      <button
        class="close-button"
        aria-label="Close alert"
        type="button"
        data-close
        @click="toggleModal"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.button-container {
  display: inline-block;
  z-index: 1;
  position: relative;
  transition: transform 0.5s ease-in-out;
}

.button-container.button-open {
  z-index: 3;
  transform: translateY(-500%);
}

.host-button.button-open {
  transform: translateY(-400%);
}

.modal {
  position: fixed;
  height: 0;
  width: 0;
  left: 25vw;
  top: 20vh;
  transform: translate(-50%, -50%);
  z-index: 0;
  overflow: hidden;
  transition: height 0.5s ease-in-out, width 0.5s ease-in-out, top 0.5s ease-in-out;
}

.modal.modal-open {
  height: 100vh;
  width: 100vw;
  left: 25vw;
  z-index: 2;
  top: 0vh;
}

.close-button {
  display: block;
  background-color: unset;
  position: absolute;
  top: 0.1em;
  right: 0.3em;
  margin: auto;
  height: unset;
  width: unset;
  color: var(--off-white);
  font-size: 5em;
  opacity: 0;
  transition: opacity 0.5s;
}

.modal-open .close-button {
  z-index: 2;
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
