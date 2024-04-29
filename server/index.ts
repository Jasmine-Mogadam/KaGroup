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
      return hostGame(new GameModel(response.body), ws);
    case Endpoints.GAME_EXISTS:
      return gameExists(new CodeModel(response.body));
    case Endpoints.PLAYER_EXISTS:
      return playerExists(new CodeModel(response.body), response.body.name)
    case Endpoints.JOIN_ROOM:
      return joinGame(new CodeModel(response.body), ws)
    default:
      console.log('unidentified action!')
      return false;
  }

    /*
     gameDetails
       quizDetails
         The model from the customized questions
       teamSize
       customNamesAllowed
       groupReasoningRevealed
       timeLimit
   */
    function hostGame(game:GameModel, ws:any) {
      let newRoom = new Room(game)
      rooms[newRoom.code] = newRoom
      let newHost = new Host(newRoom, ws)
      hosts[newRoom.code] = newHost
      console.log("Room code: "+newRoom.code)
      return newRoom.code
    } // add some buttons to the ui and have them call the client websocket

    // only call if game exists and player doesn't
    function joinGame(code:CodeModel, ws:any) {
      return rooms[code.code].addPlayer(new Player(ws));
    }

    function gameExists(code:CodeModel) {
      if (!rooms[code.code]) {
        return false;
      }
      return true;
    }

    // Only call if gameExists
    function playerExists(code:CodeModel, name:string) {
      return rooms[code.code].players.map((p:Player) => p.name).indexOf(name)!=-1;
    }
// - Name Exists
// - IsCustom

}
