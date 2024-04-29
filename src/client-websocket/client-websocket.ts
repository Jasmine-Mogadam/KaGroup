import { socket } from './websocket.ts'
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
  public gameDetails: any = {};

  constructor() {
    this.socket = socket
    this.handleSocketMessages()
  }

  init() {}

  handleSocketMessages() {
    socket.onmessage = function (event: any) {
      const message = JSON.parse(event.data.toString())
      const action = message.action
      const body = message.body

      switch (action) {
        case 'exampleAction':
          console.log(body)
          break
        default:
          console.log('unidentified action!')
      }

      console.log(message)
    }.bind(this)
  }

  clientHostGame() {
    this.host = true
    // TODO call server with game settings
    // Get wait for response back from server for success/failure and handle it
  }

  clientJoinGame() {
    this.host = false
    // TODO call server with room code to get information
    // Get wait for response back from server for success/failure and handle it
  }
}

export const currentClient = new Client()
