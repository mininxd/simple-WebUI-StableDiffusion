function genRandonString(length) {
  var chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  var charLength = chars.length;
  var result = "";
  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

//ambil 10 huruf untuk dijadikan seeds
const getRandSeeds = new Math.seedrandom(genRandonString(10));
// console.log(getRandSeeds(10))

//Potong 6 Digit angka dari depan karena angka terlalu panjang
const randSeed = getRandSeeds().toString().slice(6);

export let seed = randSeed;
export function getSeed() {
  document
    .getElementById("getRandSeed")
    .addEventListener("click", () => seeding());
  function seeding() {
    getRandSeeds;

    var angkaSeed = getRandSeeds().toString().slice(6);
    var angka = angkaSeed;

    document.getElementById("seed").value = angka;
  }
}

getSeed();
