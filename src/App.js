import { Car } from "./Car.js";

export function createMatrix(dimentionsComand){
  var dimList = dimentionsComand.split(",");
  var limMatrix = [parseInt(dimList[0]), parseInt(dimList[1])];
  
  return limMatrix;
}

export function getMatrixCommand(commandLines){
  var matrixCommand = commandLines.match(/(\d)+,(\d)+/g);
  return matrixCommand[0];
}

export function getCarCommand(commandLines){
  var carCommand = commandLines.match(/(\d)+,(\d)+ [NSEO]/g);
  return carCommand[0];
}

export function createCarAt(carCommand, matrixDimentions){
  var direction  = carCommand.match(/[NSEO]/g)[0];
  var positions = carCommand.match(/(\d)+/g);
  var xPos = parseInt(positions[0]);
  var yPos = parseInt(positions[1]);
  var car = new Car(xPos, yPos, direction, matrixDimentions);
  return car;
}

export function executeCommandLines(commandLines){
  var createMatrixCommand = getMatrixCommand(commandLines);
  var limMatrix = createMatrix(createMatrixCommand);
}