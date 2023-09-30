import { inferenceVal, guideVal } from "./components/eventListener.js";
import {
  input,
  model,
  scheduler,
  inputNegative,
  inputSeed,
  spinnerGen,
  loadingResult,
  result,
  dumpTxt,
  resultImg,
} from "./exportVar.js";
import { auth, url } from "./components/auth.js";
import { generateBtn } from "./exportVar.js";

//

//Fungsi FetchApi
export async function fetchApi() {
  loadingResult.style.display = "block";
  result.innerHTML = "";
  let seedEl = inputSeed.value;
  let seed = parseInt(seedEl);
  console.log("Processing: '" + input.value + "'");
  const options = {
    method: "POST",
    headers: {
      Authorization: "Key " + auth,
      "Content-Type": "application/json",
    },

    //Mengambil data untuk dikirim ke server Fal Ai
    body:
      '{"scheduler":"' +
      scheduler.options[scheduler.selectedIndex].value +
      '","negative_prompt": "' +
      inputNegative +
      ", nsfw, nude" +
      '","model_name":"' +
      model.options[model.selectedIndex].value +
      '","seed":"' +
      seed +
      '","num_inference_steps":"' +
      inferenceVal +
      '","guidance_scale":"' +
      guideVal +
      '","model_architecture":"sdxl' +
      '","image_size":"square_hd","prompt":"' +
      input.value +
      '"}',
  };

  //Koneksi
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    spinnerGen.style.display = "none";
    loadingResult.style.display = "none";

    generateBtn.disabled = false;

    //dumpTXT ini untuk url gambar biar bisa di export
    dumpTxt.innerHTML = JSON.stringify(data.images[0].url)
      .toString()
      .replace(/"/g, "");

    var loading = document.getElementById("loadingResult");
    var dump = document.getElementById("dump");
    loading.style.display = "none";
    let imgUrl = JSON.stringify(data.images[0].url)
      .toString()
      .replace(/"/g, "");
    document.getElementById("result").innerHTML =
      "<hr><a target='_blank' href='" +
      imgUrl +
      "'> <img id='resultImage' src='" +
      imgUrl +
      "' width='200px' height='auto'></a><hr><br>";

    // document.getElementById("btnUpscale").style.display = "block";
  } catch (error) {
    console.error(error);
    loading.style.display = "none";
    spinnerGen.style.display = "none";
    generateBtn.disabled = false;
  }
}
