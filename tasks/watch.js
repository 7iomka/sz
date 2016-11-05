var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    runSequence  = require('run-sequence'),
    debug = require('gulp-debug'),
        config = require('../config');
    var devDirs = config.paths.src;

    var reload = global.browserSync.reload;
    /*
    /** scss   **/ // gulp.task('watchStyles', function () { // // }); // /** assets **/ // gulp.task('watchAssets', function () { //     watch(devDirs.images, batch(function (events, done) { //       debug({title:'assets added or modified'}); //         gulp.start('assets').on('change', reload); //     })); // }); // // // // // // /**  js    **/ // gulp.task('watchJs', function () { //     watch(devDirs.js, batch(function (events, done) { //       debug({title:'js modified'}); //         gulp.start('scripts', done).on('change', reload); //     })); // }); // // /**  lib   **/ // gulp.task('watchLib', function () { //     watch(devDirs.lib, batch(function (events, done) { //       debug({title:'changes in lib folder'}) //         gulp.start('mergeLibfiles', done).on('change', reload); //     })); // }); // // // /** coreFiles   **/ // // gulp.task('watchCoreFiles', function () { // //     watch(devDirs.coreFiles, batch(function (events, done) { // //       debug({title:'core files modified'}); // //         gulp.start('mergeCorefiles', done).on('change', reload); // //     })); // // });*/

    /////////////////////*****************BASE WATCH*******************\\\\\\\\\\\\\\\\\\\\\\\\\\\
    gulp.task('watch', /*['browser-sync'],*/ function () {

        /** assets **/ gulp.watch(devDirs.assets, ['assets'] ).on('change', reload);
        /** scss   **/ gulp.watch(devDirs.allScss, ['styles']);
        /**  js    **/ gulp.watch(devDirs.js, ['scripts'])/*.on('change', reload)*/;
        /**  lib   **/ gulp.watch(devDirs.lib, ['mergeLibfiles']).on('change', reload);
        /**  inc   **/ gulp.watch(devDirs.inc, ['mergeIncfiles']).on('change', reload);
        /** coreFiles   **/ gulp.watch(devDirs.coreFiles, ['mergeCorefiles']).on('change', reload);


    });
