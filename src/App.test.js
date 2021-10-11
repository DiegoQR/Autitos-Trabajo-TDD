import { createMatrix, getMatrixCommand, getCarCommand, createCarAt} from "./App.js";
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