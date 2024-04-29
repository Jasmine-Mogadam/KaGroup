import { WebSocket } from 'ws'
import { WebSocketResponse } from '../websocket/websocket-response.model'
import { EventEmitter } from 'stream'
import { Endpoints } from '../websocket/endpoints'
import { AnswerQuestionModel } from '../websocket/response-models/answer-question.model'
import { Room } from '../room/room'
import { CustomNameModel } from '../websocket/response-models/custom-name.model'

export class Player {
  websocket: WebSocket
  room: Room
  name: string
  disconnectedEmitter: EventEmitter = new EventEmitter()
  answeredQuestionEmitter: EventEmitter = new EventEmitter()
  customNameEmitter: EventEmitter = new EventEmitter()
  answeredQuestions: AnswerQuestionModel[] = []

  constructor(websocket) {
    this.websocket = websocket

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
