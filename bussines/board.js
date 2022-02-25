const Cell = require('./cell.js');

class Board{
  constructor(){
    this.isFull = false;
    this.board = this.initBoard();
  }

  initBoard(){
    const BOARD_DIMENSIONS = 4;
    let board = [];
    for(let i = 0; i < BOARD_DIMENSIONS; i++){
      board[i] = [];
      for(let j = 0; j < BOARD_DIMENSIONS; j++){
        board[i][j] = new Cell(i, j);
      }
    }
    return board;
  };

  displayBoard(){
    for(let row of this.board){ 
      process.stdout.write("[");
      for(let cell of row){
        process.stdout.write(` "${cell.getPiece()}" `);
      }
      console.log("]");
    }
  };
  setIsFull(isFull){
    this.isFull = isFull;
  };
  getIsFull(){
    return this.isFull;
  }

};

module.exports = Board;