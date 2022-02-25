class Cell {
  constructor(row, column){
    this.row = row;
    this.column = column;
    this.position = `${this.row},${this.column}`;
    this.isEmpty = false;
    this.piece = "----";
  }
  setPiece(piece){
    this.piece = piece;
  };
  getPiece(){
    return this.piece;
  };
  setIsEmpty(isEmpty){
    this.isEmpty = isEmpty;
  };
  getIsEmpty(){
    return this.isEmpty;
  };
};

module.exports = Cell;