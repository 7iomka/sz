var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpIf = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cached'),
    debug = require('gulp-debug'),
    config = require('../config');

gulp.task('assets', function() {
  var next = gutil.noop;
  return gulp
  .src(config.paths.src.assets)
	.pipe(cache()) // cache independed of env
  // .pipe( gulpIf(config.paths.src.images, cache(imagemin())) ) // if is an image - optimize it
  .pipe(debug({title:'assets'}))
  .pipe(gulp.dest(config.paths.dest.assets));
});
