export class CustomNameModel {
  name: string
  constructor(response: any) {
    this.name = response.name
  }
}
