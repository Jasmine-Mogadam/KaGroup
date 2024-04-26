import { WebSocketServer } from 'ws'
import { handleWebsocketMessage } from './websocket/websocket.ts'

const wss = new WebSocketServer({ port: 3000 })

//Whenever a new client connects to the server, set up event listeners
wss.on('connection', function connection(ws) {
  // Whenever a client socket sends information, handle it
  ws.on('message', function message(data) {
    handleWebsocketMessage(data)
  })

  console.log('connected!')

  ws.send('something')
})
