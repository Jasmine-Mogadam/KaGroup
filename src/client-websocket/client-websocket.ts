import { Endpoints } from './endpoints.js'
import { CodeModel } from './response-models/code.model.js'
import type { CustomNameModel } from './response-models/custom-name.model.js'
import { WebSocketResponse } from './websocket-response.model.js'
import { getAsyncMessage, sendAction, socket } from './websocket.ts'
import router from '../router/index.js'
import type { AnswerQuestionModel } from './response-models/answer-question.model.js'
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
  public roomCode: string = UNSET
  public isMobile: boolean = true

  constructor() {
    this.socket = socket
    this.handleSocketMessages()
  }

  init() {}

  handleSocketMessages() {
    socket.onmessage = function (event: any) {
      const response = new WebSocketResponse(event.data)
      switch (response.endpoint) {
        case Endpoints.CREATE_ROOM:
        // Emit an event that affects the frontend
        case Endpoints.GAME_EXISTS:
        // Emit an event that affects the frontend
        case Endpoints.PLAYER_EXISTS:
        // Emit an event that affects the frontend
        case Endpoints.JOIN_ROOM:
        // Emit an event that affects the frontend
        case Endpoints.ALL_PLAYERS:
          this.handleAllPlayers(response.body)
        default:
          console.log('unidentified action!')
          return false
      }
    }.bind(this)
  }

  handleAllPlayers(players: string[]) {
    var studentList = document.getElementById('students-list')
    if (this.host && studentList) {
      // Clear the list of any previous information
      studentList.innerHTML = '' // Using innerHTML to clear the list
      // Loop through the array of student names
      for (var i = 0; i < players.length; i++) {
        // Create a new li element
        var newLI = document.createElement('li')

        // Create a text node with the student name
        var newContent = document.createTextNode(players[i])

        // Append the text node to the li element
        newLI.appendChild(newContent)

        // Append the li element to the unordered list
        studentList.appendChild(newLI)
      }
    }
  }

  async clientHostGame() {
    this.host = true
    // TODO call server with game settings
    // Get wait for response back from server for success/failure and handle it
    this.roomCode = (await getAsyncMessage(Endpoints.CREATE_ROOM)).body
    router.push('/lobby')
  }

  async clientJoinGame(code: CodeModel, name: CustomNameModel) {
    this.host = false
    // TODO call server with room code to get information
    // Get wait for response back from server for success/failure and handle it
    console.log('in the night')
    let response: WebSocketResponse = await getAsyncMessage(Endpoints.JOIN_ROOM, {
      code: code,
      name: name
    })
    this.name = response.body
    router.push('/lobby')
    this.roomCode = code.code
  }

  async clientCheckIfRoomExists(code: CodeModel) {
    return (await getAsyncMessage(Endpoints.GAME_EXISTS, code)).body // race conditions ftw
  }

  async allPlayersInRoom() {
    return (
      await getAsyncMessage(
        Endpoints.ALL_PLAYERS,
        new CodeModel({ code: this.roomCode.toUpperCase() })
      )
    ).body // race conditions ftw
  }

  // START_GAME_HOST
  startGame() {
    sendAction(Endpoints.START_GAME_HOST);
  }
  // ANSWERED_QUESTION
  async sendAnswer(answer:AnswerQuestionModel) {
    return (
      await getAsyncMessage(
        Endpoints.ANSWERED_QUESTION,
        answer)
      )
    .body // race conditions ftw
  }
}

export const currentClient = new Client()
