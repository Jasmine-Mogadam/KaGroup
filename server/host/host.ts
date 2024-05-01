import { WebSocket } from 'ws'
import { WebSocketResponse } from '../websocket/websocket-response.model.ts'
import { EventEmitter } from 'node:events'
import { Endpoints } from '../websocket/endpoints.ts'
import { AnswerQuestionModel } from '../websocket/response-models/answer-question.model.ts'
import { Room } from '../room/room.ts'
import { CustomNameModel } from '../websocket/response-models/custom-name.model.ts'
import { sendAction } from '../websocket/websocket.ts'
import { send } from 'node:process'

export class Host {
  websocket: WebSocket
  room: Room
  answeredQuestion: EventEmitter = new EventEmitter()

  constructor(room:Room, websocket) {
    this.websocket = websocket
    this.room = room
    this.setupClientListeners()
  }

  setupClientListeners() {
    this.websocket.on('message', (message: string) => {
      const response = new WebSocketResponse(message)
      switch (response.endpoint) {
        case Endpoints.START_GAME_HOST:
          for (let i = 0; i < this.room.players.length; i++) {
            sendAction(Endpoints.START_GAME_PLAYER,{},this.room.players[i].websocket);
          }
          break
        default:
          console.log('Error! Unhandled message: ' + response.toString())
      }
    })
  }
}
