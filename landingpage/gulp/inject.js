'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

gulp.task('inject', ['styles'], function() {

    var injectStyles = gulp.src([
        paths.tmp + '/serve/app/**/*.css',
        '!' + paths.tmp + '/serve/app/vendor.css'
    ], {
        read: false
    });

    var injectScripts = gulp.src([
        paths.src + '/app/**/*.js'
    ]);

    var injectOptions = {
        ignorePath: [paths.src, paths.tmp + '/serve'],
        addRootSlash: false
    };

    var wiredepOptions = {
        directory: 'bower_components',
        exclude: [/bootstrap\.css/, /bootstrap\.css/, /foundation\.css/, /fontawesome/]
    };

    return gulp.src(paths.src + '/*.html')
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(wiredep(wiredepOptions))
        .pipe(gulp.dest(paths.tmp + '/serve'));

});
