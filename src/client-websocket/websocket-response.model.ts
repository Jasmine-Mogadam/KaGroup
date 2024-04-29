import { Endpoints } from './endpoints'

export class WebSocketResponse {
  endpoint: Endpoints
  body: any

  constructor(responseData: string) {
    let temp;
    try {
      temp = JSON.parse(responseData)
      this.endpoint = temp.endpoint
      this.body = temp.body
    } catch {
      this.endpoint = Endpoints.FAILED_PARSE;
      this.body = {};
    }
  }

  toString() {
    return JSON.stringify(this)
  }
}
