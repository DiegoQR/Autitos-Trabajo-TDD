import { executeCommandLines } from "./App";

const form = document.querySelector("#command-form");
const commandText = document.querySelector("#command-text");

const executedCommands = document.querySelector("#command-div");
const finalPosition = document.querySelector("#final-pos-div");


form.addEventListener("submit", (event) => {

  event.preventDefault();
  console.log(commandText.value);
  var finalPos = executeCommandLines(commandText.value);
  executedCommands.innerHTML = "<p>" + commandText.value + "</p>";
  finalPosition.innerHTML = "<p>" + finalPos[0] + "," + finalPos[1] + " " + finalPos[2] + "</p>";
});
