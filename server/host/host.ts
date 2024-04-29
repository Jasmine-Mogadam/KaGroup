import { WebSocket } from 'ws'
import { WebSocketResponse } from '../websocket/websocket-response.model'
import { EventEmitter } from 'stream'
import { Endpoints } from '../websocket/endpoints'
import { Room } from '../room/room'
import { CustomNameModel } from '../websocket/response-models/custom-name.model'

export class Host {
  websocket: WebSocket
  room: Room
  name: string
  disconnected: EventEmitter = new EventEmitter()
  answeredQuestion: EventEmitter = new EventEmitter()

  constructor(room:Room, websocket) {
    this.websocket = websocket
    this.room = room
    this.setupClientListeners()
  }

  setupClientListeners() {
    // this.websocket.on('close', () => {
    //   this.disconnected.emit('true')
    // })
    // this.websocket.on('message', (message: string) => {
    //   const response = new WebSocketResponse(message)
    //   switch (response.endpoint) {
    //     case Endpoints.CUSTOM_NAME:
    //       this.handleCustomName(new CustomNameModel(response.body)) //Implement this, should assign the name to this Host and emit an event that name was changed
    //       break
    //     case Endpoints.ANSWERED_QUESTION:
    //       this.handleAnsweredQuestion(new AnswerQuestionModel(response.body))
    //       break
    //     default:
    //       console.log('Error! Unhandled message: ' + response.toString())
    //   }
    // })
  }

  // handleAnsweredQuestion(answeredQuestion: AnswerQuestionModel) {
  //   this.answeredQuestions.push(answeredQuestion)
  //   this.answeredQuestion.emit('true')
  // }

  // handleCustomName(CustomName: CustomNameModel) {
  //   this.name = CustomNameModel.name
  //   this.answeredQuestion.emit('true')
  // }
}
