/**
 * npm i --save-dev gulp gulp-sass gulp-print del gulp-newer gulp-remember gulp-cached path gulp-autoprefixer gulp-debug gulp-sourcemaps gulp-clean-css gulp-rename run-sequence last-run browser-sync gulp-concat gulp-uglify ngrok gulp-cached csso gulp-watch gulp-batch
 gulp-filter gulp-plumber localtunnel gulp-gzip gulp-jsonminify merge-stream*/

var gulp  = require('gulp'),
		requireDir = require('require-dir'),
		runSequence  = require('run-sequence'),
  	browserSync  = require('browser-sync').create();
		var config = require('./config');

global.browserSync = browserSync;

/*********** GET ALL OTHER TASKS *************/
requireDir('tasks/');


/*********** BASE RUN TASK *************/
gulp.task('run', function(callback) {

	// Запускаем синхронную очередь
	runSequence(
		// 'build-clean', //will clean build only if ENV is production

		'styles',
		'scripts',
		'assets', // merge assets and optimize images if ENV is production
		['mergeLibfiles', 'mergeCorefiles', 'mergeIncfiles'], // merge all other files

		'tunnel', // generate external url from current local proxy with ngrok
		'browser-sync', // turn on browserSync
		'watch', // watch all files
		 callback);
});


/********** SET DEFAULT TASK - RUN  ************/
gulp.task('default', ['build-clean','run'], function () {

});
