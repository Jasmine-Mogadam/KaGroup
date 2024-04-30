export class GameModel {
  gameDetails: any
  constructor(response: any) {
    this.gameDetails = response.gameDetails
  }
}
