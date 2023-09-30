import { picsartApi } from "./auth.js";

var spinnerUp = document.getElementById("spinner2");
var btnUpscale = document.getElementById("btnUpscale");

btnUpscale.addEventListener("click", () => upscaling());
function upscaling() {
  btnUpscale.disabled = true;
  // spinnerUp.style.display = "inline-block";
  // upscale();
}

export function upscale() {
  var getLink = document.getElementById("dumptxt").textContent;
  var linkUpscale = getLink;
  console.log("upscaling...");
  document.getElementById("upscalingProcess").style.display = "block";
  const formData = new FormData();
  formData.append("upscale_factor", "x2");
  formData.append("image_url", linkUpscale);

  fetch("https://api.picsart.io/tools/1.0/upscale", {
    method: "POST",
    headers: {
      "x-picsart-api-key": picsartApi,
    },
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong.");
    })
    .then((data) => {
      var upResult = JSON.stringify(data.data.url).toString().replace(/"/g, "");
      document.getElementById("upscalingProcess").style.display = "none";
      spinnerUp.style.display = "none";

      document.getElementById("resultUpscaling").innerHTML =
        "<a href='" +
        upResult +
        "'><hr> <img id='resultImage' src='" +
        upResult +
        "' width='250px' height='auto'></a><hr><br>";
    })
    .catch((error) => console.error(error));
}
