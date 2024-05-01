import { WebSocket } from 'ws'
import { WebSocketResponse } from '../websocket/websocket-response.model.ts'
import { EventEmitter } from 'node:events'
import { Endpoints } from '../websocket/endpoints.ts'
import { AnswerQuestionModel } from '../websocket/response-models/answer-question.model.ts'
import { Room } from '../room/room.ts'
import { CustomNameModel } from '../websocket/response-models/custom-name.model.ts'
import { sendAction } from '../websocket/websocket.ts'

export class Host {
  websocket: WebSocket
  room: Room
  name: string
  disconnected: EventEmitter = new EventEmitter()
  answeredQuestion: EventEmitter = new EventEmitter()

  constructor(room: Room, websocket) {
    this.websocket = websocket
    this.room = room
    this.setupClientListeners()
  }

  setupClientListeners() {
    this.websocket.on('close', () => {
      this.disconnected.emit('true')
    })
    this.websocket.on('message', (message: string) => {
      const response = new WebSocketResponse(message)
      switch (response.endpoint) {
        case Endpoints.START_GAME:
          break
        case Endpoints.RECEIVE_RESULTS_HOST:
          break
        default:
          console.log('Error! Unhandled message: ' + response.toString())
      }
    })
  }

  updatePlayers() {
    sendAction(
      Endpoints.ALL_PLAYERS,
      this.room.players.map((p) => p.name),
      this.websocket as any
    )
  }
}
