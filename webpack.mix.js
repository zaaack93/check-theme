const mix = require("laravel-mix");
mix
    .js("./src/js/custom.js", "assets")
    sass("./src/scss/base.scss", "assets")
    .sass("./src/scss/custom.scss", "assets")
    .setPublicPath("");