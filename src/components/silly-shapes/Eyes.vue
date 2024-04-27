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

<script>
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
      let xPosition = this.randomPosition()
      let yPosition = this.randomPosition()
      for (let i = 0; i <= numberOfFrames; i++) {
        xPosition = this.randomPosition()
        yPosition = this.randomPosition()
        keyframes.push(
          `${(i * 100) / numberOfFrames}% { top: ${yPosition}px; left: ${xPosition}px; }`
        )
      }
      // Ensure the last keyframe's position is very close to the first one for a smoother transition
      keyframes[0] = `0% { top: ${yPosition}px; left: ${xPosition}px; }`

      const animationKeyframes = `@keyframes ${this.animationName} { ${keyframes.join(' ')} }`

      const animationDuration = `${this.getRandomInt(8000, 12000)}ms` // Random duration between 1000ms and 3000ms
      const animationIterationCount = 'infinite'

      const styleElement = document.createElement('style')
      styleElement.textContent = animationKeyframes
      document.head.appendChild(styleElement)

      return `${this.animationName} ${animationDuration} ${animationIterationCount}`
    },
    randomPosition() {
      return Math.floor(Math.random() * 100) + -50 // Random number between 1 and 50
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
/*
@keyframes pupilMove {
  0% {
    top: 0;
    left: 0;
  }
  25% {
    top: 25px;
    left: 25px;
  }
  50% {
    top: 0;
    left: 50px;
  }
  75% {
    top: 25px;
    left: 0;
  }
  100% {
    top: 0;
    left: 0;
  }
}*/
</style>
