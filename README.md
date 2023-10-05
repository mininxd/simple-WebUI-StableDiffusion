# Simple WebUI StableDiffusion
> ***Saya berani menjamin bahwa, repositori ini ramah lingkungan, yaitu ramah untuk device seadanya, karena load website begitu cepat karena file kodingan berbasis HTML murni tanpa menjalankan node js***

 ## Quick Start

 ##### ***Fork atau deploy repository ini dengan privacy private, demi menjaga file [auth.js](https://github.com/MininxD/simple-WebUI-StableDiffusion/blob/main/components/auth.js) tetap rahasia***

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmininxd%2Fsimple-webui-stablediffusion)
<hr>

 ### Buka [Fal AI Dashboard](https://fal.ai/dashboard/)
 Login pakai akun github kamu, lalu Create API Key Secret 
![Screenshot_20230930-213803~2](https://github.com/MininxD/simple-WebUI-StableDiffusion/assets/70429604/9056f354-1a1e-4563-8bbb-6a388b1d687c)

 
copy kode tersebut dan taruh pada [Auth.js](https://github.com/MininxD/simple-WebUI-StableDiffusion/blob/main/components/auth.js)
```javascript
export let auth = "API Key";
```
**Saya sarankan kode auth.js diberi enkripsi demi keamanan**

kamu bisa pakai **JS obfuscator**<br>
[Via Online](https://obfuscator.io/)
atau bisa pakai [Modul NPM](https://www.npmjs.com/package/javascript-obfuscator)

Kamu bisa lihat hasilnya disini [obfuscatorExample.js](https://github.com/MininxD/simple-WebUI-StableDiffusion/blob/main/components/obfuscatorExample.js)
<hr>

## Cara menanbahkan Model

Cara menambahkan model cukup mudah, buka **[index.html](https://github.com/MininxD/simple-WebUI-StableDiffusion/blob/main/index.html)** lalu menuju pada baris 223 terdapat kode
```html
<option selected value="stabilityai/stable-diffusion-xl-base-1.0">
            Stable Diffusion XL Base 1.0
          </option>
          <option value="emilianJR/epiCRealism">epiCRealism</option>
          <option value="https://civitai.com/api/download/models/95489">
            civitAI
          </option>
          <option value="SG161222/Realistic_Vision_V2.0">
            Realistic Vision V2
          </option>
          <option value="dreamlike-art/dreamlike-photoreal-2.0">
            DreamLike photoreal 2.0
          </option>
          <option value="runwayml/stable-diffusion-v1-5">
            Stable Diffusion v1.5
          </option>
          <option value="stabilityai/stable-diffusion-2-1">
            Stable Diffusion v2.1
          </option>
```
kamu bisa menambahkan kode <option> baru dibawahnya
```html
<option value="objek">nama/informasi objek (bebas)</option>
```
kamu bisa cari objek pada situs **[Huggingface](https://huggingface.co/models?pipeline_tag=text-to-image&sort=trending)**

pada ***value="objek"*** kamu tinggal tambahkan judul objek pada hugging face
![Screenshot_20231005-184956_Chrome](https://github.com/MininxD/simple-WebUI-StableDiffusion/assets/70429604/4a80325c-6716-4101-b13e-fdbff68f8e9a)
contoh :
```html
<option value="dreamlike-art/dreamlike-photoreal-2.0">Photoreal</option>
```


<hr>
#### ***Selain pakai vercel, kamu bisa pakai GithubPages untuk host websitenya***

  [![Donate - Saweria](https://img.shields.io/badge/Donate-Saweria-2ea44f?style=for-the-badge)](https://saweria.co/mininxd)
