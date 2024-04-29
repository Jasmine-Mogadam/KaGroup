import { Endpoints } from './endpoints.js'
import { CodeModel } from './response-models/code.model.js'
import { WebSocketResponse } from './websocket-response.model.js'
import { getAsyncMessage, sendAction, socket } from './websocket.ts'
export const UNSET: string = 'UNSET'

window.onload = function () {
  socket.onerror = function (error) {
    console.log('WebSocket Error: ' + error)
  }

  // Show a disconnected message when the WebSocket is closed.
  socket.onclose = function (event) {
    document.getElementById('socket-disconnected')?.classList.remove('hide')
  }
}

class Client {
  public socket: WebSocket
  public socketConnected: boolean = false
  public host: boolean = false
  public name: string = UNSET
  public room: string = UNSET

  constructor() {
    this.socket = socket
    this.handleSocketMessages()
  }

  init() {}

  handleSocketMessages() {
    socket.onmessage = function (event: any) {
      const response = new WebSocketResponse(event.data);
      switch (response.endpoint) {
        case Endpoints.CREATE_ROOM:
          // Emit an event that affects the frontend
        case Endpoints.GAME_EXISTS:
          // Emit an event that affects the frontend
        case Endpoints.PLAYER_EXISTS:
          // Emit an event that affects the frontend
        case Endpoints.JOIN_ROOM:
          // Emit an event that affects the frontend
        default:
          console.log('unidentified action!')
          return false;
      }
    }.bind(this)
  }

  clientHostGame() {
    this.host = true
    // TODO call server with game settings
    // Get wait for response back from server for success/failure and handle it
    sendAction(Endpoints.CREATE_ROOM);
  }

  clientJoinGame(code:CodeModel) {
    this.host = false
    // TODO call server with room code to get information
    // Get wait for response back from server for success/failure and handle it
    sendAction(Endpoints.JOIN_ROOM,code);
  }

  clientCheckIfRoomExists(code:CodeModel) {
    sendAction(Endpoints.GAME_EXISTS,code);
  }
}

export const currentClient = new Client()
