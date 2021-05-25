# aksTelephoneInput.js
International Telephone Numbers

**[View the Demo on CodePen &rarr;](https://codepen.io/collection/pggzPE)**

## Getting Started

Compiled and production-ready code can be found in the `dist` directory.

### 1. Include aksTelephoneInput.min.js on your site.

**Direct Download**

You can [download the files directly from GitHub](https://github.com/Ahmetaksungur/akstelephoneinput/archive/main.zip).

```html
<link type="text/css" rel="stylesheet" href="dist/aksTelephoneInput.min.css">
```

```html
<script src="dist/aksTelephoneInput.min.js"></script>
```

**CDN**

```html
<link type="text/css" rel="stylesheet" href="https://unpkg.com/akstelephoneinput@1.0.1/dist/aksTelephoneInput.min.css">
```

```html
<script src="https://unpkg.com/akstelephoneinput@1.0.1/dist/aksTelephoneInput.min.js"></script>
```
---

```html
<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/akstelephoneinput@1.0.1/dist/aksTelephoneInput.min.css">
```

```html
<script src="https://cdn.jsdelivr.net/npm/akstelephoneinput@1.0.1/dist/aksTelephoneInput.min.js"></script>
```

**jQuery**

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```
---

**NPM**

```bash
npm i akstelephoneinput
```


## Document aksTelephoneInput.js

```html
<input class="aks-input" type="text" id="tel" name="aks-telephone-input" />
```

```js
$("#tel").aksTelephoneInput({
  valueNumberCode: false,
  flagsUrl: "https://unpkg.com/akstelephoneinput@1.0.1/flags/"
});
```
[Sample](https://codepen.io/ahmetaksungur/pen/abJwOzz).

### Auto Country

```js
$("#tel").aksTelephoneInput({
  valueNumberCode: false,
  autoCountry: true,
  geoCountries: function (callback) {
    $.get("https://ipwhois.app/json/", function (data) {
      callback(data.country_code);
    });
  },
  flagsUrl: "https://unpkg.com/akstelephoneinput@1.0.1/flags/"
});
```
[Sample](https://codepen.io/ahmetaksungur/pen/ExWXjPa).

### Change Country

```html
<script src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
```

```js
$("#tel").aksTelephoneInput({
  valueNumberCode: false,
  changeCountry: function () {
    console.log(this);
  },
  flagsUrl: "https://unpkg.com/akstelephoneinput@1.0.1/flags/"
});
```
[Sample](https://codepen.io/ahmetaksungur/pen/WNpOvwg).

### Attributes

```js
        allCountries: [],
        onlyCountries: [],
        primaryCountries: [],
        currentCountries: "",
        autoCountry: false,
        geoCountries: function (callback) {
          $.get("https://ipwhois.app/json/", function (data) {
            callback(data.country_code);
          });
        },
        changeCountry: function () {},
        placeholderNumber: true,
        valueNumberCode: false,
        searchBar: true
```


## License

The code is available under the [MIT License](https://github.com/Ahmetaksungur/akstelephoneinput/blob/main/LICENSE).
