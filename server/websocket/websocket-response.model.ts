import { Endpoints } from './endpoints'

export class WebSocketResponse {
  endpoint: Endpoints
  body: any

  constructor(responseData: string) {
    const temp = JSON.parse(responseData)
    this.endpoint = temp.endpoint
    this.body = temp.body
  }

  toString() {
    return JSON.stringify(this)
  }
}
