import { createMatrix, getMatrixCommand } from "./App";

const form = document.querySelector("#command-form");
const commandText = document.querySelector("#command-text");

const result = document.querySelector("#result-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(commandText.value);
  var matrixCommand = getMatrixCommand(commandText.value);
  var matrixDimentions = createMatrix(matrixCommand); 
  result.innerHTML = "<p>" + matrixDimentions + "</p>";
});
