import { Player } from '../player/player'

export class Room {
  players: Player[]
  name: string

  constructor(name) {
    this.name = name
  }
}
