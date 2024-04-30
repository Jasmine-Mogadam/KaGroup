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
  public roomcode: string = UNSET

  constructor() {
    this.socket = socket
    this.handleSocketMessages()
    window.onload = () => {
      this.isMobile = document.documentElement.clientWidth < 1000
    }
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
  async clientHostGame() {
    this.host = true
    // TODO call server with game settings
    // Get wait for response back from server for success/failure and handle it
    this.roomcode = (await getAsyncMessage(Endpoints.CREATE_ROOM));
  }

 async clientJoinGame(code:CodeModel) {
    this.host = false
    // TODO call server with room code to get information
    // Get wait for response back from server for success/failure and handle it
    console.log("in the night");
    this.roomcode = (await getAsyncMessage(Endpoints.JOIN_ROOM,code)).body;
  }

  async clientCheckIfRoomExists(code:CodeModel) {
    console.log("matt: "+code.code);
    return (await getAsyncMessage(Endpoints.GAME_EXISTS,code)).body; // race conditions ftw
  }

  async allPlayersInRoom() {
    console.log("matt: "+code.code);
    return (await getAsyncMessage(Endpoints.GAME_EXISTS,code)).body; // race conditions ftw
  }
}

export const currentClient = new Client()
