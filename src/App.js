export function createMatrix(dimentions){
  var dimList = dimentions.split(",");
  var limMatrix = [parseInt(dimList[0]), parseInt(dimList[1])];
  
  return limMatrix;
}

export function getMatrixCommand(commandLines){
  var matrixCommand = commandLines.match(/(\d)+,(\d)+/g);
  return matrixCommand[0];
}