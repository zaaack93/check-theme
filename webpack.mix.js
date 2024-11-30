const mix = require("laravel-mix");
mix
    .js("./src/js/custom.js", "assets")
    .sass("./src/scss/css-file.scss", "assets")
    .setPublicPath("");