export class CustomNameModel {
  name: string
  constructor(response: JSON) {
    this.name = response.name
  }
}
