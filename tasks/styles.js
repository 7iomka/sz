var gulp = require('gulp'),
    gutil = require('gulp-util'),
    maps = require('gulp-sourcemaps'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS     = require('gulp-clean-css'),
    gzip = require('gulp-gzip'),
    debug = require('gulp-debug'),
    config = require('../config');



gulp.task('styles', function () {
  var next = gutil.noop;
	return gulp
  .src(config.paths.src.sass)
  .pipe(debug({title:'styles - task started'}))
	.pipe(config.run.styles.maps ? maps.init() : next())
	.pipe(sass(config.plugin.styles.sass).on('error', sass.logError))
	// .pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(config.plugin.styles.autoprefixer))
	.pipe(config.run.styles.minify ? cleanCSS() : next())
	.pipe(config.run.styles.maps ? maps.write() : next())
	.pipe(gulp.dest(config.paths.dest.css))
  .pipe(config.run.styles.gzip ? gzip({append: true}) : next())
  .pipe(gulp.dest(config.paths.dest.css))
  .pipe(debug({title:'styles - compile completed'}))
  // .pipe(global.browserSync.reload({
  //   stream: true
  // }))
	.pipe(browserSync.stream()); // Скомпилированный SASS в scc -- сделать auto-inject в браузер
});
