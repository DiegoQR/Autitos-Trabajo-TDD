import { createMatrix, getMatrixCommand } from "./App.js";

describe("F1. Probando a crear matrizes", () => {
  it("Crea una matiz ", () => {
    expect(createMatrix("5,5")).toEqual([5, 5]);
  });
  it("Captura la dimension de la matriz por regex", () => {
    expect(getMatrixCommand("5,5\n2,2 N\nIAAIAIAIA")).toEqual("5,5");
  });
});
