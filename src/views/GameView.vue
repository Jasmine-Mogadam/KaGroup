<script lang="ts">
import { currentClient } from '../client-websocket/client-websocket'
import { AnswerQuestionModel } from '../client-websocket/response-models/answer-question.model'

let currentQuestionAnswer: AnswerQuestionModel = undefined //ref(currentClient.)
export default {
  data() {
    return {
      currentQuestionAnswer: {
        question: '',
        type: '',
        answer: '',
        options: []
      }
    }
  },
  methods: {
    submitAnswer() {
      const answerQuestionModel = new AnswerQuestionModel({
        question: this.question,
        type: this.type,
        answer: this.answer
      })
      currentClient.init() //send answerQuestionModel
    }
  },
  setup(props, ctx) {}
}
</script>
<template>
  <div class="question">
    {{ currentQuestionAnswer.question }}
  </div>
  <div class="input">
    <div v-if="currentQuestionAnswer.type === QuestionType.TEXT">
      <input
        type="text"
        v-model="currentQuestionAnswer.answer"
        placeholder="Enter your answer here"
      />
    </div>
    <div v-else-if="currentQuestionAnswer.type === QuestionType.MULTIPLE_CHOICE">
      <div v-for="(option, index) in currentQuestionAnswer.options" :key="index">
        <input
          type="radio"
          :id="'choice-' + index"
          :value="option.value"
          v-model="currentQuestionAnswer.answer"
        />
        <label :for="'choice-' + index">{{ option.label }}</label>
      </div>
    </div>
    <div v-else-if="currentQuestionAnswer.type === QuestionType.NUMERIC">
      <input type="number" v-model="currentQuestionAnswer.answer" placeholder="Enter a number" />
    </div>
    <div v-else-if="currentQuestionAnswer.type === QuestionType.NONE">
      <!-- Default content if none of the above conditions are met -->
      <p>No specific input type defined.</p>
    </div>
  </div>
  <div class="submit-button">
    <button @click="submitAnswer">Submit</button>
  </div>
</template>

<style scoped>
/* Base styles for mobile */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.question,
.input,
.submit-button {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.input div {
  margin-bottom: 10px;
}

.submit-button button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

/* Media queries for desktop */
@media (min-width: 1000px) {
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Full viewport height */
  }

  .question {
    width: 80%; /* Adjust width for better readability */
    text-align: center;
  }

  .input {
    width: 80%; /* Adjust width for better readability */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .submit-button {
    width: 80%; /* Adjust width for better readability */
    display: flex;
    justify-content: center;
  }
}
</style>
