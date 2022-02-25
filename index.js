const Game = require('./bussines/game');

function main(){
  const game = new Game();  
  game.beginGame();
  console.log("Bienvenido al juego de triqui avanzado");
  game.showBoard();
};

main();