import WebSocket from 'ws'
import { WebSocketResponse } from '../websocket/websocket-response.model.ts'
import { EventEmitter } from 'node:events'
import { Endpoints } from '../websocket/endpoints.ts'
import {
  AnswerQuestionModel,
  QuestionType
} from '../websocket/response-models/answer-question.model.ts'
import { Room } from '../room/room.ts'
import { CustomNameModel } from '../websocket/response-models/custom-name.model.ts'
import { sendAction } from '../websocket/websocket.ts'
import { Question } from '../../src/types/Question.ts'
export class Player {
  websocket: WebSocket
  room: Room
  name: string
  questionIndex: number
  answeredQuestions: AnswerQuestionModel[] = []

  constructor(name, websocket) {
    this.websocket = websocket
    if (name === '') {
      name = generateName()
    }
    this.questionIndex = 0
    this.name = name
    console.log('New player made: ' + name)
    this.setupClientListeners()
  }

  setupClientListeners() {
    this.websocket.on('close', () => {
      // this.disconnectedEmitter.emit('true')
    })
    this.websocket.on('message', (data: string) => {
      const response = new WebSocketResponse(data)
      switch (response.endpoint) {
        case Endpoints.ANSWERED_QUESTION:
          this.answeredQuestions.push(new AnswerQuestionModel(response.body))
          if (this.answeredQuestions.length == this.room.questions.length) {
            sendAction(
              Endpoints.ANSWERED_QUESTION,
              new AnswerQuestionModel({ type: QuestionType.NONE }),
              this.websocket as any
            ) // ToDieu update to match enum
          } else {
            sendAction(
              Endpoints.ANSWERED_QUESTION,
              this.room.questions[this.answeredQuestions.length],
              this.websocket as any
            )
          }
          break
        case Endpoints.RECEIVE_RESULTS_PLAYER:
          break
        default:
          console.log('Error! Unhandled message: ' + response.toString())
      }
    })
  }
}
function generateName(): string {
  let animals: string[] = [
    'wolverine',
    'tiger',
    'boar',
    'panther',
    'ferret',
    'donkey',
    'musk-ox',
    'muskrat',
    'owl',
    'snake',
    'mouse',
    'llama'
  ]
  let adjectives: string[] = [
    'stimulating',
    'stupendous',
    'alive',
    'shocking',
    'gabby',
    'electronic',
    'exuberant',
    'blushing',
    'glistening',
    'ready'
  ]
  return (
    adjectives[getRandomInt(adjectives.length)].toUpperCase() +
    ' ' +
    animals[getRandomInt(animals.length)].toUpperCase()
  )
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}
