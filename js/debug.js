import {
  inputSeed,
  model,
  scheduler,
  generateBtn,
  fileType,
} from "../exportVar.js";

import { inference, guide } from "../components/eventListener.js";

export function debug() {
  let modelText = model.options[model.selectedIndex].text;
  let schedulerText = scheduler.options[scheduler.selectedIndex].text;

  document.getElementById("formdata").innerHTML =
    '{"prompt":' +
    '"' +
    input.value +
    '", "seed":"' +
    parseInt(inputSeed.value) +
    '", "inference_steps":"' +
    parseInt(inference.value) +
    '", "guidelines":"' +
    guide.value +
    '", "model_name:"' +
    modelText +
    '", "scheduler:"' +
    schedulerText +
    '"}<br>';
}
debug();
