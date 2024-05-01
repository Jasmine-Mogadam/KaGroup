export enum Endpoints {
  // Generally handled
  CREATE_ROOM = 'CreateRoom',
  JOIN_ROOM = 'JoinRoom',
  PLAYER_EXISTS = 'PlayerExists',
  GAME_EXISTS = 'GameExists',
  // Player specific; this way we don't have to constantly re-authenticate
  ANSWERED_QUESTION = 'AnsweredQuestion',
  START_GAME_PLAYER = 'StartGamePlayer', // this is only for receiving from server
  RECEIVE_RESULTS_PLAYER = 'ReceiveResultsPlayer',  // this is only for receiving from server
  // Host specific
  ALL_PLAYERS = 'AllPlayers',  // this is only for receiving from server
  START_GAME_HOST = 'StartGameHost',
  RECEIVE_RESULTS_HOST = 'ReceiveResultsHost',  // this is only for receiving from server; unused for now
  // Essentially if WebSocketResponse isn't parsed into something usable
  FAILED_PARSE = 'FailedParse',
}
