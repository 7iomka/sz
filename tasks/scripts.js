var gulp = require('gulp'),
    gutil = require('gulp-util'),
    maps = require('gulp-sourcemaps'),
    wrap = require("gulp-wrap"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gzip = require('gulp-gzip'),
    debug = require('gulp-debug'),
    jsonminify = require('gulp-jsonminify'),
    merge = require('merge-stream'),
    config = require('../config');


gulp.task('scripts', function() {
  var next = gutil.noop;
   // JS stream (ordered list in see in config.js)
	 var jsStream = gulp.src(config.plugin.js.jsFiles)
		.pipe(config.run.js.wrap ? wrap(config.plugin.js.wrap) : next())
		.pipe(concat('all.package.min.js'))
		.pipe(config.run.js.uglify ? uglify() : next())
		.pipe(gulp.dest(config.paths.dest.js))
    .pipe(config.run.js.gzip ? gzip({append: true}) : next())
    .pipe(gulp.dest(config.paths.dest.js))
    .pipe(debug({title:'scripts - compile completed'}));

	 var jsSeparatedStream = gulp.src(config.plugin.js.jsFilesSeparated)
		.pipe(config.run.js.wrap ? wrap(config.plugin.js.wrap) : next())
		// .pipe(concat('scripts.js'))
		.pipe(config.run.js.uglify ? uglify() : next())
		.pipe(gulp.dest(config.paths.dest.js))
    .pipe(config.run.js.gzip ? gzip({append: true}) : next())
    .pipe(gulp.dest(config.paths.dest.js))
    .pipe(debug({title:'scripts SEPARATED - compile completed'}));



    // JSON MINIFY IF ENABLED
    var jsonStream = gulp.src(config.paths.src.json)
    .pipe(config.run.json.minify ? jsonminify() : next())
    .pipe(gulp.dest(config.paths.dest.json))
    .pipe(debug({title:'json files was minified'}));
    return merge(jsStream, jsSeparatedStream, jsonStream);
});
