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

<style scoped>
body {
  background-color: grey;
}

.pupil {
  position: absolute;
  top: 0;
  width: 75px;
  height: 75px;
  background-color: black;
  border-radius: 100%;
  animation: pupilMove 5s infinite; /* Apply the animation */
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
  transform: ;
}

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
}
</style>
