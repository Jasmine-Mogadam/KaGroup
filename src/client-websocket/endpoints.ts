export enum Endpoints {
  // Generally handled
  CREATE_ROOM = 'CreateRoom',
  JOIN_ROOM = 'JoinRoom',
  PLAYER_EXISTS = 'PlayerExists',
  GAME_EXISTS = 'GameExists',
  // Player specific; this way we don't have to constantly re-authenticate
  ANSWERED_QUESTION = 'AnsweredQuestion',
  RECEIVE_RESULTS_PLAYER = 'ReceiveResultsPlayer',
  // Host specific
  ALL_PLAYERS = 'AllPlayers',
  START_GAME = 'StartGame',
  RECEIVE_RESULTS_HOST = 'ReceiveResultsHost',
  // Essentially if WebSocketResponse isn't parsed into something usable
  FAILED_PARSE = 'FailedParse',
}
