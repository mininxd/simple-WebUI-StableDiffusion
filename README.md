# Simple WebUI StableDiffusion
> ***Saya berani menjamin bahwa, repositori ini ramah lingkungan, yaitu ramah untuk device seadanya, karena load website begitu cepat karena file kodingan berbasis HTML murni tanpa menjalankan node js***

 ## Quick Start

 ##### ***Fork atau deploy repository ini dengan privacy private, demi menjaga file [auth.js](https://github.com/MininxD/simple-WebUI-StableDiffusion/blob/main/components/auth.js) tetap rahasia***

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmininxd%2Fsimple-webui-stablediffusion)
<hr>

 ### Buka [Fal AI Dashboard](https://fal.ai/dashboard/)
 Login pakai akun github kamu, lalu Create API Key Secret 
 ![Screenshot_20230930-213803~2](https://github.com/MininxD/simple-WebUI-StableDiffusion/assets/70429604/03faf06c-0daa-43b8-88bb-31f75bc0e0bf)

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

#### ***Selain pakai vercel, kamu bisa pakai GithubPages untuk host websitenya***

  [![Donate - Saweria](https://img.shields.io/badge/Donate-Saweria-2ea44f?style=for-the-badge)](https://saweria.co/mininxd)
