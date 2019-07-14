const mix = require('laravel-mix');

mix.browserSync('localhost:8000');


mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');


mix.disableNotifications();
