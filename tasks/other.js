var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    newer = require('gulp-newer'),
    cache = require('gulp-cached'),
    gzip = require('gulp-gzip'),
    debug = require('gulp-debug'),
        config = require('../config');

// cache.caches = {};
// Merge newest all rootFiles (.txt., .html, .php, etc..)
gulp.task('mergeCorefiles', function() {
  return gulp.src(config.paths.src.coreFiles)
	.pipe(cache())
  .pipe(newer(config.paths.dest.coreFiles))
  .pipe(debug({title:'mergeCorefiles'}))
  .pipe(gulp.dest(config.paths.dest.coreFiles));
});


// Merge newest files from lib (.php)
gulp.task('mergeLibfiles', function() {
  return gulp.src(config.paths.src.lib)
	// .pipe(cache())
  .pipe(newer(config.paths.dest.lib))
  .pipe(debug({title:'mergeLibfiles'}))
  .pipe(gulp.dest(config.paths.dest.lib));
});

// Merge newest files from inc (.php)
gulp.task('mergeIncfiles', function() {
  return gulp.src(config.paths.src.inc)
	// .pipe(cache())
  .pipe(newer(config.paths.dest.inc))
  .pipe(debug({title:'mergeIncfiles'}))
  .pipe(gulp.dest(config.paths.dest.inc));
});
