var gulp = require('gulp'),
    gutil = require('gulp-util'),
    del  = require('del'),
    gulpIf = require('gulp-if'),
    debug = require('gulp-debug'),
    config = require('../config');

gulp.task('build-clean', function(cb) {
  debug({title:'clean destination folder'});
  return del( (config.run.build.clean ? [config.paths.dest.allFiles] : 'nonedelete'), cb);
});
