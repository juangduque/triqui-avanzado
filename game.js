class Game {
  constructor(){
    this.id = "";
    this.isOver = false;
    this.turn = "";
    this.winner = "";
  };

  beginGame(){
    while (true) {
      console.log("El juego esta siendo ejecutado");
    }
  };
};

module.exports = Game;