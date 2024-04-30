import type { Endpoints } from "./endpoints"
import { WebSocketResponse } from "./websocket-response.model"

export const socket = new WebSocket('ws://localhost:3000')

export function waitForMessage(messageAction: Endpoints): Promise<WebSocketResponse> {
  return new Promise((resolve, reject) => {
    socket.addEventListener('message', (event) => {
      try {
        let response = new WebSocketResponse(event.data);
        if (response.endpoint === messageAction) {
          resolve(response)
        }
      } catch (error) {
        reject(error)
      }
    })

    socket.addEventListener('error', (error) => {
      reject(error)
    })

    socket.addEventListener('close', () => {
      reject(new Error('WebSocket closed before receiving a message.'))
    })
  })
}

export async function getAsyncMessage(action: Endpoints, body = {}): Promise<WebSocketResponse> {
  socket.send(
    JSON.stringify({
      endpoint: action,
      body: body
    })
  )
  return (await waitForMessage(action))
}

export function sendAction(action: Endpoints, body = {}) {
  socket.send(
    JSON.stringify({
      endpoint: action,
      body: body
    })
  )
}

export async function getResultFromAsyncMessage(action: Endpoints, body = {}): Promise<string> {
  return (await getAsyncMessage(action, body)).body
}
