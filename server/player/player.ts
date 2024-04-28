import { WebSocket } from 'ws'
import { WebSocketResponse } from '../websocket/websocket-response.model'
import { EventEmitter } from 'stream'
import { Endpoints } from '../websocket/endpoints'
import { AnswerQuestionModel } from '../websocket/response-models/answer-question.model'
import { Room } from '../room/room'

export class Player {
  websocket: WebSocket
  room: Room
  name: string
  disconnected: EventEmitter = new EventEmitter()
  answeredQuestion: EventEmitter = new EventEmitter()
  answeredQuestions: AnswerQuestionModel[] = []

  constructor(websocket, name) {
    this.websocket = websocket
    this.name = name

    this.setupClientListeners()
  }

  setupClientListeners() {
    this.websocket.on('close', () => {
      this.disconnected.emit('true')
    })
    this.websocket.on('message', (message: string) => {
      const response = new WebSocketResponse(message)
      switch (response.endpoint) {
        case Endpoints.ANSWERED_QUESTION:
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
    this.answeredQuestion.emit('true')
  }

  handleCustomName()
}
