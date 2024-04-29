import { StringifyOptions } from 'querystring'
import { Player } from '../player/player'
import { Endpoints } from '../websocket/endpoints'
import { EventEmitter } from 'stream'
import { GameModel } from '../websocket/response-models/game.model'

export class Room {
  players: Player[]
  code: string
  gameDetails: any
  numAnswers: number
  answeredQuestionEmitter: EventEmitter = new EventEmitter()

  constructor(gameDetails:GameModel) {
    this.gameDetails = gameDetails
    this.code = generateTemporaryCode()
    this.numAnswers = 0
  }

  addPlayer(player) {
    this.players.push(player)
    player.clientSocket.addEventListener('close', () => {
      this.removePlayer(player)
    })
    // player.answeredQuestionEmitter.event.on("true", () => {
    //   this.numAnswers++
    //   if (this.numAnswers == this.players.length) {
    //     for (const p of this.players) {
    //       p.advanceQuestion() // sends a message to advance the question
    //     }
    //     this.numAnswers = 0;
    //   }
    // });
  }

  removePlayer(player) {
    let index = this.players.findIndex((p) => p.name === player.name)
    if (index !== -1) {
      this.players.splice(index, 1)
    }
    // if (this.players.length === 0) {
    //   this.event.emit("all players lost");
    // } else {
    //   this.players.forEach((p) => p.clientSocket.send("player list update"));
    // }
  }
}
function generateTemporaryCode() {
  return (
    getRandomInt(10).toString() +
    getRandomInt(10).toString() +
    getRandomInt(10).toString() +
    getRandomInt(10).toString()
  )
}
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}
