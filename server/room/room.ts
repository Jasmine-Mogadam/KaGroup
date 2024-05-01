import { Player } from '../player/player.ts'
import { EventEmitter } from 'node:events'
import { GameModel } from '../websocket/response-models/game.model.ts'
import * as QuestionPacks from '../constants/question-packs.ts'
import { Question } from '../../src/types/Question.ts'
import { AnswerQuestionModel } from '../websocket/response-models/answer-question.model.ts'

export class Room {
  code: string
  gameDetails: any
  players: Player[]
  questions:AnswerQuestionModel[]

  constructor(gameDetails:GameModel) {
    this.gameDetails = gameDetails
    this.code = generateTemporaryCode()
    this.players = [];
    this.questions = QuestionPacks.demoquestions
  }

  addPlayer(player) {
    this.players.push(player)
    player.clientSocket.addEventListener('close', () => {
      this.removePlayer(player)
    })
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
    String.fromCharCode(getRandomInt(26)+65) +
    String.fromCharCode(getRandomInt(26)+65) +
    String.fromCharCode(getRandomInt(26)+65) +
    String.fromCharCode(getRandomInt(26)+65)
  )
}
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}
