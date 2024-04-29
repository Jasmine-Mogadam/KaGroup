<template>
  <div class="eye-container">
    <div class="left-eye eye">
      <div class="scylera"></div>
      <div class="pupil"></div>
    </div>
    <div class="right-eye eye">
      <div class="scylera"></div>
      <div class="pupil"></div>
    </div>
  </div>
</template>

<script lang="ts">
interface Position {
  x: number
  y: number
}

export default {
  data() {
    return {
      animationName: `pupilMove${Math.random().toString(36).substring(7)}`
    }
  },
  mounted() {
    this.applyAnimationToAllPupils()
  },
  methods: {
    applyAnimationToAllPupils() {
      const animationStyle = this.generateAnimation()
      const pupils = this.$el.querySelectorAll('.pupil')
      pupils.forEach((pupil) => {
        pupil.style.animation = animationStyle
      })
    },
    generateAnimation() {
      const numberOfFrames = this.getRandomInt(5, 10) // Random number of frames between 5 and 10
      const keyframes = []
      let randomPosition: Position = this.randomPosition()
      for (let i = 0; i <= numberOfFrames; i++) {
        randomPosition = this.randomPosition()
        keyframes.push(
          `${(i * 100) / numberOfFrames}% { top: ${randomPosition.y}px; left: ${
            randomPosition.x
          }px; }`
        )
      }
      // Ensure the last keyframe's position is very close to the first one for a smoother transition
      keyframes[0] = `0% { top: ${randomPosition.y}px; left: ${randomPosition.x}px; }`

      const animationKeyframes = `@keyframes ${this.animationName} { ${keyframes.join(' ')} }`

      const animationDuration = `${this.getRandomInt(8000, 12000)}ms` // Random duration between 1000ms and 3000ms
      const animationIterationCount = 'infinite'

      const styleElement = document.createElement('style')
      styleElement.textContent = animationKeyframes
      document.head.appendChild(styleElement)

      return `${this.animationName} ${animationDuration} ${animationIterationCount}`
    },
    randomPosition(): Position {
      let xPosition = Math.floor(Math.random() * 100) + -50 // Random number between -50 and 50
      let yPosition = Math.floor(Math.random() * 100) + -50 // Random number between -50 and 50

      // Check if the positions are too close to (0,0) so they don't look absolutely terrifying
      while (Math.sqrt(xPosition * xPosition + yPosition * yPosition) < 25) {
        xPosition = Math.floor(Math.random() * 125) + -75 // Reroll xPosition
        yPosition = Math.floor(Math.random() * 125) + -75 // Reroll yPosition
      }

      return { x: xPosition, y: yPosition }
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>

<style scoped>
body {
  background-color: grey;
}

.pupil {
  position: absolute;
  top: 0;
  width: 125px;
  height: 125px;
  background-color: black;
  border-radius: 100%;
  /*animation: pupilMove 5s infinite; /* Apply the animation */
}

.scylera {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
}

.eye {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 25px;
  border-radius: 100%;
  overflow: hidden;
}

.eye-container {
  display: flex;
}
</style>
