import { WebSocketServer } from 'ws'
import { Room } from './room/room.ts';
import { Player } from "./player/player.ts";
import { Host } from './host/host.ts';
import { WebSocketResponse } from './websocket/websocket-response.model.ts';
import { Endpoints } from './websocket/endpoints.ts';
import { CustomNameModel } from './websocket/response-models/custom-name.model.ts';
import { CodeModel } from './websocket/response-models/code.model.ts';
import { GameModel } from './websocket/response-models/game.model.ts';
let rooms:any = {};
let hosts:any = {};

const wss = new WebSocketServer({ port: 3000 })

//Whenever a new client connects to the server, set up event listeners
wss.on('connection', function connection(ws) {
  // Whenever a client socket sends information, handle it

  ws.on('message', function message(data) {
    const response = new WebSocketResponse(data);
    ws.send(
      JSON.stringify({
        endpoint: response.endpoint,
        body: handleWebsocketMessage(data, ws)
      })
    );
  })

  console.log('connected!')

  //ws.send({something: 'something'}: JSON)
})

// Handles stuff around creation of rooms, players, and hosts
  // Further functionality is handled directly by the classes with their own listeners
function handleWebsocketMessage(data, ws) {
  const response = new WebSocketResponse(data);

  switch (response.endpoint) {
    case Endpoints.CREATE_ROOM:
      let newRoom = new Room(new GameModel(response.body))
      rooms[newRoom.code] = newRoom
      let newHost = new Host(newRoom, ws)
      hosts[newRoom.code] = newHost
      console.log("Room code: "+newRoom.code)
      return newRoom.code
    case Endpoints.GAME_EXISTS:
      return !!rooms[(new CodeModel(response.body)).code];
    case Endpoints.PLAYER_EXISTS:
      return rooms[(new CodeModel(response.body)).code].players.map((p:Player) => p.name).indexOf(name)!=-1;
    case Endpoints.JOIN_ROOM:
      return (rooms[(new CodeModel(response.body)).code] as Room).addPlayer(new Player(ws));
    default:
      console.log('unidentified action!')
      return false;
  }
}
