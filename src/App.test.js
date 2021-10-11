import { createMatrix, getMatrixCommand, getCarCommand, createCarAt, getMovementCommands, moveCar, executeCommandLines} from "./App.js";
import { Car } from "./Car.js";

describe("F1. Probando a crear matrizes", () => {
  it("Crea una matiz ", () => {
    expect(createMatrix("5,5")).toEqual([5, 5]);
  });
  it("Captura el comando para crear la matriz por regex", () => {
    expect(getMatrixCommand("5,5\n2,2 N\nIAAIAIAIA")).toEqual("5,5");
  });
});

describe("F2. Creando un auto en una posicion predeterminada", () => {
  it("Captura el comando para el auto por regex", () => {
    expect(getCarCommand("5,5\n1,2 N\nIAAIAIAIA")).toEqual("1,2 N");
  });
  it("Crea un auto en la posicion indicada", () => {
    expect(createCarAt("1,2 N", [5, 5])).toEqual(new Car(1,2,"N", [5,5] ));
  });
  it("Obtiene la posicion del auto inicial al crearse", () => {
    expect(new Car(1,2,"N", [5,5]).getPositionDirection()).toEqual([1, 2, "N"]);
  });
});

describe("F3. El auto avanzara con el comando A", () => {
  it("Captura el comando para avanzar el auto por regex", () => {
    expect(getMovementCommands("5,5\n1,2 N\nAAAAA")).toEqual("AAAAA");
  });
  it("Mueve el auto una posicion hacia arriba", () => {
    expect(moveCar("A", new Car(1,2,"N", [5,5] ))).toEqual([1, 3, "N"]);
  });
  it("Mueve el auto 3 posiciones hacia arriba", () => {
    expect(moveCar("AAA", new Car(1,2,"N", [5,5] ))).toEqual([1, 5, "N"]);
  });
  it("Mueve el auto 3 posiciones hacia abajo", () => {
    expect(moveCar("AAA", new Car(1,4,"S", [5,5] ))).toEqual([1, 1, "S"]);
  });
  it("Mueve el auto 3 posiciones hacia el este", () => {
    expect(moveCar("AAA", new Car(1,4,"E", [5,5] ))).toEqual([4, 4, "E"]);
  });
  it("Mueve el auto 3 posiciones hacia el oeste", () => {
    expect(moveCar("AAA", new Car(4,4,"O", [5,5] ))).toEqual([1, 4, "O"]);
  });
  it("Mueve el auto 3 posiciones hacia el este pero no avanza mas de los limites de la matriz", () => {
    expect(moveCar("AAA", new Car(4,4,"E", [5,5] ))).toEqual([5, 4, "E"]);
  });
  it("Hace una prueba general de ejecucion de comandos", () => {
    expect(executeCommandLines("5,5\n2,2 N\nAAA")).toEqual([2, 5, "N"]);
  });
});

describe("F4. El auto es capaz de girar a la derecha y  a la  izquierda", () => {
  it("Mueve el auto una posicion hacia arriba y gira a la izquierda", () => {
    expect(moveCar("AI", new Car(1,2,"N", [5,5] ))).toEqual([1, 3, "O"]);
  });
  it("Mueve el auto 3 posiciones hacia arriba y gira a la derecha", () => {
    expect(moveCar("AAAD", new Car(1,2,"N", [5,5] ))).toEqual([1, 5, "E"]);
  });
  it("Mueve el auto 2 posiciones hacia abajo y una posicion a la izquierda", () => {
    expect(moveCar("AAIA", new Car(1,4,"S", [5,5] ))).toEqual([2, 2, "E"]);
  });
  it("Mueve el auto en un ciclo para terminar donde empezo", () => {
    expect(moveCar("AIAIAIA", new Car(3,3,"E", [5,5] ))).toEqual([3, 3, "S"]);
  });
  it("Mueve el con giros consecutivos hasta llegar a 5,5 N", () => {
    expect(moveCar("ADAIADAIAADAI", new Car(2,1,"N", [5,5] ))).toEqual([5, 5, "N"]);
  });
  it("Prueba 1 con el la linea de comandos completa", () => {
    expect(executeCommandLines("5,5\n1,2 N\nIAIAIAIAA")).toEqual([1, 3, "N"]);
  });
  it("Prueba 2 con el la linea de comandos completa", () => {
    expect(executeCommandLines("5,5\n3,3 E\nAADAADADDA")).toEqual([5, 1, "E"]);
  });
});