import { Player } from '../player/player.ts'
import { EventEmitter } from 'node:events'
import { GameModel } from '../websocket/response-models/game.model.ts'
import * as QuestionPacks from '../constants/question-packs.ts'
import { Question } from '../../src/types/Question.ts'
import { AnswerQuestionModel } from '../websocket/response-models/answer-question.model.ts'
import { Host } from '../host/host.ts'

export class Room {
  code: string
  gameDetails: any
  players: Player[]
  questions: AnswerQuestionModel[]
  host: Host

  constructor(gameDetails: GameModel) {
    this.gameDetails = gameDetails
    this.code = generateTemporaryCode()
    this.players = []
    this.questions = QuestionPacks.demoquestions
  }

  addPlayer(player: Player) {
    this.players.push(player)
    player.websocket.addEventListener('close', () => {
      this.removePlayer(player)
    })
    this.host.updatePlayers()
  }

  removePlayer(player) {
    let index = this.players.findIndex((p) => p.name === player.name)
    if (index !== -1) {
      this.players.splice(index, 1)
    }
    this.host.updatePlayers()
  }
}
function generateTemporaryCode() {
  return (
    String.fromCharCode(getRandomInt(26) + 65) +
    String.fromCharCode(getRandomInt(26) + 65) +
    String.fromCharCode(getRandomInt(26) + 65) +
    String.fromCharCode(getRandomInt(26) + 65)
  )
}
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}
