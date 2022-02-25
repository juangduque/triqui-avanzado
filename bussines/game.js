const Board = require('./board');
const Player = require('./player');
class Game {
  constructor(){
    this.id = "";
    this.Player1 = "";
    this.Player2 = "";
    this.board = "";
    this.turn = 0;
    this.isOver = false;
    this.winner = "";
  };

  beginGame(){
    const board = new Board();
    this.board = board;
    this.setPlayers("Player1", "Player2");    
  };

  setPlayers(player1, player2){
    this.Player1 = new Player(player1);
    this.Player2 = new Player(player2);
  };

  showBoard(){
    this.board.displayBoard();
  };

  setTurn(turn){
    this.turn = turn;
  };
  getTurn(){
    return this.turn;
  };
  setIsOver(isOver){
    this.isOver = isOver;
  };
  getIsOver(){
    return this.isOver;
  };
};

module.exports = Game;