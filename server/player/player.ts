import { WebSocket } from 'ws'
import { WebSocketResponse } from '../websocket/websocket-response.model.ts'
import { EventEmitter } from 'node:events'
import { Endpoints } from '../websocket/endpoints.ts'
import { AnswerQuestionModel } from '../websocket/response-models/answer-question.model.ts'
import { Room } from '../room/room.ts'
import { CustomNameModel } from '../websocket/response-models/custom-name.model.ts'

export class Player {
  websocket: WebSocket
  room: Room
  name: string
  disconnectedEmitter: EventEmitter = new EventEmitter()
  answeredQuestionEmitter: EventEmitter = new EventEmitter()
  customNameEmitter: EventEmitter = new EventEmitter()
  answeredQuestions: AnswerQuestionModel[] = []

  constructor(name,websocket) {
    this.websocket = websocket
    if (name === "") {
      name = generateName();
    }
    this.name = name
    this.setupClientListeners()
  }

  setupClientListeners() {
    this.websocket.on('close', () => {
      this.disconnectedEmitter.emit('true')
    })
    this.websocket.on('message', (message: string) => {
      const response = new WebSocketResponse(message)
      switch (response.endpoint) {
        case Endpoints.CUSTOM_NAME:
          this.handleCustomName(new CustomNameModel(response.body)) //Implement this, should assign the name to this player and emit an event that name was changed
          break
        case Endpoints.ANSWERED_QUESTION:
          this.handleAnsweredQuestion(new AnswerQuestionModel(response.body))
          break
        default:
          console.log('Error! Unhandled message: ' + response.toString())
      }
    })
  }

  handleAnsweredQuestion(answeredQuestion: AnswerQuestionModel) {
    this.answeredQuestions.push(answeredQuestion)
    this.answeredQuestionEmitter.emit('true')
  }

  handleCustomName(CustomName: CustomNameModel) {
    this.name = CustomNameModel.name
    this.customNameEmitter.emit('true')
  }
}
function generateName(): string {
  let animals:string[] = ["wolverine", "tiger", "boar", "panther", "ferret","donkey","musk-ox","muskrat","owl","snake","mouse","llama"];
  let adjectives:string[] = ["stimulating",
  "stupendous",
  "alive",
  "shocking",
  "gabby",
  "electronic",
  "exuberant",
  "blushing",
  "glistening",
  "ready"]
  return adjectives[getRandomInt(adjectives.length)].toUpperCase()+" "+animals[getRandomInt(animals.length)].toUpperCase();
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}
