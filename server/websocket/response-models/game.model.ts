export class GameModel {
  gameDetails: any
  constructor(response: JSON) {
    this.gameDetails = response.gameDetails
  }
}
