class Piece {
  constructor(shape, size, color, equis, position){
    this.shape = shape;
    this.size = size;
    this.color = color;
    this.equis = equis;
    this.properties = this.shape + this.size + this.color + this.equis;
  };
  setPiece(properties){
    thie.properties = properties;
  };
  getPiece(){
    return this.properties;
  };
};