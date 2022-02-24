class Cell {
  constructor(position){
    this.position = position;
    this.isEmpty = false
  }
  setIsEmpty(isEmpty){
    this.isEmpty = isEmpty;
  };
  getIsEmpty(){
    return this.isEmpty;
  };
};