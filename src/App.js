import { Car } from "./Car.js";

export function getMatrixCommand(commandLines){
  var matrixCommand = commandLines.match(/(\d)+,(\d)+/g);
  return matrixCommand[0];
}

export function getCarCommand(commandLines){
  var carCommand = commandLines.match(/(\d)+,(\d)+ [NSEO]/g);
  return carCommand[0];
}

export function getMovementCommands(commandLines){
  var movementCommands = commandLines.match(/[IAD]+/g);
  return movementCommands[0];
}

export function createMatrix(dimentionsComand){
  var dimList = dimentionsComand.split(",");
  var limMatrix = [parseInt(dimList[0]), parseInt(dimList[1])];
  
  return limMatrix;
}

export function createCarAt(carCommand, matrixDimentions){
  var direction  = carCommand.match(/[NSEO]/g)[0];
  var positions = carCommand.match(/(\d)+/g);
  var xPos = parseInt(positions[0]);
  var yPos = parseInt(positions[1]);
  var car = new Car(xPos, yPos, direction, matrixDimentions);
  return car;
}

export function moveCar(moveCarCommand, car){
  var movementCommands = moveCarCommand.split("");
  movementCommands.forEach(moveCommand => {
    switch(moveCommand){
      case "A":
        car.advanceStep();
        break;
      case "I":
        car.turnLeft();
        break;
      case "D":
        car.turnRight();
        break;     
    }
  });
  return car.getPositionDirection();
}

export function executeCommandLines(commandLines){
  var createMatrixCommand = getMatrixCommand(commandLines);
  var limMatrix = createMatrix(createMatrixCommand);
  var carPosDirCommand = getCarCommand(commandLines);
  var car = createCarAt(carPosDirCommand, limMatrix);
  var movementCommand = getMovementCommands(commandLines);
  var finalPosition = moveCar(movementCommand, car);
  return finalPosition;
}

