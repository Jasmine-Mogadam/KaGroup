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
  <div :class="[{ 'modal-button-internal-container': showModal }]" v-bind="$attrs">
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
.modal-button-internal-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.button-container {
  filter: brightness(100%);
  display: inline-block;
  z-index: 1;
  position: relative;
  top: 0;
  transition: all 0.5s;
}

.button-container:hover {
  filter: brightness(85%);
  transition: all 0.5s;
}

.button-open:hover {
  filter: brightness(100%);
}

.modal {
  position: fixed;
  height: 0;
  width: 0;
  left: 0;
  top: 20vh;
  transform: translate(-50%, -50%);
  z-index: 0;
  overflow: hidden;
  transition: height 0.5s ease-in-out, width 0.5s ease-in-out, top 0.5s ease-in-out;
}

.button-container.button-open {
  z-index: 3;
  transform: unset;
  top: 5em;
  transition: top 0.5s;
}

.host-button.button-open {
  transform: translateX(-50%);
  left: 45%;
  top: 11em;
  transition: top 0.5s;
}

.modal.modal-open {
  height: 100%;
  width: 100vw;
  left: 0;
  z-index: 2;
  top: 0vh;
}

.close-button {
  display: block;
  background-color: unset;
  position: absolute;
  top: 1.85em;
  right: 0.3em;
  margin: auto;
  height: unset;
  width: unset;
  color: var(--off-white);
  font-size: 5em;
  opacity: 0;
  transition: all;
}

.close-button:hover {
  color: white;
  transition: all;
}

.modal-open .close-button {
  z-index: 2;
  opacity: 1;
  transition: opacity 0.5s;
  height: unset;
}

.modal-open {
  height: 100%;
  left: 0;
  top: unset;
  transform: unset;
}

/* desktop css */
@media (min-width: 1000px) {
  .button-container.button-open {
    transform: translateY(-600%);
  }
  .host-button.button-open {
    left: 55%;
    top: 15em;
    transform: translateY(-675%) translateX(-50%);
  }
  .modal-button-internal-container {
    width: unset;
    height: unset;
    position: unset;
  }
  .modal.modal-open {
    transform: translate(-50%, -50%);
    height: 100vh;
    width: 100vw;
    left: 25vw;
    z-index: 2;
    top: 0vh;
  }
  .modal {
    left: 25vw;
  }

  .close-button {
    top: 0.1em;
    right: 0.3em;
  }
}
</style>
