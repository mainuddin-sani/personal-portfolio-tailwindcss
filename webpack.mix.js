const mix = require('laravel-mix');
require('mix-tailwindcss');


mix.js('src/app.js', 'dist');
mix.sass('src/main.scss', 'dist').tailwind();