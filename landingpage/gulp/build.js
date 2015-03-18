'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('html', ['inject'], function() {
    var htmlFilter = $.filter('*.html');
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');
    var assets;

    return gulp.src(paths.tmp + '/serve/*.html')
        .pipe(assets = $.useref.assets())
        .pipe($.rev())
        .pipe(jsFilter)
        .pipe($.uglify({
            preserveComments: $.uglifySaveLicense
        }))
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.replace('../bower_components/bootstrap-sass-official/assets/fonts/bootstrap', '/fonts'))
        .pipe($.replace('../bower_components/fontawesome/fonts', '/fonts'))
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(htmlFilter.restore())
        .pipe(gulp.dest(paths.dist + '/'))
        .pipe($.size({
            title: paths.dist + '/',
            showFiles: true
        }));
});

gulp.task('images', function() {
    return gulp.src(paths.src + '/assets/images/**/*')
        .pipe(gulp.dest(paths.dist + '/assets/images/'));
});

gulp.task('fonts', function() {
    return gulp.src($.mainBowerFiles())
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest(paths.dist + '/fonts/'));
});

gulp.task('misc', function() {
    return gulp.src(paths.src + '/**/*.ico')
        .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('clean', function(done) {
    $.del([paths.dist + '/', paths.tmp + '/', '.sass-cache/'], done);
});

gulp.task('build', ['html', 'images', 'fonts', 'misc']);
