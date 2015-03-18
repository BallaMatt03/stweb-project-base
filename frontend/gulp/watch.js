'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['inject'], function() {
    gulp.watch([
        paths.src + '/index.html',
        paths.src + '/index.js',
        paths.scss + '/**/*.scss',
        paths.src + '/{app,components}/**/*.scss',
        paths.src + '/{app,common,components}/**/*.js',
        'bower.json'
    ], ['inject']);
});
