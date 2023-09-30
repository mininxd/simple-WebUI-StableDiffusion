export let inference = document.getElementById("inferenceSlider");
export let guide = document.getElementById("guide");

export function slider() {
  inference.addEventListener("change", () => inferences());
  function inferences(iVal) {
    iVal = inference.value;
    document.getElementById("inference").innerHTML = iVal;
  }

  guide.addEventListener("change", () => guides());
  function guides(gVal) {
    gVal = guide.value;
    document.getElementById("guidance").innerHTML = gVal;
  }
}

export let inferenceVal = parseInt(inference.value);
export let guideVal = parseFloat(guide.value);

slider();
