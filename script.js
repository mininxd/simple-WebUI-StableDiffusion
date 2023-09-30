import { fetchApi } from "./fetch.js";
import { inference, guide } from "./components/eventListener.js";
import { seed, getSeed } from "./components/seeding.js";

import {
  inputSeed,
  model,
  scheduler,
  generateBtn,
  fileType,
  negativeTemplate,
  inputNegative,
  spinnerGen,
  getRandSeed,
} from "./exportVar.js";

import { debug } from "./js/debug.js";

inputSeed.value = seed;

// Melarang reload page ketika gasengaja pencet enter pada tag <form>
let form = document.getElementById("form");
form.addEventListener("click", function (e) {
  e.preventDefault();
});

//Fetch API dan munculkan loading
generateBtn.addEventListener("click", () => generate());
function generate() {
  generateBtn.disabled = true;
  spinnerGen.style.display = "inline-block";
  fetchApi();
}

//Generate Debug
getRandSeed.addEventListener("keyup", () => debug());
inputSeed.addEventListener("keyup", () => debug());
input.addEventListener("keyup", () => debug());
scheduler.addEventListener("change", () => debug());
model.addEventListener("change", () => debug());
inference.addEventListener("change", () => debug());
guide.addEventListener("change", () => debug());
negativeTemplate.addEventListener("change", () => debug());

//fungsi Template
negativeTemplate.addEventListener("change", () => NegativeTemplateFun());
function NegativeTemplateFun() {
  inputNegative.value =
    negativeTemplate.options[negativeTemplate.selectedIndex].value;
}
